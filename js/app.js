/**
 * KASTIGO · Monitor Ciudadano
 * js/app.js — Vanilla JS ES6+ modular, sin eval(), con sanitización XSS
 */

'use strict';

/* ============================================================
   BASE DE DATOS LOCAL
   ============================================================ */
const eventosGubernamentales = [
  {
    id: 1,
    fecha: "2026-03-17",
    titulo: "Retiro masivo de 43 decretos de protección ambiental",
    descripcion: "El gobierno retira de Contraloría 43 decretos ambientales y el plan de DD.HH. heredados. Una señal de luz verde al extractivismo.",
    categoria: "Medio Ambiente",
    enlace_fuente: "https://www.elmostrador.cl"
  },
  {
    id: 2,
    fecha: "2026-03-17",
    titulo: "Freno definitivo a la negociación ramal",
    descripcion: "Confirmación de que no se avanzará con la negociación multinivel, debilitando el poder de negociación sindical.",
    categoria: "Laboral",
    enlace_fuente: "https://www.ciperchile.cl"
  },
  {
    id: 3,
    fecha: "2026-03-17",
    titulo: "Apertura para eliminar los feriados irrenunciables",
    descripcion: "El Ejecutivo se abre a eliminar el derecho al descanso irrenunciable tras presión de grandes gremios empresariales.",
    categoria: "Laboral",
    enlace_fuente: "https://www.interferencia.cl"
  },
  {
    id: 4,
    fecha: "2026-03-17",
    titulo: "Fin al mecanismo de estabilización de combustibles",
    descripcion: "Eliminación del fondo que frena el alza de bencinas, traspasando el costo total de la inflación al transporte.",
    categoria: "Economía",
    enlace_fuente: "https://www.eldesconcierto.cl"
  },
  {
    id: 5,
    fecha: "2026-03-16",
    titulo: "Rebaja de impuestos a las grandes empresas (IDPC al 23%)",
    descripcion: "Reducción del impuesto corporativo del 27% al 23% para aumentar utilidades de grandes capitales.",
    categoria: "Corporativo",
    enlace_fuente: "https://www.df.cl"
  },
  {
    id: 6,
    fecha: "2026-03-16",
    titulo: "Perdonazo tributario a las Inmobiliarias (IVA 0%)",
    descripcion: "Exención temporal del IVA a viviendas nuevas para liquidar stock de grandes empresas inmobiliarias.",
    categoria: "Corporativo",
    enlace_fuente: "https://www.latercera.com"
  },
  {
    id: 7,
    fecha: "2026-03-16",
    titulo: "Subsidio público a cotizaciones empresariales",
    descripcion: "El Estado pagará parte de las cotizaciones previsionales, usando impuestos públicos para aliviar costos de empleadores.",
    categoria: "Economía",
    enlace_fuente: "https://www.biobiochile.cl"
  },
  {
    id: 8,
    fecha: "2026-03-11",
    titulo: "Plan Escudo Fronterizo: Militarización y Zanjas",
    descripcion: "Despliegue de Ejército y excavaciones en la frontera norte como medida de control migratorio y seguridad física.",
    categoria: "Seguridad",
    enlace_fuente: "https://www.cooperativa.cl"
  }
];

/* ============================================================
   ESTADO
   ============================================================ */
const state = {
  filtroActivo: 'Todos',
  busqueda: '',
};

/* ============================================================
   MÓDULO: SANITIZACIÓN (Anti-XSS)
   Convierte cualquier string en texto plano seguro para el DOM.
   No usa eval() ni innerHTML con datos del usuario.
   ============================================================ */
