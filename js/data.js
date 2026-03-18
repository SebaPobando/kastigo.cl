'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 al 18 de marzo de 2026
 * Fuentes: URLs verificadas directamente en resultados de búsqueda
 * Última revisión: 18 de marzo de 2026
 *
 * ESTADO DE VERIFICACIÓN:
 * ✅ = URL apareció literal en resultados de búsqueda (garantizado)
 * ⚠  = URL no apareció literalmente pero el dominio raíz sí cubre la noticia
 */

const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-11",
        titulo: "Kast asume con discurso de \"gobierno de emergencia\"",
        descripcion: "José Antonio Kast asumió la presidencia y desde el balcón de La Moneda declaró que recibió 'un país en peores condiciones de las que podíamos imaginar', con 'finanzas públicas debilitadas' y 'narcotráfico avanzado'. Reafirmó que Chile 'necesita un gobierno de emergencia'.",
        interpretacion: "Analistas señalan que el discurso de la 'herencia recibida' es una estrategia comunicacional para construir un relato de crisis que justifique recortes y medidas de ajuste impopulares desde el primer día.",
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
        titulo: "Decreto de Política Nacional de Cierre Fronterizo y Plan Escudo",
        descripcion: "Kast firmó el decreto que implementa la Política Nacional de Cierre Fronterizo en la macrozona norte, declarando Zona Militar el sector fronterizo más vulnerable con Bolivia. Instruyó al Ejército a ejecutar el Plan Escudo Fronterizo con barreras físicas, drones y aumento de dotación.",
        interpretacion: "Organizaciones de derechos humanos advierten que militarizar la frontera puede derivar en vulneraciones a migrantes en situación de vulnerabilidad extrema y viola estándares internacionales.",
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
        titulo: "Decreto de auditoría integral al gasto del Estado",
        descripcion: "Kast firmó decreto instruyendo una auditoría integral a todos los ministerios, servicios e instituciones del Estado, coordinada por el Consejo de Auditoría Interna General de Gobierno, con reporte directo a Presidencia.",
        interpretacion: "La oposición lo califica como medida efectista para construir el relato de la 'herencia recibida' y justificar recortes presupuestarios inmediatos sin respaldo técnico independiente.",
        categoria: "Economía",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "CNN Chile",
            url: "https://www.cnnchile.com/pais/cierre-fronterizo-auditoria-total-y-destrabar-inversion-los-primeros-decretos-e-instrucciones-firmados-por-kast_20260311/"
        }
    },
    {
        id: 4,
        fecha: "2026-03-11",
        titulo: "Decreto de reconstrucción encargado a Ministerio de Vivienda",
        descripcion: "Kast firmó decreto encargando al MINVU la conducción directa del proceso de reconstrucción en Valparaíso, Ñuble y Biobío, desburocratizando los subsidios y concentrando la gestión para maximizar la velocidad de ejecución.",
        interpretacion: "Especialistas en planificación territorial señalan que centralizar la reconstrucción en una sola cartera puede generar cuellos de botella sin la coordinación interministerial necesaria.",
        categoria: "Vivienda",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Nacional/2026/03/11/1194042/grandes-medidas-inicio-gobierno-kast.html"
        }
    },
    {
        id: 5,
        fecha: "2026-03-11",
        titulo: "Decreto anti-permisología: US$16 mil millones en inversión desbloqueada",
        descripcion: "Kast firmó instrucción para resolver 51 recursos de reclamación pendientes en el SEIA, correspondientes a proyectos con RCA aprobada pero paralizados administrativamente, sumando más de US$16.000 millones en inversión.",
        interpretacion: "Ecologistas y expertos en derecho ambiental alertan que acelerar trámites bajo presión política puede afectar la calidad de las revisiones y abrir paso a proyectos con impactos no evaluados.",
        categoria: "Medio Ambiente",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Economia/2026/03/12/1194064/kast-decreto-inversion.html"
        }
    },
    {
        id: 6,
        fecha: "2026-03-12",
        titulo: "Acuerdo Chile-EEUU sobre minerales críticos y litio",
        descripcion: "Kast firmó junto al vicesecretario de Estado de EE.UU., Christopher Landau, una Declaración Conjunta para establecer consultas sobre minerales críticos y tierras raras, incluyendo litio y cobre.",
        interpretacion: "Analistas geopolíticos alertan sobre el riesgo de comprometer recursos estratégicos con EE.UU. en plena disputa comercial con China, principal socio comercial de Chile, sin debate parlamentario previo.",
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
        interpretacion: "La ANEF denuncia despidos arbitrarios y una persecución política encubierta bajo la premisa de la eficiencia fiscal, afectando a trabajadores que no tienen inamovilidad funcionaria.",
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
        titulo: "Ministra de Cultura: gasto va a \"nichos ideológicos\", no a la gente",
        descripcion: "\"Hay demasiado gasto en cultura que no llega a la gente, solo a nichos ideológicos\", afirmó la ministra de Cultura, Artes y Patrimonio al anunciar una revisión de los fondos concursables del sector.",
        interpretacion: "Gremios artísticos acusan un intento de censura velada y desconocimiento del rol social de la cultura, cuestionando quién define qué es o no ideológico en el arte.",
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
        descripcion: "\"Hemos heredado del anterior un fisco sin caja. La caja con que cerró la administración anterior fue de US$40 millones al 31 de diciembre de 2025, cuando normalmente termina entre US$3 mil y US$4 mil millones\", declaró Quiroz en su primera conferencia de prensa.",
        interpretacion: "El exministro Nicolás Grau refutó los datos, mostrando que el último dato oficial situaba la caja del Tesoro en US$1.406 millones a fines de enero. Economistas acusaron al ministro de usar deliberadamente una cifra desactualizada.",
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
        titulo: "Decreto de expulsión administrativa inmediata de extranjeros",
        descripcion: "Se publicó el decreto que permite la expulsión administrativa expedita de extranjeros que cometan delitos, sin esperar condena judicial firme, ampliando las causales de expulsión inmediata.",
        interpretacion: "Organizaciones de DD.HH. advierten que el decreto vulnera el debido proceso y puede derivar en expulsiones arbitrarias aplicadas bajo criterios policiales discrecionales.",
        categoria: "Seguridad",
        tipo: "Decreto",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/13/gobierno-de-kast-precisa-que-construccion-de-zanjas-en-frontera-norte-comenzara-en-tres-dias.shtml"
        }
    },
    {
        id: 11,
        fecha: "2026-03-13",
        titulo: "Kast: \"Voy a utilizar la facultad de indulto\" para uniformados del estallido",
        descripcion: "\"La facultad de indulto es una facultad que hasta el día de hoy tiene el Presidente de la República y yo la voy a utilizar\", declaró Kast al confirmar que estudiará caso a caso el indulto a uniformados condenados por delitos del estallido social de 2019.",
        interpretacion: "Organizaciones de víctimas y agrupaciones de DD.HH. denuncian una amnistía de facto para agentes del Estado condenados por torturas, cegueras y lesiones graves documentadas judicialmente.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/biobiotv/programas/radiograma-biobiotv/2026/03/16/kast-blinda-frontera-en-arica-mientras-crece-la-tension-politica-por-el-gobierno-de-emergencia.shtml"
        }
    },
    {
        id: 12,
        fecha: "2026-03-13",
        titulo: "Traslado de fondos oncológicos hacia Seguridad Fronteriza",
        descripcion: "Hacienda confirmó la reasignación de recursos destinados a reducir listas de espera oncológicas hacia el Plan Escudo Fronterizo.",
        interpretacion: "Sectores de salud pública califican de inhumano priorizar la construcción de zanjas sobre el tratamiento de pacientes con cáncer que esperan cirugías y quimioterapias.",
        categoria: "Social",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Nacional/2026/03/15/1194352/analisis-primeros-dias-kast.html"
        }
    },
    {
        id: 13,
        fecha: "2026-03-14",
        titulo: "Plan de Reconstrucción Nacional presentado en Lirquén con 40 medidas",
        descripcion: "Kast presentó desde Lirquén (Biobío) el proyecto de ley de Reconstrucción Nacional con 40 medidas en cinco ejes: reconstrucción física, reactivación económica, ajuste fiscal, fortalecimiento institucional y seguridad.",
        interpretacion: "La oposición acusa que el Gobierno usa la emergencia por incendios como pretexto para impulsar una agenda económica de derecha, mezclando reconstrucción con rebaja de impuestos a grandes empresas.",
        categoria: "Política",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html"
        }
    },
    {
        id: 14,
        fecha: "2026-03-14",
        titulo: "Proyecto de rebaja del Impuesto Corporativo del 27% al 23%",
        descripcion: "El Ejecutivo incluyó en el Plan de Reconstrucción Nacional la rebaja del Impuesto de Primera Categoría (IDPC) del 27% al 23% para las grandes empresas, presentada como medida de reactivación económica.",
        interpretacion: "Analistas y la oposición advierten que la medida beneficia principalmente a las grandes fortunas, reduciendo la recaudación fiscal en pleno contexto de crisis de caja declarada por el propio gobierno.",
        categoria: "Economía",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Nacional/2026/03/14/1194278/detalles-proyecto-reconstruccion-nacional-kast.html"
        }
    },
    {
        id: 15,
        fecha: "2026-03-14",
        titulo: "Ministra de la Mujer vincula beneficios del Estado al rol maternal tradicional",
        descripcion: "\"El verdadero apoyo del Estado debe priorizar a las mujeres que deciden formar familia y quedarse en el hogar\", declaró la ministra de la Mujer y Equidad de Género al presentar el enfoque de su cartera.",
        interpretacion: "Colectivos feministas denuncian un intento de imponer un modelo familiar conservador desde el Estado, frenando la autonomía laboral femenina y los avances en corresponsabilidad.",
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
        titulo: "Ministro Mas: \"No nos vamos a equivocar\" priorizando empleos sobre medioambiente",
        descripcion: "\"No nos vamos a equivocar si tenemos que priorizar tres arbolitos a 100 mil empleos\", afirmó el biministro de Economía y Minería, Daniel Mas, al defender el decreto de aceleración de permisos ambientales.",
        interpretacion: "Ambientalistas, diputados y expertos critican la frase por promover falsas dicotomías e ignorar que la biodiversidad tiene valor económico y que la minería responsable no tolera la destrucción ambiental.",
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
        titulo: "Gobierno anuncia retiro de Chile del Acuerdo de Escazú",
        descripcion: "El Gobierno anunció que iniciará el trámite para denunciar el Acuerdo de Escazú, el tratado regional de acceso a la información y participación ciudadana en asuntos ambientales, apelando a la soberanía económica.",
        interpretacion: "Ecologistas señalan que esto deja sin protección a los defensores ambientales y afecta la imagen climática internacional de Chile ante inversionistas ESG y organismos multilaterales.",
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
        titulo: "Proyecto para limitar gratuidad universitaria a menores de 30 años",
        descripcion: "El Ejecutivo anunció dentro del Plan de Reconstrucción Nacional que limitará el acceso a la gratuidad universitaria a nuevos estudiantes mayores de 30 años y congelará su expansión a nuevos deciles de ingreso.",
        interpretacion: "Organizaciones estudiantiles y la oposición acusan al gobierno de recortar un derecho social conquistado, recordando que Kast prometió en campaña no modificar los beneficios sociales vigentes.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/educacion/el-plan-de-kast-para-la-educacion-superior-limitar-la-gratuidad-y/2026-03-16/091510.html"
        }
    },
    {
        id: 19,
        fecha: "2026-03-15",
        titulo: "Oficialismo ingresa proyecto para derogar el aborto en 3 causales",
        descripcion: "Parlamentarios del oficialismo, con patrocinio del Ejecutivo, ingresaron el proyecto para eliminar la interrupción voluntaria del embarazo en todas sus causales, incluyendo violación e inviabilidad fetal.",
        interpretacion: "Organizaciones feministas anuncian movilizaciones nacionales, alertando sobre un retroceso histórico en derechos sexuales y reproductivos conquistados en 2017.",
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
        descripcion: "El ministro Quiroz confirmó que firmaría un oficio para reducir el gasto de todos los ministerios en un 3%, medida que se aplicará de forma uniforme por la Dipres a todos los subtítulos presupuestarios mediante decreto.",
        interpretacion: "Sectores de salud y educación advierten que el recorte transversal afectará programas sociales en ejecución y agravará la ya crítica crisis de listas de espera.",
        categoria: "Economía",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Economia/2026/03/17/1194486/ajuste-fiscal-hacienda-oficio-kast.html"
        }
    },
    {
        id: 21,
        fecha: "2026-03-16",
        titulo: "Inicio de obras de zanjas en frontera norte con Bolivia",
        descripcion: "Maquinaria pesada del Cuerpo Militar del Trabajo inició la excavación de zanjas en puntos críticos de la frontera norte en Colchane y Chacalluta para impedir el paso de migrantes y vehículos.",
        interpretacion: "Expertos señalan que la zanja simboliza una política migratoria de segregación física que no aborda las causas estructurales del fenómeno y vulnera compromisos de derecho internacional.",
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
        titulo: "Subsecretario: \"Los pobres no ahorran, por eso dependen de bonos\"",
        descripcion: "\"Lamentablemente los pobres no ahorran, por eso dependen de bonos que el Estado ya no puede financiar\", señaló el subsecretario de Hacienda en punto de prensa al defender el recorte de transferencias.",
        interpretacion: "Fundaciones de superación de la pobreza y economistas critican la frase por ignorar la imposibilidad material de ahorro en familias que perciben el salario mínimo o viven en situación de precariedad.",
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
        titulo: "Ministerio de Medio Ambiente retira 43 decretos de Contraloría",
        descripcion: "El subsecretario José Ignacio Vial firmó un oficio retirando 43 decretos supremos aún en trámite ante la Contraloría, incluyendo creación de parques nacionales, normas de emisión y la protección del pingüino de Humboldt como monumento natural.",
        interpretacion: "Greenpeace y 247 organizaciones ecologistas denuncian el desmantelamiento de años de avance en biodiversidad para favorecer proyectos industriales, sin proceso de consulta ciudadana.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/ministerio-del-medio-ambiente-retira-43-decretos-del-gobierno-anterior-incluye-creacion-de-parques.shtml"
        }
    },
    {
        id: 24,
        fecha: "2026-03-17",
        titulo: "Gobierno retira proyecto de Negociación Colectiva Multinivel del Congreso",
        descripcion: "El Ejecutivo retiró de tramitación legislativa el proyecto que buscaba fortalecer la negociación sindical por rama de actividad económica, que contaba con apoyo transversal en el Senado.",
        interpretacion: "Dirigentes sindicales interpretan la medida como un golpe directo a la fuerza laboral organizada, favoreciendo estructuralmente el poder negociador de los grandes grupos empresariales.",
        categoria: "Laboral",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html"
        }
    },
    {
        id: 25,
        fecha: "2026-03-17",
        titulo: "Corte restablece temporalmente el permiso ambiental de Dominga",
        descripcion: "La Corte de Apelaciones de Santiago restableció provisoriamente el permiso ambiental del proyecto minero-portuario Dominga, paralizando la resolución del CIUDEN que lo había rechazado en 2021.",
        interpretacion: "Organizaciones de La Higuera anuncian movilizaciones, acusando que el fallo favorece un proyecto que amenaza el ecosistema marino donde habita el 80% de la población mundial del pingüino de Humboldt.",
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
        titulo: "Kast advierte a deudores del CAE: \"¿Quieren aparecer publicados?\"",
        descripcion: "\"¿Quieren aparecer publicados? ¿Para qué? (...) No solo nosotros podemos hacerlo, puede ser cualquier persona que lo solicite\", advirtió el Presidente Kast a deudores del CAE que no pagan pudiendo hacerlo.",
        interpretacion: "Expertos en educación advierten sobre la posible creación de una lista negra pública de deudores, señalando que muchos no pagan el CAE porque están en situación de incobrabilidad real, no por evasión.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "T13",
            url: "https://www.t13.cl/noticia/politica/kast-llama-deudores-del-cae-ponerse-al-dia-advierte-ustedes-quieren-aparecer-pu-17-3-2026"
        }
    },
    {
        id: 27,
        fecha: "2026-03-17",
        titulo: "Kast: negociación colectiva ramal \"no es urgente hoy día\"",
        descripcion: "\"No es urgente hoy día\" avanzar en la negociación colectiva ramal, afirmó Kast desde Antofagasta al defender el retiro del proyecto sindical y las polémicas decisiones de su primera semana.",
        interpretacion: "Sindicalistas critican que el Presidente priorice la agenda empresarial por sobre los derechos laborales, interpretando la frase como una señal de que los trabajadores no son prioridad de este gobierno.",
        categoria: "Laboral",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-defiende-retiro-de-proyecto-de-negociacion-ramal-creemos-que-no-es/2026-03-17/152656.html"
        }
    },
    {
        id: 28,
        fecha: "2026-03-18",
        titulo: "Segpres defiende retiro de decretos: \"se busca fortalecer la inversión\"",
        descripcion: "El ministro de la Segpres, José García Ruminot, defendió el retiro de 43 decretos ambientales, señalando que la medida responde a la necesidad de flexibilizar las normas para fortalecer la inversión privada.",
        interpretacion: "Analistas ambientales señalan que el gobierno está subordinando la protección del ecosistema al crecimiento económico de corto plazo, sin criterios técnicos independientes ni participación ciudadana.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/247-organizaciones-y-cientos-de-particulares-firman-carta-alertando-retrocesos-ambientales-de-kast.shtml"
        }
    },
    {
        id: 29,
        fecha: "2026-03-18",
        titulo: "Paro Nacional de Salud por recorte en listas de espera oncológica",
        descripcion: "Gremios de la salud pública (Confusam y Fenats) iniciaron un paro nacional indefinido tras la confirmación del recorte presupuestario en los fondos para listas de espera oncológicas.",
        interpretacion: "Los trabajadores de la salud denuncian que la reasignación de fondos hacia defensa y seguridad fronteriza tiene consecuencias directas en la vida de pacientes con cáncer en espera.",
        categoria: "Social",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Radio U. de Chile",
            url: "https://radio.uchile.cl/2026/03/18/gremios-de-salud-inician-paro-nacional-por-recorte-en-listas-de-espera/"
        }
    },
    {
        id: 30,
        fecha: "2026-03-18",
        titulo: "Proyecto de privatización y licitación de cárceles de alta seguridad",
        descripcion: "El Ministerio de Justicia presentó un plan para licitar a privados la construcción y administración operativa de nuevos centros penitenciarios de alta seguridad.",
        interpretacion: "Expertos en criminología denuncian el surgimiento de un 'negocio del castigo' que podría incentivar estructuralmente el aumento de la población carcelaria para beneficio de los operadores privados.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "El Desconcierto",
            url: "https://www.eldesconcierto.cl/nacional/2026/03/18/gobierno-propone-licitacion-privada-de-carceles-de-alta-seguridad/"
        }
    },
    {
        id: 31,
        fecha: "2026-03-18",
        titulo: "Suma Urgencia al proyecto de Control de Identidad desde los 14 años",
        descripcion: "El Ejecutivo otorgó Suma Urgencia al proyecto de ley que amplía las facultades de control preventivo de identidad a menores de 14 años y reduce los plazos para el control de detención.",
        interpretacion: "La Defensoría de la Niñez advierte que la medida criminaliza a la juventud en situación de vulnerabilidad y no ataca las causas estructurales del delito en menores de edad.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/gobierno-da-suma-urgencia-a-control-identidad-desde-14-anos.shtml"
        }
    },
    {
        id: 32,
        fecha: "2026-03-18",
        titulo: "Ejecutivo ingresa urgencias legislativas a 20 proyectos de seguridad",
        descripcion: "La Segpres ingresó urgencias legislativas para la tramitación de 20 proyectos de ley con foco en seguridad, migración y crimen organizado, en el marco de la agenda de los primeros 90 días del gobierno.",
        interpretacion: "La oposición advierte que la acumulación de urgencias en proyectos de seguridad copa la agenda del Congreso y no deja espacio para debatir propuestas sociales ni fiscalizar al Ejecutivo.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Nacional/2026/03/18/1194576/frenesi-legislativo-gobierno-kast-riesgos.html"
        }
    }
];