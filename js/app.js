'use strict';

/* ============================================================
   BASE DE DATOS
   ============================================================ */
const eventosGubernamentales = [
  {
    id: 1,
    fecha: "2026-03-17",
    titulo: "Retiro de 43 decretos de protección ambiental",
    descripcion: "El Ejecutivo retiró de Contraloría un conjunto de 43 decretos de protección ambiental y el plan de DD.HH. para su revisión.",
    interpretacion: "Críticos y organizaciones ambientales señalan que esto da luz verde al extractivismo y debilita la fiscalización ambiental del Estado.",
    categoria: "Medio Ambiente",
    tipo: "Decreto",
    certeza: "Confirmado",
    fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl" }
  },
  {
    id: 2,
    fecha: "2026-03-17",
    titulo: "Freno definitivo a la negociación ramal",
    descripcion: "El Ejecutivo confirmó que no impulsará la negociación colectiva multinivel, manteniendo la negociación solo a nivel de empresa.",
    interpretacion: "Organizaciones sindicales advierten que esto debilita estructuralmente el poder de negociación de los trabajadores frente a grandes grupos empresariales.",
    categoria: "Laboral",
    tipo: "Declaración",
    certeza: "Confirmado",
    fuente: { medio: "CIPER Chile", url: "https://www.ciperchile.cl" }
  },
  {
    id: 3,
    fecha: "2026-03-17",
    titulo: "Apertura para eliminar los feriados irrenunciables",
    descripcion: "El Ejecutivo señaló estar abierto a revisar la legislación de feriados irrenunciables tras presión de gremios empresariales como la CPC.",
    interpretacion: "Trabajadores del comercio y asociaciones de empleados califican la medida como un retroceso en derechos laborales conquistados.",
    categoria: "Laboral",
    tipo: "Declaración",
    certeza: "Reportado",
    fuente: { medio: "Interferencia", url: "https://www.interferencia.cl" }
  },
  {
    id: 4,
    fecha: "2026-03-17",
    titulo: "Fin al mecanismo de estabilización de combustibles (MEPCO)",
    descripcion: "El gobierno eliminó el fondo MEPCO que amortiguaba las alzas del precio de las bencinas, dejando el precio de los combustibles expuesto al mercado internacional.",
    interpretacion: "Economistas críticos señalan que esto impacta directamente al transporte y clase media, transfiriendo el costo de la inflación energética a los hogares.",
    categoria: "Economía",
    tipo: "Decreto",
    certeza: "Confirmado",
    fuente: { medio: "El Desconcierto", url: "https://www.eldesconcierto.cl" }
  },
  {
    id: 5,
    fecha: "2026-03-16",
    titulo: "Rebaja del impuesto a grandes empresas (IDPC del 27% al 23%)",
    descripcion: "El proyecto de reforma tributaria contempla reducir el Impuesto de Primera Categoría para empresas del 27% al 23% en un período de cuatro años.",
    interpretacion: "Analistas de centroizquierda señalan que la medida beneficia principalmente a grandes conglomerados mientras reduce la recaudación fiscal disponible para políticas sociales.",
    categoria: "Corporativo",
    tipo: "Proyecto",
    certeza: "En Desarrollo",
    fuente: { medio: "Diario Financiero", url: "https://www.df.cl" }
  },
  {
    id: 6,
    fecha: "2026-03-16",
    titulo: "Exención temporal de IVA a viviendas nuevas (inmobiliarias)",
    descripcion: "El Ejecutivo propone eximir temporalmente del IVA a la compraventa de viviendas nuevas para reactivar el mercado inmobiliario.",
    interpretacion: "Críticos argumentan que el beneficio fiscal opera como un subsidio encubierto a las empresas constructoras con stock sin vender, sin garantizar acceso real a vivienda para sectores medios.",
    categoria: "Corporativo",
    tipo: "Proyecto",
    certeza: "En Desarrollo",
    fuente: { medio: "La Tercera", url: "https://www.latercera.com" }
  },
  {
    id: 7,
    fecha: "2026-03-16",
    titulo: "Subsidio estatal a cotizaciones previsionales de empleadores",
    descripcion: "El proyecto contempla que el Estado cubra parte de las cotizaciones previsionales que deben pagar los empleadores durante el período de transición al nuevo sistema.",
    interpretacion: "Analistas laborales cuestionan el uso de fondos públicos para aliviar costos de empresas, argumentando que el ahorro patronal no tiene garantía de traducirse en más empleo.",
    categoria: "Economía",
    tipo: "Proyecto",
    certeza: "Reportado",
    fuente: { medio: "Biobío Chile", url: "https://www.biobiochile.cl" }
  },
  {
    id: 8,
    fecha: "2026-03-11",
    titulo: "Plan Escudo Fronterizo: militarización y construcción de zanjas",
    descripcion: "El gobierno lanzó el Plan Escudo Fronterizo con despliegue del Ejército en la frontera norte y el inicio de obras de excavación para construir una zanja en la zona de Colchane.",
    interpretacion: "Organizaciones de derechos humanos advierten que la militarización de la frontera vulnera los derechos de solicitantes de asilo y migrantes en situación de vulnerabilidad.",
    categoria: "Seguridad",
    tipo: "Decreto",
    certeza: "Confirmado",
    fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl" }
  }
];

