/**
 * js/app.js — Kastigo v3 · Monitor Ciudadano
 * ============================================================
 * Módulos implementados:
 *  1. Sanitize      — Prevención de ataques XSS
 *  2. Theme         — Modo oscuro manual + detección automática
 *  3. Utils         — Funciones auxiliares reutilizables
 *  4. Filtrado      — Lógica de filtros combinados
 *  5. DeepLink      — Deep linking por hash en la URL (#id)
 *  6. Modal         — Manejo de modales con pila (stack)
 *  7. Compartir     — Web Share API + fallback portapapeles
 *  8. Chart         — Gráfico de dona con Chart.js
 *  9. Calendario    — Calendario interactivo por mes
 * 10. Render        — Renderizado del DOM
 * 11. Events        — Listeners globales
 * 12. init()        — Punto de entrada
 * ============================================================
 * Los datos viven en js/data.js (cargado antes que este archivo)
 */

'use strict';

/* ============================================================
   MÓDULO 1: SANITIZACIÓN
   Protege contra ataques XSS al insertar datos en el DOM.
   Principio: nunca usar innerHTML con datos del usuario.
   ============================================================ */
const Sanitize = {

  /**
   * Convierte un string a texto plano seguro usando el DOM.
   * Los caracteres especiales HTML (<, >, &, ", ') quedan escapados.
   * @param {string} input — texto potencialmente peligroso
   * @returns {string} — texto escapado, seguro para innerHTML si se necesita
   */
  text(input) {
    if (typeof input !== 'string') return '';
    const node = document.createTextNode(input);
    const div = document.createElement('div');
    div.appendChild(node);
    return div.innerHTML;
  },

  /**
   * Valida que una URL sea http o https.
   * Bloquea protocolos peligrosos como javascript: o data:
   * @param {string} url
   * @returns {string} — URL validada o '#' si es sospechosa
   */
  url(url) {
    if (typeof url !== 'string') return '#';
    const trimmed = url.trim();
    if (trimmed === '#') return '#';
    try {
      const parsed = new URL(trimmed);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return parsed.href;
      }
    } catch { /* URL malformada, ignorar */ }
    return '#';
  },

  /**
   * Limpia el input del buscador: recorta espacios, limita largo
   * y elimina caracteres de control invisibles.
   * @param {string} input
   * @param {number} maxLen — largo máximo permitido
   * @returns {string}
   */
  searchInput(input, maxLen = 200) {
    if (typeof input !== 'string') return '';
    return input
      .slice(0, maxLen)
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      .trim();
  }
};


/* ============================================================
   MÓDULO 2: THEME (Modo Oscuro)
   Maneja el toggle manual de tema claro/oscuro.
   La detección automática vive en CSS con prefers-color-scheme.
   ============================================================ */
const Theme = {

  // Clave para guardar la preferencia manual en localStorage
  STORAGE_KEY: 'kastigo-theme',

  /**
   * Lee el tema guardado o detecta la preferencia del sistema.
   * @returns {'light' | 'dark' | 'auto'}
   */
  getCurrent() {
    return localStorage.getItem(this.STORAGE_KEY) || 'light';
  },

  /**
   * Determina si el sistema prefiere modo oscuro.
   * @returns {boolean}
   */
  systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  /**
   * Aplica el tema al atributo data-theme del <html>.
   * 'auto' deja que el CSS con prefers-color-scheme lo decida.
   * @param {'light' | 'dark' | 'auto'} theme
   */
  apply(theme) {
    const html = document.documentElement;
    if (theme === 'auto') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
  },

  /**
   * Alterna entre modo oscuro y claro.
   * Si está en 'auto', pasa al opuesto de lo que detecta el sistema.
   */
  toggle() {
    const current = this.getCurrent();
    const isDark = current === 'dark' || (current === 'auto' && this.systemPrefersDark());
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem(this.STORAGE_KEY, next);
    this.apply(next);
  },

  /** Inicializa el tema al cargar la página. */
  init() {
    this.apply(this.getCurrent());

    // Escucha cambios en la preferencia del sistema en tiempo real
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        // Solo actualizamos si el usuario no forzó un tema manual
        if (this.getCurrent() === 'auto') this.apply('auto');
      });
  }
};


/* ============================================================
   MÓDULO 3: UTILIDADES
   Funciones pequeñas reutilizables en toda la app.
   ============================================================ */