const Sanitize = {
  /**
   * Escapa caracteres HTML especiales usando textContent (método seguro).
   * @param {string} input
   * @returns {string}
   */
  text(input) {
    if (typeof input !== 'string') return '';
    const node = document.createTextNode(input);
    const div = document.createElement('div');
    div.appendChild(node);
    return div.innerHTML;
  },

  /**
   * Limpia y valida una URL, retorna '#' si es sospechosa.
   * Solo permite http y https para prevenir javascript: URIs.
   * @param {string} url
   * @returns {string}
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
    } catch {
      // URL inválida
    }
    return '#';
  },

  /**
   * Sanitiza texto de input: recorta espacios, limita longitud y elimina
   * caracteres de control invisibles. No altera el contenido legítimo.
   * @param {string} input
   * @param {number} maxLen
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
   MÓDULO: UTILIDADES
   ============================================================ */
const Utils = {
  /**
   * Formatea fecha ISO (YYYY-MM-DD) a texto en español.
   * @param {string} fechaISO
   * @returns {string}
   */
  formatearFecha(fechaISO) {
    const [y, m, d] = fechaISO.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-CL', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  },

  /**
   * Normaliza un nombre de categoría a clase CSS.
   * @param {string} cat
   * @returns {string}
   */
  badgeClass(cat) {
    const mapa = {
      'Medio Ambiente': 'badge-medio-ambiente',
      'Laboral':        'badge-laboral',
      'Economía':       'badge-economia',
      'Corporativo':    'badge-corporativo',
      'Seguridad':      'badge-seguridad',
    };
    return mapa[cat] || 'badge-default';
  },

  /**
   * Obtiene categorías únicas del array de eventos.
   * @returns {string[]}
   */
  getCategorias() {
    return [...new Set(eventosGubernamentales.map(e => e.categoria))];
  },

  /**
   * Calcula conteo por categoría.
   * @returns {Object.<string, number>}
   */
  getEstadisticas() {
    return eventosGubernamentales.reduce((acc, e) => {
      acc[e.categoria] = (acc[e.categoria] || 0) + 1;
      return acc;
    }, {});
  },
};

/* ============================================================
   MÓDULO: FILTRADO
   ============================================================ */
const Filtrado = {
  /**
   * Retorna eventos filtrados y ordenados (más reciente primero).
   * @returns {Array}
   */
  getEventosFiltrados() {
    const query = state.busqueda.toLowerCase();
    return eventosGubernamentales
      .filter(e => {
        const porCategoria = state.filtroActivo === 'Todos' || e.categoria === state.filtroActivo;
        const porTexto = !query ||
          e.titulo.toLowerCase().includes(query) ||
          e.descripcion.toLowerCase().includes(query);
        return porCategoria && porTexto;
      })
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
};

/* ============================================================
   MÓDULO: MODAL
   ============================================================ */
const Modal = {
  _stack: [],

  /**
   * Abre un modal por su id. Apila para soporte de múltiples modales.
   * @param {string} id
   */
  open(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    this._stack.push(id);
    requestAnimationFrame(() => {
      const closeBtn = overlay.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    });
  },

  /**
   * Cierra un modal por su id.
   * @param {string} id
   */
  close(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    overlay.classList.add('hidden');
    this._stack = this._stack.filter(i => i !== id);
    if (this._stack.length === 0) {
      document.body.style.overflow = '';
    }
  },

  /**
   * Cierra el modal más reciente de la pila (para tecla Escape).
   */
  closeLast() {
    if (this._stack.length > 0) {
      this.close(this._stack[this._stack.length - 1]);
    }
  },

  /**
   * Rellena y abre el modal de detalle de una medida.
   * Usa textContent para insertar datos (no innerHTML), previniendo XSS.
   * @param {Object} evento
   */
  openDetalle(evento) {
    const badge = document.getElementById('modal-det-badge');
    const fecha = document.getElementById('modal-det-fecha');
    const titulo = document.getElementById('modal-detalle-title');
    const desc = document.getElementById('modal-det-desc');
    const fuente = document.getElementById('modal-det-fuente');

    badge.className = `modal-category-badge ${Utils.badgeClass(evento.categoria)}`;
    badge.textContent = evento.categoria;
    fecha.textContent = Utils.formatearFecha(evento.fecha);
    fecha.setAttribute('datetime', evento.fecha);
    titulo.textContent = evento.titulo;
    desc.textContent = evento.descripcion;
    fuente.href = Sanitize.url(evento.enlace_fuente);

    this.open('modal-detalle');
  }
};

/* ============================================================
   MÓDULO: RENDER
   ============================================================ */
const Render = {

  /**
   * Renderiza el contador del hero.
   */
  heroCounter() {
    const el = document.getElementById('hero-counter');
    if (el) el.textContent = eventosGubernamentales.length;
  },

  /**
   * Renderiza estadísticas por categoría usando textContent (seguro).
   */
  estadisticas() {
    const grid = document.getElementById('stats-grid');
    const total = document.getElementById('stats-total');
    if (!grid || !total) return;

    const stats = Utils.getEstadisticas();
    total.textContent = eventosGubernamentales.length;

    // Limpiar y reconstruir usando nodos DOM
    grid.innerHTML = '';
    Object.entries(stats)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count]) => {
        const row = document.createElement('div');
        row.className = 'stat-row';
        row.setAttribute('role', 'listitem');

        const nameEl = document.createElement('span');
        nameEl.className = 'stat-cat';
        nameEl.textContent = cat;

        const countEl = document.createElement('span');
        countEl.className = 'stat-count';
        countEl.textContent = count;

        row.appendChild(nameEl);
        row.appendChild(countEl);
        grid.appendChild(row);
      });
  },

  /**
   * Renderiza botones de filtro por categoría.
   */
  filtros() {
    const container = document.getElementById('filter-buttons');
    if (!container) return;
    const stats = Utils.getEstadisticas();
    const categorias = ['Todos', ...Utils.getCategorias()];

    container.innerHTML = '';
    categorias.forEach(cat => {
      const count = cat === 'Todos' ? eventosGubernamentales.length : (stats[cat] || 0);
      const btn = document.createElement('button');
      btn.className = `filter-btn${state.filtroActivo === cat ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', state.filtroActivo === cat ? 'true' : 'false');
      btn.dataset.categoria = cat;

      const nameSpan = document.createElement('span');
      nameSpan.textContent = cat;

      const countSpan = document.createElement('span');
      countSpan.className = 'filter-count';
      countSpan.textContent = count;

      btn.appendChild(nameSpan);
      btn.appendChild(countSpan);

      btn.addEventListener('click', () => {
        state.filtroActivo = cat;
        this.filtros();
        this.timeline();
      });

      container.appendChild(btn);
    });
  },

  /**
   * Renderiza la línea de tiempo con nodos DOM (sin innerHTML con datos de usuario).
   */
  timeline() {
    const track = document.getElementById('timeline-track');
    const empty = document.getElementById('empty-state');
    const countEl = document.getElementById('search-count');
    if (!track || !empty) return;

    const eventos = Filtrado.getEventosFiltrados();

    if (eventos.length === 0) {
      track.innerHTML = '';
      empty.classList.remove('hidden');
      if (countEl) countEl.textContent = 'Sin resultados';
      return;
    }

    empty.classList.add('hidden');
    if (countEl) {
      countEl.textContent = state.busqueda
        ? `${eventos.length} resultado${eventos.length !== 1 ? 's' : ''}`
        : '';
    }

    track.innerHTML = '';

    eventos.forEach((evento, index) => {
      const li = document.createElement('li');
      li.className = 'timeline-card';
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', `Ver detalle: ${evento.titulo}`);
      li.style.animationDelay = `${index * 0.06}s`;

      // Top row
      const topDiv = document.createElement('div');
      topDiv.className = 'card-top';

      const badge = document.createElement('span');
      badge.className = `card-badge ${Utils.badgeClass(evento.categoria)}`;
      badge.textContent = evento.categoria;

      const dateEl = document.createElement('time');
      dateEl.className = 'card-date';
      dateEl.setAttribute('datetime', evento.fecha);
      dateEl.textContent = Utils.formatearFecha(evento.fecha);

      topDiv.appendChild(badge);
      topDiv.appendChild(dateEl);

      // Title
      const titleEl = document.createElement('h3');
      titleEl.className = 'card-title';
      titleEl.textContent = evento.titulo;

      // Description (truncated visually via CSS)
      const descEl = document.createElement('p');
      descEl.className = 'card-desc';
      descEl.textContent = evento.descripcion;

      // Footer
      const footerDiv = document.createElement('div');
      footerDiv.className = 'card-footer';

      const cta = document.createElement('span');
      cta.className = 'card-cta';
      cta.textContent = 'Ver detalle ';
      const arrow = document.createElement('span');
      arrow.className = 'card-arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      cta.appendChild(arrow);

      const idEl = document.createElement('span');
      idEl.className = 'card-id';
      idEl.textContent = `#${String(evento.id).padStart(3, '0')}`;

      footerDiv.appendChild(cta);
      footerDiv.appendChild(idEl);

      li.appendChild(topDiv);
      li.appendChild(titleEl);
      li.appendChild(descEl);
      li.appendChild(footerDiv);

      // Eventos
      const handler = () => Modal.openDetalle(evento);
      li.addEventListener('click', handler);
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
      });

      track.appendChild(li);
    });
  }
};

