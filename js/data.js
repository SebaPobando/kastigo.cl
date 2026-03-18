'use strict';

/**
 * js/data.js — Base de datos maestra de Kastigo.cl
 * Consolidado final: IDs 1 al 26
 */
const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-17",
        titulo: "Retiro de 43 decretos de protección ambiental",
        descripcion: "El Ministerio del Medio Ambiente retiró de Contraloría 43 decretos supremos que protegían parques nacionales y especies en peligro para 'revisión'.",
        interpretacion: "Organizaciones como Greenpeace denuncian que esto desmantela años de avance en protección de biodiversidad para favorecer proyectos industriales.",
        categoria: "Medio Ambiente",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/pulso/noticia/medio-ambiente-retira-de-tramitacion-43-decretos-presentados-por-gobierno-de-boric-entre-ellos-proteccion-a-salar-pedernales-y-pinguino-de-humboldt/" }
    },
    {
        id: 2,
        fecha: "2026-03-17",
        titulo: "Freno definitivo a la negociación ramal",
        descripcion: "El Ejecutivo confirmó el retiro de tramitación legislativa del proyecto que buscaba implementar la negociación colectiva por sector.",
        interpretacion: "Se interpreta como un debilitamiento estructural de la fuerza sindical y el poder de negociación de los trabajadores.",
        categoria: "Laboral",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html" }
    },
    {
        id: 3,
        fecha: "2026-03-17",
        titulo: "Retiro del Plan Nacional de Derechos Humanos",
        descripcion: "El Ministerio de Justicia confirmó el retiro del plan nacional de DD.HH. desde la Contraloría para someterlo a revisión.",
        interpretacion: "Sectores de oposición alertan sobre un posible retroceso en garantías fundamentales y una revisión ideológica de la memoria histórica.",
        categoria: "Política",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: { medio: "CIPER Chile", url: "https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/" }
    },
    {
        id: 4,
        fecha: "2026-03-17",
        titulo: "Fin al mecanismo de estabilización de combustibles (MEPCO)",
        descripcion: "Hacienda anunció que dejará de inyectar recursos al fondo MEPCO, permitiendo que el precio de las bencinas se ajuste al mercado.",
        interpretacion: "Esta medida traspasa el riesgo inflacionario de la energía directamente al transporte y bolsillo de las familias.",
        categoria: "Economía",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: { medio: "CIPER Chile", url: "https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/" }
    },
    {
        id: 5,
        fecha: "2026-03-16",
        titulo: "Plan Escudo Fronterizo: Zanjas y militares en el norte",
        descripcion: "Inicio de obras de excavación y despliegue del Ejército en la frontera norte bajo el Plan Escudo Fronterizo.",
        interpretacion: "La retroexcavadora se vuelve el símbolo de una política de seguridad basada en barreras físicas y militarización migratoria.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl/noticias/pais/2026/03/16/presidente-kast-lanza-escudo-fronterizo-con-la-retroexcavadora-como-simbolo-de-su-plan-en-el-norte/" }
    },
    {
        id: 6,
        fecha: "2026-03-15",
        titulo: "Uso de DFL para acelerar reformas económicas",
        descripcion: "El gobierno anunció el uso de Decretos con Fuerza de Ley para modificar el sistema de concesiones sin debate parlamentario extenso.",
        interpretacion: "Se critica como un bypass a la democracia deliberativa, otorgando mayor discrecionalidad al Ejecutivo.",
        categoria: "Política",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl/noticias/pais/2026/03/15/el-regreso-de-los-dfl-la-estrategia-de-kast-para-acelerar-su-agenda-economica/" }
    },
    {
        id: 7,
        fecha: "2026-03-14",
        titulo: "Rebaja del Impuesto de Primera Categoría (IDPC)",
        descripcion: "El proyecto de Ley de Reconstrucción Nacional propone reducir el impuesto corporativo a las grandes empresas del 27% al 23%.",
        interpretacion: "Se reduce la recaudación fiscal necesaria para financiar derechos sociales bajo la premisa de fomentar la inversión privada.",
        categoria: "Corporativo",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "EFE News", url: "https://efe.com/mundo/2026-03-14/chile-proyecto-presidente-kast-seguridad-vivienda-impuestos/" }
    },
    {
        id: 8,
        fecha: "2026-03-14",
        titulo: "IVA 0% temporal para venta de viviendas nuevas",
        descripcion: "Propuesta de exención del IVA a la venta de inmuebles nuevos por 12 meses para reactivar el sector construcción.",
        interpretacion: "Analistas advierten que esto funciona como un subsidio para que las inmobiliarias liquiden su stock sin reducir precios reales.",
        categoria: "Corporativo",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Hacienda Chile", url: "https://www.hacienda.cl/noticias-y-eventos/comunicados/ministro-de-hacienda-detalla-medidas-economicas-del-proyecto-de-ley-de" }
    },
    {
        id: 9,
        fecha: "2026-03-13",
        titulo: "Reasignación de fondos: Salud vs Seguridad",
        descripcion: "Hacienda confirmó el traspaso de fondos destinados a listas de espera oncológicas hacia el presupuesto del Plan Escudo Fronterizo.",
        interpretacion: "El gobierno decide financiar la barrera física migratoria por sobre la urgencia vital de los pacientes del sistema público.",
        categoria: "Social",
        tipo: "Decreto",
        certeza: "Reportado",
        fuente: { medio: "Radio U. de Chile", url: "https://radio.uchile.cl/2026/03/13/prioridades-del-gobierno-reasignacion-de-fondos-de-salud-a-defensa-genera-criticas/" }
    },
    {
        id: 10,
        fecha: "2026-03-12",
        titulo: "Auditoría a textos escolares por sesgo ideológico",
        descripcion: "El Ministerio de Educación inició un proceso de revisión de los textos de Historia y Ciencias Sociales para modificar el currículum.",
        interpretacion: "Expertos alertan sobre un posible revisionismo histórico y censura de procesos sociales clave en la formación escolar.",
        categoria: "Social",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "CIPER Chile", url: "https://www.ciperchile.cl/2026/03/12/educacion-bajo-la-lupa-el-plan-para-intervenir-los-textos-escolares/" }
    },
    {
        id: 11,
        fecha: "2026-03-11",
        titulo: "Decreto de Auditoría General de Recursos Fiscales",
        descripcion: "Firma de decreto para detectar presuntas irregularidades en el gasto público de la administración anterior.",
        interpretacion: "La oposición lo ve como un movimiento político para justificar recortes presupuestarios masivos apelando a una 'limpieza' administrativa.",
        categoria: "Economía",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/nacional/noticia/kast-firma-primeros-decretos-emergencia-seguridad-y-auditoria-fiscal/H4Z3W2K/" }
    },
    {
        id: 12,
        fecha: "2026-03-18",
        titulo: "Defensa del retiro de decretos ambientales",
        descripcion: "El ministro de la Segpres argumentó que la protección de especies no debe frenar la inversión vial ni la infraestructura.",
        interpretacion: "Ambientalistas critican que el gobierno prioriza el avance de obras sobre la preservación de especies protegidas.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "ADN Radio", url: "https://www.adnradio.cl/2026/03/18/gobierno-defiende-retiro-de-decretos-ambientales-y-apunta-a-flexibilizar-normas/" }
    },
    {
        id: 13,
        fecha: "2026-03-18",
        titulo: "Gobierno descarta eliminar feriados irrenunciables",
        descripcion: "Tras una propuesta de la CPC para flexibilizar el calendario laboral, el Ejecutivo descartó oficialmente modificar los feriados actuales.",
        interpretacion: "Analistas sugieren que el gobierno busca evitar un frente de conflicto masivo con los gremios del comercio.",
        categoria: "Laboral",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/gobierno-descarta-eliminar-feriados-irrenunciables-tras-propuesta-cpc-18-3-2026" }
    },
    {
        id: 14,
        fecha: "2026-03-16",
        titulo: "Urgencia para penalizar ingreso clandestino",
        descripcion: "El Ejecutivo otorgó Discusión Inmediata al proyecto que establece penas de cárcel para quienes ingresen por pasos no habilitados.",
        interpretacion: "Organizaciones de DD.HH. advierten sobre la criminalización de la migración y la inminente sobrecarga del sistema penitenciario.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Radio Bío-Bío", url: "https://www.biobiochile.cl/noticias/nacional/region-del-bio-bio/2026/03/16/gobierno-da-urgencia-a-proyecto-que-castigaria-con-carcel-o-multa-el-ingreso-clandestino-a-chile.shtml" }
    },
    {
        id: 15,
        fecha: "2026-03-16",
        titulo: "Reforma para integrar Gendarmería en Fuerzas de Seguridad",
        descripcion: "Se ingresó una reforma para incorporar a Gendarmería de Chile dentro de las Fuerzas de Orden y Seguridad Pública.",
        interpretacion: "Expertos advierten que este cambio busca disolver las asociaciones gremiales, asimilándola a una estructura militarizada.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Cooperativa", url: "https://m.cooperativa.cl/noticias/pais/politica/agenda-legislativa/ingreso-clandestino-como-delito-y-mas-seguridad-en-carceles-primeras/2026-03-16/232226.html" }
    },
    {
        id: 16,
        fecha: "2026-03-16",
        titulo: "Exención de contribuciones para adultos mayores",
        descripcion: "Propuesta de eliminación del pago de contribuciones para propietarios mayores de 65 años respecto de su primera vivienda.",
        interpretacion: "Municipalidades alertan sobre la pérdida de financiamiento local si el Estado no compensa los ingresos del Fondo Común Municipal.",
        categoria: "Vivienda",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Gobierno de Chile", url: "https://www.gob.cl/noticias/plan-reconstruccion-nacional-disminucion-impuestos-subsidio-empleo-pymes/" }
    },
    {
        id: 17,
        fecha: "2026-03-12",
        titulo: "Polémica por dichos de Ministra de Cultura sobre gasto",
        descripcion: "\"Hay demasiado gasto en cultura que no llega a la gente, solo a nichos ideológicos\", afirmó la ministra.",
        interpretacion: "Gremios artísticos acusan un intento de censura y desconocimiento del rol social de la cultura bajo criterios políticos.",
        categoria: "Cultura",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl/cultura/2026/03/12/polemica-por-dichos-de-ministra-de-cultura-hay-demasiado-gasto-que-no-llega-a-la-gente/" }
    },
    {
        id: 18,
        fecha: "2026-03-13",
        titulo: "Decreto de expulsión inmediata de extranjeros con antecedentes",
        descripcion: "Publicación de decreto que mandata la expulsión administrativa expedita de extranjeros que cometan delitos, sin esperar condena firme.",
        interpretacion: "Organizaciones advierten que vulnera el debido proceso y el principio de no devolución, permitiendo expulsiones arbitrarias.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: { medio: "CIPER Chile", url: "https://www.ciperchile.cl/2026/03/13/decreto-ordena-expulsion-inmediata-de-extranjeros-con-antecedentes/" }
    },
    {
        id: 19,
        fecha: "2026-03-15",
        titulo: "Proyecto de ley para derogar aborto en tres causales",
        descripcion: "Ingreso de iniciativa parlamentaria para eliminar la normativa que permite el aborto en las tres causales específicas.",
        interpretacion: "Movimientos feministas califican la medida como un grave retroceso en derechos reproductivos conquistados.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/politica/noticia/oficialismo-ingresa-proyecto-para-derogar-aborto-en-tres-causales-con-respaldo-del-ejecutivo/20260315/" }
    },
    {
        id: 20,
        fecha: "2026-03-16",
        titulo: "Polémica frase de Subsecretario sobre ahorro y pobreza",
        descripcion: "\"Los problemas de la pobreza se solucionan con trabajo, no con bonos, pero también con ahorro, y lamentablemente los pobres no ahorran\".",
        interpretacion: "Fundaciones critican la frase por estigmatizadora, señalando que ignora las barreras estructurales para el ahorro en familias vulnerables.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: { medio: "Biobío", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/subsecretario-genera-polemica-los-pobres-no-ahorran-y-problemas-se-solucionan-con-trabajo.shtml" }
    },
    {
        id: 21,
        fecha: "2026-03-17",
        titulo: "Aceleración de permisos para proyectos de inversión",
        descripcion: "Modificaciones administrativas para reducir los plazos de evaluación ambiental en proyectos de alto impacto económico.",
        interpretacion: "Ecologistas advierten que la simplificación de trámites debilita la fiscalización ambiental profunda.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: { medio: "Diario Financiero", url: "https://www.df.cl/economia-y-politica/gobierno/ejecutivo-acelera-permisos-ambientales-y-sectoriales-para-destrabar/" }
    },
    {
        id: 22,
        fecha: "2026-03-18",
        titulo: "Crítica del Ministro del Interior al sistema judicial",
        descripcion: "\"El sistema judicial chileno ha fracasado en dar seguridad; necesitamos jueces que apliquen la ley con mano dura\".",
        interpretacion: "La Asociación de Magistrados expresa preocupación por la presión del Ejecutivo sobre la independencia de los jueces.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/ministro-interior-critica-poder-judicial-sistema-ha-fracasado-necesitamos-mano-dura-18-03-2026" }
    },
    {
        id: 23,
        fecha: "2026-03-12",
        titulo: "Reducción de dotación del sector público en 10%",
        descripcion: "Hacienda instruyó reducir el personal a contrata y honorarios en un 10% durante el trimestre.",
        interpretacion: "La ANEF advierte despidos masivos por razones políticas y una precarización de los servicios ciudadanos.",
        categoria: "Laboral",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: { medio: "Diario Financiero", url: "https://www.df.cl/economia-y-politica/macro/hacienda-instruye-reducir-en-10-dotacion-a-contrata-y-honorarios-en-el/" }
    },
    {
        id: 24,
        fecha: "2026-03-14",
        titulo: "Ministra vincula beneficios al rol maternal tradicional",
        descripcion: "\"El apoyo del Estado debe priorizar a las mujeres que deciden formar familia y quedarse en el hogar\", declaró la ministra.",
        interpretacion: "Colectivos feministas acusan un intento de imponer desde el Estado un modelo familiar conservador.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: { medio: "El Desconcierto", url: "https://www.eldesconcierto.cl/nacional/2026/03/14/ministra-de-la-mujer-verdadero-apoyo-del-estado-debe-priorizar-a-quienes-deciden-formar-familia/" }
    },
    {
        id: 25,
        fecha: "2026-03-15",
        titulo: "Anuncio de retiro de Chile del Acuerdo de Escazú",
        descripcion: "El Ejecutivo enviará un mensaje al Congreso para retirar a Chile del tratado ambiental para proteger la soberanía económica.",
        interpretacion: "Organizaciones señalan que esto dejará en la indefensión a defensores de la naturaleza ante el derecho internacional.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "En Desarrollo",
        fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl/destacado/2026/03/15/gobierno-anuncia-retiro-de-chile-del-acuerdo-de-escazu-para-proteger-soberania-economica/" }
    },
    {
        id: 26,
        fecha: "2026-03-17",
        titulo: "Proyecto de inmunidad y fuero especial para Carabineros",
        descripcion: "Ingreso de proyecto de ley que establece presunción legal absoluta a favor de Carabineros que utilicen armas letales.",
        interpretacion: "El INDH alerta que la norma consagraría la impunidad ante casos de abusos policiales.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: { medio: "CIPER", url: "https://www.ciperchile.cl/2026/03/17/gobierno-ingresa-proyecto-que-establece-presuncion-legal-absoluta-por-uso-de-armas-letales/" }
    }
];