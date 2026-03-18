'use strict';

const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-17",
        titulo: "Retiro de 43 decretos de protección ambiental",
        descripcion: "El Ministerio del Medio Ambiente retiró de Contraloría 43 decretos supremos que protegían parques nacionales, especies en peligro y establecían normas de emisión.",
        interpretacion: "Organizaciones como Greenpeace denuncian que esto desmantela años de avance en protección de biodiversidad para favorecer proyectos industriales sin contrapesos.",
        categoria: "Medio Ambiente",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "La Tercera",
            url: "https://www.latercera.com/pulso/noticia/medio-ambiente-retira-de-tramitacion-43-decretos-presentados-por-gobierno-de-boric-entre-ellos-proteccion-a-salar-pedernales-y-pinguino-de-humboldt/"
        }
    },
    {
        id: 2,
        fecha: "2026-03-17",
        titulo: "Freno definitivo a la negociación ramal",
        descripcion: "El Ejecutivo confirmó el retiro de tramitación legislativa del proyecto que buscaba implementar la negociación colectiva por sector o multinivel.",
        interpretacion: "Se interpreta como un debilitamiento estructural de la fuerza sindical.",
        categoria: "Laboral",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html"
        }
    },
    {
        id: 3,
        fecha: "2026-03-17",
        titulo: "Retiro del Plan Nacional de Derechos Humanos",
        descripcion: "El Ministerio de Justicia confirmó el retiro del plan nacional de DD.HH. desde la Contraloría.",
        interpretacion: "Sectores de oposición alertan sobre un posible retroceso en garantías fundamentales.",
        categoria: "Política",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "CIPER Chile",
            url: "https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/"
        }
    },
    {
        id: 4,
        fecha: "2026-03-17",
        titulo: "Fin al MEPCO",
        descripcion: "Hacienda dejará de inyectar recursos al mecanismo de estabilización de combustibles.",
        interpretacion: "Impacto directo en precios de bencina y costo de vida.",
        categoria: "Economía",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "CIPER Chile",
            url: "https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/"
        }
    },
    {
        id: 5,
        fecha: "2026-03-16",
        titulo: "Plan Escudo Fronterizo",
        descripcion: "Despliegue militar y obras en frontera norte.",
        interpretacion: "Militarización de zonas migratorias.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/16/presidente-kast-lanza-escudo-fronterizo-con-la-retroexcavadora-como-simbolo-de-su-plan-en-el-norte/"
        }
    },
    {
        id: 17,
        fecha: "2026-03-12",
        titulo: "Polémica por dichos de Ministra de Cultura",
        descripcion: "\"Hay demasiado gasto en cultura que no llega a la gente, solo a nichos ideológicos\".",
        interpretacion: "Gremios artísticos acusan censura.",
        categoria: "Cultura",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/cultura/2026/03/12/polemica-por-dichos-de-ministra-de-cultura-hay-demasiado-gasto-que-no-llega-a-la-gente/"
        }
    },
    {
        id: 18,
        fecha: "2026-03-13",
        titulo: "Expulsión inmediata de extranjeros",
        descripcion: "Decreto permite expulsión administrativa sin condena firme.",
        interpretacion: "Críticas por vulnerar debido proceso.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "CIPER Chile",
            url: "https://www.ciperchile.cl/2026/03/13/decreto-ordena-expulsion-inmediata-de-extranjeros-con-antecedentes/"
        }
    },
    {
        id: 19,
        fecha: "2026-03-15",
        titulo: "Proyecto para derogar aborto en tres causales",
        descripcion: "Ingreso de iniciativa con respaldo del Ejecutivo.",
        interpretacion: "Retroceso en derechos reproductivos según organizaciones.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: {
            medio: "La Tercera",
            url: "https://www.latercera.com/politica/noticia/oficialismo-ingresa-proyecto-para-derogar-aborto-en-tres-causales-con-respaldo-del-ejecutivo/20260315/"
        }
    },
    {
        id: 20,
        fecha: "2026-03-16",
        titulo: "Polémica por dichos sobre pobreza",
        descripcion: "\"Los pobres no ahorran\".",
        interpretacion: "Críticas por estigmatización.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "Biobío",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/subsecretario-genera-polemica-los-pobres-no-ahorran-y-problemas-se-solucionan-con-trabajo.shtml"
        }
    },
    {
        id: 21,
        fecha: "2026-03-17",
        titulo: "Aceleración de permisos ambientales",
        descripcion: "Reducción de plazos para proyectos de inversión.",
        interpretacion: "Riesgo de menor fiscalización ambiental.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/gobierno/ejecutivo-acelera-permisos-ambientales-y-sectoriales-para-destrabar/"
        }
    },
    {
        id: 22,
        fecha: "2026-03-18",
        titulo: "Crítica al sistema judicial",
        descripcion: "\"El sistema judicial ha fracasado\".",
        interpretacion: "Preocupación por independencia judicial.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "T13",
            url: "https://www.t13.cl/noticia/politica/ministro-interior-critica-poder-judicial-sistema-ha-fracasado-necesitamos-mano-dura-18-03-2026"
        }
    },
    {
        id: 23,
        fecha: "2026-03-12",
        titulo: "Reducción del 10% del sector público",
        descripcion: "Hacienda instruye recorte de personal.",
        interpretacion: "Riesgo de despidos masivos.",
        categoria: "Laboral",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/macro/hacienda-instruye-reducir-en-10-dotacion-a-contrata-y-honorarios-en-el/"
        }
    },
    {
        id: 24,
        fecha: "2026-03-14",
        titulo: "Rol maternal tradicional",
        descripcion: "\"El apoyo debe priorizar a mujeres que formen familia\".",
        interpretacion: "Críticas por enfoque conservador.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Desconcierto",
            url: "https://www.eldesconcierto.cl/nacional/2026/03/14/ministra-de-la-mujer-verdadero-apoyo-del-estado-debe-priorizar-a-quienes-deciden-formar-familia/"
        }
    },
    {
        id: 25,
        fecha: "2026-03-15",
        titulo: "Retiro del Acuerdo de Escazú",
        descripcion: "Gobierno anuncia salida del tratado ambiental.",
        interpretacion: "Impacto internacional y ambiental.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "En Desarrollo",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/destacado/2026/03/15/gobierno-anuncia-retiro-de-chile-del-acuerdo-de-escazu-para-proteger-soberania-economica/"
        }
    },
    {
        id: 26,
        fecha: "2026-03-17",
        titulo: "Fuero especial para Carabineros",
        descripcion: "Proyecto establece presunción legal por uso de armas.",
        interpretacion: "Críticas por posible impunidad.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: {
            medio: "CIPER",
            url: "https://www.ciperchile.cl/2026/03/17/gobierno-ingresa-proyecto-que-establece-presuncion-legal-absoluta-por-uso-de-armas-letales/"
        }
    }
];