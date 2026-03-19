/**
 * js/widgets.js — Kastigo v3 · Widgets Ciudadanos
 * ============================================================
 * Módulos implementados:
 *  1. Seguimiento — Estado de ejecución de medidas registradas
 * ============================================================
 * Cargado DESPUÉS de data.js y app.js en index.html
 */

'use strict';

/* ============================================================
   MÓDULO 1: SEGUIMIENTO
   Estado de ejecución de las medidas registradas en data.js.

   ESTADOS POSIBLES:
   - "ejecutada"  → La medida fue implementada (certeza: Confirmado)
   - "en-proceso" → En tramitación o desarrollo (certeza: En Desarrollo / Reportado)
   - "bloqueada"  → Frenada judicialmente o por el Congreso
   - "revertida"  → Fue dejada sin efecto posteriormente

   SOBREESCRITURA MANUAL:
   Si un evento en data.js tiene el campo estado_seguimiento,
   ese valor prevalece sobre la deducción automática.
   Ejemplo: { ..., estado_seguimiento: "bloqueada" }
   ============================================================ */
const Seguimiento = {

    ESTADOS: {
        'ejecutada': { label: 'Ejecutada', clase: 'seg-ejecutada', icono: '●' },
        'en-proceso': { label: 'En Proceso', clase: 'seg-en-proceso', icono: '◐' },
        'bloqueada': { label: 'Bloqueada', clase: 'seg-bloqueada', icono: '○' },
        'revertida': { label: 'Revertida', clase: 'seg-revertida', icono: '↩' },
    },

    _resolverEstado(evento) {
        if (evento.estado_seguimiento && this.ESTADOS[evento.estado_seguimiento]) {
            return evento.estado_seguimiento;
        }
        const mapa = {
            'Confirmado': 'ejecutada',
            'En Desarrollo': 'en-proceso',
            'Reportado': 'en-proceso',
        };
        return mapa[evento.certeza] || 'en-proceso';
    },

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

        // ---- Barra segmentada ----
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

            const icono = document.createElement('span');
            icono.className = `promesa-icono seg-icono-${estadoClave}`;
            icono.textContent = config.icono;
            icono.setAttribute('aria-hidden', 'true');

            const content = document.createElement('div');
            content.className = 'promesa-content';

            const texto = document.createElement('p');
            texto.className = 'promesa-texto';
            texto.textContent = evento.titulo;

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
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    Seguimiento.init();

    // Toggle desplegable del seguimiento
    const toggleBtn = document.getElementById('promesas-toggle');
    const body = document.getElementById('promesas-body');
    if (toggleBtn && body) {
        toggleBtn.addEventListener('click', () => {
            const isOpen = !body.classList.contains('hidden');
            body.classList.toggle('hidden', isOpen);
            toggleBtn.setAttribute('aria-expanded', String(!isOpen));
            toggleBtn.classList.toggle('promesas-toggle-open', !isOpen);
        });
    }
});