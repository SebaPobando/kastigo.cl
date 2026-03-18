/**
 * js/widgets.js — Kastigo v3 · Widgets Ciudadanos
 * ============================================================
 * Módulos implementados:
 *  1. Countdown      — Contador regresivo al fin del mandato
 *  2. Seguimiento    — Estado de ejecución de medidas registradas
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

    FIN_MANDATO: new Date('2030-03-11T15:00:00Z'),   // 12:00 CLT = 15:00 UTC
    INICIO_MANDATO: new Date('2026-03-11T15:00:00Z'),
    _rafId: null,

    _calcular() {
        const ahora = Date.now();
        const fin = this.FIN_MANDATO.getTime();
        const inicio = this.INICIO_MANDATO.getTime();
        const restante = Math.max(0, fin - ahora);
        const total = fin - inicio;
        const transcurrido = ahora - inicio;
        const porcentaje = Math.min(100, Math.max(0, (transcurrido / total) * 100));

        return {
            dias: Math.floor(restante / (1000 * 60 * 60 * 24)),
            horas: Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutos: Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60)),
            segundos: Math.floor((restante % (1000 * 60)) / 1000),
            porcentaje: porcentaje.toFixed(1),
            terminado: restante === 0
        };
    },

    _tick() {
        const { dias, horas, minutos, segundos, porcentaje, terminado } = this._calcular();

        const set = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = String(val).padStart(2, '0');
        };

        set('cd-dias', dias);
        set('cd-horas', horas);
        set('cd-minutos', minutos);
        set('cd-segundos', segundos);

        const barra = document.getElementById('cd-progress-bar');
        if (barra) {
            barra.style.width = `${porcentaje}%`;
            barra.setAttribute('aria-valuenow', porcentaje);
        }

        const pctEl = document.getElementById('cd-porcentaje');
        if (pctEl) pctEl.textContent = `${porcentaje}% del mandato transcurrido`;

        if (!terminado) {
            setTimeout(() => {
                this._rafId = requestAnimationFrame(() => this._tick());
            }, 1000);
        } else {
            const container = document.getElementById('countdown-widget');
            if (container) container.classList.add('mandato-terminado');
        }
    },

    init() {
        const container = document.getElementById('countdown-widget');
        if (!container) return;
        this._tick();
    },

    destroy() {
        if (this._rafId) cancelAnimationFrame(this._rafId);
    }
};


/* ============================================================
   MÓDULO 2: SEGUIMIENTO
   Estado de ejecución de las medidas registradas en data.js.

   ESTADOS POSIBLES:
   - "ejecutada"   → La medida fue implementada (Confirmado)
   - "en-proceso"  → Aún en tramitación o desarrollo (En Desarrollo)
   - "bloqueada"   → Frenada judicialmente o por el Congreso
   - "revertida"   → Fue dejada sin efecto posteriormente

   LÓGICA DE DEDUCCIÓN AUTOMÁTICA (desde campo certeza):
   - certeza "Confirmado"    → estado "ejecutada"
   - certeza "En Desarrollo" → estado "en-proceso"
   - certeza "Reportado"     → estado "en-proceso"

   SOBREESCRITURA MANUAL:
   Si un evento en data.js tiene el campo estado_seguimiento,
   ese valor prevalece sobre la deducción automática.
   Ejemplo: { ..., estado_seguimiento: "bloqueada" }
   ============================================================ */