/* ============================================================
   ESTADO
   ============================================================ */
const state = {
  filtroCategoria: 'Todos',
  filtroTipo: 'Todos',
  filtroCerteza: 'Todos',
  busqueda: '',
};

/* ============================================================
   MÓDULO: SANITIZACIÓN (Anti-XSS)
   ============================================================ */
const Sanitize = {
  text(input) {
    if (typeof input !== 'string') return '';
    const node = document.createTextNode(input);
    const div = document.createElement('div');
    div.appendChild(node);
    return div.innerHTML;
  },
  url(url) {
    if (typeof url !== 'string') return '#';
    const trimmed = url.trim();
    if (trimmed === '#') return '#';
    try {
      const p = new URL(trimmed);
      if (p.protocol === 'http:' || p.protocol === 'https:') return p.href;
    } catch { /* invalid */ }
    return '#';
  },
  searchInput(input, max = 200) {
    if (typeof input !== 'string') return '';
    return input.slice(0, max).replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim();
  }
};

/* ============================================================
   MÓDULO: UTILIDADES
   ============================================================ */
const Utils = {
  formatFecha(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
  },

  catClass(cat) {
    const map = {
      'Medio Ambiente': 'cat-medio-ambiente',
      'Laboral': 'cat-laboral',
      'Economía': 'cat-economia',
      'Corporativo': 'cat-corporativo',
      'Seguridad': 'cat-seguridad',
    };
    return map[cat] || 'cat-default';
  },

  tipoClass(tipo) {
    const map = { 'Ley': 'tipo-ley', 'Decreto': 'tipo-decreto', 'Declaración': 'tipo-declaracion', 'Proyecto': 'tipo-proyecto' };
    return map[tipo] || 'tipo-decreto';
  },

  certezaClass(cert) {
    const map = { 'Confirmado': 'certeza-confirmado', 'Reportado': 'certeza-reportado', 'En Desarrollo': 'certeza-desarrollo' };
    return map[cert] || 'certeza-reportado';
  },

  unique(key) {
    return [...new Set(eventosGubernamentales.map(e => e[key]))];
  },

  countBy(key) {
    return eventosGubernamentales.reduce((acc, e) => {
      acc[e[key]] = (acc[e[key]] || 0) + 1;
      return acc;
    }, {});
  }
};

/* ============================================================
   MÓDULO: FILTRADO
   ============================================================ */