/* ============================================================
   MÓDULO: EVENTOS GLOBALES
   ============================================================ */
const EventBus = {
  init() {
    // --- Disclaimer bar ---
    document.getElementById('disclaimer-close')?.addEventListener('click', () => {
      const bar = document.querySelector('.disclaimer-bar');
      if (bar) bar.style.display = 'none';
    });

    // --- Buscador ---
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    searchInput?.addEventListener('input', () => {
      state.busqueda = Sanitize.searchInput(searchInput.value);
      if (searchClear) {
        searchClear.classList.toggle('visible', state.busqueda.length > 0);
      }
      Render.timeline();
    });

    searchClear?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.busqueda = '';
      searchClear.classList.remove('visible');
      searchInput?.focus();
      Render.timeline();
    });

    // --- Botones de modal ---
    document.getElementById('btn-quienes-somos')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-quienes-footer')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-terminos')?.addEventListener('click', () => Modal.open('modal-terminos'));

    // --- Cerrar modales: botón ✕ ---
    document.querySelectorAll('.modal-close').forEach(btn => {
      const modalId = btn.dataset.modal;
      if (modalId) btn.addEventListener('click', () => Modal.close(modalId));
    });

    // --- Cerrar modales: clic en overlay ---
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) Modal.close(overlay.id);
      });
    });

    // --- Cerrar modales: tecla Escape ---
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') Modal.closeLast();
    });
  }
};

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
function init() {
  Render.heroCounter();
  Render.estadisticas();
  Render.filtros();
  Render.timeline();
  EventBus.init();
}

document.addEventListener('DOMContentLoaded', init);
