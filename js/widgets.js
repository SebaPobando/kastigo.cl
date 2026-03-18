/**
 * js/widgets.js — Kastigo v3 · Widgets Ciudadanos
 * ============================================================
 * Módulos implementados:
 *  1. Countdown      — Contador regresivo al fin del mandato
 *  2. Promesas       — Medidómetro de promesas de campaña
 *  3. Impactometro   — Votación ciudadana anónima por medida
 * ============================================================
 * Cargado DESPUÉS de data.js y app.js en index.html
 */

'use strict';

/* ============================================================
   MÓDULO 1: COUNTDOWN
   Contador regresivo al fin del mandato presidencial.
   Fecha de término: 11 de marzo de 2030, 12:00 hrs Chile.
   Se actualiza cada segundo con requestAnimationFrame.
   ============================================================ */
const Countdown = {

    // Fecha exacta de término del mandato (hora local Chile = UTC-3)
    // 11 de marzo de 2030 a las 12:00 hrs en Santiago
    FIN_MANDATO: new Date('2030-03-11T15:00:00Z'), // 12:00 CLT = 15:00 UTC

    // Fecha de inicio para calcular el porcentaje transcurrido
    INICIO_MANDATO: new Date('2026-03-11T15:00:00Z'),

    _rafId: null,

    /**
     * Calcula los días, horas, minutos y segundos restantes.
     * @returns {{ dias, horas, minutos, segundos, porcentaje, terminado }}
     */
    _calcular() {
        const ahora = Date.now();
        const fin = this.FIN_MANDATO.getTime();
        const inicio = this.INICIO_MANDATO.getTime();
        const restante = Math.max(0, fin - ahora);
        const total = fin - inicio;
        const transcurrido = ahora - inicio;

        const porcentaje = Math.min(100, Math.max(0,
            (transcurrido / total) * 100
        ));

        return {
            dias: Math.floor(restante / (1000 * 60 * 60 * 24)),
            horas: Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutos: Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60)),
            segundos: Math.floor((restante % (1000 * 60)) / 1000),
            porcentaje: porcentaje.toFixed(1),
            terminado: restante === 0
        };
    },

    /**
     * Actualiza el DOM con los valores actuales.
     * Usa requestAnimationFrame para rendimiento óptimo.
     */
    _tick() {
        const { dias, horas, minutos, segundos, porcentaje, terminado } = this._calcular();

        // Actualizar cada unidad de tiempo
        const set = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(val).padStart(2, '0');
        };

        set('cd-dias', dias);
        set('cd-horas', horas);
        set('cd-minutos', minutos);
        set('cd-segundos', segundos);

        // Barra de progreso
        const barra = document.getElementById('cd-progress-bar');
        if (barra) {
            barra.style.width = `${porcentaje}%`;
            barra.setAttribute('aria-valuenow', porcentaje);
        }

        const pctEl = document.getElementById('cd-porcentaje');
        if (pctEl) pctEl.textContent = `${porcentaje}% del mandato transcurrido`;

        if (!terminado) {
            // Programar siguiente actualización en ~1 segundo
            setTimeout(() => {
                this._rafId = requestAnimationFrame(() => this._tick());
            }, 1000);
        } else {
            const container = document.getElementById('countdown-widget');
            if (container) container.classList.add('mandato-terminado');
        }
    },

    /** Inicializa el widget y arranca el ticker. */
    init() {
        const container = document.getElementById('countdown-widget');
        if (!container) return;
        this._tick();
    },

    /** Detiene el ticker (para limpieza). */
    destroy() {
        if (this._rafId) cancelAnimationFrame(this._rafId);
    }
};


/* ============================================================
   MÓDULO 2: PROMESAS
   Medidómetro de promesas de campaña.
   Los datos viven en promesasData (definido abajo).
   Estados: cumplida | en-proceso | incumplida | revertida
   ============================================================ */

