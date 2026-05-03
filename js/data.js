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
        "fuente": { "medio": "Radio U. de Chile", "url": "https://radio.uchile.cl/2026/05/01/kast-anuncia-inversion-historica-de-800-393-millones-para-la-carretera-austral/" }
    }
]