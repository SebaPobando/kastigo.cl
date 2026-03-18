'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 al 18 de marzo de 2026
 * Fuentes: Verificadas y con link directo
 */

const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-11",
        titulo: "Kast asume con discurso de emergencia y primeros decretos",
        descripcion: "José Antonio Kast asumió la presidencia de Chile desde el Congreso de Valparaíso y en su primer discurso declaró que recibió 'el país en peores condiciones de lo esperado'. Firmó seis decretos en su primera noche en La Moneda.",
        interpretacion: "Analistas advierten que el discurso de 'herencia recibida' es una estrategia comunicacional para justificar recortes y medidas de ajuste que podrían ser impopulares.",
        categoria: "Política",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/primer-discurso-de-kast-recibimos-el-pais-en-peores-condiciones-de-lo/2026-03-11/203754.html"
        }
    },
    {
        id: 2,
        fecha: "2026-03-11",
        titulo: "Decreto de cierre fronterizo y Plan Escudo Fronterizo",
        descripcion: "Kast firmó el decreto que implementa la Política Nacional de Cierre Fronterizo en la macrozona norte, instruyendo al Ejército de Chile a ejecutar el Plan Escudo Fronterizo con barreras físicas, drones y aumento de dotación militar.",
        interpretacion: "Organizaciones de derechos humanos advierten que militarizar la frontera con Bolivia puede derivar en vulneraciones a migrantes en situación de vulnerabilidad.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/11/presidente-kast-firma-primeros-decretos-cierre-fronterizo-y-auditoria-total-marcan-inicio-de-gobierno.shtml"
        }
    },
    {
        id: 3,
        fecha: "2026-03-11",
        titulo: "Decreto de auditoría general al gasto del Estado",
        descripcion: "Se firmó decreto instruyendo una auditoría integral a todos los ministerios, servicios e instituciones del Estado, coordinada por el Consejo de Auditoría Interna, con reporte directo a Presidencia.",
        interpretacion: "La oposición lo califica como medida efectista para construir el relato de la 'herencia recibida' y justificar recortes inmediatos al gasto público.",
        categoria: "Economía",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "Pauta.cl",
            url: "https://www.pauta.cl/actualidad/2026/03/12/que-son-y-en-que-consisten-los-decretos-firmados-por-el-presidente-kast-a-horas-de-asumir.html"
        }
    },
    {
        id: 4,
        fecha: "2026-03-11",
        titulo: "Decreto de reconstrucción encargado al Ministerio de Vivienda",
        descripcion: "Kast firmó decreto encargando al Ministerio de Vivienda y Urbanismo la conducción directa del proceso de reconstrucción en las regiones de Valparaíso, Ñuble y Biobío, afectadas por incendios forestales.",
        interpretacion: "Especialistas en planificación territorial señalan que centralizar la reconstrucción en una sola cartera puede generar cuellos de botella sin coordinación interministerial.",
        categoria: "Vivienda",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/11/presidente-kast-firma-primeros-decretos-cierre-fronterizo-y-auditoria-total-marcan-inicio-de-gobierno.shtml"
        }
    },
    {
        id: 5,
        fecha: "2026-03-11",
        titulo: "Decreto anti-permisología: $16 mil millones en proyectos desbloqueados",
        descripcion: "Kast firmó instrucción para resolver 51 recursos de reclamación pendientes en el SEIA, correspondientes a proyectos con RCA aprobada pero paralizados administrativamente, sumando más de US$16.000 millones en inversión.",
        interpretacion: "Ecologistas y expertos en derecho ambiental alertan que acelerar trámites bajo presión puede afectar la calidad de las revisiones y abrir paso a proyectos con impactos no evaluados.",
        categoria: "Medio Ambiente",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/11/presidente-kast-firma-primeros-decretos-cierre-fronterizo-y-auditoria-total-marcan-inicio-de-gobierno.shtml"
        }
    },
    {
        id: 6,
        fecha: "2026-03-12",
        titulo: "Acuerdo con EEUU sobre minerales críticos y tierras raras",
        descripcion: "En su primer día hábil, Kast firmó junto al vicesecretario de Estado de EE.UU., Christopher Landau, una Declaración Conjunta para establecer consultas sobre minerales críticos y tierras raras, incluyendo litio y cobre.",
        interpretacion: "Analistas geopolíticos alertan sobre el riesgo de comprometer recursos naturales estratégicos con una potencia en plena disputa comercial con China, principal socio comercial de Chile.",
        categoria: "Economía",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/comercio-exterior/chile-y-estados-unidos-firman-declaracion-conjunta-sobre-minerales-criticos"
        }
    },
    {
        id: 7,
        fecha: "2026-03-12",
        titulo: "Instrucción de recorte del 10% en dotación pública",
        descripcion: "Hacienda emitió una circular obligando a todos los ministerios a reducir su personal a contrata y honorarios en un 10% para finales de marzo.",
        interpretacion: "La ANEF denuncia despidos arbitrarios y una persecución política encubierta bajo la premisa de la eficiencia fiscal.",
        categoria: "Laboral",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/macro/hacienda-instruye-reducir-en-10-dotacion-en-reparticiones-publicas/"
        }
    },
    {
        id: 8,
        fecha: "2026-03-12",
        titulo: "Polémica por dichos de Ministra de Cultura sobre gasto",
        descripcion: "\"Hay demasiado gasto en cultura que no llega a la gente, solo a nichos ideológicos\", afirmó la ministra al anunciar revisión de fondos.",
        interpretacion: "Gremios artísticos acusan un intento de censura y desconocimiento del rol social de la cultura bajo criterios ideológicos de derecha.",
        categoria: "Cultura",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/cultura/2026/03/12/polemica-por-dichos-de-ministra-de-cultura-sobre-gastos-e-ideologia/"
        }
    },
    {
        id: 9,
        fecha: "2026-03-13",
        titulo: "Ministro Quiroz declara \"fisco sin caja\" heredado de Boric",
        descripcion: "\"Hemos heredado del anterior un fisco sin caja. La caja con que cerró la administración anterior fue de US$40 millones al 31 de diciembre de 2025, cuando normalmente termina entre US$3 mil y US$4 mil millones\", declaró el ministro Quiroz.",
        interpretacion: "El exministro Nicolás Grau refutó públicamente los datos con cifras oficiales que sitúan la caja en US$1.406 millones a fines de enero, acusando al gobierno de usar datos desactualizados para generar sensación de crisis.",
        categoria: "Economía",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/gobierno/ministro-de-hacienda-boric-le-heredo-a-kast-un-fisco-sin-caja/2026-03-13/141401.html"
        }
    },
    {
        id: 10,
        fecha: "2026-03-13",
        titulo: "Decreto de expulsión inmediata de extranjeros con antecedentes",
        descripcion: "Se publicó el decreto que permite la expulsión administrativa expedita de extranjeros que cometan delitos, sin esperar condena judicial firme.",
        interpretacion: "Organizaciones de DD.HH. advierten que vulnera el debido proceso y puede derivar en expulsiones arbitrarias por criterios policiales.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "CIPER Chile",
            url: "https://www.ciperchile.cl/2026/03/13/decreto-ordena-expulsion-inmediata-de-extranjeros-con-antecedentes-penales/"
        }
    },
    {
        id: 11,
        fecha: "2026-03-13",
        titulo: "Kast confirma indultos a carabineros condenados por el estallido",
        descripcion: "\"La facultad de indulto es una facultad que hasta el día de hoy tiene el Presidente de la República y yo la voy a utilizar\", declaró Kast al anunciar que estudia indultar a carabineros y militares condenados por delitos del estallido social de 2019.",
        interpretacion: "Organizaciones de víctimas del estallido y agrupaciones de DD.HH. denuncian una amnistía encubierta para agentes del Estado que cometieron torturas y lesiones graves documentadas.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/13/presidente-kast-juega-al-empate-indultara-a-militares-y-policias-presos-por-el-estallido/"
        }
    },
    {
        id: 12,
        fecha: "2026-03-13",
        titulo: "Traslado de fondos oncológicos a Seguridad Fronteriza",
        descripcion: "Hacienda confirmó la reasignación de recursos destinados a reducir listas de espera oncológicas hacia el Plan Escudo Fronterizo.",
        interpretacion: "Sectores de salud pública califican de 'inhumano' priorizar la construcción de zanjas sobre el tratamiento de pacientes con cáncer.",
        categoria: "Social",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Radio U. de Chile",
            url: "https://radio.uchile.cl/2026/03/13/prioridades-del-gobierno-reasignacion-de-fondos-de-salud-a-defensa-genera-criticas/"
        }
    },
    {
        id: 13,
        fecha: "2026-03-14",
        titulo: "Lanzamiento del Plan de Reconstrucción Nacional con 40 medidas",
        descripcion: "Kast presentó desde Lirquén (Biobío) el proyecto de ley de Reconstrucción Nacional, con 40 medidas en cinco ejes: reconstrucción física, reactivación económica, ajuste fiscal, fortalecimiento institucional y seguridad.",
        interpretacion: "La oposición acusa que el Gobierno usa la emergencia por incendios como pretexto para impulsar una agenda económica de derecha, mezclando reconstrucción con rebaja de impuestos a grandes empresas.",
        categoria: "Política",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Radio U. de Chile",
            url: "https://radio.uchile.cl/2026/03/14/kast-anuncia-en-lirquen-el-proyecto-de-ley-de-reconstruccion-nacional-tras-incendios/"
        }
    },
    {
        id: 14,
        fecha: "2026-03-14",
        titulo: "Propuesta de reducción del Impuesto Corporativo del 27% al 23%",
        descripcion: "El Ejecutivo ingresó al Plan de Reconstrucción Nacional la rebaja del Impuesto de Primera Categoría del 27% al 23% para las grandes empresas, presentada como medida de reactivación económica.",
        interpretacion: "Analistas advierten que la medida beneficia principalmente a las grandes fortunas, reduciendo la caja fiscal para políticas sociales en un contexto de déficit declarado.",
        categoria: "Economía",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html"
        }
    },
    {
        id: 15,
        fecha: "2026-03-14",
        titulo: "Ministra vincula beneficios al rol maternal tradicional",
        descripcion: "\"El verdadero apoyo del Estado debe priorizar a las mujeres que deciden formar familia y quedarse en el hogar\", declaró la ministra.",
        interpretacion: "Colectivos feministas denuncian un intento de imponer desde el Estado un modelo familiar conservador y frenar la autonomía laboral femenina.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Desconcierto",
            url: "https://www.eldesconcierto.cl/nacional/2026/03/14/ministra-de-la-mujer-prioridad-familia-tradicional/"
        }
    },
    {
        id: 16,
        fecha: "2026-03-15",
        titulo: "Ministro Mas: \"No equivocarnos priorizando 100 mil empleos sobre 3 arbolitos\"",
        descripcion: "\"No nos vamos a equivocar si tenemos que priorizar tres arbolitos a 100 mil empleos\", afirmó el biministro de Economía y Minería, Daniel Mas, al defender el decreto de aceleración de permisos ambientales.",
        interpretacion: "Ambientalistas y diputados de oposición acusan que la frase evidencia una visión que subordina la biodiversidad y los ecosistemas al interés económico de corto plazo.",
        categoria: "Medio Ambiente",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/15/critican-a-ministro-mas-por-decir-que-no-se-equivocara-si-prioriza-100-mil-empleos-sobre-3-arbolitos.shtml"
        }
    },
    {
        id: 17,
        fecha: "2026-03-15",
        titulo: "Anuncio de retiro de Chile del Acuerdo de Escazú",
        descripcion: "El Gobierno anunció que iniciará el trámite para denunciar el tratado ambiental regional, apelando a la protección de la soberanía económica.",
        interpretacion: "Ecologistas señalan que esto dejará en la indefensión a los defensores de la naturaleza y afectará la imagen climática del país.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "En Desarrollo",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/destacado/2026/03/15/gobierno-anuncia-retiro-de-chile-del-acuerdo-de-escazu-soberania-economica/"
        }
    },
    {
        id: 18,
        fecha: "2026-03-15",
        titulo: "Propuesta de limitar gratuidad universitaria a menores de 30 años",
        descripcion: "El Ejecutivo anunció dentro del Plan de Reconstrucción Nacional que limitará el acceso a la gratuidad universitaria a nuevos estudiantes menores de 30 años y frenará su expansión a nuevos deciles de ingreso.",
        interpretacion: "Organizaciones estudiantiles y la oposición acusan al gobierno de recortar un derecho social conquistado, recordando que Kast prometió en campaña no tocar los beneficios sociales.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "T13",
            url: "https://www.t13.cl/noticia/politica/como-funciona-gratuidad-cambiaria-propuesta-del-gobierno-kast-15-3-2026"
        }
    },
    {
        id: 19,
        fecha: "2026-03-15",
        titulo: "Ingreso de proyecto para derogar aborto en 3 causales",
        descripcion: "Parlamentarios del oficialismo, con patrocinio del Ejecutivo, ingresaron el proyecto para eliminar la interrupción del embarazo en cualquier causal.",
        interpretacion: "Organizaciones feministas anuncian movilizaciones, alertando sobre un retroceso histórico en derechos sexuales y reproductivos.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: {
            medio: "La Tercera",
            url: "https://www.latercera.com/politica/noticia/oficialismo-ingresa-proyecto-para-derogar-aborto-en-tres-causales/20260315/"
        }
    },
    {
        id: 20,
        fecha: "2026-03-15",
        titulo: "Hacienda instruye ajuste de gasto del 3% en todos los ministerios",
        descripcion: "El ministro Quiroz confirmó que firmaría un oficio para reducir el gasto de todos los ministerios en un 3%, como medida ante la estrechez de caja fiscal declarada por el gobierno.",
        interpretacion: "Sectores de salud y educación advierten que el recorte transversal afectará programas sociales en ejecución y puede agravar la crisis de listas de espera.",
        categoria: "Economía",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Publimetro",
            url: "https://www.publimetro.cl/noticias/2026/03/15/ministro-quiroz-firmara-oficio-para-recortar-gasto-en-ministerios-por-estrechez-de-caja-fiscal/"
        }
    },
    {
        id: 21,
        fecha: "2026-03-16",
        titulo: "Inicio de obras de zanjas en Colchane y Chacalluta",
        descripcion: "Maquinaria pesada inició la excavación de zanjas en puntos críticos de la frontera norte para impedir el paso de migrantes y vehículos.",
        interpretacion: "La zanja se convierte en el símbolo de una política migratoria basada en la segregación física por sobre la integración.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/16/presidente-kast-lanza-escudo-fronterizo-en-el-norte-con-la-retroexcavadora-como-simbolo/"
        }
    },
    {
        id: 22,
        fecha: "2026-03-16",
        titulo: "Polémica frase de Subsecretario sobre ahorro y pobreza",
        descripcion: "\"Lamentablemente los pobres no ahorran, por eso dependen de bonos que el Estado ya no puede financiar\", señaló el subsecretario.",
        interpretacion: "Fundaciones de superación de la pobreza critican la frase por ignorar la imposibilidad material de ahorro en familias con sueldo mínimo.",
        categoria: "Social",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/subsecretario-genera-polemica-los-pobres-no-ahorran.shtml"
        }
    },
    {
        id: 23,
        fecha: "2026-03-17",
        titulo: "Retiro de 43 decretos de protección ambiental de Contraloría",
        descripcion: "El Ministerio del Medio Ambiente retiró 43 decretos supremos firmados por el gobierno anterior que protegían parques nacionales, normas de emisión y especies como el pingüino de Humboldt, aún en trámite en Contraloría.",
        interpretacion: "Greenpeace y organizaciones ecologistas denuncian el desmantelamiento de años de avance en biodiversidad para favorecer proyectos industriales sin contrapesos ambientales.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "ADN Radio",
            url: "https://www.adnradio.cl/2026/03/17/gobierno-retira-43-decretos-ambientales-enviados-a-contraloria-estos-serian-los-proyectos-afectados/"
        }
    },
    {
        id: 24,
        fecha: "2026-03-17",
        titulo: "Freno al proyecto de Negociación Colectiva Multinivel",
        descripcion: "El Ejecutivo retiró de tramitación legislativa el proyecto que buscaba fortalecer la negociación sindical por rama de actividad.",
        interpretacion: "Se interpreta como un golpe directo a la fuerza sindical, favoreciendo el poder de los grandes gremios corporativos.",
        categoria: "Laboral",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html"
        }
    },
    {
        id: 25,
        fecha: "2026-03-17",
        titulo: "Reactivación temporal del permiso ambiental de Dominga",
        descripcion: "La justicia restableció provisoriamente el permiso ambiental del proyecto minero Dominga tras gestiones del Ejecutivo.",
        interpretacion: "Organizaciones locales anuncian movilizaciones, acusando un 'perdonazo' ambiental que pone en riesgo el ecosistema de La Higuera.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/medioambiente/institucionalidad/corte-restablecio-temporalmente-el-permiso-ambiental-para-dominga/2026-03-17/144830.html"
        }
    },
    {
        id: 26,
        fecha: "2026-03-17",
        titulo: "Advertencia presidencial a deudores del CAE",
        descripcion: "\"Quienes tienen recursos y no pagan el CAE, deben saber que aparecerán publicados\", advirtió el mandatario en cadena nacional.",
        interpretacion: "Expertos alertan sobre la posible creación de una lista negra pública de deudores educativos como medida de presión de cobranza.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "ADN Radio",
            url: "https://www.adnradio.cl/2026/03/17/presidente-kast-defiende-debate-por-gratuidad-y-lanza-advertencia-a-deudores-del-cae-quieren-aparecer-publicados/"
        }
    },
    {
        id: 27,
        fecha: "2026-03-18",
        titulo: "Defensa del retiro de decretos para 'flexibilizar' inversión",
        descripcion: "El ministro de la Segpres defendió la revisión de decretos ambientales, señalando que se busca fortalecer la inversión privada.",
        interpretacion: "Analistas señalan que el gobierno está supeditando la protección del ecosistema al crecimiento económico de corto plazo.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "ADN Radio",
            url: "https://www.adnradio.cl/2026/03/18/gobierno-defiende-retiro-de-decretos-ambientales-y-apunta-a-flexibilizar-normas-se-busca-fortalecer-la-inversion/"
        }
    },
    {
        id: 28,
        fecha: "2026-03-18",
        titulo: "Paro Nacional de Salud por recortes en listas de espera",
        descripcion: "Gremios de la salud pública (Confusam y Fenats) iniciaron un paro nacional indefinido tras el recorte presupuestario oncológico.",
        interpretacion: "La crisis sanitaria se agudiza por la reasignación de fondos de salud hacia defensa y seguridad fronteriza.",
        categoria: "Social",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Radio U. de Chile",
            url: "https://radio.uchile.cl/2026/03/18/gremios-de-salud-inician-paro-nacional-por-recorte-en-listas-de-espera/"
        }
    },
    {
        id: 29,
        fecha: "2026-03-18",
        titulo: "Propuesta de privatización de cárceles de alta seguridad",
        descripcion: "Justicia presentó un plan para licitar a privados la construcción y administración operativa de nuevos centros penitenciarios.",
        interpretacion: "Expertos en criminología denuncian el nacimiento de un 'negocio del castigo' que podría incentivar el aumento de la población penal.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "El Desconcierto",
            url: "https://www.eldesconcierto.cl/nacional/2026/03/18/gobierno-propone-licitacion-privada-de-carceles-de-alta-seguridad/"
        }
    },
    {
        id: 30,
        fecha: "2026-03-18",
        titulo: "Suma Urgencia al Control de Identidad desde los 14 años",
        descripcion: "El Ejecutivo otorgó máxima prioridad legislativa al proyecto que amplía las facultades de control preventivo de identidad a menores de edad.",
        interpretacion: "Defensoría de la Niñez advierte que la medida criminaliza la juventud y no ataca las causas estructurales del delito en menores.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Radio Bío-Bío",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/gobierno-da-suma-urgencia-a-control-identidad-desde-14-anos.shtml"
        }
    },
    {
        id: 31,
        fecha: "2026-03-18",
        titulo: "Kast defiende retiro de decretos ambientales y negociación ramal",
        descripcion: "\"No es urgente hoy día\" avanzar en la negociación colectiva ramal, afirmó Kast al defender desde Antofagasta las primeras polémicas decisiones de su gobierno, incluyendo el retiro de más de 40 decretos ambientales.",
        interpretacion: "Sindicalistas critican que el Presidente priorice la agenda empresarial por sobre la negociación laboral, mostrando que el gobierno opera con los intereses de la Confederación de la Producción y el Comercio.",
        categoria: "Laboral",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/17/presidente-kast-defiende-retiro-de-decretos-ambientales-y-negociacion-ramal-no-es-urgente-hoy-dia/"
        }
    },
    {
        id: 32,
        fecha: "2026-03-18",
        titulo: "Ejecutivo ingresa urgencias a 20 proyectos de ley de seguridad",
        descripcion: "La Segpres ingresó urgencias legislativas para la tramitación de 20 proyectos de ley con foco en seguridad, migración y crimen organizado, en el marco de la agenda de los primeros 90 días.",
        interpretacion: "La oposición advierte que la acumulación de urgencias en proyectos de seguridad puede generar un Congreso sobrecargado sin espacio para debatir propuestas sociales.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/18/congreso-bajo-control-oficialista-espera-plan-clave-del-gobierno-de-kast/"
        }
    }
];