/**
 * Base de datos de promesas de campaña.
 * Actualizar manualmente cuando cambien los estados.
 * Fuentes: programa de gobierno, declaraciones oficiales.
 */
const promesasData = [
    {
        id: 'p1',
        texto: 'Plan Escudo Fronterizo con zanja y militares',
        categoria: 'Seguridad',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-16',
        fuente_url: 'https://www.elmostrador.cl'
    },
    {
        id: 'p2',
        texto: 'Bajar impuesto corporativo (IDPC) del 27% al 23%',
        categoria: 'Economía',
        estado: 'en-proceso',
        fecha_actualizacion: '2026-03-14',
        fuente_url: 'https://www.df.cl'
    },
    {
        id: 'p3',
        texto: 'Eliminar el MEPCO y liberar precio de combustibles',
        categoria: 'Economía',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-17',
        fuente_url: 'https://www.ciperchile.cl'
    },
    {
        id: 'p4',
        texto: 'Revisar y derogar decretos ambientales anteriores',
        categoria: 'Medio Ambiente',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-17',
        fuente_url: 'https://www.latercera.com'
    },
    {
        id: 'p5',
        texto: 'Eliminar la negociación colectiva multinivel',
        categoria: 'Laboral',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-17',
        fuente_url: 'https://www.cooperativa.cl'
    },
    {
        id: 'p6',
        texto: 'Penalizar con cárcel el ingreso clandestino',
        categoria: 'Seguridad',
        estado: 'en-proceso',
        fecha_actualizacion: '2026-03-16',
        fuente_url: 'https://www.biobiochile.cl'
    },
    {
        id: 'p7',
        texto: 'Auditoría al gasto público del gobierno anterior',
        categoria: 'Economía',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-11',
        fuente_url: 'https://www.latercera.com'
    },
    {
        id: 'p8',
        texto: 'Exención de contribuciones para adultos mayores',
        categoria: 'Vivienda',
        estado: 'en-proceso',
        fecha_actualizacion: '2026-03-16',
        fuente_url: 'https://www.gob.cl'
    },
    {
        id: 'p9',
        texto: 'Revisar textos escolares por contenido ideológico',
        categoria: 'Social',
        estado: 'en-proceso',
        fecha_actualizacion: '2026-03-12',
        fuente_url: 'https://www.ciperchile.cl'
    },
    {
        id: 'p10',
        texto: 'Mantener y respetar feriados irrenunciables',
        categoria: 'Laboral',
        estado: 'cumplida',
        fecha_actualizacion: '2026-03-18',
        fuente_url: 'https://www.t13.cl'
    }
];

