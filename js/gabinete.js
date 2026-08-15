'use strict';

/**
 * js/gabinete.js — Composición del gabinete y salidas de autoridades
 * ============================================================
 * Cobertura: 11 de marzo al 15 de agosto de 2026
 *
 * POLÍTICA EDITORIAL (la misma de data.js):
 * - Solo hechos publicados por medios periodísticos, con link a la fuente.
 * - El campo `motivo` reproduce lo informado por la prensa, sin valoración.
 *   Cuando el gobierno dio "motivos personales" como razón oficial, eso es
 *   lo que se consigna: es la versión oficial, no una conclusión nuestra.
 *
 * SOBRE LOS CONTEOS:
 * Los medios no coinciden en el total de salidas porque cada uno decide
 * distinto si contar los nombramientos revocados antes de que la persona
 * alcanzara a asumir, y si contar los traslados internos como salida.
 * Al 29 de julio: Emol contó 36 autoridades, Mala Espina Check 38 y T13 24.
 * Acá se listan las personas identificadas con nombre y fuente, y se
 * distingue explícitamente cada caso con los campos `asumio` y `traslado`.
 * ============================================================
 */

/* ------------------------------------------------------------
   GABINETE INICIAL — 11 de marzo de 2026
   24 carteras. Daniel Mas asumió desde el primer día como
   biministro de Economía y Minería.
   ------------------------------------------------------------ */
const gabineteInicial = [
    { "cartera": "Interior", "titular": "Claudio Alvarado" },
    { "cartera": "Secretaría General de la Presidencia", "titular": "José García Ruminot" },
    { "cartera": "Secretaría General de Gobierno", "titular": "Mara Sedini" },
    { "cartera": "Hacienda", "titular": "Jorge Quiroz" },
    { "cartera": "Seguridad Pública", "titular": "María Trinidad Steinert" },
    { "cartera": "Relaciones Exteriores", "titular": "Francisco Pérez Mackenna" },
    { "cartera": "Defensa", "titular": "Fernando Barros Tocornal" },
    { "cartera": "Economía y Minería", "titular": "Daniel Mas", "biministerio": true },
    { "cartera": "Desarrollo Social y Familia", "titular": "María Jesús Wulf" },
    { "cartera": "Educación", "titular": "Paz Arzola" },
    { "cartera": "Justicia y Derechos Humanos", "titular": "Fernando Rabat" },
    { "cartera": "Trabajo y Previsión Social", "titular": "Tomás Rau" },
    { "cartera": "Obras Públicas", "titular": "Martín Arrau" },
    { "cartera": "Salud", "titular": "May Chomali" },
    { "cartera": "Vivienda y Urbanismo", "titular": "Iván Poduje" },
    { "cartera": "Agricultura", "titular": "Jaime Campos" },
    { "cartera": "Transportes y Telecomunicaciones", "titular": "Louis de Grange" },
    { "cartera": "Bienes Nacionales", "titular": "Catalina Parot" },
    { "cartera": "Energía", "titular": "Ximena Rincón" },
    { "cartera": "Medio Ambiente", "titular": "Francisca Toledo" },
    { "cartera": "Mujer y Equidad de Género", "titular": "Judith Marín" },
    { "cartera": "Culturas, las Artes y el Patrimonio", "titular": "Francisco Undurraga" },
    { "cartera": "Ciencia, Tecnología, Conocimiento e Innovación", "titular": "Ximena Lincolao" },
    { "cartera": "Deporte", "titular": "Natalia Duco" }
];

/* ------------------------------------------------------------
   CAMBIOS EN EL GABINETE (nivel ministerial)
   ------------------------------------------------------------ */