const Filtrado = {
  get() {
    const q = state.busqueda.toLowerCase();
    return eventosGubernamentales
      .filter(e => {
        const cat = state.filtroCategoria === 'Todos' || e.categoria === state.filtroCategoria;
        const tipo = state.filtroTipo === 'Todos' || e.tipo === state.filtroTipo;
        const cert = state.filtroCerteza === 'Todos' || e.certeza === state.filtroCerteza;
        const txt = !q || e.titulo.toLowerCase().includes(q) || e.descripcion.toLowerCase().includes(q);
        return cat && tipo && cert && txt;
      })
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }
};

/* ============================================================
   MÓDULO: MODAL
   ============================================================ */
const Modal = {
  _stack: [],
  open(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    this._stack.push(id);
    requestAnimationFrame(() => el.querySelector('.modal-close')?.focus());
  },
  close(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('hidden');
    this._stack = this._stack.filter(i => i !== id);
    if (!this._stack.length) document.body.style.overflow = '';
  },
  closeLast() {
    if (this._stack.length) this.close(this._stack[this._stack.length - 1]);
  },
  openDetalle(ev) {
    // Usar textContent para todos los datos — nunca innerHTML con datos del usuario
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

    const badge = document.getElementById('md-tipo');
    if (badge) { badge.className = `modal-tipo-badge ${Utils.tipoClass(ev.tipo)}`; badge.textContent = ev.tipo; }

    const cbadge = document.getElementById('md-certeza');
    if (cbadge) { cbadge.className = `modal-certeza-badge ${Utils.certezaClass(ev.certeza)}`; cbadge.textContent = ev.certeza; }

    const catbadge = document.getElementById('md-cat');
    if (catbadge) { catbadge.className = `modal-cat-badge ${Utils.catClass(ev.categoria)}`; catbadge.textContent = ev.categoria; }

    const fechaEl = document.getElementById('md-fecha');
    if (fechaEl) { fechaEl.textContent = Utils.formatFecha(ev.fecha); fechaEl.setAttribute('datetime', ev.fecha); }

    setTxt('md-title', ev.titulo);
    setTxt('md-desc', ev.descripcion);
    setTxt('md-interpretacion', ev.interpretacion);
    setTxt('md-fuente-medio', `Fuente: ${ev.fuente.medio}`);

    const fuenteLink = document.getElementById('md-fuente');
    if (fuenteLink) fuenteLink.href = Sanitize.url(ev.fuente.url);

    this.open('modal-detalle');
  }
};

/* ============================================================
   MÓDULO: RENDER
   ============================================================ */
