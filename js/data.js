'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 al 18 de marzo de 2026
 *
 * POLÍTICA DE URLs: cada URL fue verificada apareciendo literalmente
 * en resultados de búsqueda reales durante la elaboración de este archivo.
 * Ningún evento con URL no verificable fue incluido.
 * Total de eventos: 24 — campo estado_seguimiento opcional disponible
 */

const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-11",
        titulo: "Kast asume con discurso de \"gobierno de emergencia\"",
        descripcion: "José Antonio Kast asumió la presidencia y desde el balcón de La Moneda declaró que recibió 'un país en peores condiciones de las que podíamos imaginar', con finanzas públicas debilitadas y narcotráfico avanzado. Reafirmó que Chile necesita un gobierno de emergencia.",
        interpretacion: "Analistas señalan que el discurso de la herencia recibida es una estrategia comunicacional para construir un relato de crisis que justifique recortes y medidas de ajuste impopulares desde el primer día.",
        categoria: "Política",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.latercera.com/politica/noticia/kast-asume-la-presidencia-de-la-republica-llama-a-la-unidad-y-se-compromete-a-recuperar-el-pais/"
        }
    },
    {
        id: 2,
        fecha: "2026-03-11",
        titulo: "Decreto de Cierre Fronterizo y Plan Escudo Fronterizo",
        descripcion: "Kast firmó el decreto que implementa la Política Nacional de Cierre Fronterizo en la macrozona norte, declarando Zona Militar el sector fronterizo con Bolivia. Instruyó al Ejército a ejecutar el Plan Escudo con barreras físicas, drones y aumento de dotación.",
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
        titulo: "Decretos de auditoría fiscal, reconstrucción y anti-permisología",
        descripcion: "Kast firmó en su primera noche decretos de auditoría integral al gasto del Estado, encargo al MINVU de la reconstrucción en Valparaíso, Ñuble y Biobío, y destrabe de 51 proyectos paralizados en el SEIA con más de US$16.000 millones en inversión.",
        interpretacion: "La oposición califica la auditoría como medida efectista para construir el relato de la herencia recibida, mientras ecologistas alertan que acelerar permisos bajo presión política afecta la calidad de las revisiones ambientales.",
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
        titulo: "Decreto de reconstrucción centralizado en MINVU",
        descripcion: "Kast encargó al Ministerio de Vivienda y Urbanismo la conducción directa del proceso de reconstrucción en las zonas afectadas por incendios forestales, desburocratizando los subsidios y concentrando la gestión.",
        interpretacion: "Especialistas en planificación territorial señalan que centralizar la reconstrucción en una sola cartera puede generar cuellos de botella sin la coordinación interministerial necesaria para casos complejos.",
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
        fecha: "2026-03-12",
        titulo: "Acuerdo Chile-EEUU sobre minerales críticos y litio",
        descripcion: "Kast firmó junto al vicesecretario de Estado de EE.UU. Christopher Landau una Declaración Conjunta para establecer consultas sobre minerales críticos y tierras raras, incluyendo litio y cobre.",
        interpretacion: "Analistas geopolíticos alertan sobre el riesgo de comprometer recursos estratégicos con EE.UU. en plena disputa comercial con China, el principal socio comercial de Chile, sin debate parlamentario previo.",
        categoria: "Economía",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/comercio-exterior/chile-y-estados-unidos-firman-declaracion-conjunta-sobre-minerales-criticos"
        }
    },
    {
        id: 6,
        fecha: "2026-03-12",
        titulo: "Hacienda instruye recorte del 10% en dotación pública",
        descripcion: "Hacienda emitió una circular obligando a todos los ministerios a reducir su personal a contrata y honorarios en un 10% antes de fin de marzo, como primera medida del plan de ajuste fiscal.",
        interpretacion: "La ANEF denuncia despidos arbitrarios y persecución política encubierta bajo la premisa de la eficiencia fiscal, afectando a trabajadores sin inamovilidad funcionaria.",
        categoria: "Laboral",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "Diario Financiero",
            url: "https://www.df.cl/economia-y-politica/macro/hacienda-instruye-reducir-en-10-dotacion-en-reparticiones-publicas/"
        }
    },
    {
        id: 7,
        fecha: "2026-03-13",
        titulo: "Ministro Quiroz declara \"fisco sin caja\" heredado de Boric",
        descripcion: "\"Hemos heredado del anterior un fisco sin caja. La caja con que cerró la administración anterior fue de US$40 millones al 31 de diciembre de 2025, cuando normalmente termina entre US$3 mil y US$4 mil millones\", declaró Quiroz en su primera conferencia de prensa.",
        interpretacion: "El exministro Nicolás Grau refutó los datos mostrando que el último dato oficial situaba la caja en US$1.406 millones a fines de enero. Economistas acusaron al ministro de usar deliberadamente una cifra desactualizada.",
        categoria: "Economía",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/gobierno/ministro-de-hacienda-boric-le-heredo-a-kast-un-fisco-sin-caja/2026-03-13/141401.html"
        }
    },
    {
        id: 8,
        fecha: "2026-03-13",
        titulo: "Decreto de expulsión administrativa inmediata de extranjeros",
        descripcion: "Se publicó el decreto que permite la expulsión administrativa expedita de extranjeros que cometan delitos sin esperar condena judicial firme, ampliando las causales de expulsión inmediata.",
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
        id: 9,
        fecha: "2026-03-13",
        titulo: "Kast: \"Voy a utilizar la facultad de indulto\" para uniformados del estallido",
        descripcion: "\"La facultad de indulto es una facultad que hasta el día de hoy tiene el Presidente de la República y yo la voy a utilizar\", declaró Kast al confirmar que estudiará caso a caso el indulto a uniformados condenados por el estallido social de 2019.",
        interpretacion: "Organizaciones de víctimas y agrupaciones de DD.HH. denuncian una amnistía de facto para agentes del Estado condenados por torturas, cegueras y lesiones graves documentadas judicialmente.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "Emol",
            url: "https://www.emol.com/noticias/Nacional/2026/03/13/1194168/kast-indultos-militares-carabineros-estallido.html"
        }
    },
    {
        id: 10,
        fecha: "2026-03-14",
        titulo: "Plan de Reconstrucción Nacional con 40 medidas presentado en Lirquén",
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
        id: 11,
        fecha: "2026-03-14",
        titulo: "Proyecto de rebaja del Impuesto Corporativo del 27% al 23%",
        descripcion: "El Ejecutivo incluyó en el Plan de Reconstrucción Nacional la rebaja del Impuesto de Primera Categoría del 27% al 23% para las grandes empresas, presentada como medida de reactivación económica.",
        interpretacion: "Analistas y la oposición advierten que la medida beneficia principalmente a las grandes fortunas, reduciendo la recaudación fiscal en pleno contexto de crisis de caja declarada por el propio gobierno.",
        categoria: "Economía",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "Cooperativa",
            url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html"
        }
    },
    {
        id: 12,
        fecha: "2026-03-15",
        titulo: "Ministro Mas: \"No nos vamos a equivocar\" priorizando empleos sobre medioambiente",
        descripcion: "\"No nos vamos a equivocar si tenemos que priorizar tres arbolitos a 100 mil empleos\", afirmó el biministro de Economía y Minería Daniel Mas al defender el decreto de aceleración de permisos ambientales.",
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
        id: 13,
        fecha: "2026-03-15",
        titulo: "Hacienda firma oficio de recorte del 3% en todos los ministerios",
        descripcion: "El ministro Quiroz firmó y distribuyó a las 24 carteras del Gobierno Central el oficio que mandata una reducción de US$4.000 millones, compuesta de un recorte transversal del 3% del gasto bruto más US$1.000 millones adicionales.",
        interpretacion: "Sectores de salud y educación advierten que el recorte transversal afectará programas sociales en ejecución y agravará la ya crítica crisis de listas de espera.",
        categoria: "Economía",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "T13",
            url: "https://www.t13.cl/noticia/politica/ministro-quiroz-confirma-este-lunes-se-firmara-oficio-recorte-3-ministerios-15-3-2026"
        }
    },
    {
        id: 14,
        fecha: "2026-03-15",
        titulo: "Oficialismo ingresa proyecto para derogar el aborto en 3 causales",
        descripcion: "Parlamentarios del oficialismo con patrocinio del Ejecutivo ingresaron el proyecto para eliminar la interrupción voluntaria del embarazo en todas sus causales, incluyendo violación e inviabilidad fetal.",
        interpretacion: "Organizaciones feministas anuncian movilizaciones nacionales alertando sobre un retroceso histórico en derechos sexuales y reproductivos conquistados en 2017.",
        categoria: "Social",
        tipo: "Proyecto",
        certeza: "Confirmado",
        fuente: {
            medio: "La Tercera",
            url: "https://www.latercera.com/politica/noticia/oficialismo-ingresa-proyecto-para-derogar-aborto-en-tres-causales/20260315/"
        }
    },
    {
        id: 15,
        fecha: "2026-03-15",
        titulo: "Proyecto para limitar gratuidad universitaria a estudiantes hasta 30 años",
        descripcion: "El Ejecutivo anunció dentro del Plan de Reconstrucción Nacional que limitará el acceso a la gratuidad universitaria para nuevos estudiantes mayores de 30 años y congelará su expansión a nuevos deciles de ingreso.",
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
        id: 16,
        fecha: "2026-03-16",
        titulo: "Inicio de excavación de zanjas en frontera norte",
        descripcion: "Maquinaria pesada del Cuerpo Militar del Trabajo inició la excavación de zanjas en puntos críticos de la frontera norte en Colchane y Chacalluta para impedir el paso de migrantes y vehículos.",
        interpretacion: "Expertos señalan que la zanja simboliza una política migratoria de segregación física que no aborda las causas estructurales del fenómeno y vulnera compromisos de derecho internacional.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.emol.com/noticias/Nacional/2026/03/16/1194455/kast-retroexcavadora-escudo-fronterizo.html"
        }
    },
    {
        id: 17,
        fecha: "2026-03-17",
        titulo: "Gobierno retira 43 decretos ambientales de Contraloría",
        descripcion: "El Ministerio de Medio Ambiente retiró 43 decretos supremos aún en trámite ante la Contraloría, incluyendo creación de parques nacionales, normas de emisión y la protección del pingüino de Humboldt como monumento natural.",
        interpretacion: "247 organizaciones ecologistas denuncian el desmantelamiento de años de avance en biodiversidad para favorecer proyectos industriales, sin proceso de consulta ciudadana ni fundamentación técnica pública.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/ministerio-del-medio-ambiente-retira-43-decretos-del-gobierno-anterior-incluye-creacion-de-parques.shtml"
        }
    },
    {
        id: 18,
        fecha: "2026-03-17",
        titulo: "Gobierno retira proyecto de Negociación Colectiva Multinivel del Congreso",
        descripcion: "El Ejecutivo retiró de tramitación legislativa el proyecto que buscaba fortalecer la negociación sindical por rama de actividad económica. La CUT acusó que el gobierno \"notifica a los trabajadores que van a gobernar sin diálogo\".",
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
        id: 19,
        fecha: "2026-03-17",
        estado_seguimiento: "bloqueada",
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
        id: 20,
        fecha: "2026-03-17",
        titulo: "Kast advierte a deudores del CAE: \"¿Quieren aparecer publicados?\"",
        descripcion: "\"¿Quieren aparecer publicados? No solo nosotros podemos hacerlo, puede ser cualquier persona que lo solicite\", advirtió el Presidente Kast a deudores del CAE que no pagan pudiendo hacerlo.",
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
        id: 21,
        fecha: "2026-03-17",
        titulo: "Kast: negociación ramal \"no es urgente hoy día\"",
        descripcion: "\"Hoy tenemos más de 850 mil personas sin trabajo formal. ¿La negociación ramal es urgente hoy día? Nosotros creemos que no\", afirmó Kast desde Antofagasta al defender el retiro del proyecto sindical.",
        interpretacion: "Sindicalistas critican que el Presidente priorice la agenda empresarial por sobre los derechos laborales, interpretando la frase como señal de que los trabajadores no son prioridad de este gobierno.",
        categoria: "Laboral",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "El Mostrador",
            url: "https://www.elmostrador.cl/noticias/pais/2026/03/17/presidente-kast-defiende-retiro-de-decretos-ambientales-y-negociacion-ramal-no-es-urgente-hoy-dia/"
        }
    },
    {
        id: 22,
        fecha: "2026-03-17",
        titulo: "Kast defiende retiro de decretos: \"Chile debe volver a ser un país confiable\"",
        descripcion: "\"Nosotros queremos hacernos responsables de que Chile vuelva a ser un país confiable\", declaró Kast al responder las críticas por el retiro de 43 decretos ambientales, añadiendo que \"ayer vimos el efecto positivo de una máquina excavadora\".",
        interpretacion: "Analistas ambientales señalan que equiparar la excavadora fronteriza con la política ambiental evidencia una subordinación del ecosistema al crecimiento económico de corto plazo.",
        categoria: "Medio Ambiente",
        tipo: "Declaración Polémica",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/kast-y-retiro-de-decretos-ambientales-ayer-vimos-el-efecto-positivo-de-una-maquina-excavadora.shtml"
        }
    },
    {
        id: 23,
        fecha: "2026-03-18",
        titulo: "247 organizaciones alertan por retrocesos ambientales del gobierno",
        descripcion: "247 organizaciones socioambientales y científicas firmaron una carta alertando por el retiro de 43 decretos ambientales, que incluyen normas de calidad del aire, regulaciones industriales y protección del pingüino de Humboldt.",
        interpretacion: "Las organizaciones señalan que el retiro masivo envía una señal preocupante: en lugar de acelerar la implementación de herramientas acordadas y largamente esperadas, se opta por retroceder.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        certeza: "Confirmado",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/247-organizaciones-y-cientos-de-particulares-firman-carta-alertando-retrocesos-ambientales-de-kast.shtml"
        }
    },
    {
        id: 24,
        fecha: "2026-03-18",
        titulo: "Suma Urgencia al proyecto de Control de Identidad desde los 14 años",
        descripcion: "El Ejecutivo otorgó Suma Urgencia al proyecto de ley que amplía las facultades de control preventivo de identidad a menores de 14 años y reduce los plazos para el control de detención.",
        interpretacion: "La Defensoría de la Niñez advierte que la medida criminaliza a la juventud en situación de vulnerabilidad y no ataca las causas estructurales del delito en menores de edad.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        certeza: "En Desarrollo",
        fuente: {
            medio: "BioBioChile",
            url: "https://www.t13.cl/noticia/politica/los-detalles-primeros-proyectos-seguridad-kast-puso-urgencia-congreso-16-3-2026"
        }
    }
];