const Seguimiento = {

    // Configuración visual de cada estado — neutral, sin juicio editorial
    ESTADOS: {
        'ejecutada': { label: 'Ejecutada', clase: 'seg-ejecutada', icono: '●' },
        'en-proceso': { label: 'En Proceso', clase: 'seg-en-proceso', icono: '◐' },
        'bloqueada': { label: 'Bloqueada', clase: 'seg-bloqueada', icono: '○' },
        'revertida': { label: 'Revertida', clase: 'seg-revertida', icono: '↩' },
    },

    /**
     * Determina el estado de seguimiento de un evento.
     * Respeta estado_seguimiento si existe; de lo contrario lo deduce de certeza.
     * @param {Object} evento
     * @returns {string} — clave de ESTADOS
     */
    _resolverEstado(evento) {
        // Sobreescritura manual tiene prioridad
        if (evento.estado_seguimiento && this.ESTADOS[evento.estado_seguimiento]) {
            return evento.estado_seguimiento;
        }
        // Deducción automática desde certeza
        const mapa = {
            'Confirmado': 'ejecutada',
            'En Desarrollo': 'en-proceso',
            'Reportado': 'en-proceso',
        };
        return mapa[evento.certeza] || 'en-proceso';
    },

    /**
     * Calcula las estadísticas globales del seguimiento.
     * @returns {{ ejecutadas, enProceso, bloqueadas, revertidas, total }}
     */
    _calcStats() {
        const estados = eventosGubernamentales.map(e => this._resolverEstado(e));
        return {
            total: estados.length,
            ejecutadas: estados.filter(s => s === 'ejecutada').length,
            enProceso: estados.filter(s => s === 'en-proceso').length,
            bloqueadas: estados.filter(s => s === 'bloqueada').length,
            revertidas: estados.filter(s => s === 'revertida').length,
        };
    },

    /**
     * Renderiza la sección completa de seguimiento en el DOM.
     * Usa textContent en todo momento (anti-XSS).
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
                { label: 'Ejecutadas', val: stats.ejecutadas, clase: 'prom-stat-cumplida' },
                { label: 'En Proceso', val: stats.enProceso, clase: 'prom-stat-proceso' },
                { label: 'Bloqueadas', val: stats.bloqueadas, clase: 'prom-stat-incumplida' },
                { label: 'Revertidas', val: stats.revertidas, clase: 'prom-stat-revertida' },
            ];

            items.forEach(item => {
                const div = document.createElement('div');
                div.className = `prom-stat-item ${item.clase}`;
                div.setAttribute('role', 'listitem');

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
                { pct: (stats.ejecutadas / stats.total) * 100, clase: 'barra-cumplida', label: 'Ejecutadas' },
                { pct: (stats.enProceso / stats.total) * 100, clase: 'barra-proceso', label: 'En Proceso' },
                { pct: (stats.bloqueadas / stats.total) * 100, clase: 'barra-incumplida', label: 'Bloqueadas' },
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

        // ---- Lista de medidas ----
        const lista = document.getElementById('promesas-lista');
        if (!lista) return;
        lista.innerHTML = '';

        // Orden: ejecutadas → en proceso → bloqueadas → revertidas → fecha desc
        const ordenEstado = { 'ejecutada': 0, 'en-proceso': 1, 'bloqueada': 2, 'revertida': 3 };
        const ordenadas = [...eventosGubernamentales].sort((a, b) => {
            const ea = this._resolverEstado(a);
            const eb = this._resolverEstado(b);
            if (ea !== eb) return ordenEstado[ea] - ordenEstado[eb];
            return new Date(b.fecha) - new Date(a.fecha);
        });

        ordenadas.forEach(evento => {
            const estadoClave = this._resolverEstado(evento);
            const config = this.ESTADOS[estadoClave];

            const li = document.createElement('li');
            li.className = `promesa-item seg-item-${estadoClave}`;

            // Ícono de estado
            const icono = document.createElement('span');
            icono.className = `promesa-icono seg-icono-${estadoClave}`;
            icono.textContent = config.icono;
            icono.setAttribute('aria-hidden', 'true');

            // Contenido principal
            const content = document.createElement('div');
            content.className = 'promesa-content';

            const texto = document.createElement('p');
            texto.className = 'promesa-texto';
            texto.textContent = evento.titulo;

            // Fecha
            const [y, m, d] = evento.fecha.split('-').map(Number);
            const fechaStr = new Date(y, m - 1, d).toLocaleDateString('es-CL', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            const meta = document.createElement('div');
            meta.className = 'promesa-meta';

            const catBadge = document.createElement('span');
            catBadge.className = 'promesa-cat';
            catBadge.textContent = evento.categoria;

            const estadoBadge = document.createElement('span');
            estadoBadge.className = `promesa-estado-badge seg-badge-${estadoClave}`;
            estadoBadge.textContent = config.label;

            const fechaBadge = document.createElement('span');
            fechaBadge.className = 'seg-fecha';
            fechaBadge.textContent = fechaStr;

            const fuenteLink = document.createElement('a');
            fuenteLink.className = 'promesa-fuente';
            fuenteLink.href = evento.fuente.url;
            fuenteLink.target = '_blank';
            fuenteLink.rel = 'noopener noreferrer';
            fuenteLink.textContent = `${evento.fuente.medio} →`;

            meta.appendChild(catBadge);
            meta.appendChild(estadoBadge);
            meta.appendChild(fechaBadge);
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

    STORAGE_PREFIX: 'kastigo-impacto-',

    getVoto(eventoId) {
        try {
            return localStorage.getItem(`${this.STORAGE_PREFIX}${eventoId}`);
        } catch {
            return null;
        }
    },

    getConteos() {
        try {
            const raw = localStorage.getItem('kastigo-impacto-conteos');
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    },

    votar(eventoId, voto) {
        if (this.getVoto(eventoId)) return;
        try {
            localStorage.setItem(`${this.STORAGE_PREFIX}${eventoId}`, voto);
            const conteos = this.getConteos();
            if (!conteos[eventoId]) conteos[eventoId] = { si: 0, no: 0 };
            conteos[eventoId][voto]++;
            localStorage.setItem('kastigo-impacto-conteos', JSON.stringify(conteos));
        } catch {
            console.warn('localStorage no disponible para impactómetro');
        }
    },

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

        const titulo = document.createElement('p');
        titulo.className = 'impacto-titulo';
        titulo.textContent = '¿Te afecta esta medida?';
        container.appendChild(titulo);

        if (!votoActual) {
            const btnRow = document.createElement('div');
            btnRow.className = 'impacto-btns';

            const btnSi = document.createElement('button');
            btnSi.className = 'impacto-btn impacto-btn-si';
            btnSi.setAttribute('aria-label', 'Sí me afecta');
            btnSi.textContent = '👎 Sí me afecta';

            const btnNo = document.createElement('button');
            btnNo.className = 'impacto-btn impacto-btn-no';
            btnNo.setAttribute('aria-label', 'No me afecta');
            btnNo.textContent = '👍 No me afecta';

            btnSi.addEventListener('click', () => {
                this.votar(eventoId, 'si');
                this.renderEnModal(eventoId);
            });

            btnNo.addEventListener('click', () => {
                this.votar(eventoId, 'no');
                this.renderEnModal(eventoId);
            });

            btnRow.appendChild(btnSi);
            btnRow.appendChild(btnNo);
            container.appendChild(btnRow);

        } else {
            const resultado = document.createElement('div');
            resultado.className = 'impacto-resultado';

            const gracias = document.createElement('p');
            gracias.className = 'impacto-gracias';
            gracias.textContent = `✅ Gracias por tu voto · ${total} persona${total !== 1 ? 's' : ''} respondieron`;
            resultado.appendChild(gracias);

            const barraWrap = document.createElement('div');
            barraWrap.className = 'impacto-barra-wrap';

            const labelSi = document.createElement('span');
            labelSi.className = 'impacto-label';
            labelSi.textContent = '👎 Sí afecta';

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
            labelNo.textContent = 'No afecta 👍';

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
        // Se activa dinámicamente al abrir cada modal
    }
};


/* ============================================================
   PARCHE: Extender Modal.openDetalle para incluir impactómetro
   Sobreescribimos openDetalle sin tocar app.js.
   ============================================================ */
(function patchModalOpenDetalle() {
    const _originalOpenDetalle = Modal.openDetalle.bind(Modal);
    Modal.openDetalle = function (evento) {
        _originalOpenDetalle(evento);
        Impactometro.renderEnModal(evento.id);
    };
})();


/* ============================================================
   INICIALIZACIÓN DE WIDGETS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    Countdown.init();
    Seguimiento.init();
    // Impactometro no necesita init — se activa por modal
});