const Render = {

  heroStats() {
    const confirmados = eventosGubernamentales.filter(e => e.certeza === 'Confirmado').length;
    const cats = Utils.unique('categoria').length;
    const setNum = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = n; };
    setNum('hero-total', eventosGubernamentales.length);
    setNum('hero-confirmados', confirmados);
    setNum('hero-categorias', cats);
  },

  estadisticas() {
    const grid = document.getElementById('stats-grid');
    const total = document.getElementById('stats-total');
    if (!grid || !total) return;
    total.textContent = eventosGubernamentales.length;
    const stats = Utils.countBy('categoria');
    grid.innerHTML = '';
    Object.entries(stats).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
      const row = document.createElement('div');
      row.className = 'stat-row'; row.setAttribute('role', 'listitem');
      const n = document.createElement('span'); n.className = 'stat-cat'; n.textContent = cat;
      const c = document.createElement('span'); c.className = 'stat-count'; c.textContent = count;
      row.appendChild(n); row.appendChild(c); grid.appendChild(row);
    });
  },

  _buildFilterGroup(containerId, values, stateKey, countFn, labelAll = 'Todos') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const all = [labelAll, ...values];
    all.forEach(val => {
      const count = val === labelAll ? eventosGubernamentales.length : (countFn[val] || 0);
      const btn = document.createElement('button');
      btn.className = `filter-btn${state[stateKey] === val ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', state[stateKey] === val ? 'true' : 'false');

      const nameEl = document.createElement('span'); nameEl.textContent = val;
      const countEl = document.createElement('span'); countEl.className = 'filter-count'; countEl.textContent = count;
      btn.appendChild(nameEl); btn.appendChild(countEl);

      btn.addEventListener('click', () => {
        state[stateKey] = val;
        this.allFilters();
        this.timeline();
      });
      container.appendChild(btn);
    });
  },

  allFilters() {
    this._buildFilterGroup('filter-cat', Utils.unique('categoria'), 'filtroCategoria', Utils.countBy('categoria'));
    this._buildFilterGroup('filter-tipo', Utils.unique('tipo'), 'filtroTipo', Utils.countBy('tipo'));
    this._buildFilterGroup('filter-certeza', Utils.unique('certeza'), 'filtroCerteza', Utils.countBy('certeza'));
  },

  timeline() {
    const track = document.getElementById('timeline-track');
    const empty = document.getElementById('empty-state');
    const count = document.getElementById('search-count');
    if (!track || !empty) return;

    const eventos = Filtrado.get();

    if (!eventos.length) {
      track.innerHTML = '';
      empty.classList.remove('hidden');
      if (count) count.textContent = 'Sin resultados';
      return;
    }

    empty.classList.add('hidden');
    if (count) count.textContent = state.busqueda ? `${eventos.length} resultado${eventos.length !== 1 ? 's' : ''}` : '';

    track.innerHTML = '';
    eventos.forEach((ev, i) => {
      const li = document.createElement('li');
      li.className = 'timeline-card';
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', `Ver detalle: ${ev.titulo}`);
      li.style.animationDelay = `${i * 0.055}s`;

      // Top row: tipo + certeza + fecha
      const top = document.createElement('div'); top.className = 'card-top';

      const tipoBadge = document.createElement('span');
      tipoBadge.className = `tipo-badge ${Utils.tipoClass(ev.tipo)}`;
      tipoBadge.textContent = ev.tipo;

      const certBadge = document.createElement('span');
      certBadge.className = `certeza-badge ${Utils.certezaClass(ev.certeza)}`;
      certBadge.textContent = ev.certeza;

      const dateEl = document.createElement('time');
      dateEl.className = 'card-date';
      dateEl.setAttribute('datetime', ev.fecha);
      dateEl.textContent = Utils.formatFecha(ev.fecha);

      top.appendChild(tipoBadge);
      top.appendChild(certBadge);
      top.appendChild(dateEl);

      // Title
      const h3 = document.createElement('h3'); h3.className = 'card-title'; h3.textContent = ev.titulo;

      // Desc
      const p = document.createElement('p'); p.className = 'card-desc'; p.textContent = ev.descripcion;

      // Footer
      const footer = document.createElement('div'); footer.className = 'card-footer';
      const catBadge = document.createElement('span');
      catBadge.className = `card-cat-badge ${Utils.catClass(ev.categoria)}`;
      catBadge.textContent = ev.categoria;

      const cta = document.createElement('span'); cta.className = 'card-cta';
      cta.textContent = 'Ver detalle ';
      const arrow = document.createElement('span'); arrow.className = 'card-arrow'; arrow.textContent = '→';
      cta.appendChild(arrow);

      footer.appendChild(catBadge);
      footer.appendChild(cta);

      li.appendChild(top); li.appendChild(h3); li.appendChild(p); li.appendChild(footer);

      const open = () => Modal.openDetalle(ev);
      li.addEventListener('click', open);
      li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

      track.appendChild(li);
    });
  }
};

/* ============================================================
   MÓDULO: EVENTOS GLOBALES
   ============================================================ */
const Events = {
  init() {
    // Disclaimer
    document.getElementById('disclaimer-close')?.addEventListener('click', () => {
      document.getElementById('disclaimer-bar')?.remove();
    });

    // Buscador
    const input = document.getElementById('search-input');
    const clear = document.getElementById('search-clear');
    input?.addEventListener('input', () => {
      state.busqueda = Sanitize.searchInput(input.value);
      clear?.classList.toggle('visible', state.busqueda.length > 0);
      Render.timeline();
    });
    clear?.addEventListener('click', () => {
      if (input) input.value = '';
      state.busqueda = '';
      clear.classList.remove('visible');
      input?.focus();
      Render.timeline();
    });

    // Modales abrir
    document.getElementById('btn-quienes')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-quienes-footer')?.addEventListener('click', () => Modal.open('modal-quienes'));
    document.getElementById('btn-terminos')?.addEventListener('click', () => Modal.open('modal-terminos'));

    // Modales cerrar — botones ✕
    document.querySelectorAll('.modal-close').forEach(btn => {
      const id = btn.dataset.modal;
      if (id) btn.addEventListener('click', () => Modal.close(id));
    });

    // Modales cerrar — clic en overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => { if (e.target === overlay) Modal.close(overlay.id); });
    });

    // Modales cerrar — Escape
    document.addEventListener('keydown', e => { if (e.key === 'Escape') Modal.closeLast(); });
  }
};

/* ============================================================
   MÓDULO: CALENDARIO
   ============================================================ */
const Calendario = {

  // Estado interno del calendario
  _year: null,
  _month: null,    // 0-based
  _selectedDate: null,  // "YYYY-MM-DD" | null

  /**
   * Construye un mapa { "YYYY-MM-DD": [eventos] } para acceso O(1)
   */
  _buildEventMap() {
    return eventosGubernamentales.reduce((map, ev) => {
      if (!map[ev.fecha]) map[ev.fecha] = [];
      map[ev.fecha].push(ev);
      return map;
    }, {});
  },

  /**
   * Renderiza la grilla del mes actual en el DOM.
   */
  render() {
    const grid = document.getElementById('cal-grid');
    const label = document.getElementById('cal-month-label');
    const resetBtn = document.getElementById('cal-reset');
    if (!grid || !label) return;

    const eventMap = this._buildEventMap();
    const today = new Date();
    const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    // Label del mes
    const monthName = new Date(this._year, this._month, 1)
      .toLocaleDateString('es-CL', { month: 'long', year: 'numeric' });
    label.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    grid.innerHTML = '';

    // Cabecera días de la semana (L M M J V S D)
    const dayNames = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
    dayNames.forEach(d => {
      const span = document.createElement('span');
      span.className = 'cal-day-name';
      span.textContent = d;
      grid.appendChild(span);
    });

    // Primer día del mes (ajustado a lunes = 0)
    const firstDay = new Date(this._year, this._month, 1).getDay();
    const offset = (firstDay === 0) ? 6 : firstDay - 1; // lunes primero
    const daysInMonth = new Date(this._year, this._month + 1, 0).getDate();

    // Celdas vacías iniciales
    for (let i = 0; i < offset; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day cal-empty';
      empty.setAttribute('aria-hidden', 'true');
      grid.appendChild(empty);
    }

    // Días del mes
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${this._year}-${String(this._month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const eventos = eventMap[iso] || [];
      const hasEvents = eventos.length > 0;

      const cell = document.createElement('div');
      cell.className = 'cal-day';
      cell.setAttribute('role', hasEvents ? 'button' : 'gridcell');
      cell.setAttribute('aria-label', hasEvents
        ? `${d} — ${eventos.length} medida${eventos.length > 1 ? 's' : ''}`
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
          this.render();                 // re-render para mostrar selección
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

    // Botón reset
    if (resetBtn) {
      resetBtn.classList.toggle('hidden', !this._selectedDate);
    }
  },

  /**
   * Abre el modal con los eventos de un día específico.
   * Construye el DOM con textContent (nunca innerHTML con datos externos).
   */
  _openDayModal(iso, eventos) {
    const fechaEl = document.getElementById('mdia-fecha');
    const countEl = document.getElementById('mdia-count');
    const list = document.getElementById('mdia-list');
    const title = document.getElementById('mdia-title');
    if (!fechaEl || !list) return;

    // Fecha legible
    const [y, m, d] = iso.split('-').map(Number);
    const fechaStr = new Date(y, m - 1, d).toLocaleDateString('es-CL', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    fechaEl.textContent = fechaStr.charAt(0).toUpperCase() + fechaStr.slice(1);
    fechaEl.setAttribute('datetime', iso);

    countEl.textContent = `${eventos.length} medida${eventos.length > 1 ? 's' : ''}`;
    title.textContent = 'Medidas del día';

    list.innerHTML = '';

    eventos.forEach(ev => {
      const li = document.createElement('li');
      li.className = 'modal-dia-item';

      // Badges top
      const topRow = document.createElement('div');
      topRow.className = 'modal-dia-item-top';

      const tipoBadge = document.createElement('span');
      tipoBadge.className = `tipo-badge ${Utils.tipoClass(ev.tipo)}`;
      tipoBadge.textContent = ev.tipo;

      const certBadge = document.createElement('span');
      certBadge.className = `certeza-badge ${Utils.certezaClass(ev.certeza)}`;
      certBadge.textContent = ev.certeza;

      const catBadge = document.createElement('span');
      catBadge.className = `card-cat-badge ${Utils.catClass(ev.categoria)}`;
      catBadge.textContent = ev.categoria;

      topRow.appendChild(tipoBadge);
      topRow.appendChild(certBadge);
      topRow.appendChild(catBadge);

      // Título
      const h3 = document.createElement('p');
      h3.className = 'modal-dia-titulo';
      h3.textContent = ev.titulo;

      // Descripción
      const p = document.createElement('p');
      p.className = 'modal-dia-desc';
      p.textContent = ev.descripcion;

      // Footer: fuente + ver detalle
      const footer = document.createElement('div');
      footer.className = 'modal-dia-footer';

      const fuenteLink = document.createElement('a');
      fuenteLink.className = 'modal-dia-fuente';
      fuenteLink.href = Sanitize.url(ev.fuente.url);
      fuenteLink.target = '_blank';
      fuenteLink.rel = 'noopener noreferrer';

      // Ícono externo
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '11'); svg.setAttribute('height', '11');
      svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '2');
      svg.setAttribute('aria-hidden', 'true');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      poly.setAttribute('points', '15 3 21 3 21 9');
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', '10'); line.setAttribute('y1', '14');
      line.setAttribute('x2', '21'); line.setAttribute('y2', '3');
      svg.appendChild(path); svg.appendChild(poly); svg.appendChild(line);

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

      li.appendChild(topRow);
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(footer);
      list.appendChild(li);
    });

    Modal.open('modal-dia');
  },

  /**
   * Inicializa el calendario en el mes con más eventos,
   * o en el mes actual si no hay datos.
   */
  init() {
    // Detectar el mes con más eventos
    const monthCount = eventosGubernamentales.reduce((acc, ev) => {
      const key = ev.fecha.slice(0, 7); // "YYYY-MM"
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const topMonth = Object.entries(monthCount).sort((a, b) => b[1] - a[1])[0];

    if (topMonth) {
      const [y, m] = topMonth[0].split('-').map(Number);
      this._year = y;
      this._month = m - 1;
    } else {
      const now = new Date();
      this._year = now.getFullYear();
      this._month = now.getMonth();
    }

    this.render();

    // Navegación mes anterior / siguiente
    document.getElementById('cal-prev')?.addEventListener('click', () => {
      this._month--;
      if (this._month < 0) { this._month = 11; this._year--; }
      this._selectedDate = null;
      this.render();
    });

    document.getElementById('cal-next')?.addEventListener('click', () => {
      this._month++;
      if (this._month > 11) { this._month = 0; this._year++; }
      this._selectedDate = null;
      this.render();
    });

    // Reset selección de día
    document.getElementById('cal-reset')?.addEventListener('click', () => {
      this._selectedDate = null;
      this.render();
    });
  }
};

/* ============================================================
   INIT
   ============================================================ */
function init() {
  Render.heroStats();
  Render.estadisticas();
  Render.allFilters();
  Render.timeline();
  Calendario.init();
  Events.init();
}

document.addEventListener('DOMContentLoaded', init);