const Utils = {

  /**
   * Formatea una fecha ISO "YYYY-MM-DD" a texto legible en español.
   * Ejemplo: "2026-03-17" → "17 de marzo de 2026"
   */
  formatFecha(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-CL', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  },

  /** Devuelve la clase CSS de categoría para una tarjeta. */
  catClass(cat) {
    const map = {
      'Medio Ambiente': 'cat-medio-ambiente',
      'Laboral': 'cat-laboral',
      'Economía': 'cat-economia',
      'Corporativo': 'cat-corporativo',
      'Seguridad': 'cat-seguridad',
      'Política': 'cat-politica',   // categorías nuevas del data.js
      'Social': 'cat-social',
      'Vivienda': 'cat-vivienda',
      'Cultura': 'cat-cultura',
    };
    return map[cat] || 'cat-default';
  },

  /** Devuelve la clase CSS de tipo de medida. */
  tipoClass(tipo) {
    const map = {
      'Ley': 'tipo-ley',
      'Decreto': 'tipo-decreto',
      'Declaración': 'tipo-declaracion',
      'Proyecto': 'tipo-proyecto',
      'Administrativo': 'tipo-decreto',  // reutiliza estilo decreto
      'Declaración Polémica': 'tipo-declaracion-polemica',
    };
    return map[tipo] || 'tipo-decreto';
  },

  /** Devuelve valores únicos de una propiedad del array global. */
  unique(key) {
    return [...new Set(eventosGubernamentales.map(e => e[key]))];
  },

  /** Cuenta cuántos eventos hay por valor de una propiedad. */
  countBy(key) {
    return eventosGubernamentales.reduce((acc, e) => {
      acc[e[key]] = (acc[e[key]] || 0) + 1;
      return acc;
    }, {});
  }
};


/* ============================================================
   MÓDULO 4: FILTRADO
   Combina todos los filtros activos y devuelve los eventos
   que cumplen con todos ellos simultáneamente.
   ============================================================ */
const Filtrado = {

  // Estado compartido de todos los filtros activos
  state: {
    filtroCategoria: 'Todos',
    filtroTipo: 'Todos',
    busqueda: '',
    filtroMinistroBusqueda: '',  // búsqueda rápida por nombre de actor
    orden: 'fecha',              // 'fecha' | 'categoria'
  },

  /**
   * Devuelve el array filtrado y ordenado.
   * @returns {Array}
   */
  get() {
    const { filtroCategoria, filtroTipo, busqueda, filtroMinistroBusqueda, orden } = this.state;
    const q = busqueda.toLowerCase();
    const qm = filtroMinistroBusqueda.toLowerCase();

    const filtered = eventosGubernamentales.filter(e => {
      const porCat = filtroCategoria === 'Todos' || e.categoria === filtroCategoria;
      const porTipo = filtroTipo === 'Todos' || e.tipo === filtroTipo;
      const porTexto = !q ||
        e.titulo.toLowerCase().includes(q) ||
        e.descripcion.toLowerCase().includes(q);
      const porMinistro = !qm ||
        e.titulo.toLowerCase().includes(qm) ||
        e.descripcion.toLowerCase().includes(qm) ||
        false;
      return porCat && porTipo && porTexto && porMinistro;
    });

    if (orden === 'categoria') {
      return filtered.sort((a, b) =>
        a.categoria.localeCompare(b.categoria, 'es') ||
        new Date(b.fecha) - new Date(a.fecha)
      );
    }
    if (orden === 'fecha-asc') {
      return filtered.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    }
    return filtered.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
};


/* ============================================================
   MÓDULO 5: DEEP LINKING
   Permite compartir URLs directas a una medida específica.
   Ejemplo: kastigo.cl/#15 → abre el modal del evento con id 15
   ============================================================ */
const DeepLink = {

  /**
   * Lee el hash de la URL al cargar la página.
   * Si encuentra un número válido, busca el evento y abre su modal.
   * Debe llamarse DESPUÉS de que el DOM esté renderizado.
   */
  init() {
    this._checkHash();

    // Escucha cambios de hash (ej: cuando el usuario navega con el botón atrás)
    window.addEventListener('hashchange', () => this._checkHash());
  },

  /**
   * Parsea el hash actual y abre el modal si corresponde.
   */
  _checkHash() {
    const hash = window.location.hash; // ej: "#15"
    if (!hash || hash === '#') return;

    const id = parseInt(hash.replace('#', ''), 10);
    if (isNaN(id)) return;

    // Buscar el evento por ID
    const evento = eventosGubernamentales.find(e => e.id === id);
    if (evento) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => Modal.openDetalle(evento), 100);
    }
  },

  /**
   * Actualiza el hash de la URL cuando se abre una medida.
   * Esto permite copiar el link de la barra de direcciones.
   * Usamos history.replaceState para no agregar una entrada al historial.
   * @param {number} id — ID del evento
   */
  setHash(id) {
    history.replaceState(null, '', `#${id}`);
  },

  /**
   * Limpia el hash de la URL cuando se cierra un modal.
   */
  clearHash() {
    history.replaceState(null, '', window.location.pathname);
  }
};


/* ============================================================
   MÓDULO 6: MODAL
   Maneja la apertura/cierre de modales con una pila (stack)
   para soportar múltiples modales apilados correctamente.
   ============================================================ */
const Modal = {

  // Pila de IDs de modales abiertos
  _stack: [],

  // ID del evento actualmente abierto en el modal de detalle
  _currentEventoId: null,

  /**
   * Abre un modal por su ID HTML.
   * @param {string} id — ej: 'modal-detalle'
   */
  open(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // bloquear scroll del fondo
    this._stack.push(id);
    // Mover el foco al botón cerrar (accesibilidad)
    requestAnimationFrame(() => el.querySelector('.modal-close')?.focus());
  },

  /**
   * Cierra un modal por su ID HTML.
   * @param {string} id
   */
  close(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('hidden');
    this._stack = this._stack.filter(i => i !== id);

    // Si era el modal de detalle, limpiar estado
    if (id === 'modal-detalle') {
      this._currentEventoId = null;
      DeepLink.clearHash(); // limpiar el hash de la URL al cerrar
    }

    // Restaurar scroll solo cuando no quedan modales abiertos
    if (this._stack.length === 0) {
      document.body.style.overflow = '';
    }
  },

  /** Cierra el modal más reciente (para la tecla Escape). */
  closeLast() {
    if (this._stack.length) {
      this.close(this._stack[this._stack.length - 1]);
    }
  },

  /**
   * Rellena y abre el modal de detalle de una medida.
   * IMPORTANTE: usa textContent para insertar datos (nunca innerHTML),
   * lo que previene ataques XSS automáticamente.
   * @param {Object} evento — objeto del array eventosGubernamentales
   */
  openDetalle(evento) {
    this._currentEventoId = evento.id;

    // Helper para asignar texto de forma segura
    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    // Badge tipo
    const tipoBadge = document.getElementById('md-tipo');
    if (tipoBadge) {
      tipoBadge.className = `modal-tipo-badge ${Utils.tipoClass(evento.tipo)}`;
      tipoBadge.textContent = evento.tipo;
    }

    // Badge categoría
    const catBadge = document.getElementById('md-cat');
    if (catBadge) {
      catBadge.className = `modal-cat-badge ${Utils.catClass(evento.categoria)}`;
      catBadge.textContent = evento.categoria;
    }

    // Fecha
    const fechaEl = document.getElementById('md-fecha');
    if (fechaEl) {
      fechaEl.textContent = Utils.formatFecha(evento.fecha);
      fechaEl.setAttribute('datetime', evento.fecha);
    }

    // Textos principales
    setText('md-title', evento.titulo);
    setText('md-desc', evento.descripcion);
    setText('md-fuente-medio', `Fuente: ${evento.fuente.medio}`);

    // URL de la fuente (validada)
    const fuenteLink = document.getElementById('md-fuente');
    if (fuenteLink) fuenteLink.href = Sanitize.url(evento.fuente.url);

    // Resetear el botón compartir
    const btnCompartir = document.getElementById('btn-compartir');
    const btnText = document.getElementById('btn-compartir-text');
    if (btnCompartir && btnText) {
      btnCompartir.classList.remove('copied');
      btnText.textContent = 'Compartir';
    }
    document.getElementById('share-toast')?.classList.add('hidden');

    // Actualizar hash de la URL (deep linking)
    DeepLink.setHash(evento.id);

    // Meta tags dinámicos para compartir por WhatsApp / redes
    const url = `${window.location.origin}${window.location.pathname}#${evento.id}`;
    document.querySelectorAll('meta[property="og:title"]').forEach(m => m.content = `${evento.titulo} · Kastigo`);
    document.querySelectorAll('meta[property="og:description"]').forEach(m => m.content = evento.descripcion);
    document.querySelectorAll('meta[property="og:url"]').forEach(m => m.content = url);
    document.querySelectorAll('meta[name="twitter:title"]').forEach(m => m.content = `${evento.titulo} · Kastigo`);
    document.querySelectorAll('meta[name="twitter:description"]').forEach(m => m.content = evento.descripcion);

    this.open('modal-detalle');
  }
};