const Promesas = {

    // Configuración de cada estado: etiqueta, color CSS, ícono
    ESTADOS: {
        'cumplida': { label: 'Cumplida', clase: 'estado-cumplida', icono: '✅' },
        'en-proceso': { label: 'En proceso', clase: 'estado-en-proceso', icono: '🔄' },
        'incumplida': { label: 'Incumplida', clase: 'estado-incumplida', icono: '❌' },
        'revertida': { label: 'Revertida', clase: 'estado-revertida', icono: '↩️' },
    },

    /**
     * Calcula las estadísticas del medidómetro.
     * @returns {{ cumplidas, enProceso, incumplidas, revertidas, total, pctCumplidas }}
     */
    _calcStats() {
        const total = promesasData.length;
        const cumplidas = promesasData.filter(p => p.estado === 'cumplida').length;
        const enProceso = promesasData.filter(p => p.estado === 'en-proceso').length;
        const incumplidas = promesasData.filter(p => p.estado === 'incumplida').length;
        const revertidas = promesasData.filter(p => p.estado === 'revertida').length;
        return {
            total, cumplidas, enProceso, incumplidas, revertidas,
            pctCumplidas: total ? Math.round((cumplidas / total) * 100) : 0
        };
    },

    /**
     * Renderiza el panel de promesas en el DOM.
     * Construye nodos con textContent (anti-XSS).
     */
    render() {
        const container = document.getElementById('promesas-container');
        if (!container) return;

        const stats = this._calcStats();

        // ---- Resumen estadístico ----
        const summary = document.getElementById('promesas-summary');
        if (summary) {
            summary.innerHTML = '';

            const items = [
                { label: 'Cumplidas', val: stats.cumplidas, clase: 'prom-stat-cumplida' },
                { label: 'En proceso', val: stats.enProceso, clase: 'prom-stat-proceso' },
                { label: 'Incumplidas', val: stats.incumplidas, clase: 'prom-stat-incumplida' },
                { label: 'Revertidas', val: stats.revertidas, clase: 'prom-stat-revertida' },
            ];

            items.forEach(item => {
                const div = document.createElement('div');
                div.className = `prom-stat-item ${item.clase}`;

                const num = document.createElement('span');
                num.className = 'prom-stat-num';
                num.textContent = item.val;

                const lbl = document.createElement('span');
                lbl.className = 'prom-stat-label';
                lbl.textContent = item.label;

                div.appendChild(num);
                div.appendChild(lbl);
                summary.appendChild(div);
            });
        }

        // ---- Barra de progreso segmentada ----
        const barraContainer = document.getElementById('promesas-barra');
        if (barraContainer && stats.total > 0) {
            barraContainer.innerHTML = '';

            const segmentos = [
                { pct: (stats.cumplidas / stats.total) * 100, clase: 'barra-cumplida', label: 'Cumplidas' },
                { pct: (stats.enProceso / stats.total) * 100, clase: 'barra-proceso', label: 'En proceso' },
                { pct: (stats.incumplidas / stats.total) * 100, clase: 'barra-incumplida', label: 'Incumplidas' },
                { pct: (stats.revertidas / stats.total) * 100, clase: 'barra-revertida', label: 'Revertidas' },
            ];

            segmentos.forEach(seg => {
                if (seg.pct === 0) return;
                const div = document.createElement('div');
                div.className = `promesa-barra-seg ${seg.clase}`;
                div.style.width = `${seg.pct}%`;
                div.setAttribute('title', `${seg.label}: ${Math.round(seg.pct)}%`);
                div.setAttribute('aria-label', `${seg.label}: ${Math.round(seg.pct)}%`);
                barraContainer.appendChild(div);
            });
        }

        // ---- Lista de promesas ----
        const lista = document.getElementById('promesas-lista');
        if (!lista) return;
        lista.innerHTML = '';

        // Ordenar: cumplidas primero, luego en-proceso, incumplidas, revertidas
        const orden = { 'cumplida': 0, 'en-proceso': 1, 'incumplida': 2, 'revertida': 3 };
        const ordenadas = [...promesasData].sort((a, b) => orden[a.estado] - orden[b.estado]);

        ordenadas.forEach(promesa => {
            const config = this.ESTADOS[promesa.estado] || this.ESTADOS['incumplida'];

            const li = document.createElement('li');
            li.className = `promesa-item ${config.clase}`;

            // Ícono de estado
            const icono = document.createElement('span');
            icono.className = 'promesa-icono';
            icono.textContent = config.icono;
            icono.setAttribute('aria-hidden', 'true');

            // Contenido
            const content = document.createElement('div');
            content.className = 'promesa-content';

            const texto = document.createElement('p');
            texto.className = 'promesa-texto';
            texto.textContent = promesa.texto;

            const meta = document.createElement('div');
            meta.className = 'promesa-meta';

            const catBadge = document.createElement('span');
            catBadge.className = 'promesa-cat';
            catBadge.textContent = promesa.categoria;

            const estadoBadge = document.createElement('span');
            estadoBadge.className = `promesa-estado-badge ${config.clase}-badge`;
            estadoBadge.textContent = config.label;

            const fuenteLink = document.createElement('a');
            fuenteLink.className = 'promesa-fuente';
            fuenteLink.href = promesa.fuente_url;
            fuenteLink.target = '_blank';
            fuenteLink.rel = 'noopener noreferrer';
            fuenteLink.textContent = 'Ver fuente →';

            meta.appendChild(catBadge);
            meta.appendChild(estadoBadge);
            meta.appendChild(fuenteLink);
            content.appendChild(texto);
            content.appendChild(meta);

            li.appendChild(icono);
            li.appendChild(content);
            lista.appendChild(li);
        });
    },

    init() {
        const container = document.getElementById('promesas-container');
        if (!container) return;
        this.render();
    }
};


