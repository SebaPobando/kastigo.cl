'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 al 18 de marzo de 2026
 *
 * POLÍTICA EDITORIAL:
 * - descripcion: hechos objetivos verificables con fuente citada
 * - interpretacion: presenta posturas de distintos sectores (a favor y en contra)
 * - No se omiten las posiciones del gobierno ni de sus críticos
 *
 * POLÍTICA DE URLs: cada URL fue verificada en resultados de búsqueda reales.
 * Total de eventos: 24
 */

const eventosGubernamentales = [
    {
        id: 1,
        fecha: "2026-03-11",
        titulo: "Kast asume con discurso de \"gobierno de emergencia\"",
        descripcion: "José Antonio Kast asumió la presidencia y desde el balcón de La Moneda declaró que recibió \"un país en peores condiciones de las que podíamos imaginar\", con finanzas públicas debilitadas y narcotráfico avanzado. Reafirmó que Chile necesita un gobierno de emergencia.",
        interpretacion: "El oficialismo sostiene que el diagnóstico refleja la realidad fiscal y de seguridad heredada, y que declarar la emergencia es el primer paso para implementar soluciones concretas. La oposición considera que el relato de crisis está sobredimensionado y busca justificar medidas de ajuste desde el primer día.",
        categoria: "Política",
        tipo: "Declaración",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/politica/noticia/kast-asume-la-presidencia-de-la-republica-llama-a-la-unidad-y-se-compromete-a-recuperar-el-pais/" }
    },
    {
        id: 2,
        fecha: "2026-03-11",
        titulo: "Decreto de Cierre Fronterizo y Plan Escudo Fronterizo",
        descripcion: "Kast firmó el decreto que implementa la Política Nacional de Cierre Fronterizo en la macrozona norte, declarando Zona Militar el sector fronterizo con Bolivia. Instruyó al Ejército a ejecutar el Plan Escudo con barreras físicas, drones y aumento de dotación.",
        interpretacion: "El gobierno argumenta que la medida es necesaria para controlar el ingreso irregular y reducir el crimen organizado transfronterizo. Organizaciones de derechos humanos advierten que la militarización puede vulnerar los derechos de migrantes en situación de vulnerabilidad extrema.",
        categoria: "Seguridad",
        tipo: "Decreto",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/11/presidente-kast-firma-primeros-decretos-cierre-fronterizo-y-auditoria-total-marcan-inicio-de-gobierno.shtml" }
    },
    {
        id: 3,
        fecha: "2026-03-11",
        titulo: "Decretos de auditoría fiscal, reconstrucción y anti-permisología",
        descripcion: "Kast firmó en su primera noche decretos de auditoría integral al gasto del Estado, encargo al MINVU de la reconstrucción en Valparaíso, Ñuble y Biobío, y destrabe de 51 proyectos paralizados en el SEIA con más de US$16.000 millones en inversión.",
        interpretacion: "El gobierno señala que la auditoría busca transparentar el estado real de las finanzas públicas y que acelerar los proyectos SEIA reactivará el empleo. La oposición cuestiona los fines de la auditoría, y ecologistas advierten que acortar plazos de revisión ambiental puede comprometer la calidad del proceso.",
        categoria: "Economía",
        tipo: "Decreto",
        fuente: { medio: "CNN Chile", url: "https://www.cnnchile.com/pais/cierre-fronterizo-auditoria-total-y-destrabar-inversion-los-primeros-decretos-e-instrucciones-firmados-por-kast_20260311/" }
    },
    {
        id: 4,
        fecha: "2026-03-11",
        titulo: "Decreto de reconstrucción centralizado en MINVU",
        descripcion: "Kast encargó al Ministerio de Vivienda y Urbanismo la conducción directa del proceso de reconstrucción en las zonas afectadas por incendios forestales, desburocratizando los subsidios y concentrando la gestión.",
        interpretacion: "El ejecutivo argumenta que centralizar la coordinación agilizará la entrega de soluciones habitacionales a familias damnificadas. Algunos especialistas en planificación territorial plantean que la gestión interministerial puede ser más eficaz en emergencias de alta complejidad.",
        categoria: "Vivienda",
        tipo: "Decreto",
        fuente: { medio: "Emol", url: "https://www.emol.com/noticias/Nacional/2026/03/11/1194042/grandes-medidas-inicio-gobierno-kast.html" }
    },
    {
        id: 5,
        fecha: "2026-03-12",
        titulo: "Acuerdo Chile-EEUU sobre minerales críticos y litio",
        descripcion: "Kast firmó junto al vicesecretario de Estado de EE.UU. Christopher Landau una Declaración Conjunta para establecer consultas sobre minerales críticos y tierras raras, incluyendo litio y cobre.",
        interpretacion: "El gobierno destaca que el acuerdo posiciona a Chile en la cadena global de valor de la transición energética. Analistas geopolíticos señalan que el acuerdo debe equilibrarse con los compromisos comerciales de Chile con China, su principal socio comercial.",
        categoria: "Economía",
        tipo: "Declaración",
        fuente: { medio: "Diario Financiero", url: "https://www.df.cl/economia-y-politica/comercio-exterior/chile-y-estados-unidos-firman-declaracion-conjunta-sobre-minerales-criticos" }
    },
    {
        id: 6,
        fecha: "2026-03-12",
        titulo: "Hacienda instruye recorte del 10% en dotación pública",
        descripcion: "Hacienda emitió una circular obligando a todos los ministerios a reducir su personal a contrata y honorarios en un 10% antes de fin de marzo, como primera medida del plan de ajuste fiscal.",
        interpretacion: "El gobierno sostiene que el ajuste es necesario para corregir el sobredimensionamiento del Estado y mejorar la eficiencia del gasto público. La ANEF y sindicatos del sector público advierten que los despidos afectarán servicios esenciales y a trabajadores sin inamovilidad.",
        categoria: "Laboral",
        tipo: "Administrativo",
        fuente: { medio: "Diario Financiero", url: "https://www.df.cl/economia-y-politica/macro/hacienda-instruye-reducir-en-10-dotacion-en-reparticiones-publicas/" }
    },
    {
        id: 7,
        fecha: "2026-03-13",
        titulo: "Ministro Quiroz declara \"fisco sin caja\" heredado del gobierno anterior",
        descripcion: "\"Hemos heredado del anterior un fisco sin caja. La caja con que cerró la administración anterior fue de US$40 millones al 31 de diciembre de 2025, cuando normalmente termina entre US$3 mil y US$4 mil millones\", declaró Quiroz en su primera conferencia de prensa.",
        interpretacion: "El ministro argumentó que la cifra refleja el deterioro real de las finanzas públicas al cierre del año. El exministro Nicolás Grau refutó los datos indicando que el último dato oficial situaba la caja en US$1.406 millones a fines de enero, señalando que la cifra usada correspondía a un momento puntual de fin de año.",
        categoria: "Economía",
        tipo: "Declaración Polémica",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/gobierno/ministro-de-hacienda-boric-le-heredo-a-kast-un-fisco-sin-caja/2026-03-13/141401.html" }
    },
    {
        id: 8,
        fecha: "2026-03-13",
        titulo: "Decreto de expulsión administrativa inmediata de extranjeros",
        descripcion: "Se publicó el decreto que permite la expulsión administrativa expedita de extranjeros que cometan delitos sin esperar condena judicial firme, ampliando las causales de expulsión inmediata.",
        interpretacion: "El gobierno sostiene que la medida agiliza la respuesta del Estado ante extranjeros con antecedentes penales. Organizaciones de DD.HH. advierten que el decreto puede vulnerar el debido proceso y el principio de no devolución reconocido en el derecho internacional.",
        categoria: "Seguridad",
        tipo: "Decreto",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/13/gobierno-de-kast-precisa-que-construccion-de-zanjas-en-frontera-norte-comenzara-en-tres-dias.shtml" }
    },
    {
        id: 9,
        fecha: "2026-03-13",
        titulo: "Kast anuncia uso de facultad de indulto para uniformados del estallido",
        descripcion: "\"La facultad de indulto es una facultad que hasta el día de hoy tiene el Presidente de la República y yo la voy a utilizar\", declaró Kast al confirmar que estudiará caso a caso el indulto a uniformados condenados por hechos ocurridos durante el estallido social de 2019.",
        interpretacion: "Sectores oficialistas y gremios policiales apoyan la medida argumentando que los uniformados actuaron en cumplimiento del deber en contextos de alta presión. Organizaciones de víctimas y de DD.HH. señalan que los condenados tienen sentencias judiciales firmes por lesiones graves documentadas.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        fuente: { medio: "Emol", url: "https://www.emol.com/noticias/Nacional/2026/03/13/1194168/kast-indultos-militares-carabineros-estallido.html" }
    },
    {
        id: 10,
        fecha: "2026-03-14",
        titulo: "Plan de Reconstrucción Nacional con 40 medidas presentado en Lirquén",
        descripcion: "Kast presentó desde Lirquén (Biobío) el proyecto de ley de Reconstrucción Nacional con 40 medidas en cinco ejes: reconstrucción física, reactivación económica, ajuste fiscal, fortalecimiento institucional y seguridad.",
        interpretacion: "El gobierno destaca que el plan integra medidas urgentes para las familias damnificadas con reformas de largo plazo para reactivar la economía. La oposición cuestiona que se mezclen la emergencia por incendios con una agenda económica más amplia que incluye rebaja de impuestos corporativos.",
        categoria: "Política",
        tipo: "Proyecto",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html" }
    },
    {
        id: 11,
        fecha: "2026-03-14",
        titulo: "Proyecto de rebaja del Impuesto Corporativo del 27% al 23%",
        descripcion: "El Ejecutivo incluyó en el Plan de Reconstrucción Nacional la rebaja del Impuesto de Primera Categoría del 27% al 23% para las grandes empresas, presentada como medida de reactivación económica.",
        interpretacion: "El gobierno argumenta que la rebaja incentivará la inversión privada y generará empleo formal. Analistas de centroizquierda sostienen que la medida reduce la recaudación fiscal en un momento de ajuste presupuestario, y que sus beneficios se concentran en grandes empresas.",
        categoria: "Economía",
        tipo: "Proyecto",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html" }
    },
    {
        id: 12,
        fecha: "2026-03-15",
        titulo: "Ministro Mas: \"No nos vamos a equivocar\" priorizando empleos sobre medioambiente",
        descripcion: "\"No nos vamos a equivocar si tenemos que priorizar tres arbolitos a 100 mil empleos\", afirmó el biministro de Economía y Minería Daniel Mas al defender el decreto de aceleración de permisos ambientales.",
        interpretacion: "El ministro argumentó que en contexto de desempleo, la prioridad es crear condiciones para la generación de empleo. Ambientalistas y expertos en biodiversidad cuestionaron la frase por presentar una falsa dicotomía, señalando que protección ambiental y desarrollo económico pueden coexistir.",
        categoria: "Medio Ambiente",
        tipo: "Declaración Polémica",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/15/critican-a-ministro-mas-por-decir-que-no-se-equivocara-si-prioriza-100-mil-empleos-sobre-3-arbolitos.shtml" }
    },
    {
        id: 13,
        fecha: "2026-03-15",
        titulo: "Hacienda firma oficio de recorte del 3% en todos los ministerios",
        descripcion: "El ministro Quiroz firmó y distribuyó a las 24 carteras del Gobierno Central el oficio que mandata una reducción de US$4.000 millones, compuesta de un recorte transversal del 3% del gasto bruto más US$1.000 millones adicionales.",
        interpretacion: "El gobierno señala que el recorte es indispensable para sanear las finanzas públicas. Sectores de salud, educación y organizaciones sociales advierten que el ajuste transversal puede afectar programas en ejecución y agravar listas de espera.",
        categoria: "Economía",
        tipo: "Administrativo",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/ministro-quiroz-confirma-este-lunes-se-firmara-oficio-recorte-3-ministerios-15-3-2026" }
    },
    {
        id: 14,
        fecha: "2026-03-15",
        titulo: "Oficialismo ingresa proyecto para derogar el aborto en 3 causales",
        descripcion: "Parlamentarios del oficialismo con patrocinio del Ejecutivo ingresaron el proyecto para eliminar la interrupción voluntaria del embarazo en todas sus causales, incluyendo violación e inviabilidad fetal.",
        interpretacion: "El oficialismo argumenta que el proyecto defiende la vida desde la concepción, valor declarado en su programa de gobierno. Organizaciones feministas, médicas y de salud pública señalan que eliminaría el acceso a una prestación de salud para mujeres en situaciones de extrema vulnerabilidad.",
        categoria: "Social",
        tipo: "Proyecto",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/politica/noticia/oficialismo-ingresa-proyecto-para-derogar-aborto-en-tres-causales/20260315/" }
    },
    {
        id: 15,
        fecha: "2026-03-15",
        titulo: "Proyecto para limitar gratuidad universitaria a estudiantes hasta 30 años",
        descripcion: "El Ejecutivo anunció dentro del Plan de Reconstrucción Nacional que limitará el acceso a la gratuidad universitaria para nuevos estudiantes mayores de 30 años y congelará su expansión a nuevos deciles de ingreso.",
        interpretacion: "El gobierno argumenta que la medida focaliza el beneficio en quienes más lo necesitan y contribuye al ajuste fiscal. Organizaciones estudiantiles y la oposición sostienen que la restricción limita el acceso a la educación superior para adultos que retoman estudios tardíamente.",
        categoria: "Social",
        tipo: "Proyecto",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html" }
    },
    {
        id: 16,
        fecha: "2026-03-16",
        titulo: "Inicio de construcción de zanjas en frontera norte",
        descripcion: "El Ejército inició las obras de excavación de zanjas en el sector fronterizo de Colchane, como parte del Plan Escudo Fronterizo. El Presidente Kast presenció el inicio de las obras.",
        interpretacion: "El gobierno considera que las barreras físicas son un componente disuasivo efectivo para el control del ingreso irregular. Organizaciones de migración y algunos analistas de seguridad debaten si las zanjas tienen efectividad real o si el crimen organizado buscará rutas alternativas.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        fuente: { medio: "Emol", url: "https://www.emol.com/noticias/Nacional/2026/03/16/1194455/kast-retroexcavadora-escudo-fronterizo.html" }
    },
    {
        id: 17,
        fecha: "2026-03-17",
        titulo: "Gobierno retira 43 decretos ambientales de Contraloría",
        descripcion: "El Ministerio de Medio Ambiente retiró 43 decretos supremos aún en trámite ante la Contraloría, incluyendo creación de parques nacionales, normas de emisión y la protección del pingüino de Humboldt como monumento natural.",
        interpretacion: "El gobierno argumenta que los decretos serán revisados para asegurar que no obstruyan proyectos de inversión ni generen incerteza regulatoria. 247 organizaciones ecologistas advierten que el retiro masivo desmantela años de avances en biodiversidad sin fundamentación técnica pública.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/ministerio-del-medio-ambiente-retira-43-decretos-del-gobierno-anterior-incluye-creacion-de-parques.shtml" }
    },
    {
        id: 18,
        fecha: "2026-03-17",
        titulo: "Gobierno retira proyecto de Negociación Colectiva Multinivel del Congreso",
        descripcion: "El Ejecutivo retiró de tramitación legislativa el proyecto que buscaba fortalecer la negociación sindical por rama de actividad económica. La CUT declaró que el gobierno \"notifica a los trabajadores que van a gobernar sin diálogo\".",
        interpretacion: "El gobierno sostiene que la negociación multinivel aumentaría los costos laborales y dificultaría la reactivación económica. Dirigentes sindicales y la oposición consideran que la medida debilita la capacidad negociadora de los trabajadores frente a los empleadores.",
        categoria: "Laboral",
        tipo: "Administrativo",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html" }
    },
    {
        id: 19,
        fecha: "2026-03-17",
        estado_seguimiento: "bloqueada",
        titulo: "Corte restablece temporalmente el permiso ambiental de Dominga",
        descripcion: "La Corte de Apelaciones de Santiago restableció provisoriamente el permiso ambiental del proyecto minero-portuario Dominga, paralizando la resolución del CIUDEN que lo había rechazado en 2021.",
        interpretacion: "Sectores empresariales ven la resolución como una oportunidad para evaluar el proyecto con los estándares vigentes. Organizaciones ambientales y comunidades de La Higuera advierten que el proyecto amenaza el ecosistema marino donde habita la mayor población mundial del pingüino de Humboldt.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/medioambiente/institucionalidad/corte-restablecio-temporalmente-el-permiso-ambiental-para-dominga/2026-03-17/144830.html" }
    },
    {
        id: 20,
        fecha: "2026-03-17",
        titulo: "Kast advierte a deudores del CAE que pueden ser publicados",
        descripcion: "\"¿Quieren aparecer publicados? No solo nosotros podemos hacerlo, puede ser cualquier persona que lo solicite\", advirtió el Presidente Kast a deudores del CAE que no pagan pudiendo hacerlo.",
        interpretacion: "El gobierno argumenta que quienes tienen capacidad de pago y no cumplen sus obligaciones generan inequidad con quienes sí pagan. Expertos en educación advierten que muchos deudores se encuentran en situación de incobrabilidad real y que la advertencia puede estigmatizar a personas sin capacidad de pago.",
        categoria: "Política",
        tipo: "Declaración Polémica",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/kast-llama-deudores-del-cae-ponerse-al-dia-advierte-ustedes-quieren-aparecer-pu-17-3-2026" }
    },
    {
        id: 21,
        fecha: "2026-03-17",
        titulo: "Kast: negociación ramal \"no es urgente hoy día\"",
        descripcion: "\"Hoy tenemos más de 850 mil personas sin trabajo formal. ¿La negociación ramal es urgente hoy día? Nosotros creemos que no\", afirmó Kast desde Antofagasta al defender el retiro del proyecto sindical.",
        interpretacion: "El gobierno sostiene que en contexto de alto desempleo, la prioridad es crear condiciones para la generación de empleo formal. Dirigentes sindicales responden que la negociación colectiva por rama es precisamente una herramienta para mejorar las condiciones laborales en el mercado del trabajo.",
        categoria: "Laboral",
        tipo: "Declaración Polémica",
        fuente: { medio: "El Mostrador", url: "https://www.elmostrador.cl/noticias/pais/2026/03/17/presidente-kast-defiende-retiro-de-decretos-ambientales-y-negociacion-ramal-no-es-urgente-hoy-dia/" }
    },
    {
        id: 22,
        fecha: "2026-03-17",
        titulo: "Kast defiende retiro de decretos: \"Chile debe volver a ser un país confiable\"",
        descripcion: "\"Nosotros queremos hacernos responsables de que Chile vuelva a ser un país confiable\", declaró Kast al responder las críticas por el retiro de 43 decretos ambientales, añadiendo que \"ayer vimos el efecto positivo de una máquina excavadora\".",
        interpretacion: "El gobierno enmarca el retiro de los decretos como parte de una política de certeza jurídica para la inversión. Analistas ambientales y la oposición cuestionan que la confiabilidad para la inversión no debería construirse reduciendo los estándares de protección medioambiental.",
        categoria: "Medio Ambiente",
        tipo: "Declaración Polémica",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/kast-y-retiro-de-decretos-ambientales-ayer-vimos-el-efecto-positivo-de-una-maquina-excavadora.shtml" }
    },
    {
        id: 23,
        fecha: "2026-03-18",
        titulo: "247 organizaciones alertan por retrocesos ambientales del gobierno",
        descripcion: "247 organizaciones socioambientales y científicas firmaron una carta alertando por el retiro de 43 decretos ambientales, que incluyen normas de calidad del aire, regulaciones industriales y protección del pingüino de Humboldt.",
        interpretacion: "Las organizaciones firmantes advierten que el retiro masivo de decretos envía una señal negativa para la conservación de la biodiversidad. El gobierno responde que los decretos serán revisados técnicamente y que Chile puede tener tanto protección ambiental como desarrollo económico.",
        categoria: "Medio Ambiente",
        tipo: "Declaración",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/247-organizaciones-y-cientos-de-particulares-firman-carta-alertando-retrocesos-ambientales-de-kast.shtml" }
    },
    {
        id: 24,
        fecha: "2026-03-18",
        titulo: "Suma Urgencia al proyecto de Control de Identidad desde los 14 años",
        descripcion: "El Ejecutivo otorgó Suma Urgencia al proyecto de ley que amplía las facultades de control preventivo de identidad a menores de 14 años y reduce los plazos para el control de detención.",
        interpretacion: "El gobierno argumenta que la medida es necesaria para hacer frente al aumento de la participación de menores en actividades delictuales. La Defensoría de la Niñez y organizaciones de infancia advierten que la medida puede afectar a jóvenes en situación de vulnerabilidad social sin atacar las causas estructurales del problema.",
        categoria: "Seguridad",
        tipo: "Proyecto",
        fuente: { medio: "T13", url: "https://www.t13.cl/noticia/politica/los-detalles-primeros-proyectos-seguridad-kast-puso-urgencia-congreso-16-3-2026" }
    }
    ,
    {
        id: 25,
        fecha: "2026-03-16",
        titulo: "Operaci\u00f3n Seguridad Total: 2.905 pr\u00f3fugos detenidos en tres d\u00edas",
        descripcion: "El Ministerio de Seguridad P\u00fablica inform\u00f3 que entre el 12 y 14 de marzo, Carabineros y la PDI detuvieron a 2.905 pr\u00f3fugos de la justicia en un megaoperativo nacional. Se realizaron m\u00e1s de 15.000 controles policiales y se incaut\u00f3 m\u00e1s de una tonelada de droga.",
        interpretacion: "El gobierno calific\u00f3 la operaci\u00f3n de \u00e9xito rotundo y anunci\u00f3 que continuar\u00e1 con m\u00e1s instituciones del Estado sumadas al esfuerzo de persecuci\u00f3n. La oposici\u00f3n record\u00f3 que el gobierno anterior realiz\u00f3 operativos similares y cuestion\u00f3 si la metodolog\u00eda de conteo entre pr\u00f3fugos y detenidos en flagrancia es comparable.",
        categoria: "Seguridad",
        tipo: "Administrativo",
        fuente: { medio: "Emol", url: "https://www.emol.com/noticias/Nacional/2026/03/16/1194437/detenidos-operativos-comite-seguridad-kast.html" }
    },
    {
        id: 26,
        fecha: "2026-03-18",
        titulo: "Garc\u00eda Ruminot advierte medidas fiscales ser\u00e1n \"muy dolorosas\"",
        descripcion: "\"Van a obligar a tomar medidas que van a ser para muchas familias, lo m\u00e1s probable que muy, muy dolorosas\", declar\u00f3 el ministro de la Segpres, Jos\u00e9 Garc\u00eda Ruminot, al referirse al ajuste fiscal y a la eventual modificaci\u00f3n del Mepco.",
        interpretacion: "El gobierno argumenta que el d\u00e9ficit fiscal heredado obliga a tomar decisiones dif\u00edciles para restablecer el equilibrio de las finanzas p\u00fablicas. La oposici\u00f3n y economistas independientes advierten que las medidas anunciadas trasladar\u00e1n el costo directamente a las familias de menores ingresos.",
        categoria: "Econom\u00eda",
        tipo: "Declaraci\u00f3n Pol\u00e9mica",
        fuente: { medio: "La Tercera", url: "https://www.latercera.com/pulso/noticia/gobierno-apunta-a-medidas-que-van-a-ser-muy-dolorosas-para-muchas-familias-por-situacion-fiscal-de-chile/" }
    },
    {
        id: 27,
        fecha: "2026-03-18",
        titulo: "Gobierno anuncia revisi\u00f3n y posible modificaci\u00f3n del Mepco",
        descripcion: "El Ejecutivo confirm\u00f3 que estudia cambios al Mecanismo de Estabilizaci\u00f3n de Precios de los Combustibles (Mepco), que cuesta al fisco cerca de US$50 millones por semana. El ministro Quiroz anunci\u00f3 que presentar\u00e1 una propuesta en los pr\u00f3ximos d\u00edas.",
        interpretacion: "El gobierno sostiene que mantener el Mepco en las condiciones actuales genera un costo fiscal insostenible dado el d\u00e9ficit heredado. Senadores de oposici\u00f3n y expertos advierten que su reducci\u00f3n podr\u00eda elevar el precio de las bencinas hasta $350 por litro, impactando el costo de vida de todas las familias.",
        categoria: "Econom\u00eda",
        tipo: "Declaraci\u00f3n",
        fuente: { medio: "Cooperativa", url: "https://www.cooperativa.cl/noticias/pais/consumidores/combustibles/gobierno-estima-anunciar-cambios-al-mepco-a-mas-tardar-la-proxima/2026-03-18/140612.html" }
    },
    {
        id: 28,
        fecha: "2026-03-18",
        titulo: "Medio Ambiente suspende sitios prioritarios de biodiversidad",
        descripcion: "La ministra Francisca Toledo resolvi\u00f3 suspender el proceso de determinaci\u00f3n de sitios prioritarios para la conservaci\u00f3n de la biodiversidad en el marco de la Ley N\u00b021.600 del SBAP, citando casi 10.000 observaciones t\u00e9cnicas y jur\u00eddicas pendientes.",
        interpretacion: "El gobierno argumenta que la suspensi\u00f3n busca asegurar que los instrumentos respondan a los est\u00e1ndares t\u00e9cnicos vigentes antes de su entrada en vigor. Organizaciones ambientales se\u00f1alan que la medida paraliza un proceso clave de protecci\u00f3n de ecosistemas establecido por ley, suma\u00e1ndose al retiro de los 43 decretos.",
        categoria: "Medio Ambiente",
        tipo: "Administrativo",
        fuente: { medio: "Emol", url: "https://www.emol.com/noticias/Nacional/2026/03/18/1194616/revision-proyectos-retiro-gobierno-kast.html" }
    },
    {
        id: 29,
        fecha: "2026-03-18",
        titulo: "Gobierno reingresa decreto de conservación de Ranitas de Darwin",
        descripcion: "El Ministerio del Medio Ambiente reingresó el Decreto N°38 que aprueba el Plan RECOGE de recuperación y conservación de las Ranitas de Darwin (Rhinoderma darwinii y Rhinoderma rufum), un día después de haberlo retirado junto a otros 42 decretos ambientales. La Contraloría tomó razón el mismo 18 de marzo.",
        interpretacion: "La ministra Francisca Toledo señaló que el reingreso se realizó tras una revisión técnica exhaustiva, y que seguirán trabajando para proteger estas especies en peligro crítico. Organizaciones ambientales valoraron la medida pero advirtieron que los 42 decretos restantes siguen retirados sin plazo definido para su reingreso.",
        categoria: "Medio Ambiente",
        tipo: "Decreto",
        estado_seguimiento: "ejecutada",
        fuente: { medio: "BioBioChile", url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/19/gobierno-reingresa-decreto-y-contraloria-da-luz-verde-a-la-proteccion-de-la-ranita-de-darwin.shtml" }
    }
]