/* ============================================================
   MÓDULO 7: COMPARTIR (Web Share API)
   Permite compartir una medida directamente por WhatsApp,
   Telegram, etc. Con fallback a copiar al portapapeles.
   ============================================================ */
const Compartir = {

  /**
   * Punto de entrada principal.
   * En móvil usa la Web Share API nativa (panel del sistema).
   * En desktop muestra un mini panel con botones de redes sociales.
   * @param {number} eventoId
   * @param {string} titulo
   */
  async compartir(eventoId, titulo) {
    const url = `${window.location.origin}${window.location.pathname}#${eventoId}`;
    const text = `📌 ${titulo}`;

    // Web Share API — disponible en móvil (Android/iOS) y Safari desktop
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Kastigo · Monitor Ciudadano',
          text,
          url,
        });
        return; // éxito — el sistema operativo manejó el panel
      } catch (err) {
        if (err.name === 'AbortError') return; // usuario canceló
        // Otro error: mostrar panel manual
      }
    }

    // Fallback desktop: mostrar panel de botones de redes sociales
    this._mostrarPanel(url, titulo);
  },

  /**
   * Muestra un panel inline con botones de WhatsApp, X, Facebook
   * y copiar link. Se inserta dentro del share-toast existente.
   * @param {string} url
   * @param {string} titulo
   */
  _mostrarPanel(url, titulo) {
    const toast = document.getElementById('share-toast');
    if (!toast) return;

    // Limpiar contenido anterior
    toast.innerHTML = '';
    toast.classList.remove('hidden');
    toast.classList.add('share-panel-active');

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(`📌 ${titulo} — Kastigo Monitor Ciudadano`);

    // Links de cada red social
    const redes = [
      {
        nombre: 'WhatsApp',
        color: '#25D366',
        href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
        svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.103 1.523 5.826L0 24l6.336-1.498A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.964-1.347l-.356-.211-3.764.889.952-3.664-.232-.376A9.783 9.783 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/></svg>`
      },
      {
        nombre: 'X / Twitter',
        color: '#000000',
        href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
        svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
      },
      {
        nombre: 'Facebook',
        color: '#1877F2',
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
      },
    ];

    // Título del panel
    const label = document.createElement('p');
    label.className = 'share-panel-label';
    label.textContent = 'Compartir en:';
    toast.appendChild(label);

    // Botones de redes
    const btnRow = document.createElement('div');
    btnRow.className = 'share-panel-btns';

    redes.forEach(red => {
      const a = document.createElement('a');
      a.href = red.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'share-panel-btn';
      a.style.setProperty('--red-color', red.color);
      a.setAttribute('aria-label', `Compartir en ${red.nombre}`);
      a.innerHTML = red.svg;

      const span = document.createElement('span');
      span.textContent = red.nombre;
      a.appendChild(span);
      btnRow.appendChild(a);
    });

    // Botón copiar link
    const copyBtn = document.createElement('button');
    copyBtn.className = 'share-panel-btn share-panel-copy';
    copyBtn.setAttribute('aria-label', 'Copiar link');
    copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg><span>Copiar link</span>`;
    copyBtn.addEventListener('click', async () => {
      await this._copyToClipboard(url);
      const span = copyBtn.querySelector('span');
      if (span) span.textContent = '¡Copiado!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        if (span) span.textContent = 'Copiar link';
        copyBtn.classList.remove('copied');
      }, 2000);
    });
    btnRow.appendChild(copyBtn);
    toast.appendChild(btnRow);

    // Botón cerrar el panel
    const closeBtn = document.createElement('button');
    closeBtn.className = 'share-panel-close';
    closeBtn.setAttribute('aria-label', 'Cerrar panel de compartir');
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', () => {
      toast.classList.add('hidden');
      toast.classList.remove('share-panel-active');
      toast.innerHTML = '';
    });
    toast.appendChild(closeBtn);
  },

  /**
   * Copia texto al portapapeles (API moderna + fallback).
   * @param {string} text
   */
  async _copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const input = document.createElement('textarea');
      input.value = text;
      input.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  }
};