const cambiosGabinete = [
    {
        "id": 1,
        "fecha": "2026-05-19",
        "cartera": "Seguridad Pública",
        "sale": "María Trinidad Steinert",
        "entra": "Martín Arrau",
        "motivo": "Primer cambio de gabinete, a 69 días de asumir: el más rápido desde el retorno a la democracia. Arrau se trasladó desde Obras Públicas.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/05/19/primer-cambio-de-gabinete-de-kast-salen-steinert-y-sedini-se-crean-biministros-y-arrau-a-seguridad/" }
    },
    {
        "id": 2,
        "fecha": "2026-05-19",
        "cartera": "Secretaría General de Gobierno",
        "sale": "Mara Sedini",
        "entra": "Claudio Alvarado",
        "motivo": "Alvarado quedó como biministro de Interior y Segegob, en la primera aplicación de la figura de biministro dentro del gobierno.",
        "biministerio": true,
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/05/19/primer-cambio-de-gabinete-de-kast-salen-steinert-y-sedini-se-crean-biministros-y-arrau-a-seguridad/" }
    },
    {
        "id": 3,
        "fecha": "2026-05-19",
        "cartera": "Obras Públicas",
        "sale": "Martín Arrau",
        "entra": "Louis de Grange",
        "motivo": "De Grange asumió como biministro de Obras Públicas y Transportes, manteniendo la cartera que ya encabezaba.",
        "biministerio": true,
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/gobierno/primer-cambio-de-gabinete-del-gobierno-de-kast-salen-las-ministras" }
    },
    {
        "id": 4,
        "fecha": "2026-08-14",
        "cartera": "Deporte",
        "sale": "Natalia Duco",
        "entra": "Francisco Riveros",
        "motivo": "Duco dejó el cargo tras la controversia por el uso de un vehículo fiscal fuera de horario, actividad que el ministerio había reportado a Contraloría como reunión de trabajo. Riveros es abogado, fue gerente general de Palestino y jefe jurídico de la Corporación Santiago 2023.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/08/14/presidente-kast-designa-a-francisco-riveros-como-nuevo-ministro-de-deportes.shtml" }
    }
];

/* ------------------------------------------------------------
   SALIDAS DE SUBSECRETARIOS
   `asumio: false` = el nombramiento se revirtió antes de asumir.
   `traslado: true` = no dejó el gobierno, cambió de cargo.
   ------------------------------------------------------------ */
const salidasSubsecretarios = [
    {
        "nombre": "Rafael Araos", "cargo": "Subsecretario de Ciencia, Tecnología, Conocimiento e Innovación",
        "fecha": "2026-05-11", "categoria": "Conflictos de gestión",
        "motivo": "Renunció tras diferencias con la ministra Ximena Lincolao; según la prensa se habría negado a firmar despidos en la cartera.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/11/renuncia-subsecretario-de-ciencia-rafael-araos-se-habria-negado-a-firmar-despidos.shtml" }
    },
    {
        "nombre": "Andrés Jouannet", "cargo": "Subsecretario de Seguridad Pública",
        "fecha": "2026-06-02", "categoria": "Conflictos de gestión",
        "motivo": "El ministro de Seguridad Martín Arrau le solicitó la renuncia tras asumir la cartera y reordenar el equipo.",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/gobierno/gabinete/ministro-arrau-exigio-la-renuncia-a-los-subsecretarios-jouannet-y-quintana/2026-06-02/084613.html" }
    },
    {
        "nombre": "Ana Victoria Quintana", "cargo": "Subsecretaria de Prevención del Delito",
        "fecha": "2026-06-02", "categoria": "Conflictos de gestión",
        "motivo": "El ministro de Seguridad Martín Arrau le solicitó la renuncia tras asumir la cartera y reordenar el equipo.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/06/02/terremoto-en-seguridad-ministro-arrau-pide-la-renuncia-de-subsecretarios-jouannet-y-quintana/" }
    },
    {
        "nombre": "Daniela Castro", "cargo": "Subsecretaria de la Mujer y la Equidad de Género",
        "fecha": "2026-06-16", "categoria": "Conflictos de gestión",
        "motivo": "El Presidente Kast solicitó su renuncia tras tensiones con la ministra Judith Marín. Fue reemplazada por Marcia Raphael, hasta entonces seremi de Desarrollo Social de Aysén.",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/06/16/1203004/kast-remueve-subsecretaria-mujer.html" }
    },
    {
        "nombre": "Juan Pablo Rodríguez", "cargo": "Subsecretario de Hacienda",
        "fecha": "2026-07-23", "categoria": "Test de drogas",
        "motivo": "Renunció tras un resultado positivo en un test de drogas. El afectado negó ser consumidor.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/07/23/presidente-kast-acepta-renuncia-del-subsecretario-de-hacienda-en-plena-turbulencia-por-megarreforma.shtml" }
    },
    {
        "nombre": "Andrés Otero", "cargo": "Subsecretario del Deporte",
        "fecha": "2026-08-13", "categoria": "Controversias",
        "motivo": "Kast aceptó su renuncia junto con la de la ministra Natalia Duco, tras la respuesta del ministerio a Contraloría por el uso de un vehículo fiscal.",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/natalia-duco-renuncia-como-ministra-del-deporte-junto-al-subsecretario-andres-o-13-8-2026" }
    }
];

