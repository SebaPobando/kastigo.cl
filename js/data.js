'use strict';

const eventosGubernamentales = [
    {
        id: 1,
        fecha: '2026-03-17',
        titulo: 'Retiro de 43 decretos de protección ambiental',
        descripcion: 'El Ministerio del Medio Ambiente retiró de Contraloría 43 decretos supremos que protegían parques nacionales, especies en peligro y establecían normas de emisión.',
        interpretacion: 'Organizaciones como Greenpeace denuncian que esto desmantela años de avance en protección de biodiversidad para favorecer proyectos industriales sin contrapesos.',
        categoria: 'Medio Ambiente',
        tipo: 'Decreto',
        certeza: 'Confirmado',
        fuente: { medio: 'La Tercera', url: 'https://www.latercera.com/pulso/noticia/medio-ambiente-retira-de-tramitacion-43-decretos-presentados-por-gobierno-de-boric-entre-ellos-proteccion-a-salar-pedernales-y-pinguino-de-humboldt/' }
    },
    {
        id: 2,
        fecha: '2026-03-17',
        titulo: 'Freno definitivo a la negociación ramal',
        descripcion: 'El Ejecutivo confirmó el retiro de tramitación legislativa del proyecto que buscaba implementar la negociación colectiva por sector o multinivel.',
        interpretacion: 'Se interpreta como un debilitamiento estructural de la fuerza sindical, limitando la capacidad de los trabajadores para negociar frente a grandes gremios.',
        categoria: 'Laboral',
        tipo: 'Declaración',
        certeza: 'Confirmado',
        fuente: { medio: 'Cooperativa', url: 'https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html' }
    },
    {
        id: 3,
        fecha: '2026-03-17',
        titulo: 'Retiro del Plan Nacional de Derechos Humanos',
        descripcion: 'El Ministerio de Justicia confirmó el retiro del plan nacional de DD.HH. desde la Contraloría para someterlo a una revisión de contenidos.',
        interpretacion: 'Sectores de oposición alertan sobre un posible retroceso en garantías fundamentales y una revisión ideológica de la memoria histórica y la justicia en Chile.',
        categoria: 'Política',
        tipo: 'Administrativo',
        certeza: 'Confirmado',
        fuente: { medio: 'CIPER Chile', url: 'https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/' }
    },
    {
        id: 4,
        fecha: '2026-03-17',
        titulo: 'Fin al mecanismo de estabilización de combustibles (MEPCO)',
        descripcion: 'Hacienda anunció que dejará de inyectar recursos al fondo MEPCO, permitiendo que el precio de las bencinas se ajuste totalmente al mercado internacional.',
        interpretacion: 'Esta medida traspasa el riesgo inflacionario de la energía directamente al transporte y bolsillo de las familias, presionando el costo de la canasta básica.',
        categoria: 'Economía',
        tipo: 'Decreto',
        certeza: 'Confirmado',
        fuente: { medio: 'CIPER Chile', url: 'https://www.ciperchile.cl/2026/03/17/radar-17-03-2025/' }
    },
    {
        id: 5,
        fecha: '2026-03-16',
        titulo: 'Plan Escudo Fronterizo: Zanjas y militares en el norte',
        descripcion: 'Inicio de obras de excavación y despliegue del Ejército en la frontera norte (Colchane y Chacalluta) bajo el Plan Escudo Fronterizo.',
        interpretacion: 'La retroexcavadora se vuelve el símbolo de una política de seguridad basada en barreras físicas y militarización de zonas con alta vulnerabilidad migratoria.',
        categoria: 'Seguridad',
        tipo: 'Decreto',
        certeza: 'Confirmado',
        fuente: { medio: 'El Mostrador', url: 'https://www.elmostrador.cl/noticias/pais/2026/03/16/presidente-kast-lanza-escudo-fronterizo-con-la-retroexcavadora-como-simbolo-de-su-plan-en-el-norte/' }
    },
    {
        id: 6,
        fecha: '2026-03-15',
        titulo: 'Uso de DFL para acelerar reformas económicas',
        descripcion: 'El gobierno anunció el uso de Decretos con Fuerza de Ley para modificar el sistema de concesiones y licitaciones sin pasar por debate parlamentario extenso.',
        interpretacion: 'Se critica como un bypass a la democracia deliberativa, otorgando mayor discrecionalidad al Ejecutivo para favorecer alianzas público-privadas.',
        categoria: 'Política',
        tipo: 'Administrativo',
        certeza: 'Confirmado',
        fuente: { medio: 'El Mostrador', url: 'https://www.elmostrador.cl/noticias/pais/2026/03/15/el-regreso-de-los-dfl-la-estrategia-de-kast-para-acelerar-su-agenda-economica/' }
    },
    {
        id: 7,
        fecha: '2026-03-14',
        titulo: 'Rebaja del Impuesto de Primera Categoría (IDPC)',
        descripcion: 'El proyecto de Ley de Reconstrucción Nacional propone reducir gradualmente el impuesto corporativo a las grandes empresas del 27% al 23%.',
        interpretacion: 'Bajo la premisa de fomentar la inversión, se reduce la recaudación fiscal necesaria para financiar derechos sociales y salud pública.',
        categoria: 'Corporativo',
        tipo: 'Proyecto',
        certeza: 'En Desarrollo',
        fuente: { medio: 'EFE News', url: 'https://efe.com/mundo/2026-03-14/chile-proyecto-presidente-kast-seguridad-vivienda-impuestos/' }
    },
    {
        id: 8,
        fecha: '2026-03-14',
        titulo: 'IVA 0% temporal para venta de viviendas nuevas',
        descripcion: 'Propuesta de exención del IVA a la venta de inmuebles nuevos por 12 meses para reactivar el mercado de la construcción.',
        interpretacion: 'Analistas advierten que esto funciona como un subsidio directo para que las inmobiliarias liquiden su stock acumulado sin reducir los precios de mercado.',
        categoria: 'Corporativo',
        tipo: 'Proyecto',
        certeza: 'En Desarrollo',
        fuente: { medio: 'Hacienda Chile', url: 'https://www.hacienda.cl/noticias-y-eventos/comunicados/ministro-de-hacienda-detalla-medidas-economicas-del-proyecto-de-ley-de' }
    },
    {
        id: 9,
        fecha: '2026-03-13',
        titulo: 'Reasignación de fondos: Salud vs Seguridad',
        descripcion: 'Hacienda confirmó el traspaso de fondos originalmente destinados a listas de espera oncológicas hacia el presupuesto del Plan Escudo Fronterizo.',
        interpretacion: 'Un dilema de prioridades: el gobierno decide financiar la barrera física migratoria por sobre la urgencia vital de los pacientes del sistema público.',
        categoria: 'Social',
        tipo: 'Decreto',
        certeza: 'Reportado',
        fuente: { medio: 'Radio U. de Chile', url: 'https://radio.uchile.cl/2026/03/13/prioridades-del-gobierno-reasignacion-de-fondos-de-salud-a-defensa-genera-criticas/' }
    },
    {
        id: 10,
        fecha: '2026-03-12',
        titulo: 'Auditoría a textos escolares por "sesgo ideológico"',
        descripcion: 'El Ministerio de Educación inició un proceso de revisión de los textos de Historia y Ciencias Sociales para modificar contenidos curriculares.',
        interpretacion: 'Expertos alertan sobre un posible revisionismo histórico y censura de procesos sociales clave en la formación de las nuevas generaciones.',
        categoria: 'Social',
        tipo: 'Declaración',
        certeza: 'Confirmado',
        fuente: { medio: 'CIPER Chile', url: 'https://www.ciperchile.cl/2026/03/12/educacion-bajo-la-lupa-el-plan-para-intervenir-los-textos-escolares/' }
    },
    {
        id: 11,
        fecha: '2026-03-11',
        titulo: 'Decreto de Auditoría General de Recursos Fiscales',
        descripcion: 'Firma de decreto para establecer una línea base técnica y detectar presuntas irregularidades en el gasto público de la administración anterior.',
        interpretacion: 'La oposición ve esto como un movimiento político para justificar recortes presupuestarios masivos apelando a una supuesta "limpieza" administrativa.',
        categoria: 'Economía',
        tipo: 'Decreto',
        certeza: 'Confirmado',
        fuente: { medio: 'La Tercera', url: 'https://www.latercera.com/nacional/noticia/kast-firma-primeros-decretos-emergencia-seguridad-y-auditoria-fiscal/H4Z3W2K/' }
    },
    {
        id: 12,
        fecha: "2026-03-18",
        titulo: "Defensa del retiro de decretos ambientales",
        descripcion: "El ministro de la Segpres defendió la revisión de 43 decretos ambientales, argumentando que la protección de especies no debe frenar la inversión vial.",
        interpretacion: "Ambientalistas critican que el gobierno prioriza el avance de obras sobre la preservación de especies protegidas, debilitando la normativa de conservación.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "ADN Radio", url: "https://www.adnradio.cl/2026/03/18/gobierno-defiende-retiro-de-decretos-ambientales-y-apunta-a-flexibilizar-normas/" }
    },
    {
        id: 13,
        fecha: "2026-03-18",
        titulo: "Gobierno descarta eliminar feriados irrenunciables",
        descripcion: "Tras una propuesta de la CPC para flexibilizar el calendario laboral, el Ejecutivo descartó oficialmente cualquier intención de modificar los feriados irrenunciables.",
        interpretacion: "Analistas sugieren que el gobierno busca evitar un frente de conflicto masivo con los gremios del comercio en una semana marcada por tensiones laborales.",
        categoria: "Laboral",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/gobierno-descarta-eliminar-feriados-irrenunciables-tras-propuesta-cpc-18-3-2026" }
    },
    {
        id: 14,
        fecha: "2026-03-16",
        titulo: "Urgencia para penalizar ingreso clandestino",
        descripcion: "El Ejecutivo otorgó 'Discusión Inmediata' al proyecto que establece penas de cárcel para quienes ingresen al país por pasos no habilitados.",
        interpretacion: "Organizaciones de DD.HH. advierten sobre la criminalización de la migración vulnerable y la inminente sobrecarga del sistema penitenciario.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Radio Bío-Bío", url: "https://www.biobiochile.cl/noticias/nacional/region-del-bio-bio/2026/03/16/gobierno-da-urgencia-a-proyecto-que-castigaria-con-carcel-o-multa-el-ingreso-clandestino-a-chile.shtml" }
    },
    {
        id: 15,
        fecha: "2026-03-16",
        titulo: "Reforma para integrar Gendarmería en Fuerzas de Seguridad",
        descripcion: "Se ingresó una reforma constitucional para incorporar a Gendarmería de Chile dentro de las Fuerzas de Orden y Seguridad Pública.",
        interpretacion: "Expertos advierten que este cambio jerárquico busca disolver de facto las asociaciones gremiales, asimilándola a una estructura militarizada.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Cooperativa", url: "https://m.cooperativa.cl/noticias/pais/politica/agenda-legislativa/ingreso-clandestino-como-delito-y-mas-seguridad-en-carceles-primeras/2026-03-16/232226.html" }
    },
    {
        id: 16,
        fecha: "2026-03-16",
        titulo: "Exención de contribuciones para adultos mayores",
        descripcion: "Propuesta de eliminación del pago de contribuciones para propietarios mayores de 65 años respecto de su primera vivienda habitacional.",
        interpretacion: "Aunque es una medida popular, municipalidades alertan sobre la pérdida de financiamiento local si el Estado no compensa los ingresos del Fondo Común Municipal.",
        categoria: "Vivienda",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: { medio: "Gobierno de Chile", url: "https://www.gob.cl/noticias/plan-reconstruccion-nacional-disminucion-impuestos-subsidio-empleo-pymes/" }
    }
];