/* ============================================================
   MÓDULO 8: CHART (Gráfico de Dona con Chart.js)
   Visualiza la distribución de medidas por categoría.
   Chart.js se carga desde CDN en index.html.
   ============================================================ */
const ChartModule = {

  // Referencia a la instancia del gráfico (para destruirlo si hay que redibujar)
  _instance: null,

  // Paleta de colores alineada con la identidad visual de Kastigo
  COLORES: [
    '#1A7A4A', // Medio Ambiente
    '#D4620A', // Laboral
    '#1F5BA3', // Economía
    '#C8001E', // Corporativo
    '#5E3A9E', // Seguridad
    '#3949AB', // Política
    '#C62828', // Social
    '#00695C', // Vivienda
    '#6B21A8', // Cultura  ← agregar
    '#8A9AB5', // Otros
  ],

  /**
   * Crea o actualiza el gráfico de dona.
   * Detecta automáticamente si el tema es oscuro para ajustar colores.
   */
  render() {
    const canvas = document.getElementById('chart-categorias');
    if (!canvas) return;

    // Si Chart.js no cargó (sin internet), salir silenciosamente
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js no disponible');
      return;
    }

    // Detectar si estamos en modo oscuro
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (document.documentElement.getAttribute('data-theme') !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    const stats = Utils.countBy('categoria');
    const labels = Object.keys(stats);
    const data = Object.values(stats);

    // Destruir gráfico anterior si existe (para evitar memory leaks)
    if (this._instance) {
      this._instance.destroy();
      this._instance = null;
    }

    this._instance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: this.COLORES.slice(0, labels.length),
          borderColor: isDark ? '#111827' : '#FFFFFF',
          borderWidth: 3,
          hoverBorderWidth: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '65%', // grosor del anillo
        plugins: {
          legend: {
            display: false, // usamos nuestra propia leyenda de texto abajo
          },
          tooltip: {
            backgroundColor: isDark ? '#1E2D45' : '#0B1F3A',
            titleColor: '#FFFFFF',
            bodyColor: '#8A9AB5',
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              // Personalizar el tooltip para mostrar porcentaje
              label(ctx) {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const pct = Math.round((ctx.parsed / total) * 100);
                return ` ${ctx.parsed} medidas (${pct}%)`;
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          duration: 800,
          easing: 'easeInOutQuart'
        }
      }
    });
  }
};


/* ============================================================
   MÓDULO 9: CALENDARIO
   Calendario mensual interactivo que muestra qué días tienen
   medidas registradas. Al hacer clic abre un modal con el listado.
   ============================================================ */