/* ------------------------------------------------------------
   SALIDAS DE SEREMIS
   ------------------------------------------------------------ */
const salidasSeremis = [
    {
        "nombre": "Alexander Nanjarí Santos", "cargo": "Seremi de Educación", "region": "Biobío",
        "fecha": "2026-03-26", "categoria": "Controversias", "asumio": false,
        "motivo": "Su nombramiento fue dejado sin efecto tras la difusión de publicaciones suyas sobre diferencias de edad en relaciones de pareja.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Jorge Salazar Ruiz", "cargo": "Seremi de Obras Públicas", "region": "Los Ríos",
        "fecha": "2026-03-27", "categoria": "Controversias", "asumio": false,
        "motivo": "Su nombramiento fue revertido tras cuestionamientos por presuntas irregularidades en su gestión en Deportes Valdivia.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Mauricio Montealegre Gandolfo", "cargo": "Seremi de Obras Públicas", "region": "Tarapacá",
        "fecha": "2026-03-31", "categoria": "Motivos personales", "asumio": false,
        "motivo": "Desistió del cargo antes de asumir, por motivos personales.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Patricia Dinamarca Reyes", "cargo": "Seremi de Educación", "region": "Los Lagos",
        "fecha": "2026-04-01", "categoria": "Controversias", "asumio": false,
        "motivo": "Su nombramiento fue dejado sin efecto tras conocerse publicaciones antiguas en que apoyaba manifestaciones del estallido social.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Aldo Ibani", "cargo": "Seremi de Salud", "region": "Valparaíso",
        "fecha": "2026-04-05", "categoria": "Requisitos del cargo",
        "motivo": "Renunció a tres días de ser designado, en medio de cuestionamientos a su idoneidad profesional y a una venta de productos falsificados en su etapa universitaria.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-valparaiso/2026/04/05/renuncia-seremi-de-salud-de-valparaiso-en-medio-de-cuestionamientos-por-idoneidad-profesional.shtml" }
    },
    {
        "nombre": "Carlos Montero", "cargo": "Seremi del Trabajo y Previsión Social", "region": "Valparaíso",
        "fecha": "2026-04-07", "categoria": "Motivos personales",
        "motivo": "Renunció aludiendo motivos personales.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Jorge Ravelo Fuentes", "cargo": "Seremi de Energía", "region": "Los Lagos",
        "fecha": "2026-04-08", "categoria": "Requisitos del cargo", "asumio": false,
        "motivo": "Su nombramiento fue revocado por no contar con estudios superiores de al menos diez semestres, requisito del cargo.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Anggel Colque González", "cargo": "Seremi de la Mujer y la Equidad de Género", "region": "Antofagasta",
        "fecha": "2026-04-08", "categoria": "Requisitos del cargo",
        "motivo": "Renunció por no contar con el título profesional exigido para el cargo.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Nataly Cruz Plaza", "cargo": "Seremi del Trabajo y Previsión Social", "region": "Arica y Parinacota",
        "fecha": "2026-04-08", "categoria": "Requisitos del cargo",
        "motivo": "Renunció por no cumplir el requisito de experiencia profesional mínima.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Lizet Tapia", "cargo": "Seremi de Desarrollo Social y Familia", "region": "Antofagasta",
        "fecha": "2026-04-10", "categoria": "Requisitos del cargo",
        "motivo": "Renunció porque su licenciatura tenía ocho semestres, bajo la duración académica requerida.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Francisco Farías", "cargo": "Seremi del Trabajo y Previsión Social", "region": "La Araucanía",
        "fecha": "2026-04-13", "categoria": "Motivos personales",
        "motivo": "Renunció aludiendo motivos personales. Su sucesor, Juan Pablo Carrasco, asumió el 15 de abril.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Karina Trujillo Contreras", "cargo": "Seremi de Justicia y Derechos Humanos", "region": "Antofagasta",
        "fecha": "2026-04-14", "categoria": "Motivos personales",
        "motivo": "Renunció aludiendo motivos personales y profesionales.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Gustavo Baehr", "cargo": "Seremi de las Culturas, las Artes y el Patrimonio", "region": "Metropolitana",
        "fecha": "2026-04-14", "categoria": "Requisitos del cargo",
        "motivo": "Dejó el cargo tras cuestionamientos por falta de experiencia en el sector cultural.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Antaris Varela", "cargo": "Seremi de la Mujer y la Equidad de Género", "region": "Biobío",
        "fecha": "2026-04-14", "categoria": "Controversias", "asumio": false,
        "motivo": "Su nombramiento fue dejado sin efecto; la prensa lo vinculó a un certificado de embarazo previo y a la protección por fuero maternal.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Renato Münster", "cargo": "Seremi de las Culturas, las Artes y el Patrimonio", "region": "Metropolitana",
        "fecha": "2026-04-15", "categoria": "Motivos personales",
        "motivo": "Renunció un día después de asumir, aludiendo motivos personales y urgentes.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Patrick Dungan", "cargo": "Seremi de Energía", "region": "La Araucanía",
        "fecha": "2026-04-15", "categoria": "Conflictos de gestión", "asumio": false,
        "motivo": "Se retiró el decreto de su nombramiento tras ausentarse varios días del trabajo por motivos personales.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Ángela Valdebenito Rivadeneira", "cargo": "Seremi de las Culturas, las Artes y el Patrimonio", "region": "Aysén",
        "fecha": "2026-04-17", "categoria": "Motivos personales",
        "motivo": "Renunció tras 18 días en el cargo, aludiendo motivos personales.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/04/21/estos-son-todos-los-seremis-del-gobierno-que-han-renunciado-o-no-pudieron-asumir-ya-van-18-en-total.shtml" }
    },
    {
        "nombre": "Mario Sepúlveda", "cargo": "Seremi de Seguridad Pública", "region": "La Araucanía",
        "fecha": "2026-04-17", "categoria": "Sin motivo informado",
        "motivo": "Fue reemplazado 16 días después de asumir, sin motivo informado públicamente.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Viviana Torres", "cargo": "Seremi del Trabajo y Previsión Social", "region": "Coquimbo",
        "fecha": "2026-04-21", "categoria": "Requisitos del cargo",
        "motivo": "Dejó el cargo a 20 días de asumir por no cumplir un requisito académico exigido.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-coquimbo/2026/04/21/van-18-seremi-del-trabajo-de-coquimbo-anuncia-su-salida-por-incumplir-requisito-academico.shtml" }
    },
    {
        "nombre": "Diego Muñoz Urbina", "cargo": "Seremi de Bienes Nacionales", "region": "Tarapacá",
        "fecha": "2026-05-01", "categoria": "Motivos personales",
        "motivo": "Renunció a poco más de un mes de asumir, aludiendo motivos personales.",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/region-de-tarapaca/seremi-de-bienes-nacionales-de-tarapaca-renuncio-a-un-mes-de-haber/2026-05-01/102956.html" }
    },
    {
        "nombre": "Camila Alonso Klaric", "cargo": "Seremi de Bienes Nacionales", "region": "Antofagasta",
        "fecha": "2026-05-06", "categoria": "Motivos personales",
        "motivo": "Presentó su renuncia aludiendo motivos personales.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/06/renuncia-seremi-de-bienes-nacionales-en-antofagasta-ya-son-20-las-salidas-en-el-gobierno-de-kast.shtml" }
    },
    {
        "nombre": "Verónica Figueroa Foitzick", "cargo": "Seremi de Transportes y Telecomunicaciones", "region": "Aysén",
        "fecha": "2026-05-31", "categoria": "Controversias",
        "motivo": "Renunció tras un incidente en una comisaría de Coyhaique ocurrido durante la detención de su esposo.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-aysen/2026/05/31/renuncia-seremi-de-transportes-de-aysen-luego-de-incidente-en-comisaria-de-coyhaique.shtml" }
    },
    {
        "nombre": "Jorge Carrillo", "cargo": "Seremi de Salud", "region": "Ñuble",
        "fecha": "2026-06-12", "categoria": "Sin motivo informado",
        "motivo": "El Ministerio de Salud le solicitó la renuncia, sin entregar públicamente las razones.",
        "fuente": { "medio": "El Dínamo", "url": "https://www.eldinamo.cl/pais/2026/06/12/renuncia-seremi-de-salud-en-nuble-van-22-salidas-de-autoridades-regionales-desde-marzo/" }
    },
    {
        "nombre": "Marcia Raphael", "cargo": "Seremi de Desarrollo Social y Familia", "region": "Aysén",
        "fecha": "2026-06-16", "categoria": "Traslado interno", "traslado": true,
        "motivo": "Dejó la seremía para asumir como subsecretaria de la Mujer y la Equidad de Género. No es una salida del gobierno: es un ascenso.",
        "fuente": { "medio": "Mala Espina Check", "url": "https://www.malaespinacheck.cl/politica/2026/07/29/las-38-autoridades-que-dejaron-sus-cargos-o-no-alcanzaron-a-asumir-en-el-gobierno-de-kast/" }
    },
    {
        "nombre": "Jorge Heiden Campbell", "cargo": "Seremi de Agricultura", "region": "Arica y Parinacota",
        "fecha": "2026-06-25", "categoria": "Test de drogas",
        "motivo": "El Ministerio de Agricultura le solicitó la renuncia tras un resultado positivo en un test de drogas.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/06/25/ministerio-de-agricultura-confirma-que-solicito-la-renuncia-a-seremi-de-arica-por-doping-positivo/" }
    },
    {
        "nombre": "Marcelo Vergara Albarracín", "cargo": "Seremi de Hacienda", "region": "Arica y Parinacota",
        "fecha": "2026-07-18", "categoria": "Motivos personales",
        "motivo": "Presentó su renuncia; la prensa la vinculó a motivos familiares y a su remuneración.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-arica-y-parinacota/2026/07/18/ya-son-24-seremi-de-hacienda-de-arica-y-parinacota-presento-su-renuncia.shtml" }
    },
    {
        "nombre": "Eduardo Leiva", "cargo": "Seremi de las Culturas, las Artes y el Patrimonio", "region": "Los Lagos",
        "fecha": "2026-07-21", "categoria": "Test de drogas",
        "motivo": "Renunció; primero se informó como motivos personales y luego se conoció que fue por un test de drogas positivo, cuya contramuestra el exseremi informó como negativa.",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2026/08/03/renunciado-exseremi-de-las-culturas-de-los-lagos-por-positivo-a-drogas-revelo-contramuestra-negativa.shtml" }
    },
    {
        "nombre": "Fabián Barrientos Andrade", "cargo": "Seremi de Salud", "region": "Magallanes",
        "fecha": "2026-07-25", "categoria": "Denuncias judiciales",
        "motivo": "El Ministerio de Salud le solicitó la renuncia por una investigación penal en curso por presunto delito sexual.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/2026/07/25/minsal-solicita-la-renuncia-al-seremi-de-salud-de-magallanes-tras-revelarse-investigacion-judicial/" }
    },
    {
        "nombre": "Cristián Cabezas Mundaca", "cargo": "Seremi del Trabajo y Previsión Social", "region": "Tarapacá",
        "fecha": "2026-07-27", "categoria": "Denuncias judiciales",
        "motivo": "Renunció tras dos denuncias por acoso y maltrato laboral en su repartición.",
        "fuente": { "medio": "El Dínamo", "url": "https://www.eldinamo.cl/pais/2026/07/27/nueva-baja-en-el-gobierno-renuncia-seremi-del-trabajo-de-tarapaca-en-medio-de-denuncias-por-maltrato-laboral/" }
    },
    {
        "nombre": "Patricio Ponce", "cargo": "Seremi de Vivienda y Urbanismo", "region": "Maule",
        "fecha": "2026-07-27", "categoria": "Motivos personales",
        "motivo": "Presentó una renuncia voluntaria; la prensa la vinculó a disconformidad con su remuneración.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/07/27/renuncia-seremi-de-vivienda-del-maule-es-la-segunda-salida-regional-en-un-dia/" }
    },
    {
        "nombre": "Carla Kepec Álvarez", "cargo": "Seremi de Salud", "region": "Arica y Parinacota",
        "fecha": "2026-07-30", "categoria": "Controversias",
        "motivo": "El Ministerio de Salud concretó su salida tras la filtración de mensajes en que exigía militancia en el Partido Republicano como requisito para postular a un cupo laboral.",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/region-de-arica/ejecutivo-concreto-salida-de-seremi-de-arica-por-polemicos-requisitos/2026-07-30/184759.html" }
    },
    {
        "nombre": "Evelyn Brintrup", "cargo": "Seremi de Salud", "region": "Los Lagos",
        "fecha": "2026-08-11", "categoria": "Denuncias judiciales",
        "motivo": "El Ministerio de Salud le solicitó la renuncia por denuncias bajo la Ley Karin, querellas y acciones de tutela laboral en su contra.",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/08/11/gobierno-suma-40-autoridades-fuera-en-cinco-meses-sale-seremi-de-salud-de-los-lagos-por-ley-karin/" }
    }
];
