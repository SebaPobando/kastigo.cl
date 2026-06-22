'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 de marzo al 22 de junio de 2026
 *
 * POLÍTICA EDITORIAL:
 * - descripcion: hechos objetivos verificables con fuente citada
 *
 * POLÍTICA DE URLs: cada URL fue verificada en resultados de búsqueda reales.
 * Cronología: 11 de marzo al 22 de junio de 2026
 * Total de eventos: 108
 */

const eventosGubernamentales = [
    {
        "id": 1,
        "fecha": "2026-03-11",
        "titulo": "Kast asume con discurso de \"gobierno de emergencia\"",
        "descripcion": "José Antonio Kast asumió la presidencia y desde el balcón de La Moneda declaró que recibió \"un país en peores condiciones de las que podíamos imaginar\", con finanzas públicas debilitadas y narcotráfico avanzado. Reafirmó que Chile necesita un gobierno de emergencia.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/kast-asume-la-presidencia-de-la-republica-llama-a-la-unidad-y-se-compromete-a-recuperar-el-pais/" }
    },
    {
        "id": 2,
        "fecha": "2026-03-11",
        "titulo": "Decreto de Cierre Fronterizo y Plan Escudo Fronterizo",
        "descripcion": "Kast firmó el decreto que implementa la Política Nacional de Cierre Fronterizo en la macrozona norte, declarando Zona Militar el sector fronterizo con Bolivia. Instruyó al Ejército a ejecutar el Plan Escudo con barreras físicas, drones y aumento de dotación.",
        "categoria": "Seguridad",
        "tipo": "Decreto",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/11/presidente-kast-firma-primeros-decretos-cierre-fronterizo-y-auditoria-total-marcan-inicio-de-gobierno.shtml" }
    },
    {
        "id": 3,
        "fecha": "2026-03-11",
        "titulo": "Decretos de auditoría fiscal, reconstrucción y anti-permisología",
        "descripcion": "Kast firmó en su primera noche decretos de auditoría integral al gasto del Estado, encargo al MINVU de la reconstrucción en Valparaíso, Ñuble y Biobío, y destrabe de 51 proyectos paralizados en el SEIA con más de US$16.000 millones en inversión.",
        "categoria": "Economía",
        "tipo": "Decreto",
        "fuente": { "medio": "CNN Chile", "url": "https://www.cnnchile.com/pais/cierre-fronterizo-auditoria-total-y-destrabar-inversion-los-primeros-decretos-e-instrucciones-firmados-por-kast_20260311/" }
    },
    {
        "id": 4,
        "fecha": "2026-03-11",
        "titulo": "Decreto de reconstrucción centralizado en MINVU",
        "descripcion": "Kast encargó al Ministerio de Vivienda y Urbanismo la conducción directa del proceso de reconstrucción en las zonas afectadas por incendios forestales, desburocratizando los subsidios y concentrando la gestión.",
        "categoria": "Vivienda",
        "tipo": "Decreto",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/03/11/1194042/grandes-medidas-inicio-gobierno-kast.html" }
    },
    {
        "id": 5,
        "fecha": "2026-03-12",
        "titulo": "Acuerdo Chile-EEUU sobre minerales críticos y litio",
        "descripcion": "Kast firmó junto al vicesecretario de Estado de EE.UU. Christopher Landau una Declaración Conjunta para establecer consultas sobre minerales críticos y tierras raras, incluyendo litio y cobre.",
        "categoria": "Economía",
        "tipo": "Declaración",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/comercio-exterior/chile-y-estados-unidos-firman-declaracion-conjunta-sobre-minerales-criticos" }
    },
    {
        "id": 6,
        "fecha": "2026-03-12",
        "titulo": "Hacienda instruye recorte del 10% en dotación pública",
        "descripcion": "Hacienda emitió una circular obligando a todos los ministerios a reducir su personal a contrata y honorarios en un 10% antes de fin de marzo, como primera medida del plan de ajuste fiscal.",
        "categoria": "Laboral",
        "tipo": "Administrativo",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/politica/hacienda-firmo-la-rebaja-del-3-del-presupuesto-para-todos-los-ministerios" }
    },
    {
        "id": 7,
        "fecha": "2026-03-13",
        "titulo": "Ministro Quiroz declara \"fisco sin caja\" heredado del gobierno anterior",
        "descripcion": "\"Hemos heredado del anterior un fisco sin caja. La caja con que cerró la administración anterior fue de US$40 millones al 31 de diciembre de 2025, cuando normalmente termina entre US$3 mil y US$4 mil millones\", declaró Quiroz en su primera conferencia de prensa.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/gobierno/ministro-de-hacienda-boric-le-heredo-a-kast-un-fisco-sin-caja/2026-03-13/141401.html" }
    },
    {
        "id": 8,
        "fecha": "2026-03-13",
        "titulo": "Decreto de expulsión administrativa inmediata de extranjeros",
        "descripcion": "Se publicó el decreto que permite la expulsión administrativa expedita de extranjeros que cometan delitos sin esperar condena judicial firme, ampliando las causales de expulsión inmediata.",
        "categoria": "Seguridad",
        "tipo": "Decreto",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/13/gobierno-de-kast-precisa-que-construccion-de-zanjas-en-frontera-norte-comenzara-en-tres-dias.shtml" }
    },
    {
        "id": 9,
        "fecha": "2026-03-13",
        "titulo": "Kast anuncia uso de facultad de indulto para uniformados del estallido",
        "descripcion": "\"La facultad de indulto es una facultad que hasta el día de hoy tiene el Presidente de la República y yo la voy a utilizar\", declaró Kast al confirmar que estudiará caso a caso el indulto a uniformados condenados por hechos ocurridos durante el estallido social de 2019.",
        "categoria": "Política",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/indulto-presidencial-quienes-serian-primeros-uniformados-indultados-por-kast-13-3-2026" }
    },
    {
        "id": 10,
        "fecha": "2026-03-14",
        "titulo": "Plan de Reconstrucción Nacional con 40 medidas presentado en Lirquén",
        "descripcion": "Kast presentó desde Lirquén (Biobío) el proyecto de ley de Reconstrucción Nacional con 40 medidas en cinco ejes: reconstrucción física, reactivación económica, ajuste fiscal, fortalecimiento institucional y seguridad.",
        "categoria": "Política",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html" }
    },
    {
        "id": 11,
        "fecha": "2026-03-14",
        "titulo": "Proyecto de rebaja del Impuesto Corporativo del 27% al 23%",
        "descripcion": "El Ejecutivo incluyó en el Plan de Reconstrucción Nacional la rebaja del Impuesto de Primera Categoría del 27% al 23% para las grandes empresas, presentada como medida de reactivación económica.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/plan-de-reconstruccion-nacional-de-kast-divide-al-congreso-por-rebaja-de-impuestos-y-ajustes-a-la-gratuidad/" }
    },
    {
        "id": 12,
        "fecha": "2026-03-15",
        "titulo": "Ministro Mas: \"No nos vamos a equivocar\" priorizando empleos sobre medioambiente",
        "descripcion": "\"No nos vamos a equivocar si tenemos que priorizar tres arbolitos a 100 mil empleos\", afirmó el biministro de Economía y Minería Daniel Mas al defender el decreto de aceleración de permisos ambientales.",
        "categoria": "Medio Ambiente",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/15/critican-a-ministro-mas-por-decir-que-no-se-equivocara-si-prioriza-100-mil-empleos-sobre-3-arbolitos.shtml" }
    },
    {
        "id": 13,
        "fecha": "2026-03-15",
        "titulo": "Hacienda firma oficio de recorte del 3% en todos los ministerios",
        "descripcion": "El ministro Quiroz firmó y distribuyó a las 24 carteras del Gobierno Central el oficio que mandata una reducción de US$4.000 millones, compuesta de un recorte transversal del 3% del gasto bruto más US$1.000 millones adicionales.",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/ministro-quiroz-confirma-este-lunes-se-firmara-oficio-recorte-3-ministerios-15-3-2026" }
    },
    {
        "id": 14,
        "fecha": "2026-03-15",
        "titulo": "Proyecto para limitar gratuidad universitaria a estudiantes hasta 30 años",
        "descripcion": "El Ejecutivo anunció dentro del Plan de Reconstrucción Nacional que limitará el acceso a la gratuidad universitaria para nuevos estudiantes mayores de 30 años y congelará su expansión a nuevos deciles de ingreso.",
        "categoria": "Social",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-presento-plan-de-reconstruccion-nacional-que-incluye-rebaja-de/2026-03-14/121834.html" }
    },
    {
        "id": 15,
        "fecha": "2026-03-16",
        "titulo": "Inicio de construcción de zanjas en frontera norte",
        "descripcion": "El Ejército inició las obras de excavación de zanjas en el sector fronterizo de Colchane, como parte del Plan Escudo Fronterizo. El Presidente Kast presenció el inicio de las obras.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/03/16/1194455/kast-retroexcavadora-escudo-fronterizo.html" }
    },
    {
        "id": 16,
        "fecha": "2026-03-16",
        "titulo": "Operación Seguridad Total: 2.905 prófugos detenidos en tres días",
        "descripcion": "El Ministerio de Seguridad Pública informó que entre el 12 y 14 de marzo, Carabineros y la PDI detuvieron a 2.905 prófugos de la justicia en un megaoperativo nacional. Se realizaron más de 15.000 controles policiales y se incautó más de una tonelada de droga.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/03/16/1194437/detenidos-operativos-comite-seguridad-kast.html" }
    },
    {
        "id": 17,
        "fecha": "2026-03-16",
        "titulo": "Gobierno ingresa 20 urgencias legislativas al Congreso",
        "descripcion": "La Segpres ingresó al Congreso un paquete de 20 proyectos de ley con distintos niveles de urgencia: 3 con discusión inmediata (tipificar ingreso clandestino, incorporar Gendarmería a Fuerzas de Orden, y crear Subsistema de Inteligencia Económica), 13 con suma urgencia y 4 con urgencia simple.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/segpres-ingresa-primeras-urgencias-legislativas-con-dos-iniciativas-de-boric-con-discusion-inmediata.shtml" }
    },
    {
        "id": 18,
        "fecha": "2026-03-16",
        "titulo": "MINVU extiende prórroga de permisos de edificación a 30 meses",
        "descripcion": "El Ministerio de Vivienda publicó en el Diario Oficial un decreto que amplía de 18 a 30 meses la prórroga extraordinaria de permisos de edificación para proyectos que no han podido iniciar obras. La medida beneficia aproximadamente 430 proyectos equivalentes a cerca de 60.000 viviendas.",
        "categoria": "Vivienda",
        "tipo": "Decreto",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/empresas/construccion/es-oficial-minvu-extiende-prorroga-de-permisos-de-edificacion-y-da-nuevo" }
    },
    {
        "id": 19,
        "fecha": "2026-03-17",
        "titulo": "Gobierno retira 43 decretos ambientales de Contraloría",
        "descripcion": "El Ministerio de Medio Ambiente retiró 43 decretos supremos aún en trámite ante la Contraloría, incluyendo creación de parques nacionales, normas de emisión y la protección del pingüino de Humboldt como monumento natural.",
        "categoria": "Medio Ambiente",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/ministerio-del-medio-ambiente-retira-43-decretos-del-gobierno-anterior-incluye-creacion-de-parques.shtml" }
    },
    {
        "id": 20,
        "fecha": "2026-03-17",
        "titulo": "Gobierno retira proyecto de Negociación Colectiva Multinivel del Congreso",
        "descripcion": "El Ejecutivo retiró de tramitación legislativa el proyecto que buscaba fortalecer la negociación sindical por rama de actividad económica. La CUT declaró que el gobierno \"notifica a los trabajadores que van a gobernar sin diálogo\".",
        "categoria": "Laboral",
        "tipo": "Administrativo",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/presidente-kast/gobierno-de-kast-retiro-proyecto-de-negociacion-ramal-del-congreso/2026-03-17/114124.html" }
    },
    {
        "id": 21,
        "fecha": "2026-03-17",
        "titulo": "Corte restablece temporalmente el permiso ambiental de Dominga",
        "descripcion": "La Corte de Apelaciones de Santiago restableció provisoriamente el permiso ambiental del proyecto minero-portuario Dominga, paralizando la resolución del CIUDEN que lo había rechazado en 2021.",
        "categoria": "Medio Ambiente",
        "tipo": "Administrativo",
        "estado_seguimiento": "bloqueada",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/economia/sectores-productivos/mineria/corte-restablecio-temporalmente-el-permiso-ambiental-para-dominga/2026-03-17/111125.html" }
    },
    {
        "id": 22,
        "fecha": "2026-03-17",
        "titulo": "Kast advierte a deudores del CAE que pueden ser publicados",
        "descripcion": "\"¿Quieren aparecer publicados? No solo nosotros podemos hacerlo, puede ser cualquier persona que lo solicite\", advirtió el Presidente Kast a deudores del CAE que no pagan pudiendo hacerlo.",
        "categoria": "Política",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/kast-llama-deudores-del-cae-ponerse-al-dia-advierte-ustedes-quieren-aparecer-pu-17-3-2026" }
    },
    {
        "id": 23,
        "fecha": "2026-03-17",
        "titulo": "Kast: negociación ramal \"no es urgente hoy día\"",
        "descripcion": "\"Hoy tenemos más de 850 mil personas sin trabajo formal. ¿La negociación ramal es urgente hoy día? Nosotros creemos que no\", afirmó Kast desde Antofagasta al defender el retiro del proyecto sindical.",
        "categoria": "Laboral",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/03/17/presidente-kast-defiende-retiro-de-decretos-ambientales-y-negociacion-ramal-no-es-urgente-hoy-dia/" }
    },
    {
        "id": 24,
        "fecha": "2026-03-17",
        "titulo": "Kast defiende retiro de decretos: \"Chile debe volver a ser un país confiable\"",
        "descripcion": "\"Nosotros queremos hacernos responsables de que Chile vuelva a ser un país confiable\", declaró Kast al responder las críticas por el retiro de 43 decretos ambientales, añadiendo que \"ayer vimos el efecto positivo de una máquina excavadora\".",
        "categoria": "Medio Ambiente",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/kast-y-retiro-de-decretos-ambientales-ayer-vimos-el-efecto-positivo-de-una-maquina-excavadora.shtml" }
    },
    {
        "id": 25,
        "fecha": "2026-03-17",
        "titulo": "Senado despacha a ley reforma constitucional de Gendarmería",
        "descripcion": "Con 41 votos a favor, el Senado aprobó la reforma constitucional que incorpora a Gendarmería a las Fuerzas de Orden y Seguridad Pública, trasladándola del Ministerio de Justicia al de Seguridad. El gobierno había otorgado discusión inmediata a la iniciativa.",
        "categoria": "Seguridad",
        "tipo": "Ley",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/17/senado-despacha-reforma-que-incorpora-a-gendarmeria-dentro-de-las-fuerzas-de-orden-y-seguridad.shtml" }
    },
    {
        "id": 26,
        "fecha": "2026-03-17",
        "titulo": "Gobierno retira Plan Nacional de Derechos Humanos de Contraloría",
        "descripcion": "El ministro de Justicia Fernando Rabat confirmó el retiro del Tercer Plan Nacional de Derechos Humanos 2026-2029 desde la Contraloría, argumentando que la nueva administración debe revisarlo antes de reingresarlo. El plan contemplaba 175 medidas en cinco ejes estratégicos.",
        "categoria": "Política",
        "tipo": "Administrativo",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/dd-hh/gobierno-retiro-de-contraloria-el-proyecto-de-plan-nacional-de-derechos/2026-03-17/191357.html" }
    },
    {
        "id": 27,
        "fecha": "2026-03-18",
        "titulo": "247 organizaciones alertan por retrocesos ambientales del gobierno",
        "descripcion": "247 organizaciones socioambientales y científicas firmaron una carta alertando por el retiro de 43 decretos ambientales, que incluyen normas de calidad del aire, regulaciones industriales y protección del pingüino de Humboldt.",
        "categoria": "Medio Ambiente",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/247-organizaciones-y-cientos-de-particulares-firman-carta-alertando-retrocesos-ambientales-de-kast.shtml" }
    },
    {
        "id": 28,
        "fecha": "2026-03-18",
        "titulo": "Suma Urgencia al proyecto de Control de Identidad desde los 14 años",
        "descripcion": "El Ejecutivo otorgó Suma Urgencia al proyecto de ley que amplía las facultades de control preventivo de identidad a menores de 14 años y reduce los plazos para el control de detención.",
        "categoria": "Seguridad",
        "tipo": "Proyecto",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/los-detalles-primeros-proyectos-seguridad-kast-puso-urgencia-congreso-16-3-2026" }
    },
    {
        "id": 29,
        "fecha": "2026-03-18",
        "titulo": "García Ruminot advierte medidas fiscales serán \"muy dolorosas\"",
        "descripcion": "\"Van a obligar a tomar medidas que van a ser para muchas familias, lo más probable que muy, muy dolorosas\", declaró el ministro de la Segpres, José García Ruminot, al referirse al ajuste fiscal y a la eventual modificación del Mepco.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/pulso/noticia/gobierno-apunta-a-medidas-que-van-a-ser-muy-dolorosas-para-muchas-familias-por-situacion-fiscal-de-chile/" }
    },
    {
        "id": 30,
        "fecha": "2026-03-18",
        "titulo": "Gobierno anuncia revisión y posible modificación del Mepco",
        "descripcion": "El Ejecutivo confirmó que estudia cambios al Mecanismo de Estabilización de Precios de los Combustibles (Mepco), que cuesta al fisco cerca de US$50 millones por semana. El ministro Quiroz anunció que presentará una propuesta en los próximos días.",
        "categoria": "Economía",
        "tipo": "Declaración",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/consumidores/combustibles/gobierno-estima-anunciar-cambios-al-mepco-a-mas-tardar-la-proxima/2026-03-18/140612.html" }
    },
    {
        "id": 31,
        "fecha": "2026-03-18",
        "titulo": "Medio Ambiente suspende sitios prioritarios de biodiversidad",
        "descripcion": "La ministra Francisca Toledo resolvió suspender el proceso de determinación de sitios prioritarios para la conservación de la biodiversidad en el marco de la Ley N°21.600 del SBAP, citando casi 10.000 observaciones técnicas y jurídicas pendientes.",
        "categoria": "Medio Ambiente",
        "tipo": "Administrativo",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/03/18/1194616/revision-proyectos-retiro-gobierno-kast.html" }
    },
    {
        "id": 32,
        "fecha": "2026-03-18",
        "titulo": "Gobierno retira veto a Ley Integral de Personas Mayores",
        "descripcion": "El Ejecutivo anunció el retiro del veto sustitutivo que la administración Boric presentó en febrero al proyecto de Ley Integral de las Personas Mayores y Promoción del Envejecimiento Digno, Activo y Saludable, dejándola lista para ser promulgada.",
        "categoria": "Social",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/18/gobierno-quita-veto-a-proyecto-de-ley-integral-de-personas-mayores-presentado-por-administracion-boric.shtml" }
    },
    {
        "id": 33,
        "fecha": "2026-03-18",
        "titulo": "Ministerio de Energía retira 5 decretos del sector eléctrico",
        "descripcion": "El Ministerio de Energía solicitó a la Contraloría retirar los decretos supremos N°32, 46, 53 y 54 de 2025 y el N°1 de 2026, relativos a la operación del sistema eléctrico, transmisión y generación de pequeña escala.",
        "categoria": "Medio Ambiente",
        "tipo": "Administrativo",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/03/18/ministerio-de-energia-no-se-queda-atras-retiro-de-contraloria-5-decretos-de-administracion-boric/" }
    },
    {
        "id": 34,
        "fecha": "2026-03-19",
        "titulo": "Gobierno reingresa decreto de conservación de Ranitas de Darwin",
        "descripcion": "El Ministerio del Medio Ambiente reingresó el Decreto N°38 que aprueba el Plan RECOGE de recuperación y conservación de las Ranitas de Darwin (Rhinoderma darwinii y Rhinoderma rufum), un día después de haberlo retirado junto a otros 42 decretos ambientales. La Contraloría tomó razón el mismo 19 de marzo.",
        "categoria": "Medio Ambiente",
        "tipo": "Decreto",
        "estado_seguimiento": "ejecutada",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/19/gobierno-reingresa-decreto-y-contraloria-da-luz-verde-a-la-proteccion-de-la-ranita-de-darwin.shtml" }
    },
    {
        "id": 35,
        "fecha": "2026-03-19",
        "titulo": "Gobierno confirmó ingreso de proyecto Mepco al Congreso",
        "descripcion": "Tras reunirse con los presidentes del Senado y la Cámara, el gobierno confirmó que ingresará entre el lunes y martes un proyecto de ley para modificar el Mecanismo de Estabilización de Precios de los Combustibles (Mepco), ante el alza del petróleo por el conflicto entre EEUU e Irán.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/politica/camara-baja/gobierno-ingresara-proyecto-con-cambios-al-mepco-a-inicios-de-la-proxima/2026-03-19/175313.html" }
    },
    {
        "id": 36,
        "fecha": "2026-03-19",
        "titulo": "Quiroz eleva a US$200 millones semanales el costo fiscal del Mepco",
        "descripcion": "\"No vamos a esperar a que la fortuna dé vuelta las cosas mientras gastamos 200 millones de dólares por semana\", declaró el ministro de Hacienda Jorge Quiroz, elevando la estimación anterior de US$50 millones al referirse al costo fiscal del Mepco ante el alza del petróleo.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/03/19/quiroz-insiste-en-ajustes-al-mepco-resistencia-de-la-oposicion-proyecta-dificil-tramitacion-en-el-congreso/" }
    },
    {
        "id": 37,
        "fecha": "2026-03-19",
        "titulo": "Quiroz anuncia ampliación del DFL2 y paquete de vivienda",
        "descripcion": "El ministro de Hacienda Jorge Quiroz anunció la ampliación del DFL2 de dos a tres o más viviendas de hasta 90 m2, con un impuesto único estimado en 5%, como parte del paquete de reactivación del mercado inmobiliario que acompaña la propuesta de eliminar el IVA a la vivienda por 12 meses.",
        "categoria": "Vivienda",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/03/19/mercado-de-la-vivienda-quiroz-compromete-ampliacion-del-subsidio-al-dividendo-y-extension-del-dfl2.shtml" }
    },
    {
        "id": 38,
        "fecha": "2026-03-21",
        "titulo": "Gobierno decide modificar el Mepco por decreto administrativo",
        "descripcion": "El gobierno confirmó que modificará el Mecanismo de Estabilización de Precios de los Combustibles (Mepco) mediante decreto administrativo, descartando la vía legislativa. Al Congreso ingresarán proyectos de ley focalizados en subsidiar la parafina y el transporte público ante el alza del petróleo por el conflicto en Medio Oriente.",
        "categoria": "Economía",
        "tipo": "Decreto",
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/03/21/nunez-confirma-gobierno-modificara-el-mepco-por-decreto-para-frenar-alza-de-combustibles/" }
    },
    {
        "id": 39,
        "fecha": "2026-03-22",
        "titulo": "Gobierno prepara proyectos de ley para parafina y transporte público",
        "descripcion": "El Ejecutivo anunció el ingreso a la Cámara de Diputados de proyectos de ley para subsidiar el precio de la parafina y contener alzas en el transporte público, como medidas complementarias a la modificación del Mepco que se realizará por decreto. El ingreso se confirmó para el lunes o martes de la semana siguiente.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/21/senadora-nunez-rn-el-gobierno-ya-decidio-modificar-el-mepco-por-decreto.shtml" }
    },
    {
        "id": 40,
        "fecha": "2026-03-23",
        "titulo": "Hacienda publica decreto que modifica parámetro del Mepco",
        "descripcion": "El Ministerio de Hacienda publicó en el Diario Oficial un decreto que amplía de dos a cuatro semanas el período de cálculo del precio de paridad de importación de los combustibles, primer ajuste técnico al Mepco. El cambio rige a partir del jueves 26 de marzo.",
        "categoria": "Economía",
        "tipo": "Decreto",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/macro/ad-portas-de-anuncio-de-kast-de-alzas-en-los-combustibles-hacienda" }
    },
    {
        "id": 41,
        "fecha": "2026-03-23",
        "titulo": "Gobierno anuncia Plan Integral de Recuperación para macrozona sur",
        "descripcion": "El gobierno anunció un Plan Integral de Recuperación para La Araucanía y el Biobío que contempla infraestructura digital, agua potable, control de rutas, vivienda y reactivación económica, a presentarse durante la gira presidencial del miércoles 25. El plan incluye una hoja de ruta para el retiro gradual de las Fuerzas Armadas de la zona.",
        "categoria": "Seguridad",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/23/kast-apuesta-por-extender-estado-de-excepcion-mientras-alistan-retiro-gradual-de-ffaa-en-la-macrozona.shtml" }
    },
    {
        "id": 42,
        "fecha": "2026-03-23",
        "titulo": "Gobierno lanza Plan Chile Sale Adelante con 7 medidas de protección",
        "descripcion": "El Ejecutivo anunció el plan \"Chile Sale Adelante\" con siete medidas para contener el impacto del alza de combustibles: congelamiento de tarifas del Sistema RED hasta diciembre 2026, contención del transporte público en regiones, precio de parafina congelado bajo $1.000 por litro durante otoño e invierno, proyecto de ley de discusión inmediata para refinanciar el Fondo de Estabilización del Petróleo a US$60 millones, y subvención de $100.000 mensuales por hasta 6 meses para taxistas.",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/macro/370-por-litro-en-gasolina-de-93-y-580-en-diesel-combustibles-anotaran" }
    },
    {
        "id": 43,
        "fecha": "2026-03-23",
        "titulo": "Kast solicita primera renovación del Estado de Excepción en macrozona sur",
        "descripcion": "El Ejecutivo envió al Congreso la primera solicitud de renovación del Estado de Excepción Constitucional de Emergencia en La Araucanía y las provincias de Arauco y Biobío bajo la administración Kast, vigente de forma casi ininterrumpida desde octubre de 2021. La Cámara votará el martes y el Senado el miércoles.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/el-primer-test-de-kast-la-renovacion-del-estado-de-excepcion-en-la-araucania-y-el-biobio/" }
    },
    {
        "id": 44,
        "fecha": "2026-03-23",
        "titulo": "Quiroz anuncia alza histórica: bencina sube $370 y diésel $580 por litro",
        "descripcion": "El ministro de Hacienda Jorge Quiroz anunció que a partir del jueves 26 de marzo la gasolina de 93 subirá $370 por litro y el diésel $580, el mayor ajuste de precios de combustibles de la historia reciente en Chile. El alza es consecuencia directa del conflicto en Medio Oriente que elevó el barril de petróleo sobre US$100.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/consumidores/combustibles/cambios-al-mepco-bencinas-subiran-370-pesos-y-diesel-tendra-alza-de-580/2026-03-23/203943.html" }
    },
    {
        "id": 45,
        "fecha": "2026-03-24",
        "titulo": "Cancillería retira apoyo de Chile a candidatura de Bachelet en la ONU",
        "descripcion": "La Cancillería emitió un comunicado informando que Chile retira el patrocinio a la candidatura de la expresidenta Michelle Bachelet como secretaria general de la ONU, argumentando que la dispersión de candidaturas latinoamericanas y diferencias con actores relevantes hacen \"inviable esta candidatura\". Chile se abstendrá de apoyar a otro candidato si Bachelet continúa.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/03/24/1195209/kast-retira-apoyo-chile-bachelet.html" }
    },
    {
        "id": 46,
        "fecha": "2026-03-25",
        "titulo": "Contraloría oficia a Sedini por publicación \"Estado en quiebra\"",
        "descripcion": "La contralora Dorothy Pérez ofició a la ministra Mara Sedini exigiéndole en cinco días hábiles informar sobre los recursos públicos, personal involucrado y sustento fáctico de publicaciones oficiales en redes sociales que calificaban al Estado como \"en la quiebra\". El ministro Quiroz se desmarcó del término declarando que \"jamás ocuparía una palabra como esa\".",
        "categoria": "Política",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/consumidores/combustibles/un-estado-en-quiebra-gobierno-borro-publicacion-y-contraloria-oficio/2026-03-25/114457.html" }
    },
    {
        "id": 47,
        "fecha": "2026-03-25",
        "titulo": "Congreso aprueba primera prórroga del Estado de Excepción bajo Kast",
        "descripcion": "La Cámara (122-19) y el Senado (40-1) aprobaron la primera solicitud del gobierno de Kast para renovar el Estado de Excepción Constitucional de Emergencia en La Araucanía y las provincias de Arauco y Biobío, extendiéndolo por 30 días a partir del 27 de marzo.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/congreso-aprueba-primera-prorroga-del-estado-de-excepcion-en-la-macrozona-sur-bajo-el-gobierno-de-kast/" }
    },
    {
        "id": 48,
        "fecha": "2026-03-26",
        "titulo": "Kast promulga Ley de Emergencia Energética Chile Sale Adelante",
        "descripcion": "Kast firmó el decreto de promulgación de la Ley de Emergencia Energética, aprobada por unanimidad en el Congreso, que incluye congelamiento de tarifas RED hasta diciembre 2026, bono mensual de $100.000 por seis meses a taxistas y colectivos, aumento del FEPP en US$60 millones y modificación del impuesto específico a combustibles.",
        "categoria": "Economía",
        "tipo": "Ley",
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/03/26/presidente-kast-promulga-ley-energetica-es-la-respuesta-a-una-emergencia/" }
    },
    {
        "id": 49,
        "fecha": "2026-03-26",
        "titulo": "Kast llama a no dañar el transporte público durante manifestaciones",
        "descripcion": "\"No afectemos más a la patria de lo que ya está afectada; si alguien quiere manifestar su malestar, que no use el transporte público, sobre todo el Metro, para manifestarse\", declaró Kast al promulgar la Ley de Emergencia Energética, en medio de protestas en Santiago por el alza de combustibles.",
        "categoria": "Política",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/presidente-kast-promulga-ley-emergencia-energetica-medio-alza-combustibles-26-3-2026" }
    },
    {
        "id": 50,
        "fecha": "2026-03-28",
        "titulo": "Hacienda instruye a Tesorería iniciar cobro a deudores del CAE",
        "descripcion": "El Ministerio de Hacienda instruyó a la Tesorería General de la República iniciar notificaciones de cobro a deudores morosos del CAE con ingresos superiores a $5 millones mensuales desde la primera semana de abril. Se identificaron 1.800 personas con una deuda promedio de $11 millones, con posibilidad de descuentos desde cuentas bancarias y embargos.",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/28/gobierno-notificara-a-deudores-del-cae-con-altos-ingresos-no-descartan-cobros-desde-cuentas-bancarias.shtml" }
    },
    {
        "id": 51,
        "fecha": "2026-03-30",
        "titulo": "Gobierno retira decreto que implementa nueva Ley de Adopción",
        "descripcion": "El Ejecutivo solicitó a la Contraloría el retiro del Decreto Supremo N°2 de 2026 del Ministerio de Desarrollo Social, que aprueba el reglamento de la Ley de Adopción (Ley 21.760), dejando su implementación en pausa. La ministra Wulf sostuvo que \"en nada estamos retrocediendo\".",
        "categoria": "Social",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/30/gobierno-de-kast-ordena-retirar-decreto-que-implementaba-la-nueva-ley-de-adopcion.shtml" }
    },
    {
        "id": 52,
        "fecha": "2026-03-31",
        "titulo": "Kast justifica destitución de directora de SernamEG en tratamiento de cáncer",
        "descripcion": "\"Es un hecho lamentable, porque afecta la parte humana de una persona. Pero nosotros tenemos que asumir con responsabilidad lo que es la gestión de un gobierno que vela por el bien de todos los chilenos\", declaró Kast al ser consultado por la solicitud de renuncia no voluntaria de la directora del SernamEG, quien se encontraba en tratamiento oncológico.",
        "categoria": "Social",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/31/kast-justifica-salida-de-directora-de-sernameg-con-cancer-hemos-encontrado-situaciones-complejas.shtml" }
    },
    {
        "id": 53,
        "fecha": "2026-04-06",
        "titulo": "Kast se reúne con Milei en primera gira internacional",
        "descripcion": "En su primer viaje oficial al exterior, Kast se reunió con el presidente argentino Javier Milei en la Casa Rosada para abordar comercio, energía, seguridad y el caso de Galvarino Apablaza. En la declaración conjunta, Chile reafirmó los \"legítimos derechos de soberanía\" de Argentina sobre las Islas Malvinas y sus espacios marítimos.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/gobierno-kast-islas-malvinas-reune-milei-su-primer-viaje-6-4-2026" }
    },
    {
        "id": 54,
        "fecha": "2026-04-07",
        "titulo": "Kast envía dos proyectos de ley de seguridad escolar al Congreso",
        "descripcion": "Tras el asesinato de la inspectora María Victoria Reyes en Calama, Kast firmó y envió al Congreso el proyecto \"Escuelas Protegidas\" —que permite revisión de mochilas, prohibición de ocultamiento facial y sanciones disciplinarias— y otro que agrega nuevos agravantes penales para delitos cometidos en recintos educacionales.",
        "categoria": "Seguridad",
        "tipo": "Proyecto",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/07/kast-firma-proyectos-de-seguridad-en-colegios-con-modificacion-al-codigo-penal-y-revision-de-mochilas.shtml" }
    },
    {
        "id": 55,
        "fecha": "2026-04-10",
        "titulo": "Contraloría investiga almuerzo privado de Kast en La Moneda",
        "descripcion": "La Contraloría otorgó 10 días hábiles a la Presidencia para responder por un almuerzo realizado el 10 de abril en los salones de La Moneda, donde Kast recibió a excompañeros de Derecho de la UC. El organismo fiscalizador busca determinar si se usaron recursos públicos en la actividad privada.",
        "categoria": "Política",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/14/contraloria-da-10-dias-habiles-a-presidencia-para-responder-por-almuerzo-de-kast.shtml" }
    },
    {
        "id": 56,
        "fecha": "2026-04-15",
        "titulo": "Kast anuncia en cadena nacional Ley de Reconstrucción y Desarrollo Económico",
        "descripcion": "En su primera cadena nacional, Kast presentó el Proyecto de Ley de Reconstrucción y Desarrollo Económico con más de 40 medidas en cinco ejes: competitividad tributaria, empleo formal, facilitación ambiental, certeza jurídica y contención del gasto. Fijó meta de crecimiento del 4% anual al 2030 y anunció el primer vuelo de expulsión de migrantes irregulares para el día siguiente.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/15/rebaja-de-impuestos-y-credito-al-empleo-formal-las-claves-del-plan-de-reconstruccion-de-kast.shtml" }
    },
    {
        "id": 57,
        "fecha": "2026-04-15",
        "titulo": "Gobierno activa alerta sanitaria oncológica",
        "descripcion": "El gobierno activó una alerta sanitaria oncológica para enfrentar con urgencia el retraso en la atención de pacientes con cáncer en listas de espera GES y No GES. Kast anunció la medida durante su primera cadena nacional.",
        "categoria": "Social",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/15/kast-destaca-en-cadena-nacional-menos-ingresos-irregulares-y-primer-vuelo-de-muchos-con-expulsados.shtml" }
    },
    {
        "id": 58,
        "fecha": "2026-04-16",
        "titulo": "Primer vuelo de expulsión de migrantes irregulares bajo Kast",
        "descripcion": "Un Boeing 737 de la FACh despegó desde la Base Aérea Pudahuel a las 07:30 horas con 40 extranjeros expulsados: 26 por medidas administrativas y 14 por orden judicial. Los deportados incluían 17 bolivianos, 4 ecuatorianos y 19 colombianos, todos con delitos asociados.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/15/gobierno-de-kast-inicia-este-jueves-expulsion-con-primer-vuelo-de-inmigrantes-irregulares.shtml" }
    },
    {
        "id": 59,
        "fecha": "2026-04-17",
        "titulo": "Gobierno ingresa Ley de Reconstrucción y Desarrollo Económico al Congreso",
        "descripcion": "El Ejecutivo ingresó formalmente a la Cámara de Diputados el proyecto de ley de Reconstrucción y Desarrollo Económico y Social, la denominada \"ley miscelánea\", con más de 40 medidas en cinco ejes: competitividad tributaria, empleo formal, facilitación ambiental, certeza jurídica y contención del gasto. El presidente Alessandri (UDI) confirmó que pasará por más de una comisión.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "El Dínamo", "url": "https://www.eldinamo.cl/politica/2026/04/20/ley-reconstruccion-chile-vamos-desordena-diseno-de-kast/" }
    },
    {
        "id": 60,
        "fecha": "2026-04-22",
        "titulo": "Kast firma y despacha Ley de Reconstrucción al Congreso",
        "descripcion": "El Presidente Kast firmó en La Moneda el proyecto de Ley de Reconstrucción Nacional y Desarrollo Económico y lo despachó formalmente a la Comisión de Hacienda de la Cámara de Diputados. El oficialismo contaría con el apoyo del PNL y algunos diputados del PDG para alcanzar 78 votos en la votación general.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Meganoticias", "url": "https://www.meganoticias.cl/nacional/520098-kast-enviara-congreso-proyecto-reconstruccion-nacional-hoy-miercoles-22-04-2026.html" }
    },
    {
        "id": 61,
        "fecha": "2026-04-22",
        "titulo": "Presidencia anuncia recorte propio de $706 millones para dar ejemplo de austeridad",
        "descripcion": "La Presidencia de la República confirmó que preparaba su propio ajuste presupuestario de $706 millones, enfocado en reducción de personal y costos de actividades y despliegues del jefe de Estado, incluyendo giras, ceremonias y eventos oficiales, como gesto de coherencia con el discurso de austeridad del gobierno.",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/23/los-recortes-llegan-a-presidencia-kast-prepara-reduccion-enfocada-en-personal-y-actividades-oficiales.shtml" }
    },
    {
        "id": 62,
        "fecha": "2026-04-23",
        "titulo": "Registro Civil emite circular que restringe nacionalidad a hijos de migrantes",
        "descripcion": "El Servicio de Registro Civil publicó la Circular N°014, que instruye a los oficiales civiles inscribir como \"hijo de extranjero transeúnte\" a recién nacidos cuyos padres tengan permanencia transitoria, limitando el acceso automático a la nacionalidad chilena. Expertos advirtieron vicios de constitucionalidad y riesgo de apatridia.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/23/transeuntes-registro-civil-reafirma-criterio-para-inscribir-a-hijos-de-extranjeros-sin-residencia.shtml" }
    },
    {
        "id": 63,
        "fecha": "2026-04-24",
        "titulo": "Hacienda filtra oficio con propuesta de eliminar 142 programas sociales",
        "descripcion": "Se conoció un documento interno del Ministerio de Hacienda que propone a los ministerios descontinuar o recortar 142 programas sociales para el Presupuesto 2027, con un ahorro proyectado de US$5.400 millones hasta 2031, afectando salud, educación, niñez, cultura y pueblos indígenas. Kast en campaña había prometido \"no cortar ningún beneficio social que hoy exista\".",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/04/24/las-promesas-de-campana-del-presidente-kast-que-se-caen-con-propuesta-de-recorte-social-de-quiroz/" }
    },
    {
        "id": 64,
        "fecha": "2026-04-29",
        "titulo": "Quiroz firma decreto de recorte de $32.721 millones a Desarrollo Social",
        "descripcion": "El ministro de Hacienda Jorge Quiroz firmó un decreto que concreta una reducción presupuestaria de $32.721 millones al Ministerio de Desarrollo Social, afectando programas de infancia, juventud, pueblos indígenas y discapacidad, incluyendo el ajuar del sistema Chile Crece Contigo.",
        "categoria": "Social",
        "tipo": "Decreto",
        "fuente": { "medio": "El Dínamo", "url": "https://www.eldinamo.cl/pais/2026/04/29/recortes-en-programas-de-desarrollo-social-como-se-ejecutara-la-reduccion-de-32-721-millones-y-la-controversia-que-vuelve-a-complicar-al-gobierno/" }
    },
    {
        "id": 65,
        "fecha": "2026-04-30",
        "titulo": "Kast anuncia Plan Ruta Austral con inversión histórica de $800 mil millones",
        "descripcion": "Desde la Región de Aysén, Kast presentó el plan \"Ruta Austral: Soberanía que Conecta\", con una inversión de $800.393 millones del MOP para 2026-2030 en la Carretera Austral, quintuplicando el promedio histórico de inversión. El plan contempla la pavimentación definitiva de 150 km y 23 proyectos de conectividad vial, marítima y lacustre.",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "destacada": true,
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/05/01/kast-anuncia-inversion-historica-de-800-393-millones-para-la-carretera-austral/" }
    },
    {
        "id": 66,
        "fecha": "2026-05-01",
        "titulo": "Kast declara \"emergencia laboral\" en acto del Día del Trabajo y polemiza por nombre de la fecha",
        "descripcion": "En el Hospital del Trabajador ACHS, en Providencia, Kast encabezó la conmemoración oficial declarando que Chile enfrenta \"una emergencia laboral\", citando más de 900.000 personas sin trabajo formal y 2,5 millones en la informalidad. El telón de fondo decía \"Día del Trabajo\", lo que generó críticas de parlamentarios del Frente Amplio y PPD que reclamaron que la denominación tradicional es \"Día del Trabajador\". El Código del Trabajo, en su artículo 35, establece textualmente \"Día Nacional del Trabajo\".",
        "categoria": "Laboral",
        "tipo": "Declaración",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/presidente-kast/dia-de-los-trabajadores-presidente-kast-alerta-emergencia-laboral-en/2026-05-01/103716.html" }
    },
    {
        "id": 67,
        "fecha": "2026-05-05",
        "titulo": "Encuentro \"Presidente Presente\" en Puerto Montt con 1.095 vecinos",
        "descripcion": "Kast realizó el cuarto encuentro ciudadano \"Presidente Presente\" en la Empresa Portuaria de Puerto Montt, con la participación de 1.095 vecinos. La actividad coincidió con manifestaciones de unas 50 personas que pidieron un puente entre Puntilla Tenglo e isla Tenglo y protestaron por el alza de pasajes. Durante la jornada, Kast cuestionó el financiamiento público a investigaciones académicas señalando que \"a veces 100, 500 millones para una investigación que termina en un libro precioso\" sin generar empleo.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/region-de-los-lagos/2026/05/05/presidente-kast-arriba-a-puerto-montt-en-medio-de-manifestaciones-de-vecinos-y-trabajadores-portuarios.shtml" }
    },
    {
        "id": 68,
        "fecha": "2026-05-06",
        "titulo": "Consejo Fiscal Autónomo expone reparos a la megarreforma ante Comisión de Hacienda",
        "descripcion": "El Consejo Fiscal Autónomo (CFA) expuso ante la Comisión de Hacienda de la Cámara una serie de advertencias sobre los riesgos fiscales de la megarreforma, principalmente respecto a que la rebaja del impuesto de primera categoría no sería compensada por el crecimiento económico proyectado. En la misma sesión, el exministro Mario Marcel estimó que cerrar la brecha fiscal requeriría cerca de US$8.600 millones, cifra que aumentaría a US$10.000 millones al incorporar el costo de la reforma.",
        "categoria": "Economía",
        "tipo": "Declaración",
        "fuente": { "medio": "Nuevo Poder", "url": "https://www.nuevopoder.cl/marcel-cuestiona-ante-comision-real-costo-fiscal-de-la-megareforma-y-propone-cambios/" }
    },
    {
        "id": 69,
        "fecha": "2026-05-06",
        "titulo": "Kast lidera encuentro con más de 130 alcaldes de oficialismo en La Moneda",
        "descripcion": "El Mandatario encabezó en La Moneda una reunión con más de 130 alcaldes de oficialismo en el contexto del proyecto de Ley de Reconstrucción Nacional. Una segunda reunión separada con alcaldes de oposición fue convocada para el 13 de mayo, en medio de tensiones por el artículo de la megarreforma que exime del pago de contribuciones a mayores de 65 años en su primera vivienda y el impacto estimado de US$130 millones en el Fondo Común Municipal.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/nacional/noticia/megarreforma-kast-toma-las-riendas-del-flanco-municipal-y-cita-a-alcaldes-progresistas-por-el-fin-de-las-contribuciones/" }
    },
    {
        "id": 70,
        "fecha": "2026-05-07",
        "titulo": "Comisión de Hacienda aprueba en general la megarreforma con votos del oficialismo",
        "descripcion": "La Comisión de Hacienda de la Cámara aprobó la idea de legislar el proyecto de Ley de Reconstrucción y Desarrollo Económico y Social con ocho votos del oficialismo a favor, cuatro en contra de la oposición de centroizquierda y una abstención del Partido de la Gente. La iniciativa contempla la rebaja gradual del impuesto corporativo del 27% al 23% y un crédito al empleo formal. El gobierno aspira a que sea aprobada antes de septiembre.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Infobae", "url": "https://www.infobae.com/america/agencias/2026/05/07/megarreforma-de-kast-pasa-primer-filtro-en-comision-parlamentaria-con-votos-oficialistas/" }
    },
    {
        "id": 71,
        "fecha": "2026-05-07",
        "titulo": "Kast desde Costa Rica abre puerta al uso de decretos si megarreforma no avanza",
        "descripcion": "Durante una actividad oficial en Costa Rica por el cambio de mando presidencial, Kast señaló: \"Hay situaciones donde el Gobierno puede tomar ciertas determinaciones por decreto\". Reconoció que parte de las modificaciones requieren tramitación parlamentaria, pero enfatizó que el Ejecutivo seguirá utilizando todas las facultades legales disponibles. La declaración fue interpretada como una señal de presión al Congreso ante el incierto escenario de votación en sala.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "24 Horas", "url": "https://www.24horas.cl/actualidad/politica/kast-valora-avance-de-la-megareforma-y-explica-uso-de-decretos" }
    },
    {
        "id": 72,
        "fecha": "2026-05-07",
        "titulo": "Subsecretaría de Prevención del Delito crea Observatorio de Secuestros",
        "descripcion": "La Subsecretaría de Prevención del Delito formalizó la creación del Observatorio de Secuestros, una nueva instancia destinada a fortalecer la prevención, análisis estadístico y coordinación interinstitucional frente al delito de secuestro extorsivo, vinculado en su mayoría a facciones del Tren de Aragua. Según la BIPE de la PDI, los secuestros en la Región Metropolitana pasaron de 19 anuales en 2021 a 63 en 2025, de los cuales 37 fueron extorsivos.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "Gob.cl", "url": "https://www.gob.cl/noticias/alerta-sanitaria-oncologica-primer-reporte-atenciones-resueltas/" }
    },
    {
        "id": 73,
        "fecha": "2026-05-08",
        "titulo": "Segundo vuelo de expulsión: 40 migrantes irregulares deportados a Colombia, Haití y República Dominicana",
        "descripcion": "Un Boeing 737 de la FACh despegó a las 4:30 horas desde el Grupo 10 trasladando 40 personas extranjeras expulsadas: 21 administrativas y 19 judiciales. De ellas, 24 colombianas, 9 haitianas y 7 dominicanas. La ruta cubrió Santiago, Iquique, Bogotá, Puerto Príncipe y Santo Domingo, marcando la reanudación de deportaciones hacia Haití, que no se realizaban desde 2024.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "estado_seguimiento": "ejecutada",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/08/gobierno-de-kast-concreta-segunda-expulsion-con-40-migrantes-irregulares-y-retoma-vuelos-a-haiti.shtml" }
    },
    {
        "id": 74,
        "fecha": "2026-05-08",
        "titulo": "Corte de Valdivia declara inadmisible querella por Ley de Seguridad del Estado en caso Lincolao",
        "descripcion": "La Corte de Apelaciones de Valdivia acogió un recurso de amparo presentado por la Defensoría Penal Pública y declaró inadmisible la ampliación de la querella del Ministerio de Seguridad Pública, que invocaba la Ley de Seguridad del Estado contra los tres estudiantes formalizados por la agresión a la ministra de Ciencia Ximena Lincolao ocurrida el 8 de abril en la UACh. El tribunal argumentó falta de legitimación activa del Gobierno.",
        "categoria": "Política",
        "tipo": "Administrativo",
        "estado_seguimiento": "bloqueada",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/05/08/1199505/desestiman-ampliacion-querella-agresion-lincolao.html" }
    },
    {
        "id": 75,
        "fecha": "2026-05-11",
        "titulo": "Kast entrega Gracia Presidencial al Séptimo Hijo en La Moneda",
        "descripcion": "Kast entregó a la familia Silva Cueto la Gracia Presidencial al Séptimo Hijo, beneficio del Fondo ORASMI dependiente de la Subsecretaría del Interior. La destinataria fue Romina Elizabeth Silva Cueto, séptima hija de una familia de diez hermanos. La gracia consiste en un aporte económico de 10 UF y un reconocimiento simbólico, y mantiene una tradición institucional de más de 50 años.",
        "categoria": "Social",
        "tipo": "Administrativo",
        "fuente": { "medio": "Diario El America", "url": "https://elamerica.cl/2026/05/12/presidente-jose-antonio-kast-entrega-gracia-presidencial-al-septimo-hijo/" }
    },
    {
        "id": 76,
        "fecha": "2026-05-11",
        "titulo": "Kast defiende recorte del 3% en consejo de gabinete a dos meses de asumir",
        "descripcion": "En un consejo de gabinete en La Moneda, Kast destacó el esfuerzo del Ejecutivo de recortar en un 3% los presupuestos en casi todos los ministerios y pidió a sus ministros comenzar a preparar la Cuenta Pública del 1 de junio. Respondiendo a la polémica por un eventual ajuste al programa de alimentación escolar, sostuvo que \"si usamos bien los recursos podemos dar más cobertura\" y admitió que en el instructivo \"quizás la frase se puede modificar\".",
        "categoria": "Economía",
        "tipo": "Administrativo",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/politica/kast-pide-a-ministros-preparar-la-cuenta-publica-del-1-de-junio-y-defiende" }
    },
    {
        "id": 77,
        "fecha": "2026-05-13",
        "titulo": "Kast califica como \"metáfora\" su promesa de campaña de expulsar 300 mil migrantes el primer día",
        "descripcion": "En el aniversario 75 de la Cámara Chilena de la Construcción, Kast afirmó: \"Algunos dicen: llevan 60 días y usted dijo que el primer día iba a expulsar a 300 mil migrantes. Es una metáfora. Si alguien creyó que en un día vamos a expulsar a 300 mil, entendió mal el mensaje\". Al día siguiente matizó: \"Quizás la palabra era hipérbole, no metáfora\". La promesa había aparecido en debates, panfletos y una cuenta regresiva antes del 11 de marzo.",
        "categoria": "Seguridad",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/13/presidente-kast-dice-que-su-promesa-de-expulsar-300-mil-migrantes-el-primer-dia-era-solo-una-metafora.shtml" }
    },
    {
        "id": 78,
        "fecha": "2026-05-13",
        "titulo": "Kast se reúne con más de 100 alcaldes de oposición tras impasse por exclusiones",
        "descripcion": "En el Salón Montt Varas, Kast sostuvo encuentro con alcaldes de oposición liderados por Macarena Ripamonti, Tomás Vodanovic, Karina Delfino, Claudia Pizarro y Miguel Concha. La reunión comenzó con disculpas públicas de Kast tras los reclamos del alcalde de Puente Alto Matías Toledo y otros independientes que acusaron no haber sido convocados. El Presidente sostuvo: \"La crisis no la pueden pagar los que tienen menos, pero para que no lo paguen al país le tiene que ir bien\". Los alcaldes entregaron una carta con seis demandas, incluyendo freno al alza de combustibles y rechazo a la exención de contribuciones.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/presidente-kast/kast-se-reunio-con-alcaldes-de-oposicion-en-la-moneda/2026-05-13/195340.html" }
    },
    {
        "id": 79,
        "fecha": "2026-05-14",
        "titulo": "Comisión de Hacienda aprueba en particular la megarreforma tras sesión de 14 horas",
        "descripcion": "Pasadas las 5 AM del jueves, la Comisión de Hacienda despachó en particular el proyecto de Ley de Reconstrucción Nacional tras procesar cerca de 2.000 indicaciones, en su mayoría de la oposición. Se aprobó la rebaja gradual del impuesto de primera categoría del 27% al 23% para grandes empresas, con respaldo del PNL, Republicanos, UDI, RN y parte del PDG. La DC se abstuvo; PPD, FA y PC votaron en contra. También se aprobó elevar el Fondo de Reconstrucción de $800 mil millones a $1,2 billones. El proyecto pasa a las comisiones de Trabajo y Medio Ambiente antes de votarse en sala el 20 de mayo.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Ex-Ante", "url": "https://www.ex-ante.cl/cronica-la-maratonica-comision-de-hacienda-donde-el-tsunami-de-indicaciones-opositoras-se-evaporo/" }
    },
    {
        "id": 80,
        "fecha": "2026-05-15",
        "titulo": "Kast firma proyecto de ley que simplifica el régimen de patentes mineras",
        "descripcion": "En Copiapó, Kast junto al biministro de Economía y Minería Daniel Mas firmó el proyecto de ley que simplifica el sistema de amparo del Código de Minería, reduce cargas administrativas y entrega mayores certezas a productores. En la misma gira, participó del anuncio de inversión de US$3.000 millones del proyecto Lobo Marte de la minera canadiense Kinross, que contempla operación de 21 años en Copiapó y Tierra Amarilla. El proyecto está en evaluación ambiental.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Prensa Presidencia", "url": "https://prensa.presidencia.cl/comunicado.aspx?id=328908" }
    },
    {
        "id": 81,
        "fecha": "2026-05-16",
        "titulo": "Steinert reconoce que no esperaba exigencia de plan de seguridad formal",
        "descripcion": "La ministra de Seguridad Trinidad Steinert reconoció públicamente que no esperaba que el Congreso le exigiera un plan formal, estructurado y por escrito en materia de seguridad. La declaración generó cuestionamientos transversales, incluyendo del alcalde de Maipú Tomás Vodanovic, quien sostuvo que \"ya no estamos para retóricas\". El presidente de la UDI Guillermo Ramírez salió a respaldar al gobierno indicando que la hoja de ruta sería presentada en la Cuenta Pública del 1 de junio.",
        "categoria": "Seguridad",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/17/oficialismo-pone-fecha-al-plan-de-seguridad-del-gobierno-y-piden-no-usarlo-para-disputa-politica.shtml" }
    },
    {
        "id": 82,
        "fecha": "2026-05-18",
        "titulo": "Comisión de Trabajo aprueba megarreforma pero rechaza cambios al Sence",
        "descripcion": "La Comisión de Trabajo de la Cámara de Diputados aprobó la megarreforma del gobierno, pero el Ejecutivo no consiguió los votos para reponer los cambios al sistema de franquicia tributaria del Sence, medida ya rechazada previamente en Hacienda. Se logró un acuerdo respecto al artículo que endurece sanciones por uso indebido de licencias médicas en el sector público, estableciendo que incumplir el reposo constituirá falta grave al principio de probidad con posible destitución.",
        "categoria": "Laboral",
        "tipo": "Proyecto",
        "fuente": { "medio": "CIPER Chile", "url": "https://www.ciperchile.cl/2026/05/18/radar-18-05-26/" }
    },
    {
        "id": 83,
        "fecha": "2026-05-19",
        "titulo": "Kast realiza el primer cambio de gabinete más rápido desde el retorno a la democracia",
        "descripcion": "A 69 días de asumir, Kast solicitó la renuncia a las ministras Trinidad Steinert (Seguridad Pública) y Mara Sedini (Segegob). Martín Arrau pasó de Obras Públicas al Ministerio de Seguridad. Louis de Grange asumió como biministro de Transportes y Obras Públicas. Claudio Alvarado, ministro del Interior, asumió adicionalmente la Segegob convirtiéndose en biministro y vocero. \"No esperaba ni era lo que tenía pensado para esta etapa del gobierno, pero en base al sentido de urgencia que tiene el país (...) es necesario hacer este ajuste\", declaró Kast. La encuesta Cadem del 17 de mayo había mostrado la aprobación del Presidente cayendo 4 puntos a 36%.",
        "categoria": "Política",
        "tipo": "Administrativo",
        "destacada": true,
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/gobierno/primer-cambio-de-gabinete-del-gobierno-de-kast-salen-las-ministras" }
    },
    {
        "id": 84,
        "fecha": "2026-05-19",
        "titulo": "Cámara cierra primera jornada de debate de la megarreforma con 114 intervenciones",
        "descripcion": "La Cámara de Diputados desarrolló una primera jornada de debate de casi ocho horas sobre la Ley Miscelánea con 114 intervenciones. El ministro de Hacienda Jorge Quiroz defendió la iniciativa señalando que el Ejecutivo esperaba aprobarla \"en todas sus partes\" en los mismos términos en que salió de la Comisión de Hacienda, salvo dos cláusulas ya retiradas: la del Sence y la del expediente digital. La votación en general y particular se fijó para el día siguiente.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/05/19/camara-cierra-tensa-primera-jornada-por-megarreforma-de-kast-manana-se-vota-en-general-y-particular/" }
    },
    {
        "id": 85,
        "fecha": "2026-05-20",
        "titulo": "Cámara aprueba la megarreforma y la despacha al Senado",
        "descripcion": "La Sala de la Cámara aprobó en general la Ley de Reconstrucción Nacional con 90 votos a favor, 59 en contra y una abstención. Al oficialismo se sumaron los votos del PDG e independientes como René Alinco. En la votación en particular se aprobó la rebaja del impuesto corporativo del 27% al 23%, la eliminación de contribuciones para mayores de 65 años en su primera vivienda, la invariabilidad tributaria por 25 años y la reintegración tributaria. Se rechazaron los cambios al Sence, a la Ley de Propiedad Intelectual y la flexibilización de licitaciones del MOP. El gobierno calificó el resultado como un \"respaldo histórico\".",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "destacada": true,
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/camara-de-diputados-despacha-al-senado-megarreforma-se-aprueba-corazon-y-oposicion-apuesta-a-reservas-de-constitucionalidad/" }
    },
    {
        "id": 86,
        "fecha": "2026-05-20",
        "titulo": "Cámara aprueba Sala Cuna Universal y Quiroz anuncia reserva de constitucionalidad",
        "descripcion": "Durante la votación de la megarreforma, la Cámara aprobó el artículo 9 bis sobre Sala Cuna Universal con 82 votos a favor, 48 en contra y 24 abstenciones, tras una indicación opositora del Frente Amplio. La norma obliga a los empleadores a otorgar salas cunas anexas. El ministro de Hacienda Jorge Quiroz hizo reserva de constitucionalidad y anunció que el gobierno recurrirá al Tribunal Constitucional, argumentando que la norma \"contraviene nuestra Constitución y la potestad del Ejecutivo en materia de administración del Estado y responsabilidad por las finanzas públicas\".",
        "categoria": "Social",
        "tipo": "Declaración Polémica",
        "estado_seguimiento": "bloqueada",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/20/camara-aprueba-en-particular-el-megaproyecto-de-reconstruccion-nacional-y-lo-despacha-al-senado.shtml" }
    },
    {
        "id": 87,
        "fecha": "2026-05-20",
        "titulo": "Cámara rechaza artículo 8 de la megarreforma sobre propiedad intelectual",
        "descripcion": "Durante la votación particular de la megarreforma, la Cámara rechazó por 104 votos en contra, 43 a favor (todos del oficialismo) y 7 abstenciones el Artículo 8, que permitía reproducir y distribuir obras sin autorización ni pago a su autor a escala masiva. La norma había sido replicada textualmente de una propuesta presentada por el gobierno de Gabriel Boric en 2024 y requería al menos 78 votos para su aprobación.",
        "categoria": "Cultura",
        "tipo": "Proyecto",
        "estado_seguimiento": "bloqueada",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/camara-de-diputados-despacha-al-senado-megarreforma-se-aprueba-corazon-y-oposicion-apuesta-a-reservas-de-constitucionalidad/" }
    },
    {
        "id": 88,
        "fecha": "2026-05-21",
        "titulo": "Kast encabeza su primer 21 de mayo y llama a \"recuperar el amor por Chile\"",
        "descripcion": "En su primera ceremonia oficial por el Día de las Glorias Navales como jefe de Estado, Kast encabezó el desfile cívico-militar en la Plaza Sotomayor de Valparaíso con más de 2 mil efectivos de las Fuerzas Armadas y de Orden. Tras el desfile lanzó \"un llamado a todos los líderes políticos a que recuperemos ese amor por Chile\". Esta versión incluyó el regreso de las bandas instrumentales de todas las ramas de las Fuerzas Armadas y Carabineros, incluyendo delegaciones de la Escuela Naval, el Ejército, la Fuerza Aérea y la Academia Politécnica Naval.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "T13", "url": "https://www.t13.cl/noticia/politica/mensaje-presidente-kast-desfile-21-mayo-llamado-lideres-politicos-recuperemos-amor-21-5-2026" }
    },
    {
        "id": 89,
        "fecha": "2026-05-21",
        "titulo": "Oposición anticipa críticas a la Cuenta Pública del 1 de junio por \"promesas incumplidas\"",
        "descripcion": "A diez días de la primera Cuenta Pública de Kast ante el Congreso, parlamentarios de oposición anticiparon cuestionamientos al balance de los primeros meses de gobierno. El senador PS Juan Luis Castro señaló que \"el balance tiene de dulce y agraz\". La diputada FA Lorena Fries pidió que el Presidente \"pusiera en el centro el sistema de Sala Cuna\". La Cuenta Pública coincide con la postergación de la votación del reajuste al salario mínimo, debate que se retomará durante la primera semana de junio.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/05/21/oposicion-espera-primera-cuenta-publica-de-kast-con-criticas-a-la-gestion-y-a-promesas-incumplidas.shtml" }
    },
    {
        "id": 90,
        "fecha": "2026-05-18",
        "titulo": "Cámara aprueba prórroga del Estado de Excepción tras acuerdo por más atribuciones a las FF.AA.",
        "descripcion": "La Cámara de Diputados aprobó con 112 votos a favor, 20 en contra y 11 abstenciones la prórroga del Estado de Excepción Constitucional de Emergencia en La Araucanía y las provincias de Arauco y Biobío. El Ejecutivo logró la mayoría tras comprometer cuatro cambios: un proyecto de ley que otorga a las Fuerzas Armadas facultades de control de identidad, registros y detenciones en flagrancia; un mando unificado con un solo Jefe de la Defensa Nacional para ambas regiones; el despliegue del MOP junto a la Fuerza Militar del Trabajo en caminos rurales sin mantención desde 2018; y el fortalecimiento del trabajo policial en la macrozona sur.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/05/18/1200373/estado-de-excepcion.html" }
    },
    {
        "id": 91,
        "fecha": "2026-05-24",
        "titulo": "Tercer vuelo de expulsión: 80 extranjeros deportados en el primer vuelo comercial exclusivo",
        "descripcion": "El gobierno concretó su tercer vuelo de expulsión con la salida de 80 personas hacia Bolivia y Colombia, la primera vez bajo esta administración que se utiliza un avión comercial íntegramente destinado a expulsados, con escoltas de la PDI. El subsecretario del Interior Máximo Pavez destacó que \"en 40 días han salido tres vuelos de expulsión\" con 160 personas hacia cinco países. En lo que va de 2026 se registran 780 expulsiones (683 administrativas y 97 judiciales) y 2.446 salidas voluntarias, en su mayoría de ciudadanos venezolanos.",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "estado_seguimiento": "ejecutada",
        "fuente": { "medio": "Emol", "url": "https://www.emol.com/noticias/Nacional/2026/05/24/1200833/nuevo-vuelo-expulsiones.html" }
    },
    {
        "id": 92,
        "fecha": "2026-05-25",
        "titulo": "Quiroz acusa \"error\" de más de US$10 mil millones en proyección de deuda del gobierno anterior",
        "descripcion": "Al presentar el Informe de Finanzas Públicas del primer trimestre, el ministro de Hacienda Jorge Quiroz y el director de Presupuestos José Pablo Gómez acusaron \"errores aritméticos e inconsistencias técnicas\" en la proyección de deuda bruta 2026-2030 del último IFP del gobierno de Boric, equivalentes a más de US$10 mil millones, lo que llevaría la deuda a superar el límite prudente de 45% del PIB en 2028. El exministro Nicolás Grau descartó el error y acusó a Quiroz de ignorar el efecto del tipo de cambio, la inflación y el PIB nominal en el cálculo.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/pulso/noticia/quiroz-acusa-error-de-mas-us10-mil-millones-en-proyeccion-de-deuda-publica-2026-2030-en-ultimo-informe-del-gobierno-de-boric/" }
    },
    {
        "id": 93,
        "fecha": "2026-05-26",
        "titulo": "Decretos ambientales retirados de Contraloría siguen congelados a dos meses del retiro",
        "descripcion": "A más de dos meses del retiro de 43 decretos ambientales desde la Contraloría, la mayoría sigue sin ser reingresada, incluyendo el que declara monumento natural al pingüino de Humboldt y los que crean los parques nacionales Las Parinas y Lagunas Bravas. El gobierno ha sostenido que los decretos están en revisión técnica, mientras organizaciones científicas y ambientales alertan sobre riesgos para la política ambiental chilena por la paralización de estas protecciones.",
        "categoria": "Medio Ambiente",
        "tipo": "Administrativo",
        "estado_seguimiento": "bloqueada",
        "fuente": { "medio": "The Clinic", "url": "https://www.theclinic.cl/2026/05/26/del-pinguino-de-humboldt-a-juan-fernandez-los-decretos-ambientales-que-siguen-congelados-tras-ser-retirados-de-contraloria-por-el-gobierno-de-kast/" }
    },
    {
        "id": 94,
        "fecha": "2026-05-29",
        "titulo": "Desempleo llega a 9,1%, el más alto en casi cinco años, y gobierno apunta a \"estancamiento\"",
        "descripcion": "El INE informó que la tasa de desocupación del trimestre febrero-abril alcanzó 9,1% a nivel nacional y 9,7% en la Región Metropolitana, la cifra más alta en casi cinco años, con cerca de 950 mil personas sin trabajo. El biministro de Economía Daniel Mas calificó la situación como \"un auténtico drama social\". El gobierno atribuyó las cifras al estancamiento económico heredado, mientras la oposición recordó que el Ejecutivo prometió en campaña la creación acelerada de empleos formales.",
        "categoria": "Economía",
        "tipo": "Declaración",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/05/29/gobierno-lamenta-desempleo-de-91-y-apunta-a-estancamiento-economico/" }
    },
    {
        "id": 95,
        "fecha": "2026-06-01",
        "titulo": "Kast realiza su primera Cuenta Pública: seguridad como eje, fusión de ministerios y bono por hijo",
        "descripcion": "En un discurso de 2 horas y 24 minutos ante el Congreso Pleno en Valparaíso, Kast rindió su primera Cuenta Pública a 82 días de gobierno. Anunció la fusión del Ministerio del Interior con la Segegob, un Plan de Inspección Total contra la corrupción, un Registro Nacional de Vándalos, un Plan Retorno para migrantes irregulares, una ayuda de $30 mil por niño, un nuevo sistema de Sala Cuna Universal y la modernización del sistema tarifario eléctrico. Admitió que \"los últimos indicadores de crecimiento y desempleo son muy negativos\" y que el estado de la economía \"es incluso más complejo de lo que se podía prever\".",
        "categoria": "Política",
        "tipo": "Declaración",
        "destacada": true,
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/bbcl-explica/bbcl-explica-notas/2026/06/01/todas-las-promesas-y-anuncios-hechos-por-jose-antonio-kast-durante-la-cuenta-publica-2026.shtml" }
    },
    {
        "id": 96,
        "fecha": "2026-06-01",
        "titulo": "Imacec de abril cae 1,2%: cuarta baja consecutiva y Quiroz la califica de \"mala noticia\"",
        "descripcion": "El Banco Central informó que el Imacec de abril cayó 1,2% en doce meses, el cuarto mes consecutivo sin cifras positivas, explicado principalmente por el desplome de la minería con una caída de 5,4% en la producción de cobre. El ministro de Hacienda Jorge Quiroz calificó el dato como una \"mala noticia\" y sostuvo que \"este es el país que recibimos\", atribuyendo el deterioro a la administración anterior. Economistas advirtieron que el resultado complica la meta oficial de crecer 4% anual al 2030.",
        "categoria": "Economía",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/06/01/el-ano-2026-no-repunta-actividad-economica-cae-por-cuarto-mes-seguido.shtml" }
    },
    {
        "id": 97,
        "fecha": "2026-06-01",
        "titulo": "Cuenta Pública divide al Congreso: \"convocante\" para el oficialismo, \"sin plan\" para la oposición",
        "descripcion": "El biministro Claudio Alvarado valoró la Cuenta Pública como \"convocante\" y aseguró que el mensaje buscó proyectar acuerdos en seguridad, economía y política social. Desde la oposición se cuestionó la falta de plazos, recursos y claridad en la implementación: Franco Parisi (PDG) dijo que el discurso \"deja con sabor a poco\" por no especificar objetivos ni recursos, y la diputada Nathalie Castillo (PC) acusó \"más promesas que certezas\". Parlamentarias del Frente Amplio consideraron insuficientes los anuncios frente al alza del costo de la vida.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/06/01/convocante-vs-sin-plan-oficialismo-defiende-cuenta-publica-y-oposicion-acusa-falta-de-plazos-recursos-y-ejecucion/" }
    },
    {
        "id": 98,
        "fecha": "2026-06-02",
        "titulo": "Megarreforma inicia su trámite en el Senado bajo tensiones por aumento de deuda pública",
        "descripcion": "El proyecto de Ley de Reconstrucción Nacional y Desarrollo Económico ingresó al Senado para su segundo trámite legislativo, en medio de tensiones por el aumento de la deuda pública. La senadora Paulina Vodanovic (PS) anunció que su sector votará en contra de la idea de legislar, lamentando que el gobierno no separara la reconstrucción de la reforma tributaria. El punto más controvertido sigue siendo la rebaja del Impuesto de Primera Categoría del 27% al 23% con invariabilidad tributaria por 25 años.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/politica/agenda-legislativa/megarreforma-inicia-su-tramite-en-el-senado-bajo-tensiones-por-aumento/2026-06-02/193403.html" }
    },
    {
        "id": 99,
        "fecha": "2026-06-07",
        "titulo": "Kast anuncia desde Chacalluta proyectos para retener migrantes hasta 180 días y penalizar su traslado",
        "descripcion": "Desde el complejo fronterizo Chacalluta en Arica, Kast anunció dos proyectos de ley para endurecer el control migratorio: una reforma constitucional que amplía la retención administrativa de extranjeros con decreto de expulsión desde 5 hasta 60 días, prorrogables hasta 180 con revisiones judiciales, y una modificación al Código Penal que tipifica como delito el traslado de indocumentados dentro del territorio nacional. El gobierno precisó que la retención es una sanción administrativa y no penal; en la oposición advirtieron que el plazo de 180 días genera dudas sobre derechos fundamentales.",
        "categoria": "Seguridad",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/seguridad-ciudadana/planes-antidelincuencia/desde-la-frontera-kast-anuncio-dos-proyectos-de-ley-para-endurecer-el/2026-06-07/191510.html" }
    },
    {
        "id": 100,
        "fecha": "2026-06-08",
        "titulo": "Kast emplaza al Senado por megarreforma: \"La nación votó por este proyecto político\"",
        "descripcion": "En entrevista con radio Cappissima de Arica, Kast defendió la megarreforma ante la incertidumbre de su votación en el Senado y pidió que \"se reconozca que una mayoría de la nación votó por este proyecto político que me toca encabezar\". Desafió a los detractores a presentar \"otra fórmula para generar trabajo e inversión\" y criticó reformas tributarias, educacionales y laborales de administraciones anteriores que, a su juicio, dejaron \"a casi un millón de personas sin trabajo\". La oposición acusa falta de diálogo en la tramitación.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/politica/agenda-legislativa/presidente-kast-emplazo-al-senado-por-megarreforma-la-nacion-voto-por/2026-06-08/105120.html" }
    },
    {
        "id": 101,
        "fecha": "2026-06-09",
        "titulo": "\"Plan Arrau\": gobierno alista seis proyectos de seguridad y migración con suma urgencia",
        "descripcion": "El ministro de Seguridad Martín Arrau detalló un paquete de seis proyectos de ley que ingresarán al Congreso con suma urgencia a fines de junio: la reforma constitucional de retención de migrantes, la penalización del ingreso y salida irregular por pasos no habilitados, la extensión de la flagrancia de 12 a 24 horas, el juicio oral en ausencia, el Registro Nacional de Vándalos e Incivilidades y el fortalecimiento de la carrera funcionaria de Carabineros. El plan contempla además \"descongelar\" otros 22 proyectos y crear Centros de Retención Administrativa. El senador Daniel Núñez (PC) advirtió que las medidas \"van a saturar las cárceles chilenas\" y senadores de ambos sectores alertaron sobre una posible \"inflación legislativa\".",
        "categoria": "Seguridad",
        "tipo": "Administrativo",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/06/09/plan-arrau-gobierno-acelera-ofensiva-migratoria-y-de-seguridad-con-seis-proyectos-urgentes/" }
    },
    {
        "id": 102,
        "fecha": "2026-06-09",
        "titulo": "Quiroz admite que no habrá equilibrio fiscal durante este gobierno",
        "descripcion": "El ministro de Hacienda Jorge Quiroz reconoció que el gobierno no alcanzará el equilibrio fiscal durante el actual mandato, lo que fue señalado como el incumplimiento de una promesa de campaña de Kast, quien había comprometido ordenar las cuentas públicas en su período. El gobierno argumentó que el deterioro fiscal heredado y la caída de la actividad económica hacen inviable la meta original en el plazo comprometido.",
        "categoria": "Economía",
        "tipo": "Declaración Polémica",
        "fuente": { "medio": "El Mostrador", "url": "https://www.elmostrador.cl/noticias/pais/2026/06/09/no-se-cumple-promesa-de-campana-de-kast-quiroz-dice-que-no-habra-equilibrio-fiscal-en-este-gobierno/" }
    },
    {
        "id": 103,
        "fecha": "2026-06-09",
        "titulo": "Comisión de Hacienda del Senado despacha reajuste del salario mínimo a $553.553",
        "descripcion": "La Comisión de Hacienda del Senado aprobó el proyecto de reajuste del salario mínimo y lo dejó listo para su votación en Sala. La propuesta eleva el monto a $553.553 con efecto retroactivo al 1 de mayo y establece que desde el 1 de enero de 2027 se reajustará según la variación acumulada del IPC. La CUT decidió no firmar un acuerdo con el gobierno argumentando que el reajuste es insuficiente frente al alza del costo de la vida, y reiteró su aspiración de avanzar hacia un \"salario vital\".",
        "categoria": "Laboral",
        "tipo": "Proyecto",
        "fuente": { "medio": "Diario Financiero", "url": "https://www.df.cl/economia-y-politica/laboral-personas/comision-de-hacienda-del-senado-despacha-salario-minimo-y-lo-deja-listo" }
    },
    {
        "id": 104,
        "fecha": "2026-06-10",
        "titulo": "Encuesta CEP: 34% aprueba y 52% desaprueba la gestión de Kast en su primera medición",
        "descripcion": "La Encuesta CEP N°96, aplicada entre abril y mayo a 1.469 personas en 122 comunas, mostró que el 34% aprueba y el 52% desaprueba la forma en que Kast conduce su gobierno, en la primera medición del centro de estudios desde su llegada a La Moneda. Un 67% declaró tener poca o ninguna confianza en que el Presidente cumpla sus compromisos de campaña. En el oficialismo destacaron que las cifras superan las del expresidente Boric al dejar el cargo (33% de aprobación), mientras en la oposición las leyeron como una señal de desgaste temprano.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "BioBioChile", "url": "https://www.biobiochile.cl/noticias/nacional/chile/2026/06/10/desaprobacion-al-presidente-kast-llega-a-52-y-aprobacion-al-34-segun-encuesta-cep.shtml" }
    },
    {
        "id": 105,
        "fecha": "2026-06-16",
        "titulo": "Senado despacha a ley el reajuste del salario mínimo a $553.553",
        "descripcion": "El Senado despachó a ley el proyecto que reajusta el ingreso mínimo mensual a $553.553, un alza de $14.553 (2,7%) con efecto retroactivo al 1 de mayo de 2026, que también incrementa la asignación familiar y maternal y el subsidio familiar. Como ninguna de las indicaciones fue aprobada, el proyecto no debió volver a la Cámara de Diputados. El ministro del Trabajo, Tomás Rau, valoró el respaldo y adelantó un segundo reajuste el 1 de enero de 2027 para compensar el IPC del año; la CUT había restado su firma al acuerdo por considerar el monto insuficiente frente al alza del costo de la vida.",
        "categoria": "Laboral",
        "tipo": "Proyecto",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/economia/sueldo-minimo/senado-despacho-ley-que-fija-aumento-de-14-553-pesos-para-el-salario/2026-06-16/195904.html" }
    },
    {
        "id": 106,
        "fecha": "2026-06-17",
        "titulo": "Comisión de Hacienda del Senado aprueba en general la megarreforma de Reconstrucción",
        "descripcion": "La Comisión de Hacienda del Senado aprobó por mayoría la idea de legislar del proyecto de Reconstrucción Nacional y Desarrollo Económico y Social, la \"megarreforma\" del gobierno que rebaja el Impuesto de Primera Categoría del 27% al 23% y agiliza la permisología, dejándolo listo para su votación general en la Sala. El oficialismo defendió la iniciativa como motor de inversión y empleo, mientras la senadora Paulina Vodanovic (PS) reiteró el rechazo de su sector por mezclar la reconstrucción con la reforma tributaria y por el aumento de la deuda pública.",
        "categoria": "Economía",
        "tipo": "Proyecto",
        "fuente": { "medio": "Meganoticias", "url": "https://www.meganoticias.cl/nacional/524893-comision-hacienda-senado-aprueba-proyecto-reconstruccion-nacional-desarrollo-17-06-2026.html" }
    },
    {
        "id": 107,
        "fecha": "2026-06-19",
        "titulo": "Kast hace balance de sus primeros 100 días en su quinto consejo de gabinete",
        "descripcion": "Al cumplir 100 días de gobierno, Kast encabezó su quinto consejo de gabinete y calificó el período como \"bastante intenso\". El Ejecutivo difundió un balance oficial que destaca una reducción de 11,7% en homicidios y femicidios entre el 16 de marzo y el 7 de junio respecto a igual período de 2025, además de 23 mensajes presidenciales y urgencias a más de un centenar de iniciativas. La oposición y diversos analistas cuestionaron que varias promesas de campaña —como el equilibrio fiscal y la baja de precios— no se han cumplido en el plazo comprometido.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "La Tercera", "url": "https://www.latercera.com/politica/noticia/kast-encabeza-su-quinto-consejo-de-gabinete-y-hace-balance-de-sus-primeros-100-dias-han-sido-bastante-intensos/" }
    },
    {
        "id": 108,
        "fecha": "2026-06-21",
        "titulo": "Encuestas a 100 días: Criteria y Cadem muestran desaprobación mayoritaria de Kast",
        "descripcion": "Dos sondeos publicados al cumplirse 100 días de gobierno reflejaron un escenario adverso para el Ejecutivo. Según Criteria, la aprobación de Kast se situó en 39% y la desaprobación en 51%, con un 49% que considera que el gobierno \"fue peor de lo esperado\" frente a un 14% que lo evalúa mejor. La encuesta Cadem, en tanto, midió 44% de aprobación y 53% de desaprobación. En el oficialismo relativizaron las cifras apelando a la dureza del escenario heredado, mientras la oposición las interpretó como una señal de desgaste temprano.",
        "categoria": "Política",
        "tipo": "Declaración",
        "fuente": { "medio": "Cooperativa", "url": "https://www.cooperativa.cl/noticias/pais/politica/encuestas/a-100-dias-de-kast-casi-la-mitad-dice-que-gobierno-fue-peor-de-lo/2026-06-21/121440.html" }
    }
]