/* ============================================================
   MÓDULO 3: IMPACTÓMETRO
   Votación ciudadana anónima: "¿Te afecta esta medida?"
   Los votos se guardan en localStorage — sin backend.
   Cada dispositivo puede votar UNA vez por medida.
   ============================================================ */
const Impactometro = {

    // Prefijo de clave en localStorage
    STORAGE_PREFIX: 'kastigo-impacto-',

    /**
     * Lee el voto guardado para un evento específico.
     * @param {number} eventoId
     * @returns {'si' | 'no' | null}
     */
    getVoto(eventoId) {
        try {
            return localStorage.getItem(`${this.STORAGE_PREFIX}${eventoId}`);
        } catch {
            return null;
        }
    },

    /**
     * Lee todos los conteos de votos (guardados agregados).
     * @returns {{ [eventoId]: { si: number, no: number } }}
     */
    getConteos() {
        try {
            const raw = localStorage.getItem('kastigo-impacto-conteos');
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    },

    /**
     * Guarda un voto y actualiza el conteo.
     * @param {number} eventoId
     * @param {'si' | 'no'} voto
     */
    votar(eventoId, voto) {
        // Verificar que no haya votado antes
        if (this.getVoto(eventoId)) return;

        try {
            // Guardar voto individual
            localStorage.setItem(`${this.STORAGE_PREFIX}${eventoId}`, voto);

            // Actualizar conteo agregado
            const conteos = this.getConteos();
            if (!conteos[eventoId]) conteos[eventoId] = { si: 0, no: 0 };
            conteos[eventoId][voto]++;
            localStorage.setItem('kastigo-impacto-conteos', JSON.stringify(conteos));
        } catch {
            // localStorage bloqueado (modo privado en algunos browsers)
            console.warn('localStorage no disponible para impactómetro');
        }
    },

    /**
     * Renderiza el widget de impactómetro dentro del modal de detalle.
     * Se llama cada vez que se abre el modal.
     * @param {number} eventoId
     */
    renderEnModal(eventoId) {
        const container = document.getElementById('impactometro-widget');
        if (!container) return;

        const votoActual = this.getVoto(eventoId);
        const conteos = this.getConteos();
        const datos = conteos[eventoId] || { si: 0, no: 0 };
        const total = datos.si + datos.no;
        const pctSi = total > 0 ? Math.round((datos.si / total) * 100) : 0;
        const pctNo = total > 0 ? Math.round((datos.no / total) * 100) : 0;

        container.innerHTML = '';

        // Título
        const titulo = document.createElement('p');
        titulo.className = 'impacto-titulo';
        titulo.textContent = '¿Te afecta esta medida?';
        container.appendChild(titulo);

        if (!votoActual) {
            // Mostrar botones de votación
            const btnRow = document.createElement('div');
            btnRow.className = 'impacto-btns';

            const btnSi = document.createElement('button');
            btnSi.className = 'impacto-btn impacto-btn-si';
            btnSi.setAttribute('aria-label', 'Sí me afecta');
            btnSi.innerHTML = '👎 Sí me afecta';

            const btnNo = document.createElement('button');
            btnNo.className = 'impacto-btn impacto-btn-no';
            btnNo.setAttribute('aria-label', 'No me afecta');
            btnNo.innerHTML = '👍 No me afecta';

            btnSi.addEventListener('click', () => {
                this.votar(eventoId, 'si');
                this.renderEnModal(eventoId); // re-render para mostrar resultado
            });

            btnNo.addEventListener('click', () => {
                this.votar(eventoId, 'no');
                this.renderEnModal(eventoId);
            });

            btnRow.appendChild(btnSi);
            btnRow.appendChild(btnNo);
            container.appendChild(btnRow);

        } else {
            // Ya votó: mostrar resultado con barra
            const resultado = document.createElement('div');
            resultado.className = 'impacto-resultado';

            // Mensaje de gracias
            const gracias = document.createElement('p');
            gracias.className = 'impacto-gracias';
            gracias.textContent = `✅ Gracias por tu voto · ${total} persona${total !== 1 ? 's' : ''} respondieron`;
            resultado.appendChild(gracias);

            // Barra visual
            const barraWrap = document.createElement('div');
            barraWrap.className = 'impacto-barra-wrap';

            const labelSi = document.createElement('span');
            labelSi.className = 'impacto-label';
            labelSi.textContent = `👎 Sí afecta`;

            const barra = document.createElement('div');
            barra.className = 'impacto-barra';

            const segSi = document.createElement('div');
            segSi.className = 'impacto-seg-si';
            segSi.style.width = `${pctSi}%`;
            segSi.setAttribute('title', `${pctSi}% (${datos.si} votos)`);

            const segNo = document.createElement('div');
            segNo.className = 'impacto-seg-no';
            segNo.style.width = `${pctNo}%`;
            segNo.setAttribute('title', `${pctNo}% (${datos.no} votos)`);

            const labelNo = document.createElement('span');
            labelNo.className = 'impacto-label impacto-label-right';
            labelNo.textContent = `No afecta 👍`;

            barra.appendChild(segSi);
            barra.appendChild(segNo);

            const pcts = document.createElement('div');
            pcts.className = 'impacto-pcts';

            const pSi = document.createElement('span');
            pSi.className = 'impacto-pct-si';
            pSi.textContent = `${pctSi}%`;

            const pNo = document.createElement('span');
            pNo.className = 'impacto-pct-no';
            pNo.textContent = `${pctNo}%`;

            pcts.appendChild(pSi);
            pcts.appendChild(pNo);

            barraWrap.appendChild(labelSi);
            barraWrap.appendChild(barra);
            barraWrap.appendChild(labelNo);
            barraWrap.appendChild(pcts);

            // Destacar el voto del usuario
            const tuVoto = document.createElement('p');
            tuVoto.className = 'impacto-tu-voto';
            tuVoto.textContent = votoActual === 'si'
                ? '👎 Tú respondiste: Sí me afecta'
                : '👍 Tú respondiste: No me afecta';
            resultado.appendChild(barraWrap);
            resultado.appendChild(tuVoto);

            container.appendChild(resultado);
        }
    },

    init() {
        // El impactómetro se renderiza dinámicamente al abrir cada modal
        // desde Modal.openDetalle() — ver parche en app.js abajo
    }
};


/* ============================================================
   PARCHE: Extender Modal.openDetalle para incluir impactómetro
   Se ejecuta después de que app.js cargó Modal.
   Sobreescribimos openDetalle para añadir el impactómetro
   sin tocar app.js.
   ============================================================ */
(function patchModalOpenDetalle() {
    // Guardar referencia a la función original
    const _originalOpenDetalle = Modal.openDetalle.bind(Modal);

    // Reemplazar con versión extendida
    Modal.openDetalle = function (evento) {
        // Ejecutar lógica original
        _originalOpenDetalle(evento);
        // Añadir impactómetro
        Impactometro.renderEnModal(evento.id);
    };
})();


/* ============================================================
   INICIALIZACIÓN DE WIDGETS
   Se ejecuta cuando el DOM está listo.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    Countdown.init();
    Promesas.init();
    // Impactometro.init() no necesita init propio — se activa con cada modal
});