const Calendario = {

  _year: null,
  _month: null,      // 0-based (enero = 0)
  _selectedDate: null, // "YYYY-MM-DD" | null

  /**
   * Construye un mapa de acceso rápido: { "YYYY-MM-DD": [eventos] }
   * Complejidad O(n) en construcción, O(1) en lectura.
   */
  _buildEventMap() {
    return eventosGubernamentales.reduce((map, ev) => {
      if (!map[ev.fecha]) map[ev.fecha] = [];
      map[ev.fecha].push(ev);
      return map;
    }, {});
  },

  /** Renderiza la grilla del mes actual en el DOM.
   * @param {string} prefix — 'cal' para sidebar, 'd-cal' para drawer
   */
  render(prefix = 'cal') {
    const grid = document.getElementById(`${prefix}-grid`);
    const label = document.getElementById(`${prefix}-month-label`);
    const resetBtn = document.getElementById(`${prefix}-reset`);
    if (!grid || !label) return;

    const eventMap = this._buildEventMap();
    const today = new Date();
    const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    // Label del mes en español
    const monthName = new Date(this._year, this._month, 1)
      .toLocaleDateString('es-CL', { month: 'long', year: 'numeric' });
    label.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    grid.innerHTML = '';

    // Cabecera de días de la semana (lunes primero)
    ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'].forEach(d => {
      const span = document.createElement('span');
      span.className = 'cal-day-name';
      span.textContent = d;
      grid.appendChild(span);
    });

    // Calcular offset: primer día del mes ajustado a lunes = 0
    const firstDayOfWeek = new Date(this._year, this._month, 1).getDay();
    const offset = (firstDayOfWeek === 0) ? 6 : firstDayOfWeek - 1;
    const daysInMonth = new Date(this._year, this._month + 1, 0).getDate();

    // Celdas vacías antes del día 1
    for (let i = 0; i < offset; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day cal-empty';
      empty.setAttribute('aria-hidden', 'true');
      grid.appendChild(empty);
    }

    // Celdas de cada día del mes
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${this._year}-${String(this._month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const eventos = eventMap[iso] || [];
      const hasEvents = eventos.length > 0;

      const cell = document.createElement('div');
      cell.className = 'cal-day';
      cell.setAttribute('role', hasEvents ? 'button' : 'gridcell');
      cell.setAttribute('aria-label', hasEvents
        ? `${d}: ${eventos.length} medida${eventos.length > 1 ? 's' : ''}`
        : String(d));

      if (hasEvents) {
        cell.classList.add('cal-has-events');
        if (eventos.length >= 3) cell.classList.add('cal-many-events');
        cell.setAttribute('tabindex', '0');
      }
      if (iso === todayISO) cell.classList.add('cal-today');
      if (iso === this._selectedDate) cell.classList.add('cal-selected');

      cell.textContent = d;

      if (hasEvents) {
        const openDay = () => {
          this._selectedDate = iso;
          this.render('cal');
          this.render('d-cal');
          this._openDayModal(iso, eventos);
          if (resetBtn) resetBtn.classList.remove('hidden');
        };
        cell.addEventListener('click', openDay);
        cell.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDay(); }
        });
      }

      grid.appendChild(cell);
    }

    if (resetBtn) {
      resetBtn.classList.toggle('hidden', !this._selectedDate);
    }
  },

  /**
   * Abre el modal del día con la lista de medidas.
   * Construye el DOM con textContent (anti-XSS).
   */
  _openDayModal(iso, eventos) {
    const fechaEl = document.getElementById('mdia-fecha');
    const countEl = document.getElementById('mdia-count');
    const list = document.getElementById('mdia-list');
    if (!fechaEl || !list) return;

    const [y, m, d] = iso.split('-').map(Number);
    const fechaStr = new Date(y, m - 1, d).toLocaleDateString('es-CL', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    fechaEl.textContent = fechaStr.charAt(0).toUpperCase() + fechaStr.slice(1);
    fechaEl.setAttribute('datetime', iso);
    countEl.textContent = `${eventos.length} medida${eventos.length > 1 ? 's' : ''}`;

    list.innerHTML = '';
    eventos.forEach(ev => {
      const li = document.createElement('li');
      li.className = 'modal-dia-item';

      // Badges
      const topRow = document.createElement('div');
      topRow.className = 'modal-dia-item-top';

      const tipo = document.createElement('span');
      tipo.className = `tipo-badge ${Utils.tipoClass(ev.tipo)}`;
      tipo.textContent = ev.tipo;

      const cat = document.createElement('span');
      cat.className = `card-cat-badge ${Utils.catClass(ev.categoria)}`;
      cat.textContent = ev.categoria;

      topRow.appendChild(tipo); topRow.appendChild(cat);

      // Título y descripción
      const titulo = document.createElement('p');
      titulo.className = 'modal-dia-titulo';
      titulo.textContent = ev.titulo;

      const desc = document.createElement('p');
      desc.className = 'modal-dia-desc';
      desc.textContent = ev.descripcion;

      // Footer: link a fuente + botón ver análisis
      const footer = document.createElement('div');
      footer.className = 'modal-dia-footer';

      const fuenteLink = document.createElement('a');
      fuenteLink.className = 'modal-dia-fuente';
      fuenteLink.href = Sanitize.url(ev.fuente.url);
      fuenteLink.target = '_blank';
      fuenteLink.rel = 'noopener noreferrer';

      // Ícono externo SVG
      const ns = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('width', '11'); svg.setAttribute('height', '11');
      svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '2');
      svg.setAttribute('aria-hidden', 'true');
      const pathEl = document.createElementNS(ns, 'path');
      pathEl.setAttribute('d', 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6');
      const poly = document.createElementNS(ns, 'polyline');
      poly.setAttribute('points', '15 3 21 3 21 9');
      const lineEl = document.createElementNS(ns, 'line');
      lineEl.setAttribute('x1', '10'); lineEl.setAttribute('y1', '14');
      lineEl.setAttribute('x2', '21'); lineEl.setAttribute('y2', '3');
      svg.appendChild(pathEl); svg.appendChild(poly); svg.appendChild(lineEl);
      fuenteLink.appendChild(svg);
      fuenteLink.appendChild(document.createTextNode(ev.fuente.medio));

      const verBtn = document.createElement('button');
      verBtn.className = 'modal-dia-ver';
      verBtn.textContent = 'Ver análisis →';
      verBtn.addEventListener('click', () => {
        Modal.close('modal-dia');
        Modal.openDetalle(ev);
      });

      footer.appendChild(fuenteLink);
      footer.appendChild(verBtn);

      li.appendChild(topRow); li.appendChild(titulo);
      li.appendChild(desc); li.appendChild(footer);
      list.appendChild(li);
    });

    Modal.open('modal-dia');
  },

  /**
   * Inicializa el calendario en el mes con más eventos registrados.
   * Si no hay datos, usa el mes actual.
   */
  init() {
    // Encontrar el mes con más eventos para abrirlo por defecto
    const monthCount = eventosGubernamentales.reduce((acc, ev) => {
      const key = ev.fecha.slice(0, 7); // "YYYY-MM"
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const topMonth = Object.entries(monthCount)
      .sort((a, b) => b[1] - a[1])[0];

    if (topMonth) {
      const [y, m] = topMonth[0].split('-').map(Number);
      this._year = y;
      this._month = m - 1;
    } else {
      const now = new Date();
      this._year = now.getFullYear();
      this._month = now.getMonth();
    }

    this.render('cal');
    this.render('d-cal');

    const rerender = () => { this.render('cal'); this.render('d-cal'); };

    // Navegación mes anterior — sidebar
    document.getElementById('cal-prev')?.addEventListener('click', () => {
      this._month--;
      if (this._month < 0) { this._month = 11; this._year--; }
      this._selectedDate = null;
      rerender();
    });

    // Navegación mes siguiente — sidebar
    document.getElementById('cal-next')?.addEventListener('click', () => {
      this._month++;
      if (this._month > 11) { this._month = 0; this._year++; }
      this._selectedDate = null;
      rerender();
    });

    // Limpiar selección de día — sidebar
    document.getElementById('cal-reset')?.addEventListener('click', () => {
      this._selectedDate = null;
      rerender();
    });

    // Navegación mes anterior — drawer
    document.getElementById('d-cal-prev')?.addEventListener('click', () => {
      this._month--;
      if (this._month < 0) { this._month = 11; this._year--; }
      this._selectedDate = null;
      rerender();
    });

    // Navegación mes siguiente — drawer
    document.getElementById('d-cal-next')?.addEventListener('click', () => {
      this._month++;
      if (this._month > 11) { this._month = 0; this._year++; }
      this._selectedDate = null;
      rerender();
    });

    // Limpiar selección de día — drawer
    document.getElementById('d-cal-reset')?.addEventListener('click', () => {
      this._selectedDate = null;
      rerender();
    });
  }
};


/* ============================================================
   MÓDULO 10: RENDER
   Construye el DOM dinámicamente desde los datos.
   Principio: siempre textContent para datos del usuario (anti-XSS).
   ============================================================ */
const Render = {

  /** Renderiza el banner de última medida. */
  ultimaMedida() {
    const sorted = [...eventosGubernamentales].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    const last = sorted[0];
    if (!last) return;
    const btn = document.getElementById('ultima-medida-titulo');
    const fecha = document.getElementById('ultima-medida-fecha');
    if (btn) {
      btn.textContent = last.titulo;
      btn.addEventListener('click', () => Modal.openDetalle(last));
    }
    if (fecha) {
      const [y, m, d] = last.fecha.split('-').map(Number);
      const diff = Math.floor((new Date() - new Date(y, m - 1, d)) / 86400000);
      fecha.textContent = diff === 0 ? 'Hoy' : diff === 1 ? 'Ayer' : `Hace ${diff} días`;
    }
  },

  /** Actualiza contadores del hero incluido día de gobierno. */
  heroStats() {
    const cats = Utils.unique('categoria').length;
    const set = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = n; };
    set('hero-total', eventosGubernamentales.length);
    set('hero-categorias', cats);
    const inicio = new Date(2026, 2, 11);
    const dias = Math.floor((new Date() - inicio) / (1000 * 60 * 60 * 24)) + 1;
    set('hero-dias', dias);
  },

  /** Renderiza el panel de estadísticas con el gráfico y la lista. */
  estadisticas() {
    const grid = document.getElementById('stats-grid');
    const total = document.getElementById('stats-total');
    if (!grid || !total) return;

    total.textContent = eventosGubernamentales.length;
    const stats = Utils.countBy('categoria');
    const colores = ChartModule.COLORES;

    grid.innerHTML = '';
    Object.entries(stats)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count], i) => {
        const row = document.createElement('div');
        row.className = 'stat-row';
        row.setAttribute('role', 'listitem');

        // Punto de color que coincide con el gráfico
        const dot = document.createElement('span');
        dot.style.cssText = `display:inline-block;width:8px;height:8px;border-radius:50%;background:${colores[i % colores.length]};margin-right:6px;flex-shrink:0`;

        const nameEl = document.createElement('span');
        nameEl.className = 'stat-cat';

        // Insertar el dot y el texto de forma segura
        nameEl.appendChild(dot);
        nameEl.appendChild(document.createTextNode(cat));

        const countEl = document.createElement('span');
        countEl.className = 'stat-count';
        countEl.textContent = count;

        row.appendChild(nameEl);
        row.appendChild(countEl);
        grid.appendChild(row);
      });

    // Renderizar el gráfico de dona
    ChartModule.render();
  },

  /**
   * Construye los botones de filtro para un grupo (categoría, tipo).
   * @param {string} containerId — ID del contenedor en el HTML
   * @param {string[]} values    — valores únicos para mostrar
   * @param {string} stateKey   — clave en Filtrado.state
   * @param {Object} countMap   — { valor: cantidad }
   */
  _buildFilterGroup(containerId, values, stateKey, countMap) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    ['Todos', ...values].forEach(val => {
      const count = val === 'Todos'
        ? eventosGubernamentales.length
        : (countMap[val] || 0);

      const btn = document.createElement('button');
      btn.className = `filter-btn${Filtrado.state[stateKey] === val ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', Filtrado.state[stateKey] === val ? 'true' : 'false');

      const nameEl = document.createElement('span');
      nameEl.textContent = val;

      const countEl = document.createElement('span');
      countEl.className = 'filter-count';
      countEl.textContent = count;

      btn.appendChild(nameEl);
      btn.appendChild(countEl);

      btn.addEventListener('click', () => {
        Filtrado.state[stateKey] = val;
        this.allFilters();    // re-renderizar sidebar filters
        this.drawerFilters(); // re-renderizar drawer filters
        this.timeline();
      });

      container.appendChild(btn);
    });
  },

  /** Renderiza los grupos de filtros del sidebar. */
  allFilters() {
    this._buildFilterGroup('filter-cat', Utils.unique('categoria'), 'filtroCategoria', Utils.countBy('categoria'));
    this._buildFilterGroup('filter-tipo', Utils.unique('tipo'), 'filtroTipo', Utils.countBy('tipo'));
  },

  /** Renderiza los grupos de filtros del drawer (hamburguesa). */
  drawerFilters() {
    this._buildFilterGroup('d-filter-cat', Utils.unique('categoria'), 'filtroCategoria', Utils.countBy('categoria'));
    this._buildFilterGroup('d-filter-tipo', Utils.unique('tipo'), 'filtroTipo', Utils.countBy('tipo'));
  },

  /** Renderiza la línea de tiempo con los eventos filtrados. */
  timeline() {
    const track = document.getElementById('timeline-track');
    const empty = document.getElementById('empty-state');
    const countEl = document.getElementById('search-count');
    if (!track || !empty) return;

    const eventos = Filtrado.get();
    const compact = document.body.classList.contains('timeline-compact');
    const orden = Filtrado.state.orden;

    const ordenLabel = document.getElementById('orden-label');
    const labelMap = { 'fecha': '↓ Más reciente', 'fecha-asc': '↑ Más antiguo', 'categoria': 'Por categoría' };
    if (ordenLabel) ordenLabel.textContent = labelMap[orden] || '↓ Más reciente';

    if (!eventos.length) {
      track.innerHTML = '';
      empty.classList.remove('hidden');
      if (countEl) countEl.textContent = 'Sin resultados';
      return;
    }

    empty.classList.add('hidden');
    if (countEl) {
      countEl.textContent = (Filtrado.state.busqueda || Filtrado.state.filtroMinistroBusqueda)
        ? `${eventos.length} resultado${eventos.length !== 1 ? 's' : ''}`
        : '';
    }

    track.innerHTML = '';

    // Update hamburger badge count
    const activeFiltersArr = [
      Filtrado.state.filtroCategoria !== 'Todos' ? `Categoría: ${Filtrado.state.filtroCategoria}` : null,
      Filtrado.state.filtroTipo !== 'Todos' ? `Tipo: ${Filtrado.state.filtroTipo}` : null,
      Filtrado.state.busqueda.length > 0 ? `"${Filtrado.state.busqueda}"` : null,
      Filtrado.state.filtroMinistroBusqueda.length > 0 ? `Actor: ${Filtrado.state.filtroMinistroBusqueda}` : null,
    ].filter(Boolean);
    const activeFilters = activeFiltersArr.length;
    const badge = document.getElementById('filtros-badge');
    if (badge) {
      badge.textContent = activeFilters;
      badge.style.display = activeFilters > 0 ? 'inline-flex' : 'none';
    }

    // Banner de filtros activos
    const bar = document.getElementById('filtros-activos-bar');
    const txt = document.getElementById('filtros-activos-texto');
    if (bar && txt) {
      if (activeFilters > 0) {
        txt.textContent = `${eventos.length} de ${eventosGubernamentales.length} medidas · ${activeFiltersArr.join(' · ')}`;
        bar.classList.remove('hidden');
      } else {
        bar.classList.add('hidden');
      }
    }

    const getWeekKey = (fechaISO) => {
      const [y, m, d] = fechaISO.split('-').map(Number);
      const date = new Date(y, m - 1, d);
      const day = date.getDay() || 7;
      const lunes = new Date(date);
      lunes.setDate(date.getDate() - day + 1);
      return lunes.toISOString().slice(0, 10);
    };

    const getWeekLabel = (weekKey) => {
      const [y, m, d] = weekKey.split('-').map(Number);
      const lunes = new Date(y, m - 1, d);
      const domingo = new Date(lunes);
      domingo.setDate(lunes.getDate() + 6);
      const fmt = (dt) => dt.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' });
      return `Semana del ${fmt(lunes)} al ${fmt(domingo)}`;
    };

    let lastGroup = null;

    eventos.forEach((ev, index) => {
      const groupKey = orden === 'categoria' ? ev.categoria : getWeekKey(ev.fecha);
      if (groupKey !== lastGroup) {
        lastGroup = groupKey;
        const sep = document.createElement('li');
        sep.className = 'timeline-week-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = orden === 'categoria' ? ev.categoria : getWeekLabel(groupKey);
        track.appendChild(sep);
      }


      const li = document.createElement('li');
      li.className = `timeline-card${compact ? ' timeline-card-compact' : ''}`;
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', `Ver detalle: ${ev.titulo}`);
      li.style.animationDelay = `${index * 0.04}s`;

      const top = document.createElement('div');
      top.className = 'card-top';

      const tipoBadge = document.createElement('span');
      tipoBadge.className = `tipo-badge ${Utils.tipoClass(ev.tipo)}`;
      tipoBadge.textContent = ev.tipo;

      const dateEl = document.createElement('time');
      dateEl.className = 'card-date';
      dateEl.setAttribute('datetime', ev.fecha);
      dateEl.textContent = Utils.formatFecha(ev.fecha);

      top.appendChild(tipoBadge);
      top.appendChild(dateEl);

      const h3 = document.createElement('h3');
      h3.className = 'card-title';
      h3.textContent = ev.titulo;

      const footer = document.createElement('div');
      footer.className = 'card-footer';

      const catBadge = document.createElement('span');
      catBadge.className = `card-cat-badge ${Utils.catClass(ev.categoria)}`;
      catBadge.textContent = ev.categoria;

      const cta = document.createElement('span');
      cta.className = 'card-cta';
      cta.textContent = 'Ver detalle ';
      const arrow = document.createElement('span');
      arrow.className = 'card-arrow';
      arrow.textContent = '→';
      cta.appendChild(arrow);

      footer.appendChild(catBadge);
      footer.appendChild(cta);

      li.appendChild(top);
      li.appendChild(h3);

      if (!compact) {
        const p = document.createElement('p');
        p.className = 'card-desc';
        p.textContent = ev.descripcion;
        li.appendChild(p);
      }

      li.appendChild(footer);

      const openModal = () => Modal.openDetalle(ev);
      li.addEventListener('click', openModal);
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
      });

      track.appendChild(li);
    });
  }
};


/* ============================================================
   MÓDULO 11: EVENTOS GLOBALES
   Registra todos los event listeners de la app.
   Separados de la lógica para facilitar el mantenimiento.
   ============================================================ */
const Events = {
  init() {

    // ---- Disclaimer bar ----
    document.getElementById('disclaimer-close')?.addEventListener('click', () => {
      document.getElementById('disclaimer-bar')?.remove();
    });

    // ---- Toggle de tema claro/oscuro ----
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
      Theme.toggle();
      // Re-renderizar el gráfico con los nuevos colores del tema
      ChartModule.render();
    });

    // ---- Buscador: filtrado en tiempo real ----
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    searchInput?.addEventListener('input', () => {
      // Sanitizar el input antes de usarlo como filtro
      Filtrado.state.busqueda = Sanitize.searchInput(searchInput.value);
      searchClear?.classList.toggle('visible', Filtrado.state.busqueda.length > 0);
      Render.timeline();
    });

    searchClear?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      Filtrado.state.busqueda = '';
      searchClear.classList.remove('visible');
      searchInput?.focus();
      Render.timeline();
    });

    // ---- Botón Compartir (Web Share API) ----
    document.getElementById('btn-compartir')?.addEventListener('click', async () => {
      const id = Modal._currentEventoId;
      const titulo = document.getElementById('md-title')?.textContent || '';
      if (id) await Compartir.compartir(id, titulo);
    });

    // ---- Modales: abrir ----
    document.getElementById('btn-quienes')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-quienes-footer')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-terminos')?.addEventListener('click', () => Modal.open('modal-terminos'));

    // ---- Modales: cerrar con botón ✕ ----
    // Seleccionamos todos los botones que tengan data-modal
    document.querySelectorAll('.modal-close').forEach(btn => {
      const id = btn.dataset.modal;
      if (id) btn.addEventListener('click', () => Modal.close(id));
    });

    // ---- Modales: cerrar al clic en el overlay (fondo oscuro) ----
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) Modal.close(overlay.id);
      });
    });

    // ---- Modales: cerrar con tecla Escape ----
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') Modal.closeLast();
    });

    // ---- Toggle vista compacta/expandida ----
    document.getElementById('btn-compact')?.addEventListener('click', () => {
      const btn = document.getElementById('btn-compact');
      const isCompact = document.body.classList.toggle('timeline-compact');
      if (btn) btn.textContent = isCompact ? '⊞ Expandir' : '⊟ Compactar';
      Render.timeline();
    });

    // ---- Toggle orden: fecha-desc → fecha-asc → categoria → fecha-desc ----
    document.getElementById('btn-orden')?.addEventListener('click', () => {
      const ciclo = { 'fecha': 'fecha-asc', 'fecha-asc': 'categoria', 'categoria': 'fecha' };
      Filtrado.state.orden = ciclo[Filtrado.state.orden] || 'fecha';
      Render.timeline();
    });

    // ---- Chips de ministros/actores ----
    document.querySelectorAll('.ministro-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const nombre = chip.dataset.nombre;
        const yaActivo = chip.classList.contains('active');
        document.querySelectorAll('.ministro-chip').forEach(c => c.classList.remove('active'));
        if (yaActivo) {
          Filtrado.state.filtroMinistroBusqueda = '';
        } else {
          chip.classList.add('active');
          Filtrado.state.filtroMinistroBusqueda = nombre;
        }
        Render.timeline();
      });
    });

    // ---- Scroll to top ----
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('hidden', window.scrollY < 400);
      }, { passive: true });
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ---- Limpiar filtros desde banner ----
    document.getElementById('filtros-activos-limpiar')?.addEventListener('click', () => {
      Filtrado.state.filtroCategoria = 'Todos';
      Filtrado.state.filtroTipo = 'Todos';
      Filtrado.state.busqueda = '';
      Filtrado.state.filtroMinistroBusqueda = '';
      Calendario._selectedDate = null;
      document.querySelectorAll('.ministro-chip').forEach(c => c.classList.remove('active'));
      const si = document.getElementById('search-input');
      if (si) si.value = '';
      Render.allFilters();
      Render.drawerFilters();
      Calendario.render('cal');
      Calendario.render('d-cal');
      Render.timeline();
    });

    // ---- Meta tags dinámicos por medida al compartir ----
    // Se actualizan en Modal.openDetalle, no necesitan listener adicional

    // ---- Drawer filtros (hamburguesa) ----
    const drawerOpen = () => {
      document.getElementById('drawer-filtros')?.classList.remove('hidden');
      document.getElementById('drawer-overlay')?.classList.remove('hidden');
      document.getElementById('btn-filtros')?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Sync drawer filter buttons with current state
      Render.drawerFilters();
    };
    const drawerClose = () => {
      document.getElementById('drawer-filtros')?.classList.add('hidden');
      document.getElementById('drawer-overlay')?.classList.add('hidden');
      document.getElementById('btn-filtros')?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    document.getElementById('btn-filtros')?.addEventListener('click', drawerOpen);
    document.getElementById('drawer-close')?.addEventListener('click', drawerClose);
    document.getElementById('drawer-overlay')?.addEventListener('click', drawerClose);



    // Drawer actor chips
    document.querySelectorAll('#d-actor-chips .ministro-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const nombre = chip.dataset.nombre;
        const yaActivo = chip.classList.contains('active');
        document.querySelectorAll('.ministro-chip').forEach(c => c.classList.remove('active'));
        Filtrado.state.filtroMinistroBusqueda = yaActivo ? '' : nombre;
        if (!yaActivo) {
          document.querySelectorAll(`.ministro-chip[data-nombre="${nombre}"]`).forEach(c => c.classList.add('active'));
        }
        Render.timeline();
      });
    });

    // Drawer reset all
    document.getElementById('drawer-reset')?.addEventListener('click', () => {
      Filtrado.state.filtroCategoria = 'Todos';
      Filtrado.state.filtroTipo = 'Todos';
      Filtrado.state.busqueda = '';
      Filtrado.state.filtroMinistroBusqueda = '';
      Calendario._selectedDate = null;
      document.querySelectorAll('.ministro-chip').forEach(c => c.classList.remove('active'));
      const si = document.getElementById('search-input');
      if (si) si.value = '';
      Render.allFilters();
      Render.drawerFilters();
      Calendario.render('cal');
      Calendario.render('d-cal');
      Render.timeline();
    });
  }
};


/* ============================================================
   PUNTO DE ENTRADA: init()
   Se ejecuta cuando el DOM está completamente cargado.
   El orden importa: primero datos, luego UI, luego deep links.
   ============================================================ */
function init() {
  if (localStorage.getItem('kastigo-theme') === 'auto') {
    localStorage.removeItem('kastigo-theme');
  }
  Theme.init();          // 1. Aplicar tema antes de renderizar (evita flash)
  Render.heroStats();    // 2. Contadores del hero
  Render.ultimaMedida(); // 2b. Banner última medida
  Render.estadisticas(); // 3. Panel de stats + gráfico de dona
  Render.allFilters();   // 4. Botones de filtro sidebar
  Render.drawerFilters();// 4b. Botones de filtro drawer
  Render.timeline();     // 5. Línea de tiempo
  Calendario.init();     // 6. Calendario interactivo (sidebar + drawer)
  Events.init();         // 7. Todos los event listeners
  DeepLink.init();       // 8. Último: procesar hash de la URL (requiere que el DOM esté listo)
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar
document.addEventListener('DOMContentLoaded', init);