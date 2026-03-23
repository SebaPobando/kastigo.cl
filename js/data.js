'use strict';

/**
 * js/data.js — Base de Datos Maestra de Kastigo.cl
 * Cronología: 11 al 23 de marzo de 2026
 *
 * POLÍTICA EDITORIAL:
 * - descripcion: hechos objetivos verificables con fuente citada
 *
 * POLÍTICA DE URLs: cada URL fue verificada en resultados de búsqueda reales.
 * Total de eventos: 39
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
    }
]