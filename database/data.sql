USE polito;

-- ------------------------------------------------------------
-- ↓ collegio table ↓
-- ------------------------------------------------------------
INSERT INTO
    collegio (id, name)
VALUES
    ("CL003", "Collegio di Ingegneria Informatica, del Cinema e Meccatronica"),
    ("CL006", "Collegio di Ingegneria Elettronica, delle Telecomunicazioni e Fisica"),
    ("CL007", "Collegio di Ingegneria per l'Ambiente e il Territorio"),
    ("CL008", "Collegio di Ingegneria Gestionale e della Produzione"),
    ("CL009", "Collegio di Ingegneria Meccanica, Aerospaziale e dell'Autoveicolo"),
    ("CL010", "Collegio di Ingegneria Biomedica"),
    ("CL011", "Collegio di Ingegneria Chimica e dei Materiali"),
    ("CL014", "Collegio di Ingegneria Matematica"),
    ("CL015", "Collegio di Pianificazione e Progettazione"),
    ("CL016", "Collegio di Architettura e Design"),
    ("CL017", "Collegio di Ingegneria Elettrica ed Energetica"),
    ("CL018", "Collegio di Ingegneria Civile ed Edile");

-- ------------------------------------------------------------
-- ↓ degree table ↓
-- ------------------------------------------------------------
INSERT INTO
    degree (id, description, description_en, level, id_collegio)
VALUES
    (
        "32-1",
        "Laurea Triennale - INGEGNERIA DELL'AUTOVEICOLO",
        "Bachelor's Degree - AUTOMOTIVE ENGINEERING",
        "1",
        "CL009"
    ),
    (
        "32-2",
        "Laurea Magistrale - AUTOMOTIVE ENGINEERING (INGEGNERIA DELL'AUTOVEICOLO)",
        "Master's Degree - AUTOMOTIVE ENGINEERING",
        "2",
        "CL009"
    ),
    (
        "32-6",
        "Laurea Triennale - INGEGNERIA DEI MATERIALI",
        "Bachelor's Degree - MATERIALS ENGINEERING",
        "1",
        "CL011"
    ),
    (
        "32-9",
        "Laurea Triennale - INGEGNERIA ELETTRICA",
        "Bachelor's Degree - ELECTRICAL ENGINEERING",
        "1",
        "CL017"
    ),
    (
        "32-11",
        "Laurea Triennale - INGEGNERIA AEROSPAZIALE",
        "Bachelor's Degree - AEROSPACE ENGINEERING",
        "1",
        "CL009"
    ),
    (
        "32-12",
        "Laurea Triennale - INGEGNERIA BIOMEDICA",
        "Bachelor's Degree - BIOMEDICAL ENGINEERING",
        "1",
        "CL010"
    ),
    (
        "32-13",
        "Laurea Triennale - INGEGNERIA CHIMICA E ALIMENTARE",
        "Bachelor's Degree - CHEMICAL AND FOOD ENGINEERING",
        "1",
        "CL011"
    ),
    (   "32-14", 
        "Laurea Triennale - INGEGNERIA CIVILE",
        "Bachelor's Degree - CIVIL ENGINEERING",
        "1",
        "CL018"
    ),
    (   "32-17", 
        "Laurea Triennale - INGEGNERIA EDILE",
        "Bachelor's Degree - BUILDING ENGINEERING",
        "1",
        "CL018"
    ),
    (
        "32-18",
        "Laurea Triennale - INGEGNERIA ENERGETICA",
        "Bachelor's Degree - ENERGY ENGINEERING",
        "1",
        "CL017"
    ),
    (
        "32-19",
        "Laurea Triennale - INGEGNERIA MECCANICA (MECHANICAL ENGINEERING)",
        "Bachelor's Degree - MECHANICAL ENGINEERING",
        "1",
        "CL009"
    ),
    (
        "32-21", 
        "Laurea Triennale - INGEGNERIA MECCANICA", 
        "Bachelor's Degree - MECHANICAL ENGINEERING",
        "1",
        "CL009"
    ),
    (
        "32-22",
        "Laurea Triennale - INGEGNERIA PER L'AMBIENTE E IL TERRITORIO",
        "Bachelor's Degree - ENVIRONMENTAL AND LAND ENGINEERING",
        "1",
        "CL007"
    ),
    (
        "32-23",
        "Laurea Triennale - MATEMATICA PER L'INGEGNERIA",
        "Bachelor's Degree - MATHEMATICS FOR ENGINEERING",
        "1",
        "CL014"
    ),
    (
        "32-26",
        "Laurea Magistrale - INGEGNERIA AEROSPAZIALE",
        "Master's Degree - AEROSPACE ENGINEERING",
        "2",
        "CL009"
    ),
    (
        "32-27",
        "Laurea Magistrale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE E DELL'INNOVAZIONE TECNOLOGICA",
        "Master's Degree - INDUSTRIAL PRODUCTION AND TECHNOLOGICAL INNOVATION ENGINEERING",
        "2",
        "CL008"
    ),
    (
        "32-28",
        "Laurea Magistrale - INGEGNERIA BIOMEDICA",
        "Master's Degree - BIOMEDICAL ENGINEERING",
        "2",
        "CL010"
    ),
    (
        "32-29",
        "Laurea Magistrale - INGEGNERIA CHIMICA E DEI PROCESSI SOSTENIBILI",
        "Master's Degree - CHEMICAL AND SUSTAINABLE PROCESSES ENGINEERING",
        "2",
        "CL011"
    ),
    (
        "32-30",
        "Laurea Magistrale - INGEGNERIA CIVILE",
        "Master's Degree - CIVIL ENGINEERING",
        "2",
        "CL018"
    ),
    (
        "32-34",
        "Laurea Magistrale - INGEGNERIA EDILE",
        "Master's Degree - BUILDING ENGINEERING",
        "2",
        "CL018"
    ),
    (
        "32-35",
        "Laurea Magistrale - INGEGNERIA ELETTRICA",
        "Master's Degree - ELECTRICAL ENGINEERING",
        "2",
        "CL017"
    ),
    (
        "32-36",
        "Laurea Magistrale - INGEGNERIA ENERGETICA E NUCLEARE",
        "Master's Degree - ENERGY AND NUCLEAR ENGINEERING",
        "2",
        "CL017"
    ),
    (
        "32-37",
        "Laurea Magistrale - INGEGNERIA MECCANICA",
        "Master's Degree - MECHANICAL ENGINEERING",
        "2",
        "CL009"
    ),
    (
        "32-38",
        "Laurea Magistrale - INGEGNERIA PER L'AMBIENTE E IL TERRITORIO",
        "Master's Degree - ENVIRONMENTAL AND LAND ENGINEERING",
        "2",
        "CL007"
    ),
    (
        "32-39",
        "Laurea Magistrale - INGEGNERIA MATEMATICA",
        "Master's Degree - MATHEMATICAL ENGINEERING",
        "2",
        "CL014"
    ),
    (
        "32-42",
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE",
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008"
    ),
    (   
        "32-44", 
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE", 
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008"
    ),
    (
        "32-51", 
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE", 
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008"
    ),
    (
        "32-52", 
        "Laurea Triennale - INGEGNERIA DELL'AUTOVEICOLO (AUTOMOTIVE ENGINEERING)", 
        "Bachelor's Degree - AUTOMOTIVE ENGINEERING",
        "1",
        "CL009"
    ),
    (
        "32-53", 
        "Laurea Magistrale - INGEGNERIA MECCANICA (MECHANICAL ENGINEERING)", 
        "Master's Degree - MECHANICAL ENGINEERING",
        "2",
        "CL009"
    ),
    (
        "32-136",
        "Laurea Magistrale - AGRITECH ENGINEERING",
        "Master's Degree - AGRITECH ENGINEERING",
        "2",
        "CL006"
    ),
    (
        "32-137",
        "Laurea Magistrale - QUANTUM ENGINEERING",
        "Master's Degree - QUANTUM ENGINEERING",
        "2",
        "CL016"
    ),
    (
        "32-138",
        "Laurea Magistrale - CYBERSECURITY",
        "Master's Degree - CYBERSECURITY",
        "2",
        "CL003" 
    ),
    (
        "32-139",
        "Laurea Magistrale - CYBERSECURITY",
        "Master's Degree - CYBERSECURITY",
        "2",
        "CL003"
    ),
    (
        "32-141",
        "Laurea Magistrale - CIVIL ENGINEERING",
        "Master's Degree - CIVIL ENGINEERING",
        "2",
        "CL018"
    ),
    (
        "32-282",
        "Laurea Triennale - CIVIL AND ENVIRONMENTAL ENGINEERING",
        "Bachelor's Degree - CIVIL AND ENVIRONMENTAL ENGINEERING",
        "1",
        "CL018"
    ),
    (
        "32-283",
        "Laurea Magistrale - GEORESOURCES AND GEOENERGY ENGINEERING",
        "Master's Degree - GEORESOURCES AND GEOENERGY ENGINEERING",
        "2",
        "CL007"
    ),
    (
        "32-284",
        "Laurea Magistrale - INDUSTRIAL CHEMISTRY FOR CIRCULAR AND BIO ECONOMY",
        "Master's Degree - INDUSTRIAL CHEMISTRY FOR CIRCULAR AND BIO ECONOMY",
        "2",
        "CL011"
    ),
    (
        "32-932",
        "Laurea Magistrale - INGEGNERIA DEI MATERIALI PER L'INDUSTRIA 4.0",
        "Master's Degree - MATERIALS ENGINEERING FOR INDUSTRY 4.0",
        "2",
        "CL011"
    ),
    (
        "37-1",
        "Laurea Triennale - INGEGNERIA ELETTRONICA",
        "Bachelor's Degree - ELECTRONIC ENGINEERING",
        "1",
        "CL006"
    ),
    (
        "37-3",
        "Laurea Triennale - INGEGNERIA INFORMATICA",
        "Bachelor's Degree - COMPUTER ENGINEERING",
        "1",
        "CL003"
    ),
    (
        "37-9",
        "Laurea Triennale - INGEGNERIA FISICA",
        "Bachelor's Degree - PHYSICAL ENGINEERING",
        "1",
        "CL006" 
    ),
    (
        "37-10", 
        "Laurea Triennale - INGEGNERIA INFORMATICA (COMPUTER ENGINEERING)", 
        "Bachelor's Degree - COMPUTER ENGINEERING",
        "1",
        "CL003"
    ),
    (
        "37-13",
        "Laurea Magistrale - INGEGNERIA ELETTRONICA (ELECTRONIC ENGINEERING)",
        "Master's Degree - ELECTRONIC ENGINEERING",
        "2",
        "CL006"
    ),
    (
        "37-17",
        "Laurea Triennale - ELECTRONIC AND COMMUNICATIONS ENGINEERING (INGEGNERIA ELETTRONICA E DELLE COMUNICAZIONI)",
        "Bachelor's Degree - ELECTRONIC AND COMMUNICATIONS ENGINEERING",
        "1",
        "CL006"
    ),
    (
        "37-18",
        "Laurea Magistrale - INGEGNERIA INFORMATICA (COMPUTER ENGINEERING)",
        "Master's Degree - COMPUTER ENGINEERING",
        "2",
        "CL003"
    ),
    (
        "37-20",
        "Laurea Magistrale - ICT FOR SMART SOCIETIES (ICT PER LA SOCIETA' DEL FUTURO)",
        "Master's Degree - ICT FOR SMART SOCIETIES",
        "2",
        "CL003"
    ),
    (
        "37-21",
        "Laurea Triennale - INGEGNERIA DEL CINEMA E DEI MEZZI DI COMUNICAZIONE",
        "Bachelor's Degree - CINEMA AND MEDIA ENGINEERING",
        "1",
        "CL003"
    ),
    (
        "37-22",
        "Laurea Magistrale - INGEGNERIA DEL CINEMA E DEI MEZZI DI COMUNICAZIONE",
        "Master's Degree - CINEMA AND MEDIA ENGINEERING",
        "2",
        "CL003"
    ),
    (
        "37-23",
        "Laurea Magistrale - NANOTECHNOLOGIES FOR ICTs (NANOTECNOLOGIE PER LE ICT)",
        "Master's Degree - NANOTECHNOLOGIES FOR ICTs",
        "2",
        "CL006"
    ),
    (
        "37-24",
        "Laurea Magistrale - PHYSICS OF COMPLEX SYSTEMS (FISICA DEI SISTEMI COMPLESSI)",
        "Master's Degree - PHYSICS OF COMPLEX SYSTEMS",
        "2",
        "CL006"
    ),
    (
        "37-55",
        "Laurea Magistrale - MECHATRONIC ENGINEERING (INGEGNERIA MECCATRONICA)",
        "Master's Degree - MECHATRONIC ENGINEERING",
        "2",
        "CL003"
    ),
    (
        "37-320",
        "Laurea Magistrale - DATA SCIENCE AND ENGINEERING",
        "Master's Degree - DATA SCIENCE AND ENGINEERING",
        "2",
        "CL003"
    ),
    (
        "37-930",
        "Laurea Magistrale - COMMUNICATIONS ENGINEERING",
        "Master's Degree - COMMUNICATIONS ENGINEERING",
        "2",
        "CL006"
    ),
    (
        "38-1",
        "Laurea Magistrale - INGEGNERIA GESTIONALE",
        "Master's Degree - ENGINEERING AND MANAGEMENT",
        "2",
        "CL008"
    ),
    (
        "38-3",
        "Laurea Triennale - INGEGNERIA GESTIONALE",
        "Bachelor's Degree - ENGINEERING AND MANAGEMENT",
        "1",
        "CL008"
    ),
    (   
        "38-5", 
        "Laurea Triennale - INGEGNERIA GESTIONALE", 
        "Bachelor's Degree - ENGINEERING AND MANAGEMENT",
        "1",
        "CL008"
    ),
    (
        "38-10", 
        "Laurea Magistrale - INGEGNERIA GESTIONALE (ENGINEERING AND MANAGEMENT)", 
        "Master's degree - ENGINEERING AND MANAGEMENT",
        "2",
        "CL008"
    ),
    (
        "38-281",
        "Laurea Triennale - TECNOLOGIE PER L'INDUSTRIA MANIFATTURIERA",
        "Bachelor's Degree - INDUSTRIAL MANUFACTURING TECHNOLOGIES",
        "1",
        "CL008"
    ),
    (
        "80-1",
        "Laurea Triennale - ARCHITETTURA",
        "Bachelor's Degree - ARCHITECTURE",
        "1",
        "CL016"
    ),
    (   
        "80-2", 
        "Laurea Triennale - ARCHITETTURA (ARCHITECTURE)", 
        "Bachelor's Degree - ARCHITECTURE",
        "1",
        "CL016"
    ),
    (
        "81-4",
        "Laurea Magistrale - DESIGN SISTEMICO",
        "Master's Degree - SYSTEMIC DESIGN",
        "2",
        "CL016"
    ),
    (
        "81-5",
        "Laurea Magistrale - ARCHITETTURA COSTRUZIONE CITTA'",
        "Master's Degree - ARCHITECTURE CONSTRUCTION CITY",
        "2",
        "CL016"
    ),
    (
        "81-6",
        "Laurea Triennale - DESIGN E COMUNICAZIONE",
        "Bachelor's Degree - DESIGN AND COMMUNICATION",
        "1",
        "CL016"
    ),
    (
        "81-81",
        "Laurea Magistrale - GEOGRAFIA E SCIENZE TERRITORIALI",
        "Master's Degree - GEOGRAPHY AND TERRITORIAL SCIENCES",
        "2",
        "CL015"
    ),
    (
        "81-83",
        "Laurea Magistrale - DIGITAL SKILLS FOR SUSTAINABLE SOCIETAL TRANSITIONS",
        "Master's Degree - DIGITAL SKILLS FOR SUSTAINABLE SOCIETAL TRANSITIONS",
        "2",
        "CL015"
    ),
    (
        "81-84",
        "Laurea Triennale - DESIGN SOSTENIBILE PER IL SISTEMA ALIMENTARE",
        "Bachelor's Degree - SUSTAINABLE DESIGN FOR FOOD SYSTEM",
        "1",
        "CL016"
    ),
    (
        "81-135",
        "Laurea Magistrale - ARCHITETTURA DEL PAESAGGIO",
        "Master's Degree - LANDSCAPE ARCHITECTURE",
        "2",
        "CL015"
    ),
    (
        "81-140",
        "Laurea Magistrale - PIANIFICAZIONE URBANISTICA E TERRITORIALE",
        "Master's Degree - URBAN AND REGIONAL PLANNING",
        "2",
        "CL015" 
    ),
    (
        "82-4",
        "Laurea Magistrale - ARCHITETTURA PER IL PATRIMONIO",
        "Master's Degree - ARCHITECTURE FOR HERITAGE",
        "2",
        "CL016"
    ),
    (
        "82-5",
        "Laurea Triennale - PIANIFICAZIONE TERRITORIALE, URBANISTICA E PAESAGGISTICO-AMBIENTALE",
        "Bachelor's Degree - TERRITORIAL, URBAN, ENVIRONMENTAL AND LANDSCAPE PLANNING",
        "1",
        "CL015"
    ),
    (
        "82-6",
        "Laurea Magistrale - ARCHITETTURA PER LA SOSTENIBILITA'",
        "Master's Degree - ARCHITECTURE FOR SUSTAINABILITY",
        "2",
        "CL016"
    ),
    (
        "82-8",
        "Laurea Magistrale - PROGETTAZIONE DELLE AREE VERDI E DEL PAESAGGIO",
        "Master's Degree - GREEN AREAS AND LANDSCAPE DESIGN",
        "2",
        "CL015"
    ),
    (
        "82-9",
        "Laurea Magistrale - PIANIFICAZIONE TERRITORIALE, URBANISTICA E PAESAGGISTICO-AMBIENTALE",
        "Master's Degree - TERRITORIAL, URBAN, ENVIRONMENTAL AND LANDSCAPE PLANNING",
        "2",
        "CL015"
    ),
    (
        "82-73",
        "Laurea Magistrale - ECONOMIA DELL'AMBIENTE, DELLA CULTURA E DEL TERRITORIO",
        "Master's Degree - ECONOMICS OF THE ENVIRONMENT, CULTURE AND TERRITORY",
        "2",
        "CL015"
    );

-- ------------------------------------------------------------
-- ↓ student table ↓
-- ------------------------------------------------------------
INSERT INTO
    student (
        id,
        first_name,
        last_name,
        profile_picture_url,
        degree_id
    )
VALUES
    (
        "320213",
        "Luca",
        "Barbato",
        "https://avatars.githubusercontent.com/u/59212611",
        "37-18"
    ),
    (
        "314796",
        "Daniele",
        "De Rossi",
        "https://avatars.githubusercontent.com/u/114685212",
        "37-18"
    ),
    (
        "318952",
        "Sylvie",
        "Molinatto",
        "https://avatars.githubusercontent.com/u/126864619",
        "37-18"
    );

-- ------------------------------------------------------------
-- ↓ teacher table ↓
-- ------------------------------------------------------------
INSERT INTO
    teacher (
        id,
        first_name,
        last_name,
        role,
        email,
        profile_url,
        profile_picture_url,
        facility_short_name
    )
VALUES
    (
        24514,
        'Francesca',
        'Abastante',
        'Docente',
        'francesca.abastante@polito.it',
        'https://www.dist.polito.it/personale/scheda/(matricola)/024514',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=024514',
        'DIST'
    ),
    (
        3613,
        'Marco',
        'Actis Grande',
        'Docente',
        'marco.actis@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003613',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003613',
        'DISAT'
    ),
    (
        3614,
        'Valentina',
        'Agostini',
        'Docente',
        'valentina.agostini@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/003614',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003614',
        'DET'
    ),
    (
        1498,
        'Guido',
        'Albertengo',
        'Docente',
        'guido.albertengo@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/001498',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001498',
        'DET'
    ),
    (
        3013,
        'Arianna',
        'Alfieri',
        'Docente',
        'arianna.alfieri@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/003013',
        NULL,
        'DIGEP'
    ),
    (
        40463,
        'Alessandro',
        'Aliberti',
        'Docente',
        'alessandro.aliberti@polito.it',
        'https://www.dist.polito.it/personale/scheda/(matricola)/040463',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=040463',
        'DIST'
    ),
    (
        24500,
        'Julia Ginette Nicole',
        'Amici',
        'Docente',
        'julia.amici@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/024500',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=024500',
        'DISAT'
    ),
    (
        15913,
        'Francesco Paolo',
        'Andriulli',
        'Docente',
        'francesco.andriulli@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/015913',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=015913',
        'DET'
    ),
    (
        2024,
        'Dario',
        'Antonelli',
        'Docente',
        'dario.antonelli@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/002024',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002024',
        'DIGEP'
    ),
    (
        17160,
        'Daniele',
        'Apiletti',
        'Docente',
        'daniele.apiletti@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/017160',
        NULL,
        'DAUIN'
    ),
    (
        23270,
        'Luca',
        'Ardito',
        'Docente',
        'luca.ardito@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/023270',
        NULL,
        'DAUIN'
    ),
    (
        13037,
        'Marco',
        'Armandi',
        'Docente',
        'marco.armandi@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/013037',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=013037',
        'DISAT'
    ),
    (
        44771,
        'Rossella',
        'Arrigo',
        'Docente',
        'rossella.arrigo@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/044771',
        NULL,
        'DISAT'
    ),
    (
        41016,
        'Fiora',
        'Artusio',
        'Docente',
        'fiora.artusio@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/041016',
        NULL,
        'DISAT'
    ),
    (
        2808,
        'Arianna',
        'Astolfi',
        'Docente',
        'arianna.astolfi@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002808',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002808',
        'DENERG'
    ),
    (
        98692,
        'Francesco',
        'Avallone',
        'Docente',
        'francesco.avallone@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/098692',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=098692',
        'DIMEAS'
    ),
    (
        34463,
        'Alberta',
        'Aversa',
        'Docente',
        'alberta.aversa@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/034463',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=034463',
        'DISAT'
    ),
    (
        39557,
        'Sarah',
        'Azimi',
        'Docente',
        'sarah.azimi@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/039557',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=039557',
        'DAUIN'
    ),
    (
        1899,
        'Marco',
        'Badami',
        'Docente',
        'marco.badami@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/001899',
        NULL,
        'DENERG'
    ),
    (
        19479,
        'Francesco',
        'Baino',
        'Docente',
        'francesco.baino@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/019479',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=019479',
        'DISAT'
    ),
    (
        20436,
        'Cristina',
        'Balagna',
        'Docente',
        'cristina.balagna@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/020436',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=020436',
        'DISAT'
    ),
    (
        2054,
        'Gabriella',
        'Balestra',
        'Docente',
        'gabriella.balestra@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002054',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002054',
        'DET'
    ),
    (
        20881,
        'Ilaria',
        'Ballarini',
        'Docente',
        'ilaria.ballarini@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/020881',
        NULL,
        'DENERG'
    ),
    (
        3155,
        'Mirko',
        'Baratta',
        'Docente',
        'mirko.baratta@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/003155',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003155',
        'DENERG'
    ),
    (
        38687,
        'Luca',
        'Barbierato',
        'Docente',
        'luca.barbierato@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/038687',
        NULL,
        'DAUIN'
    ),
    (
        12802,
        'Paolo',
        'Bardella',
        'Docente',
        'paolo.bardella@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/012802',
        NULL,
        'DET'
    ),
    (
        3311,
        'Marco',
        'Barla',
        'Docente',
        'marco.barla@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/003311',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003311',
        'DISEG'
    ),
    (
        4039,
        'Michela',
        'Barosio',
        'Docente',
        'michela.barosio@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/004039',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004039',
        'DAD'
    ),
    (
        40641,
        'Federico',
        'Barravecchia',
        'Docente',
        'federico.barravecchia@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/040641',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=040641',
        'DIGEP'
    ),
    (
        60386,
        'Alessandro',
        'Battaglia',
        'Docente',
        'alessandro.battaglia@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/060386',
        NULL,
        'DIATI'
    ),
    (
        31879,
        'Giuseppe',
        'Battiato',
        'Docente',
        'giuseppe.battiato@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/031879',
        NULL,
        'DIMEAS'
    ),
    (
        3307,
        'Manuela',
        'Battipede',
        'Docente',
        'manuela.battipede@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/003307',
        NULL,
        'DIMEAS'
    ),
    (
        2146,
        'Danilo',
        'Bazzanella',
        'Docente',
        'danilo.bazzanella@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/002146',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002146',
        'DISMA'
    ),
    (
        46334,
        'Elena',
        'Belcore',
        'Docente',
        'elena.belcore@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/046334',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=046334',
        'DIATI'
    ),
    (
        1511,
        'Giovanni',
        'Belingardi',
        'Docente',
        'giovanni.belingardi@formerfaculty.polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001511',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001511',
        'DIMEAS'
    ),
    (
        29080,
        'Federico',
        'Bella',
        'Docente',
        'federico.bella@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/029080',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029080',
        'DISAT'
    ),
    (
        11924,
        'Rossana',
        'Bellopede',
        'Docente',
        'rossana.bellopede@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/011924',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=011924',
        'DIATI'
    ),
    (
        2904,
        'Alfredo',
        'Benso',
        'Docente',
        'alfredo.benso@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/002904',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002904',
        'DAUIN'
    ),
    (
        23819,
        'Luca',
        'Bergamasco',
        'Docente',
        'luca.bergamasco@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/023819',
        NULL,
        'DENERG'
    ),
    (
        4081,
        'Gabriele',
        'Bertagnoli',
        'Docente',
        'gabriele.bertagnoli@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/004081',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004081',
        'DISEG'
    ),
    (
        39599,
        'Valentina',
        'Bertana',
        'Docente',
        'valentina.bertana@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/039599',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=039599',
        'DISAT'
    ),
    (
        1873,
        'Cristina',
        'Bertani',
        'Docente',
        'cristina.bertani@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/001873',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001873',
        'DENERG'
    ),
    (
        4135,
        'Francesco',
        'Bertazzi',
        'Docente',
        'francesco.bertazzi@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/004135',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004135',
        'DET'
    ),
    (
        41266,
        'Antonio Carlo',
        'Bertolino',
        'Docente',
        'antonio.bertolino@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/041266',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=041266',
        'DIMEAS'
    ),
    (
        30842,
        'Tiziano',
        'Bianchi',
        'Docente',
        'tiziano.bianchi@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/030842',
        NULL,
        'DET'
    ),
    (
        2143,
        'Andrea',
        'Bianco',
        'Docente',
        'andrea.bianco@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002143',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002143',
        'DET'
    ),
    (
        31127,
        'Isabella',
        'Bianco',
        'Docente',
        'isabella.bianco@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/031127',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=031127',
        'DIATI'
    ),
    (
        13543,
        'Enrico',
        'Bibbona',
        'Docente',
        'enrico.bibbona@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/013543',
        NULL,
        'DISMA'
    ),
    (
        1825,
        'Cristina',
        'Bignardi',
        'Docente',
        'cristina.bignardi@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001825',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001825',
        'DIMEAS'
    ),
    (
        38918,
        'Matteo',
        'Bilardo',
        'Docente',
        'matteo.bilardo@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/038918',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038918',
        'DENERG'
    ),
    (
        13666,
        'Fulvio',
        'Boano',
        'Docente',
        'fulvio.boano@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/013666',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=013666',
        'DIATI'
    ),
    (
        29082,
        'Gianluca',
        'Boccardo',
        'Docente',
        'gianluca.boccardo@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/029082',
        NULL,
        'DISAT'
    ),
    (
        16011,
        'Sergio',
        'Bocchini',
        'Docente',
        'sergio.bocchini@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/016011',
        NULL,
        'DISAT'
    ),
    (
        1906,
        'Silvia',
        'Bodoardo',
        'Docente',
        'silvia.bodoardo@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/001906',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001906',
        'DISAT'
    ),
    (
        3283,
        'Iustin Radu',
        'Bojoi',
        'Docente',
        'radu.bojoi@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/003283',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003283',
        'DENERG'
    ),
    (
        2351,
        'Ettore Francesco',
        'Bompard',
        'Docente',
        'ettore.bompard@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002351',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002351',
        'DENERG'
    ),
    (
        2172,
        'Fabrizio',
        'Bonani',
        'Docente',
        'fabrizio.bonani@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002172',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002172',
        'DET'
    ),
    (
        29862,
        'Federica',
        'Bondioli',
        'Docente',
        'federica.bondioli@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/029862',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029862',
        'DISAT'
    ),
    (
        13532,
        'Angelo',
        'Bonfitto',
        'Docente',
        'angelo.bonfitto@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/013532',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=013532',
        'DIMEAS'
    ),
    (
        2021,
        'Roberta Maria',
        'Bongiovanni',
        'Docente',
        'roberta.bongiovanni@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002021',
        NULL,
        'DISAT'
    ),
    (
        26979,
        'Roberto',
        'Bonifetto',
        'Docente',
        'roberto.bonifetto@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/026979',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=026979',
        'DENERG'
    ),
    (
        13572,
        'Michele',
        'Bonnin',
        'Docente',
        'michele.bonnin@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/013572',
        NULL,
        'DET'
    ),
    (
        1872,
        'Romano',
        'Borchiellini',
        'Docente',
        'romano.borchiellini@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/001872',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001872',
        'DENERG'
    ),
    (
        49848,
        'Luigi',
        'Borzì',
        'Docente',
        'luigi.borzi@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/049848',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=049848',
        'DAUIN'
    ),
    (
        25394,
        'Elisa Francesca',
        'Bosco',
        'Docente a contratto e/o collaboratore didattico',
        'elisa.bosco@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/025394',
        NULL,
        'DAD'
    ),
    (
        14913,
        'Federico',
        'Bosia',
        'Docente',
        'federico.bosia@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/014913',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=014913',
        'DISAT'
    ),
    (
        2828,
        'Nicola',
        'Bosso',
        'Docente',
        'nicola.bosso@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/002828',
        NULL,
        'DIMEAS'
    ),
    (
        50132,
        'Andrea',
        'Botta',
        'Docente',
        'andrea.botta@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/050132',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=050132',
        'DIMEAS'
    ),
    (
        36638,
        'Lorenzo',
        'Bottaccioli',
        'Docente',
        'lorenzo.bottaccioli@polito.it',
        'https://www.dist.polito.it/personale/scheda/(matricola)/036638',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=036638',
        'DIST'
    ),
    (
        4070,
        'Marta Carla',
        'Bottero',
        'Docente',
        'marta.bottero@polito.it',
        'https://www.dist.polito.it/personale/scheda/(matricola)/004070',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004070',
        'DIST'
    ),
    (
        3413,
        'Andrea',
        'Bottino',
        'Docente',
        'andrea.bottino@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/003413',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003413',
        'DAUIN'
    ),
    (
        2584,
        'Daniele',
        'Botto',
        'Docente',
        'daniele.botto@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/002584',
        NULL,
        'DIMEAS'
    ),
    (
        37436,
        'Carlo',
        'Boursier Niutta',
        'Docente',
        'carlo.boursier@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/037436',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=037436',
        'DIMEAS'
    ),
    (
        19302,
        'Giovanni',
        'Bracco',
        'Docente',
        'giovanni.bracco@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/019302',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=019302',
        'DIMEAS'
    ),
    (
        1826,
        'Paolo',
        'Brandimarte',
        'Docente',
        'paolo.brandimarte@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/001826',
        NULL,
        'DISMA'
    ),
    (
        106232,
        'Luca',
        'Brandt',
        'Docente',
        'luca.brandt@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/106232',
        NULL,
        'DIATI'
    ),
    (
        36828,
        'Daniele',
        'Bringhenti',
        'Docente',
        'daniele.bringhenti@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/036828',
        NULL,
        'DAUIN'
    ),
    (
        41311,
        'Fabio',
        'Bruzzone',
        'Docente',
        'fabio.bruzzone@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/041311',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=041311',
        'DIMEAS'
    ),
    (
        17045,
        'Antonio',
        'Buffo',
        'Docente',
        'antonio.buffo@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/017045',
        NULL,
        'DISAT'
    ),
    (
        36284,
        'Alessio',
        'Burrello',
        'Docente',
        'alessio.burrello@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/036284',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=036284',
        'DAUIN'
    ),
    (
        11297,
        'Ilaria',
        'Butera',
        'Docente',
        'ilaria.butera@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/011297',
        NULL,
        'DIATI'
    ),
    (
        59897,
        'Claudia',
        'Caballini',
        'Docente',
        'claudia.caballini@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/059897',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=059897',
        'DIATI'
    ),
    (
        49468,
        'Gioacchino',
        'Cafiero',
        'Docente',
        'gioacchino.cafiero@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/049468',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=049468',
        'DIMEAS'
    ),
    (
        16393,
        'Anna Corinna',
        'Cagliano',
        'Docente',
        'anna.cagliano@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/016393',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016393',
        'DIGEP'
    ),
    (
        23058,
        'Luca',
        'Cagliero',
        'Docente',
        'luca.cagliero@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/023058',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=023058',
        'DAUIN'
    ),
    (
        2542,
        'Giuseppe Carlo',
        'Calafiore',
        'Docente',
        'giuseppe.calafiore@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002542',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002542',
        'DET'
    ),
    (
        18408,
        'Andrea',
        'Calimera',
        'Docente',
        'andrea.calimera@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/018408',
        NULL,
        'DAUIN'
    ),
    (
        94713,
        'Raffaello',
        'Camoriano',
        'Docente',
        'raffaello.camoriano@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/094713',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=094713',
        'DAUIN'
    ),
    (
        31752,
        'Giuseppe',
        'Campo',
        'Docente',
        'giuseppe.campo@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/031752',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=031752',
        'DIATI'
    ),
    (
        11608,
        'Carlo Vincenzo',
        'Camporeale',
        'Docente',
        'carlo.camporeale@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/011608',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=011608',
        'DIATI'
    ),
    (
        39345,
        'Alberto',
        'Cannavò',
        'Docente',
        'alberto.cannavo@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/039345',
        NULL,
        'DAUIN'
    ),
    (
        2177,
        'Aldo',
        'Canova',
        'Docente',
        'aldo.canova@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002177',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002177',
        'DENERG'
    ),
    (
        19287,
        'Elisa',
        'Capello',
        'Docente',
        'elisa.capello@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/019287',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=019287',
        'DIMEAS'
    ),
    (
        38851,
        'Fabio',
        'Carapellese',
        'Docente',
        'fabio.carapellese@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/038851',
        NULL,
        'DIMEAS'
    ),
    (
        2599,
        'Anna Filomena',
        'Carbone',
        'Docente',
        'anna.carbone@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002599',
        NULL,
        'DISAT'
    ),
    (
        2899,
        'Andrea',
        'Carena',
        'Docente',
        'andrea.carena@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002899',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002899',
        'DET'
    ),
    (
        16599,
        'Federico',
        'Carosio',
        'Docente',
        'federico.carosio@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/016599',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016599',
        'DISAT'
    ),
    (
        2398,
        'Alessio',
        'Carullo',
        'Docente',
        'alessio.carullo@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002398',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002398',
        'DET'
    ),
    (
        11726,
        'Valentina',
        'Casalegno',
        'Docente',
        'valentina.casalegno@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/011726',
        NULL,
        'DISAT'
    ),
    (
        3752,
        'Claudio Ettore',
        'Casetti',
        'Docente',
        'claudio.casetti@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/003752',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003752',
        'DAUIN'
    ),
    (
        43553,
        'Paolo',
        'Castaldo',
        'Docente',
        'paolo.castaldo@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/043553',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=043553',
        'DISEG'
    ),
    (
        9768,
        'Mario Roberto',
        'Casu',
        'Docente',
        'mario.casu@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/009768',
        NULL,
        'DET'
    ),
    (
        46976,
        'Angioletta Rita',
        'Catalano',
        'Docente',
        'angioletta.catalano@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/046976',
        NULL,
        'DIGEP'
    ),
    (
        16321,
        'Valentina Alice',
        'Cauda',
        'Docente',
        'valentina.cauda@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/016321',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016321',
        'DISAT'
    ),
    (
        2535,
        'Andrea',
        'Cavagnino',
        'Docente',
        'andrea.cavagnino@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002535',
        NULL,
        'DENERG'
    ),
    (
        38367,
        'Marco',
        'Cavana',
        'Docente',
        'marco.cavana@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/038367',
        NULL,
        'DENERG'
    ),
    (
        42737,
        'Pangcheng David',
        'Cen Cheng',
        'Docente',
        'pangcheng.cencheng@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/042737',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=042737',
        'DET'
    ),
    (
        2389,
        'Rosario',
        'Ceravolo',
        'Docente',
        'rosario.ceravolo@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/002389',
        NULL,
        'DISEG'
    ),
    (
        11909,
        'Tania',
        'Cerquitelli',
        'Docente',
        'tania.cerquitelli@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/011909',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=011909',
        'DAUIN'
    ),
    (
        11412,
        'Enrico',
        'Cestino',
        'Docente',
        'enrico.cestino@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/011412',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=011412',
        'DIMEAS'
    ),
    (
        24582,
        'Alessandro',
        'Chiadò',
        'Docente',
        'alessandro.chiado@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/024582',
        NULL,
        'DISAT'
    ),
    (
        2181,
        'Bernardino',
        'Chiaia',
        'Docente',
        'bernardino.chiaia@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/002181',
        NULL,
        'DISEG'
    ),
    (
        2574,
        'Giorgio',
        'Chiandussi',
        'Docente',
        'giorgio.chiandussi@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/002574',
        NULL,
        'DIMEAS'
    ),
    (
        60972,
        'David',
        'Chiaramonti',
        'Docente',
        'david.chiaramonti@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/060972',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=060972',
        'DENERG'
    ),
    (
        3839,
        'Carla Fabiana',
        'Chiasserini',
        'Docente',
        'carla.chiasserini@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/003839',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003839',
        'DET'
    ),
    (
        24188,
        'Eliodoro',
        'Chiavazzo',
        'Docente',
        'eliodoro.chiavazzo@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/024188',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=024188',
        'DENERG'
    ),
    (
        2193,
        'Gianfranco',
        'Chicco',
        'Docente',
        'gianfranco.chicco@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002193',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002193',
        'DENERG'
    ),
    (
        23085,
        'Giacomo',
        'Chiesa',
        'Docente',
        'giacomo.chiesa@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/023085',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=023085',
        'DAD'
    ),
    (
        20340,
        'Valeria',
        'Chiono',
        'Docente',
        'valeria.chiono@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/020340',
        NULL,
        'DIMEAS'
    ),
    (
        3201,
        'Silvia Anna',
        'Chiusano',
        'Docente',
        'silvia.chiusano@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/003201',
        NULL,
        'DAUIN'
    ),
    (
        16036,
        'Gianluca',
        'Ciardelli',
        'Docente',
        'gianluca.ciardelli@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/016036',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016036',
        'DIMEAS'
    ),
    (
        36618,
        'Raffaele',
        'Ciardiello',
        'Docente',
        'raffaele.ciardiello@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/036618',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=036618',
        'DIMEAS'
    ),
    (
        3170,
        'Giancarlo',
        'Cicero',
        'Docente',
        'giancarlo.cicero@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003170',
        NULL,
        'DISAT'
    ),
    (
        22981,
        'Gian Paolo',
        'Cimellaro',
        'Docente',
        'gianpaolo.cimellaro@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/022981',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=022981',
        'DISEG'
    ),
    (
        29797,
        'Alessandro',
        'Ciocia',
        'Docente',
        'alessandro.ciocia@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/029797',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029797',
        'DENERG'
    ),
    (
        35720,
        'Marco',
        'Civera',
        'Docente',
        'marco.civera@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/035720',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=035720',
        'DISEG'
    ),
    (
        3366,
        'Pierluigi',
        'Claps',
        'Docente',
        'pierluigi.claps@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/003366',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003366',
        'DIATI'
    ),
    (
        31299,
        'Pietro',
        'Colella',
        'Docente',
        'pietro.colella@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/031299',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=031299',
        'DENERG'
    ),
    (
        41312,
        'Elisabetta',
        'Colucci',
        'Docente',
        'elisabetta.colucci@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/041312',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=041312',
        'DAD'
    ),
    (
        18780,
        'Giovanna',
        'Colucci',
        'Docente',
        'giovanna.colucci@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/018780',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=018780',
        'DISAT'
    ),
    (
        38485,
        'Riccardo',
        'Coppola',
        'Docente',
        'riccardo.coppola@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/038485',
        NULL,
        'DAUIN'
    ),
    (
        12868,
        'Simone',
        'Corbellini',
        'Docente',
        'simone.corbellini@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/012868',
        NULL,
        'DET'
    ),
    (
        3229,
        'Sabrina',
        'Corpino',
        'Docente',
        'sabrina.corpino@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/003229',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003229',
        'DIMEAS'
    ),
    (
        16303,
        'Mauro',
        'Corrado',
        'Docente',
        'mauro.corrado@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/016303',
        NULL,
        'DISEG'
    ),
    (
        1996,
        'Vincenzo',
        'Corrado',
        'Docente',
        'vincenzo.corrado@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/001996',
        NULL,
        'DENERG'
    ),
    (
        3740,
        'Cristina',
        'Coscia',
        'Docente',
        'cristina.coscia@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/003740',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003740',
        'DAD'
    ),
    (
        23003,
        'Renato Maria',
        'Cosentini',
        'Docente',
        'renato.cosentini@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/023003',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=023003',
        'DISEG'
    ),
    (
        33555,
        'Elisa',
        'Costamagna',
        'Docente',
        'elisa.costamagna@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/033555',
        NULL,
        'DIATI'
    ),
    (
        2629,
        'Giovanni Antonio',
        'Costanzo',
        'Docente',
        'giovanni.costanzo@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002629',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002629',
        'DET'
    ),
    (
        4007,
        'Paolo Stefano',
        'Crovetti',
        'Docente',
        'paolo.crovetti@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/004007',
        NULL,
        'DET'
    ),
    (
        1831,
        'Francesca Maria',
        'Curà',
        'Docente',
        'francesca.cura@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001831',
        NULL,
        'DIMEAS'
    ),
    (
        3641,
        'Fabrizio',
        'Dabbene',
        'Docente a contratto e/o collaboratore didattico',
        'fabrizio.dabbene@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/003641',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003641',
        'DAUIN'
    ),
    (
        3643,
        'Dario',
        'Daghero',
        'Docente',
        'dario.daghero@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003643',
        NULL,
        'DISAT'
    ),
    (
        2923,
        'Bruno',
        'Dalla Chiara',
        'Docente',
        'bruno.dallachiara@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/002923',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002923',
        'DIATI'
    ),
    (
        13692,
        'Matteo Davide Lorenzo',
        'Dalla Vedova',
        'Docente',
        'matteo.dallavedova@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/013692',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=013692',
        'DIMEAS'
    ),
    (
        38997,
        'Carlo',
        'De Benedictis',
        'Docente',
        'carlo.debenedictis@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/038997',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038997',
        'DIMEAS'
    ),
    (
        27419,
        'Valerio',
        'De Biagi',
        'Docente',
        'valerio.debiagi@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/027419',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=027419',
        'DISEG'
    ),
    (
        38258,
        'Henrique',
        'De Carvalho Pinheiro',
        'Docente',
        'henrique.decarvalho@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/038258',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038258',
        'DIMEAS'
    ),
    (
        32322,
        'Stefano',
        'De La Pierre Des Ambrois',
        'Docente',
        'stefano.delapierre@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/032322',
        NULL,
        'DISAT'
    ),
    (
        11676,
        'Manuela',
        'De Maddis',
        'Docente',
        'manuela.demaddis@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/011676',
        NULL,
        'DIGEP'
    ),
    (
        32259,
        'Andrea',
        'De Martin',
        'Docente',
        'andrea.demartin@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/032259',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=032259',
        'DIMEAS'
    ),
    (
        18413,
        'Giorgio',
        'De Pasquale',
        'Docente',
        'giorgio.depasquale@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/018413',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=018413',
        'DIMEAS'
    ),
    (
        25734,
        'Luigi',
        'De Russis',
        'Docente',
        'luigi.derussis@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/025734',
        NULL,
        'DAUIN'
    ),
    (
        49588,
        'Corrado',
        'De Sio',
        'Docente',
        'corrado.desio@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/049588',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=049588',
        'DAUIN'
    ),
    (
        3990,
        'Francesco Paolo',
        'Deflorio',
        'Docente',
        'francesco.deflorio@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/003990',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003990',
        'DIATI'
    ),
    (
        29274,
        'Matteo',
        'Del Giudice',
        'Docente',
        'matteo.delgiudice@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/029274',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029274',
        'DISEG'
    ),
    (
        4171,
        'Marcello Edoardo',
        'Delitala',
        'Docente',
        'marcello.delitala@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/004171',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004171',
        'DISMA'
    ),
    (
        46539,
        'Francesco',
        'Della Santa',
        'Docente',
        'francesco.dellasanta@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/046539',
        NULL,
        'DISMA'
    ),
    (
        1958,
        'Cristiana',
        'Delprete',
        'Docente',
        'cristiana.delprete@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001958',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=001958',
        'DIMEAS'
    ),
    (
        2371,
        'Danilo',
        'Demarchi',
        'Docente',
        'danilo.demarchi@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/002371',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002371',
        'DET'
    ),
    (
        2818,
        'Micaela',
        'Demichela',
        'Docente',
        'micaela.demichela@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002818',
        NULL,
        'DISAT'
    ),
    (
        37288,
        'Francesca',
        'Demichelis',
        'Docente',
        'francesca.demichelis@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/037288',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=037288',
        'DISAT'
    ),
    (
        11813,
        'Fabio Alessandro',
        'Deorsola',
        'Docente',
        'fabio.deorsola@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/011813',
        NULL,
        'DISAT'
    ),
    (
        17632,
        'Marco Agostino',
        'Deriu',
        'Docente',
        'marco.deriu@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/017632',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=017632',
        'DIMEAS'
    ),
    (
        16710,
        'Emiliano',
        'Descrovi',
        'Docente',
        'emiliano.descrovi@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/016710',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016710',
        'DISAT'
    ),
    (
        3272,
        'Stefano',
        'Di Carlo',
        'Docente',
        'stefano.dicarlo@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/003272',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003272',
        'DAUIN'
    ),
    (
        19491,
        'Santa',
        'Di Cataldo',
        'Docente',
        'santa.dicataldo@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/019491',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=019491',
        'DAUIN'
    ),
    (
        51055,
        'Enzo Mario',
        'Di Fabrizio',
        'Docente',
        'enzo.difabrizio@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/051055',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=051055',
        'DISAT'
    ),
    (
        32925,
        'Vincenzo',
        'Di Pietra',
        'Docente',
        'vincenzo.dipietra@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/032925',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=032925',
        'DIATI'
    ),
    (
        13461,
        'Antonio Josè',
        'Di Scala',
        'Docente',
        'antonio.discala@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/013461',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=013461',
        'DISMA'
    ),
    (
        43554,
        'Fabio',
        'Di Trapani',
        'Docente',
        'fabio.ditrapani@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/043554',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=043554',
        'DISEG'
    ),
    (
        3206,
        'Marco',
        'Diana',
        'Docente',
        'marco.diana@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/003206',
        NULL,
        'DIATI'
    ),
    (
        38991,
        'Luca',
        'Dimauro',
        'Docente',
        'luca.dimauro@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/038991',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038991',
        'DIMEAS'
    ),
    (
        3851,
        'Fabrizio',
        'Dolcini',
        'Docente',
        'fabrizio.dolcini@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003851',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003851',
        'DISAT'
    ),
    (
        43280,
        'Marco',
        'Domaneschi',
        'Docente',
        'marco.domaneschi@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/043280',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=043280',
        'DISEG'
    ),
    (
        56800,
        'Serena',
        'Esposito',
        'Docente',
        'serena_esposito@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/056800',
        NULL,
        'DISAT'
    ),
    (
        2562,
        'Gabriella',
        'Eula',
        'Docente',
        'gabriella.eula@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/002562',
        NULL,
        'DIMEAS'
    ),
    (
        32649,
        'Edoardo',
        'Fadda',
        'Docente',
        'edoardo.fadda@polito.it',
        'https://www.disma.polito.it/personale/scheda/(matricola)/032649',
        NULL,
        'DISMA'
    ),
    (
        68540,
        'Nicolas Ezequiel',
        'Faedo',
        'Docente',
        'nicolas.faedo@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/068540',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=068540',
        'DIMEAS'
    ),
    (
        64370,
        'Devid',
        'Falliano',
        'Docente',
        'devid.falliano@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/064370',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=064370',
        'DISEG'
    ),
    (
        39181,
        'Gabriele',
        'Fambri',
        'Docente',
        'gabriele.fambri@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/039181',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=039181',
        'DENERG'
    ),
    (
        26208,
        'Matteo',
        'Fasano',
        'Docente',
        'matteo.fasano@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/026208',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=026208',
        'DENERG'
    ),
    (
        26986,
        'Fabio',
        'Favoino',
        'Docente',
        'fabio.favoino@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/026986',
        NULL,
        'DENERG'
    ),
    (
        26717,
        'Valeria',
        'Federighi',
        'Docente',
        'valeria.federighi@polito.it',
        'https://www.dad.polito.it/personale/scheda/(matricola)/026717',
        NULL,
        'DAD'
    ),
    (
        38425,
        'Sofia',
        'Fellini',
        'Docente',
        'sofia.fellini@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/038425',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038425',
        'DIATI'
    ),
    (
        28188,
        'Maria',
        'Ferrara',
        'Docente',
        'maria.ferrara@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/028188',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=028188',
        'DENERG'
    ),
    (
        1523,
        'Carlo',
        'Ferraresi',
        'Docente a contratto e/o collaboratore didattico',
        'carlo.ferraresi@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001523',
        NULL,
        'DIMEAS'
    ),
    (
        41351,
        'Simone',
        'Ferrari',
        'Docente',
        'simone.ferrari@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/041351',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=041351',
        'DENERG'
    ),
    (
        2157,
        'Luca',
        'Ferraris',
        'Docente',
        'luca.ferraris@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/002157',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002157',
        'DENERG'
    ),
    (
        2025,
        'Monica',
        'Ferraris',
        'Docente',
        'monica.ferraris@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002025',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002025',
        'DISAT'
    ),
    (
        22269,
        'Renato',
        'Ferrero',
        'Docente',
        'renato.ferrero@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/022269',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=022269',
        'DAUIN'
    ),
    (
        3464,
        'Sergio',
        'Ferrero',
        'Docente',
        'sergio.ferrero@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003464',
        NULL,
        'DISAT'
    ),
    (
        38439,
        'Carlo Giovanni',
        'Ferro',
        'Docente',
        'carlo.ferro@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/038439',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=038439',
        'DIMEAS'
    ),
    (
        2103,
        'Giuseppe Andrea',
        'Ferro',
        'Docente',
        'giuseppe.ferro@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/002103',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002103',
        'DISEG'
    ),
    (
        29097,
        'Matteo',
        'Filippi',
        'Docente',
        'matteo.filippi@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/029097',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029097',
        'DIMEAS'
    ),
    (
        3061,
        'Debora',
        'Fino',
        'Docente',
        'debora.fino@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003061',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003061',
        'DISAT'
    ),
    (
        3184,
        'Silvia',
        'Fiore',
        'Docente',
        'silvia.fiore@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/003184',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003184',
        'DIATI'
    ),
    (
        14207,
        'Alessandro',
        'Fiori',
        'Docente a contratto e/o collaboratore didattico',
        'alessandro.fiori@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/014207',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=014207',
        'DAUIN'
    ),
    (
        17980,
        'Marco',
        'Fioriti',
        'Docente',
        'marco.fioriti@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/017980',
        NULL,
        'DIMEAS'
    ),
    (
        12851,
        'Christian Maria',
        'Firrone',
        'Docente',
        'christian.firrone@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/012851',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=012851',
        'DIMEAS'
    ),
    (
        4077,
        'Davide',
        'Fissore',
        'Docente',
        'davide.fissore@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/004077',
        NULL,
        'DISAT'
    ),
    (
        29203,
        'Marco',
        'Fontana',
        'Docente',
        'marco.fontana@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/029203',
        NULL,
        'DISAT'
    ),
    (
        17439,
        'Sophie',
        'Fosson',
        'Docente',
        'sophie.fosson@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/017439',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=017439',
        'DAUIN'
    ),
    (
        4176,
        'Sebastiano',
        'Foti',
        'Docente',
        'sebastiano.foti@polito.it',
        'https://www.diseg.polito.it/personale/scheda/(matricola)/004176',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=004176',
        'DISEG'
    ),
    (
        3656,
        'Alberto',
        'Frache',
        'Docente',
        'alberto.frache@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/003656',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003656',
        'DISAT'
    ),
    (
        2580,
        'Carlotta',
        'Francia',
        'Docente',
        'carlotta.francia@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002580',
        NULL,
        'DISAT'
    ),
    (
        2825,
        'Walter',
        'Franco',
        'Docente',
        'walter.franco@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/002825',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002825',
        'DIMEAS'
    ),
    (
        17408,
        'Francesca',
        'Frascella',
        'Docente',
        'francesca.frascella@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/017408',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=017408',
        'DISAT'
    ),
    (
        33627,
        'Antonio',
        'Froio',
        'Docente',
        'antonio.froio@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/033627',
        NULL,
        'DENERG'
    ),
    (
        1910,
        'Giacomo',
        'Frulla',
        'Docente',
        'giacomo.frulla@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/001910',
        NULL,
        'DIMEAS'
    ),
    (
        32281,
        'Manuela',
        'Galati',
        'Docente',
        'manuela.galati@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/032281',
        NULL,
        'DIGEP'
    ),
    (
        3331,
        'Maurizio',
        'Galetto',
        'Docente',
        'maurizio.galetto@polito.it',
        'https://www.digep.polito.it/personale/scheda/(matricola)/003331',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003331',
        'DIGEP'
    ),
    (
        16313,
        'Enrico',
        'Galvagno',
        'Docente',
        'enrico.galvagno@polito.it',
        'https://www.dimeas.polito.it/personale/scheda/(matricola)/016313',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016313',
        'DIMEAS'
    ),
    (
        2020,
        'Andrea Antonio',
        'Gamba',
        'Docente',
        'andrea.gamba@polito.it',
        'https://www.disat.polito.it/personale/scheda/(matricola)/002020',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=002020',
        'DISAT'
    ),
    (
        29869,
        'Marta',
        'Gandiglio',
        'Docente',
        'marta.gandiglio@polito.it',
        'https://www.denerg.polito.it/personale/scheda/(matricola)/029869',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=029869',
        'DENERG'
    ),
    (
        18120,
        'Daniele',
        'Ganora',
        'Docente',
        'daniele.ganora@polito.it',
        'https://www.diati.polito.it/personale/scheda/(matricola)/018120',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=018120',
        'DIATI'
    ),
    (
        98620,
        'Andrea',
        'Marchisio',
        'Dottorando',
        'andrea_marchisio@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/098620',
        NULL,
        'DET'
    ),
    (
        1921,
        'Maurizio',
        'Morisio',
        'Docente',
        'maurizio.morisio@polito.it',
        'https://www.dauin.polito.it/personale/scheda/(matricola)/001921',
        NULL,
        'DAUIN'
    ),
    (
        3019,
        'Marco',
        'Torchiano',
        'Docente',
        'marco.torchiano@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/003019',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=003019',
        'DAUIN'
    ),
    (
        16873,
        'Antonio',
        'Vetrò',
        'Docente',
        'antonio.vetro@polito.it',
        'https://www.det.polito.it/personale/scheda/(matricola)/016873',
        'https://www.swas.polito.it/_library/image_pub.asp?matricola=016873',
        'DAUIN'
    );

-- ------------------------------------------------------------
-- ↓ keyword table ↓
-- ------------------------------------------------------------
INSERT INTO
    keyword (id, keyword, keyword_en)
VALUES
    (1, "IA", "IA"),
    (2, "GENERAZIONE DI CODICE", "CODE GENERATION"),
    (3, "ISTRUZIONE", "EDUCATION"),
    (4, "LLM", "LLM"),
    (5, "DOMOTICA", "DOMOTICS"),
    (6, "IOT", "IOT"),
    (7, "SIMULATORE", "SIMULATION"),
    (8, "TESTING", "TESTING"),
    (9, "AUTOMOTIVE", "AUTOMOTIVE"),
    (10, "REALTÀ", "VIRTUAL REALITY"),
    (11, "SVILUPPO APPLICAZIONI MOBILI", "MOBILE APPLICATION DEVELOPMENT"),
    (12, "SVILUPPO WEB", "WEB DEVELOPMENT"),
    (13, "APPLICAZIONI WEB", "WEB APPLICATIONS");

-- ------------------------------------------------------------
-- ↓ type table ↓
-- ------------------------------------------------------------
INSERT INTO type (id, type, type_en)
VALUES
    ( 1, 'ANALISI DATI', 'DATA ANALYSIS' ),
    ( 2, 'ANALITICA', 'ANALYTICAL' ),
    ( 3, 'APPLICATIVA', 'APPLIED' ),
    ( 4, 'COMPILATIVA', 'BIBLIOGRAPHIC' ),
    ( 5, 'COMPUTAZIONALE', 'COMPUTATIONAL' ),
    ( 6, 'PROGETTUALE', 'DESIGN' ),
    ( 7, 'RICERCA', 'RESEARCH' ),
    ( 8, 'SIMULATIVA', 'SIMULATION' ),
    ( 9, 'SPERIMENTALE', 'EXPERIMENTAL' ),
    ( 10, 'SVILUPPO', 'DEVELOPMENT' ),
    ( 11, 'TEORICA', 'THEORETICAL' ),
    ( 12, 'NUMERICA', 'NUMERICAL' );

-- ------------------------------------------------------------
-- ↓ thesis_proposal table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal (
        id,
        topic,
        topic_en,
        description,
        description_en,
        link,
        required_skills,
        required_skills_en,
        additional_notes,
        additional_notes_en,
        external_cosupervisors,
        creation_date,
        expiration_date,
        is_internal,
        is_abroad,
        id_collegio,
        level,
        attachment_url
    )
VALUES
    (
        10187,
        "App per il benessere",
        "Well being app",
        "Obbiettivo della tesi è sviluppare una app e relativo back end per supportare le persone a perseguire uno stile di vita salutare.
        La app raccoglie (direttamente, o tramite device esterni tipo smartwatch o fitbit) dati sulla vita della persona (attività fisica, qualità e durata del sonno, pressione, pulsazioni) (nutrizione, tipo e quantità del cibo mangiato e delle bevande). Confrontando i dati raccolti con pattern predefiniti e possibilmente con analisi mediche supplettive la app suggerisce modifiche allo stile di vita (recommendation). Via via che la persona viene monitorata altre modifiche sono suggerite e il loro effetto verificato.
        La parte back end della app raccoglie in modo anonimo i dati di molti utenti e utilizzando tecniche statistiche e di machine learning costruisce e raffina modelli e pattern predittivi da usare per le recommendation.

        Le recommendation iniziali sono derivate dalla letteratura scientifica su aging e well being (vedere ad esempio Fontana L., The path to longevity). Scopo di lungo termine della app è di raccogliere dati per validare e migliorare le recommendation.

        Il lavoro è svolto in collaborazione con University of Sydney e Azienda Ospedaliera Verona. Il lavoro supporta una tesi lato app e una lato backend.",
        "Goal of the project is to develop a mobile app + backend to support people in having a healthy lifestyle. The mobile app collects (directly or using wearable devices) information about a person's life: physical status and activity (walking running and any physical activity, heart rate, pressure, sleeping times etc), nutrition (type and quantity of food eaten). Starting from the data collected and using predefined patterns the app proposes recommendations to improve the lifestyle. The effect of recommendations is monitored in ters of changes to the lifestyle, in function of changes recommendations are recomputed.
        The back end side of the app collects, anonymously, data about all users, analyses them via statistic and machine learning models, in order to build models to characterize and predict the effects of behaviours and recommendations.

        At start recommendations are derived from the existing scientific literature about aging and well being (ex Fontana L., The path to longevity). On the long run the data collected and analysed is used to further validate and improve the recommendations, and the models they are built on.

        This project is developed with University of Sydney and Azienda Ospedaliera Verona.",
        NULL,
        "Sviluppo di applicazioni web (lato client, lato server). Flutter / React",
        "Web application development (client side, server side). Flutter / React",
        NULL,
        NULL,
        NULL,
        "2024-09-30",
        "2025-09-30",
        0,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        12946,
        "Gamification applicata al test refactoring",
        "Gamification for test refactoring",
        "Il test refactoring rappresenta una pratica essenziale nello sviluppo del software, mirata a ottimizzare e migliorare la qualità dei test automatizzati senza alterarne la funzionalità. Questo processo coinvolge la riscrittura del codice dei test al fine di renderlo più efficiente, manutenibile e adatto agli scopi di testing. Tuttavia, implementare con successo il test refactoring richiede un elevato livello di competenza tecnica e una comprensione approfondita del sistema in esame.

        La gamification è una strategia che applica elementi tipici dei giochi, come punti, sfide e ricompense, in contesti non ludici per motivare e coinvolgere gli utenti. L'obiettivo della gamification è trasformare compiti complessi o noiosi in attività coinvolgenti e gratificanti.

        La presente tesi propone un'indagine approfondita sull'applicazione della gamification nel contesto del test refactoring. L'obiettivo principale è esplorare come l'introduzione di elementi ludici possa influenzare positivamente l'efficacia e l'efficienza del processo di test refactoring.

        Gli aspetti chiave della ricerca includeranno:
        - Studio dei Metodi di Test Refactoring: Analisi delle diverse tecniche e metodologie di test refactoring attualmente utilizzate nello sviluppo del software.
        - Analisi dei Problemi Comuni: Identificazione e analisi dei problemi comuni riscontrati nello svolgimento del test refactoring, come la resistenza agli aggiornamenti e la complessità del processo.
        - Gamification Applicata: Progettazione e implementazione di un sistema di gamification per incentivare e migliorare l'adozione del test refactoring. Ciò potrebbe includere la definizione di obiettivi, la creazione di sfide e la valutazione delle ricompense.
        - Valutazione dell'Impatto: Valutazione dell'efficacia della gamification attraverso indicatori chiave di prestazione, confrontando i risultati con gruppi di controllo che seguono approcci tradizionali di test refactoring.",
        "Test refactoring is an essential practice in software development aimed at optimizing and improving the quality of automated tests without altering their functionality. This process involves rewriting test code to make it more efficient, maintainable, and suitable for testing purposes. However, successfully implementing test refactoring requires a high level of technical expertise and a deep understanding of the system under consideration.

        On the other hand, gamification is a strategy that applies typical game elements, such as points, challenges, and rewards, in non-game contexts to motivate and engage users. The goal of gamification is to transform complex or tedious tasks into engaging and rewarding activities.

        This thesis proposes an in-depth investigation into the application of gamification in the context of test refactoring. The main objective is to explore how the introduction of playful elements can positively influence the effectiveness and efficiency of the test refactoring process.

        Key aspects of the research will include:
        - Study of Test Refactoring Methods: Analysis of different techniques and methodologies of test refactoring currently used in software development.
        - Analysis of Common Issues: Identification and analysis of common problems encountered in test refactoring, such as resistance to updates and process complexity.
        - Applied Gamification: Design and implementation of a gamification system to encourage and improve the adoption of test refactoring. This may include goal definition, challenge creation, and reward evaluation.
        - Impact Evaluation: Assessment of the effectiveness of gamification through key performance indicators, comparing results with control groups following traditional approaches to test refactoring.",
        NULL,
        "Sviluppo con linguaggi di programmazione a oggetti (preferibilmente Java), Fondamenti del software testing",
        "Development with OOP languages (preferably Java), Testing fundamentals",
        NULL,
        NULL,
        NULL,
        "2024-10-16",
        "2025-10-16",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13169,
        "Studio esplorativo delle soluzioni IA-based per la generazione del codice",
        "An exploration of the solutions for AI-based code generation",
        "La tesi comporta una completa esplorazione delle soluzioni attuali nel dominio. L'obiettivo è valutare le metodologie esistenti, le tecnologie e i framework rilevanti per il contesto di ricerca. Questa analisi preliminare sarà condotta in modo sistematico applicando le linee guida di Kitchenham per la conduzione di Revisioni Bibliografiche Sistematiche nel campo della Ricerca in Ingegneria del Software. La revisione bibliografica sistematica terrà conto anche delle fonti di letteratura grigia (cioè, fonti non sottoposte a revisione tra pari disponibili su varie fonti internet) per far fronte alla grande novità del campo della ricerca sull'IA generativa. La valutazione sistematica dello stato dell'arte sarà integrata con la conduzione di interviste aperte e strutturate con professionisti e sviluppatori per comprendere le loro principali esigenze e pratiche più comuni.",
        "The thesis involves a comprehensive exploration of current solutions in the domain. The objective is to evaluate existing methodologies, technologies, and frameworks relevant to the research context. This preliminary analysis will be conducted in a systematic way by applying Kitchenham's guidelines for the conduction of Systematic Literature Reviews in the Software Engineering research field. The systematic literature review will also consider grey-literature sources (i.e., non-peer reviewed sources available on various internet sources) to cope with the high novelty of the generative AI research field. The systematic evaluation of the state of the art will be complemented with the conduction of open and structured interviews with practitioners and developers to understand their main needs and most common practices.",
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        "2023-12-07",
        "2024-12-07",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13253,
        "Test automatizzato per soluzioni Virtual Reality Content Management System e piattaforme di VR streaming",
        "Test automation for an enterprise VR (Virtual Reality) CMS and VR streaming platforms",
        "Questa proposta di tesi si concentra sullo studio e lo sviluppo di un innovativo approccio all'automazione dei test per migliorare la stabilità e l'affidabilità di un sistema di gestione dei contenuti VR (Virtual Reality) e di una piattaforma di streaming VR per le imprese. I componenti necessari per la piattaforma includono una piattaforma web, client VR Android e servizi AWS per l'orchestrazione e il rendering nel cloud.

        L'obiettivo principale della tesi è lo sviluppo un'applicazione Unity VR in grado di fornire feedback sulle performance dello streaming e sul comportamento atteso della piattaforma. Con un approccio bottom-up in mente, lo studio si concentrerà poi su come le applicazioni vengono avviate sia dai client VR Android che dai browser web e su come questo processo possa essere automatizzato per scopi di testing.

        La tesi prevede una revisione dello stato attuale dell'arte dell'automazione dei test in VR, esplorando approcci innovativi su come affrontare le sfide dell'interazione umana, come ad esempio: simulare l'uso di visori VR di vari produttori (Meta, HTC, Pico), incorporare movimenti della testa e interazioni con i controller. Un prototipo, costruito con componenti Lego, potrebbe aiutare a dimostrare la fattibilità di tali simulazioni.

        La ricerca esplorerà infine le sfide potenziali per raggiungere una soluzione completa di automazione dei test end-to-end per l'intera piattaforma, considerando il percorso tipico dell'utente. Saranno esplorati sia strumenti tradizionali (Windows Forms, Selenium) che soluzioni all'avanguardia (come modelli di linguaggio e OpenAI) per valutarne l'efficacia nel affrontare queste sfide.

        La tesi aspira dunque a contribuire non solo al campo dei test VR, ma anche al più ampio settore dei sistemi di gestione dei contenuti e delle piattaforme di streaming a livello aziendale introducendo metodologie innovative di automazione dei test.

        La tesi sarà condotta tramite lavoro da remoto in collaborazione con l'azienda innoactive.io (referente aziendale: Dr. Edgar Pironti)",
        "This thesis proposal focuses on the study and development of an innovative testing automation approach to enhance the stability and reliability of an enterprise VR Content Management System and VR streaming platform. The encompassed components include a web platform, Android VR clients, and AWS services for cloud orchestration and rendering.

        The primary objective is to develop a Unity VR application capable of providing feedback on streaming performances and expected platform behavior. With a bottom-up approach in mind, the study will then focus on how applications are launched from both Android VR clients and web browsers and how this process can be automated for testing purposes.


        The thesis involves a review of the current state of the art of testing automation in VR, exploring innovative approaches on how to address human interaction challenges, such as: simulating wearing VR headsets from various manufacturers (Meta, HTC, Pico), incorporating head movements and hand interactions with controllers. A prototype, constructed using Lego components, may aid in demonstrating the feasibility of these simulations.


        The research will explore the potential challenges to achieve a complete end-to-end testing automation solution for the entire platform, considering the typical user journey. Both traditional tools (Windows Forms, Selenium) and cutting-edge solutions (such as leveraging OpenAI) will be explored to assess their efficacy in addressing these challenges.

        This thesis aspires to contribute not only to the domain of VR testing but also to the broader field of enterprise-level content management systems and streaming platforms by introducing innovative testing automation methodologies.

        The thesis will be conducted remotely in collaboration with innoactive.io (industrial mentor: Dr. Edgar Pironti)",
        NULL,
        "soft skill necessarie: padronanza della lingua inglese, capacità di lavoro da remoto, buona connessione a internet (almeno 50Mbps in download)

        hard skill (opzionali): Unity, C#, software testing, OpenAI, Selenium",
        "mandatory soft skills: English proficiency, Ability to work remotely, Good internet connection (more than 50Mbps download)

        technical optional skills: Unity, C#, Software testing.

        Nice to have: OpenAI, Selenium, Lego passion",
        NULL,
        NULL,
        "Edgar Pironti - innoactive.io",
        "2023-12-31",
        "2024-12-31",
        0,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13275,
        "Valutazione Critica delle Capacità di Generazione del Codice da Parte di LLM in Contesto di Istruzione",
        "Critical Appraisal of LLM Code Generation Capabilities in Educational Context",
        "Recentemente diversi strumenti di generazione automatica del codice basati su tecniche di AI sono stati messi a disposizione degli utenti. Si tratta di prodotti specifici (es. CodePilot) oppure con scopi più ampi (ChatGPT) che sono in grado di generare codice di elevata qualità a partire da requisiti espressi in linguaggio naturale.
        Questi strumenti entreranno a breve nel set di uso comune per gli sviluppatori di software e quindi dovranno essere integrati nei progetti formazione universitari (e non solo).
        L'obiettivo di questa tesi è valutare in maniera sperimentale il livello di qualità del codice generato nel contesto degli esercizi tipici di un corso universitario, identificare i limiti, definire delle strategie per mitigarli e migliorare il risultato. Inoltre sarà necessario identificare le competenze necessarie agli studenti ed ai futuri sviluppatori per poter interagire efficacemente con questo tipo di strumenti.",
        "Recently, several automatic code generation tools based on AI techniques have been made available to users. These are specific products (e.g., CodePilot) or those with broader purposes (such as ChatGPT) that are capable of generating high-quality code from requirements expressed in natural language.
        These tools will soon enter the common toolset for software developers and therefore must be integrated into university training projects (and not only).
        The goal of this thesis is to experimentally evaluate the quality level of the code generated in the context of typical university course exercises, identify the limits, define strategies to mitigate them and improve the result. Additionally, it will be necessary to identify the skills required for students and future developers to effectively interact with this type of tools.",
        NULL,
        "Sviluppo in Java, Software Engineering, possibilmente Machine Learning",
        "Java development, Software Engineering, possibly Machine Learning",
        NULL,
        NULL,
        NULL,
        "2024-01-11",
        "2025-01-11",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13363,
        "Sviluppo di un simulatore di Home Automation",
        "Development of a Home Automation Simulator",
        "La tesi mira a progettare e realizzare un ambiente di simulazione per sistemi di automazione domestica. Questo simulatore avrà il compito di emulare il comportamento di dispositivi IoT (Internet of Things) in un contesto di automazione domestica, supportando protocolli di comunicazione come HTTP, MQTT e BLE (Bluetooth Low Energy). L'obiettivo è fornire agli sviluppatori di sistemi di home automation uno strumento per testare e validare funzionalità e scenari d'uso senza la necessità di disporre fisicamente di tutti i dispositivi hardware.

        Introduzione

        L'introduzione esporrà la crescente importanza dell'IoT nell'automazione domestica, sottolineando come la capacità di simulare dispositivi e scenari d'uso rappresenti un vantaggio significativo nello sviluppo di tali sistemi. Verrà inoltre definito l'obiettivo della tesi e descritta brevemente la metodologia di ricerca adottata.
        Stato dell'arte
        Questa sezione fornirà una panoramica delle tecnologie IoT applicate all'automazione domestica, con particolare attenzione ai protocolli di comunicazione HTTP, MQTT e BLE. Si analizzerà anche lo stato attuale degli strumenti di simulazione disponibili, evidenziando limiti e opportunità.

        Progettazione del simulatore

        In questa parte, verrà descritta la progettazione del simulatore, includendo:
        Architettura del sistema: Struttura software del simulatore, con dettagli sui moduli principali, le interfacce di comunicazione e il flusso di dati.
        Mock dei dispositivi IoT: Metodologie per l'emulazione dei dispositivi IoT, inclusi sensori e attuatori, che comunicano tramite HTTP, MQTT e BLE.
        API di interazione programmatica con il simulatore: Implementazione di una API che consenta di implementare test-case E2E automatizzati

        Implementazione

        Questa sezione illustrerà l'implementazione del simulatore, coprendo:
        Scelta delle tecnologie: Giustificazione delle tecnologie software utilizzate per lo sviluppo del simulatore.
        Dettagli di implementazione: Spiegazione del codice e delle strutture dati principali, insieme a esempi di interazione tra i moduli software.

        Validazione e Testing

        In questa fase, verranno descritti i metodi e i risultati della fase di test del simulatore, inclusa l'esecuzione di scenari d'uso per validare le funzionalità simulate. Si discuterà dell'efficacia del simulatore nell'emulare il comportamento dei dispositivi IoT e nella facilitazione dello sviluppo di sistemi di home automation. Particolare enfasi sarà posta nella possibilit`a di utilizzare lo strumento in ambito di continuous integration e continuous deployment (CI/CD)
        Conclusioni e sviluppi futuri
        Infine, verranno tratte le conclusioni, riflettendo sull'impatto del simulatore nello sviluppo di sistemi di automazione domestica e suggerendo possibili miglioramenti e direzioni future di ricerca, come l'integrazione con piattaforme di sviluppo cloud-based o il supporto per protocolli di comunicazione emergenti.

        Tecnologie, ambienti e linguaggi utilizzati

        Linux OpenWrt
        Docker
        Python
        Javascript
        HTTP/Rest
        Websocket
        MQTT",
        "The thesis aims to design and implement a simulation environment for home automation systems. This simulator will be responsible for emulating the behavior of IoT (Internet of Things) devices within a home automation context, supporting communication protocols such as HTTP, MQTT, and BLE (Bluetooth Low Energy). The goal is to provide developers of home automation systems with a tool to test and validate functionalities and use scenarios without the need to physically have all the hardware devices.

        Introduction

        The introduction will discuss the growing importance of IoT in home automation, highlighting how the ability to simulate devices and use scenarios represents a significant advantage in the development of such systems. The objective of the thesis and a brief description of the adopted research methodology will also be defined. State of the Art This section will provide an overview of IoT technologies applied to home automation, with particular attention to the HTTP, MQTT, and BLE communication protocols. It will also analyze the current state of available simulation tools, highlighting limits and opportunities.

        Simulator Design

        In this part, the design of the simulator will be described, including:
        System Architecture: The software structure of the simulator, with details on the main modules, communication interfaces, and data flow.
        Mocking of IoT Devices: Methodologies for emulating IoT devices, including sensors and actuators, communicating via HTTP, MQTT, and BLE.
        Programmatic Interaction API with the Simulator: Implementation of an API that allows for the implementation of automated E2E test cases.

        Implementation

        This section will illustrate the implementation of the simulator, covering:
        Choice of Technologies: Justification of the software technologies used for the development of the simulator.
        Implementation Details: Explanation of the code and main data structures, along with examples of interaction between software modules.

        Validation and Testing

        In this phase, the methods and results of the simulator's test phase will be described, including the execution of use scenarios to validate the simulated functionalities. The effectiveness of the simulator in emulating the behavior of IoT devices and in facilitating the development of home automation systems will be discussed. Particular emphasis will be placed on the possibility of using the tool in the context of continuous integration and continuous deployment (CI/CD). Conclusions and Future Developments Finally, conclusions will be drawn, reflecting on the impact of the simulator in the development of home automation systems and suggesting possible improvements and future research directions, such as integration with cloud-based development platforms or support for emerging communication protocols.

        Technologies, Environments, and Languages Used

        Linux OpenWrt
        Docker
        Python
        JavaScript
        HTTP/Rest
        Websocket
        MQTT",
        NULL,
        "Python",
        "Python",
        NULL,
        NULL,
        "Domenico De Guglielmo",
        "2024-02-05",
        "2025-02-05",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13470,
        "IA Generativa per la Creazione di OpenScenario e OpenDrive da Serie di Immagini del Traffico",
        "Generative AI for Generation of OpenScenario and OpenDrive from series of traffic images",
        "Contesto:
        Nel campo dei Sistemi Avanzati di Assistenza alla Guida (ADAS) e dei Veicoli Autonomi (AV), i simulatori di guida e traffico svolgono un ruolo cruciale nell'accelerare i processi di sviluppo, formazione e validazione. Questo settore dinamico sta assistendo a una crescente domanda di modelli di simulazione standardizzati, con l'obiettivo di garantire uno scambio fluido di dati e modelli.

        Descrizione:
        Il candidato entrerà a far parte di un team dinamico di Ricerca e Innovazione dedicato a spingere i limiti dello sviluppo basato sui dati. Questo ruolo si concentra sullo sviluppo di una piattaforma innovativa Software as a Service (SaaS), capace di tradurre immagini di traffico in file OpenSCENARIO e OpenDRIVE utilizzando modelli linguistici avanzati (Large Language Models).

        Obiettivi:

        Esplorare tecniche all'avanguardia, modelli linguistici avanzati e generazione di testo strutturato
        Sviluppare prompt ottimizzati per la generazione di file standardizzati a partire da immagini di traffico
        Ottimizzare ChatGPT per un modello personalizzato
        Progettare ed eseguire la validazione dell'output tramite l'ambiente di simulazione CARLA/esmini
        Sviluppare un servizio end-to-end, che includa la definizione del customer journey, lo sviluppo del front-end, l'integrazione di ChatGPT e il deployment su server fisico",
        "Context:
        In the realm of Advanced Driver Assistance Systems (ADAS) and Autonomous Vehicles (AV), drive and traffic simulators play a crucial role in accelerating development, training, and validation processes. This dynamic field is witnessing a growing demand for standardized simulation models, aiming for the seamless exchange of data and models.

        Description:
        The candidate will join a dynamic Research and Innovation team dedicated to pushing the boundaries of data-driven development. This role focuses on developing a cutting-edge Software as a Service (SaaS) platform, seamlessly translating traffic images into OpenSCENARIO and OpenDRIVE files using Large Language Models.

        Objectives:
        Explore state-of-the-art techniques, large language models, and structured text generation
        Prompt engineering for optimized generation of standardized files from traffic images
        Fine-tune ChatGPT for a customized model
        Design and execute output validation using CARLA simulator / esmini testing environment
        Develop end-to-end service, including customer journey definition, front-end development, ChatGPT integration, and deployment on a physical server",
        NULL,
        "Prerequisiti:
        Esperienza nell'integrazione di API di OpenAI ChatGPT (o simili) per la generazione di descrizioni testuali strutturate a partire da immagini
        Interesse dimostrato per la Guida Autonoma
        Competenze di sviluppo web full-stack",
        "Pre-requisites:
        Experience with OpenAI ChatGPT (or similar) API integration for generating structured textual descriptions of images
        Demonstrated interest in Autonomous Driving
        Full-stack web development skills",
        NULL,
        NULL,
        NULL,
        "2024-02-26",
        "2025-02-26",
        0,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13837,
        "Coach personale basato sull'IA generativa",
        "Personal coach based on generative AI",
        "L'obiettivo di questo progetto è sperimentare l'uso dei modelli linguistici di grandi dimensioni (LLM) per costruire un sistema di raccomandazione nel dominio del fitness e del benessere. Gli input al LLM includono dati relativi a: attività fisica, sonno, alimentazione, livello di stress. A eccezione dell'alimentazione, gli altri parametri vengono raccolti da dispositivi indossabili personali (es. Fitbit, smartwatch). L'output previsto dal LLM consiste in raccomandazioni giornaliere o settimanali su comportamenti (in particolare alimentazione, sonno, attività fisica) mirati a migliorare il fitness e il benessere, personalizzate per ciascun individuo. Le raccomandazioni si basano su letteratura scientifica disponibile (PubMed e altre fonti) e sui dati personali dell'utente.

        Le fasi del progetto sono:

        -valutazione e selezione del LLM più adatto (criteri: addestramento su dati medici, privacy, licenze)
        -costruzione di una ground truth (insieme di casi studio individuali e raccomandazioni correlate fornite da esperti medici)
        -selezione e personalizzazione delle metriche di valutazione
        -sperimentazione sull'LLM senza fine-tuning (prompt engineering, progettazione di prompt per convertire i dati personali in raccomandazioni specifiche)
        -costruzione del dataset per il fine-tuning (letteratura medica su invecchiamento e benessere)
        -fine-tuning dell'LLM
        -secondo ciclo di sperimentazione

        Il progetto è realizzato in collaborazione con l'Università di Paderborn e l'Amsterdam University Medical Center.",
        "The goal of this project is to experiment the use of LLMs to build a recommender system in the domain of fitness and well being.
        Inputs to the LLM are data about a person’s: physical activity, sleep, food eaten, stress level.
        Apart the food eaten, the other parameters are collected from personal wearable devices (aka Fitbit, Smartwatch).
        Expected output from the LLM are daily or weekly recommendations about behaviours (notably food, sleep, physical activity)
        to improve fitness and well being, customized for the specific person.
        Recommendations are based on scientific literature available (Pubmed and other sources) and personal data.

        The steps for the project are:
        -evaluation and selection of the most suitable LLM (criteria: training on medical data, privacy, licensing)
        -construction of ground truth (set of case studies, individual cases and related recommendations by medical experts)
        -selection and customization of evaluation metrics
        -experimentation on LLM without fine tuning (prompt engineering, design of prompts to convert personal data in specific recommendations)
        -construction of data set for fine tuning (medical literature on aging and well being)
        -fine tuning of LLM
        -experimentation, second round

        The project is in collaboration with University of Paderborn and Amsterdam University Medical Center",
        NULL,
        "Sviluppo software, IA generativa",
        "Software development, Generative AI",
        NULL,
        NULL,
        NULL,
        "2024-05-31",
        "2025-05-31",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        14026,
        "Utilizzo dell'IA per la generazione automatizzata di script di test",
        "Use of AI for automated test script generation",
        "Tesi presso Concept Quality Reply

        Questa tesi riconosce il ruolo fondamentale della generazione di test case utilizzando l’IA generativa per garantire la qualità e l'affidabilità del prodotto durante l'intero ciclo di vita, migliorando la soddisfazione degli utenti e riducendo i costi.

        Descrizione:
        Ecco una breve descrizione delle attività che il candidato per la tesi potrebbe svolgere all'interno del team sotto la guida di un tutor esperto:

        Rivedere la ricerca rilevante su IA generativa e test automatizzati.
        Definire l'ambito e le sfide della generazione di test case basata su IA.
        Raccogliere dataset per l'addestramento e la valutazione del modello.
        Creare modelli di IA per la generazione di test case.
        Progettare esperimenti per valutare le prestazioni del modello.
        Analizzare i risultati degli esperimenti per misurare l'efficacia del sistema.
        Raffinare il modello di IA basandosi sui feedback delle valutazioni.
        Familiarità con diversi framework di test per vari aspetti del testing di app mobili (ad esempio, test UI, test di integrazione).
        Esperienza pratica con framework di test popolari (es. Selenium, Appium).
        Scrivere e presentare i risultati della ricerca in una tesi.
        Obiettivi:
        Utilizzare l'IA generativa per trasformare requisiti in linguaggio naturale da diversi formati (PDF, PPT, Word) in un set completo di test case e generare lo script automatizzato finale (Appium, Selenium) dei test automatizzati corrispondenti.

        Prerequisiti:

        Conoscenza di Java, Python, JavaScript, HTML, CSS
        Conoscenza del testing automatizzato (ad esempio, Selenium, Appium)
        Conoscenza di approcci di IA e Machine Learning
        Interesse dimostrato per il testing automatizzato, algoritmi di IA generativa
        Competenze acquisite:

        Apprendimento sull’IA generativa per velocizzare i processi di testing e validazione
        Apprendimento del processo generativo automatizzato dai requisiti funzionali ai test case per i servizi finanziari",
        "Thesis work at Concept Quality Reply

        Context:
        This thesis recognizes the pivotal role of test case generation, using generative AI, to ensure product quality and reliability throughout the entire product lifecycle, ultimately
        enhancing user satisfaction and reducing cost.

        Description:
        Here's a brief description of the activities the candidate for the thesis might undertake within the team under the guidance of an expert tutor:
        • Review relevant research on generative AI and automated testing.
        • Define the scope and challenges of AI-based test case generation.
        • Gather datasets for model training and evaluation.
        • Create AI models for test case generation.
        • Design experiments to assess model performance.
        • Analyze experiment results to measure system effectiveness.
        • Refine the AI model based on evaluation feedback.
        • Familiarity with various test frameworks for different aspects of mobile app testing (e.g., UI testing, integration testing).
        • Hands-on experience with popular testing frameworks (e.g., Selenium, Appium).
        • Write and present the research findings in a thesis.

        Objectives:
        Use generative AI to transform natural language requirements from different formats (PDF, PPT, Word) into a complete set of test cases, and to generate the final automated script
        (Appium, Selenium) of the corresponding automated tests.

        Pre-requisites:
        • Knowledge of Java, python, javascript, html, css
        • Knowledge of automated testing (e.g., Selenium, Appium).
        • Knowledge of AI and Machine learning approaches
        • Demonstrated interest in automated testing, Generative AI algorithms
        Skills acquired:
        • Learning about Generative AI to speed-up testing and validation processes
        • Learning about automated generative process from functional requirements to test
        cases for financial services",
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        "2024-09-03",
        "2025-09-03",
        0, /* Discrepancy with real value */
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        14027,
        "Migliorare il Testing del Software attraverso l'IA Generativa",
        "Enhancing Software Testing Through Generative AI",
        "Tesi presso Concept Quality Reply

        Contesto:
        Nel dominio specifico della diagnostica dei veicoli e dell'IoT, ottenere una valida End-to-End (E2E) è fondamentale per garantire l'affidabilità e le prestazioni dei sistemi integrati. Questo richiede approcci innovativi al testing del software, e l'Intelligenza Artificiale Generativa (Generative AI) emerge come uno strumento promettente per ottimizzare e potenziare i processi di testing.

        Descrizione:
        Questa tesi esplora l'integrazione e l'applicazione dell'IA Generativa nel campo del testing del software. Sfruttando il potere della Generative AI, questa ricerca mira a migliorare l'efficienza, l'accuratezza e la completezza delle attività di testing, soprattutto nel contesto dell'IoT e dei veicoli connessi.

        Obiettivi:

        Esplorare il potenziale della Generative AI nella generazione di test case completi e diversificati per sistemi software complessi.
        Indagare come la Generative AI possa accelerare la creazione di scenari di test e dati, simulando l'uso reale e migliorando la copertura dei test.
        Valutare l'impatto della Generative AI sull'efficienza e sull'efficacia complessiva dei processi di validazione End-to-End (E2E), in particolare nei sistemi IoT e nei veicoli connessi.
        Sviluppare metodologie per integrare l'IA Generativa nel ciclo di vita del testing del software, con un focus sull'ottimizzazione dell'utilizzo delle risorse e sulla riduzione dei tempi di testing.
        Prerequisiti:

        Competenza nello sviluppo software e nelle metodologie di testing.
        Familiarità con i concetti e i principi della Generative AI.
        Conoscenza delle tecnologie IoT e dei veicoli connessi.
        Competenze acquisite:

        Java, Postman, Selenium, CANalyzer, CAPL, framework di Generative AI (es. GPT-3, GPT-4), Python, librerie di Machine Learning (es. TensorFlow, PyTorch), framework e protocolli IoT, tecnologie per veicoli connessi, strumenti di testing automatizzato.",
        "Thesis work at Concept Quality Reply

        Context:
        In the specific domain of vehicle diagnostics and IoT, achieving thorough End-to-End (E2E) validation is critical for ensuring the reliability and
        performance of integrated systems. This necessitates innovative approaches to software testing, and Generative Artificial Int elligence (Generative AI)
        emerges as a promising tool to streamline and augment testing processes.

        Description:
        This thesis delves into the integration and application of Generative AI in the field of software testing. y harnessing the p ower of Generative AI, this
        research aims to enhance the efficiency, accuracy, and comprehensiveness of testing activities, especially within the context of IoT and connected
        vehicles.

        Objectives:
        • Explore the potential of Generative AI in generating comprehensive and diverse test cases for intricate software systems.
        • Investigate how Generative AI can expedite the creation of test scenarios and data, mimicking real-world usage and improving test coverage.
        • Assess the impact of Generative AI on the overall efficiency and effectiveness of End-to-End (E2E) validation processes, particularly in IoT and
        connected vehicle systems.
        • Develop methodologies to integrate Generative AI seamlessly into the software testing life cycle, with a focus on optimizing resource utilization and
        reducing testing time.

        • Pre-requisites:
        • Proficiency in software development and testing methodologies.
        • Familiarity with Generative AI concepts and principles.
        • Understanding of IoT and connected vehicle technologies.

        • Skills acquired:
        • Java, Postman, Selenium, CANalyzer, CAPL, Generative AI frameworks (e.g., GPT-3, GPT-4), Python, Machine Learning libraries (e.g.,
        TensorFlow, PyTorch), IoT frameworks and protocols, Connected vehicle technologies, Automated testing tools.",
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        "2024-03-09",
        "2025-03-09",
        0,
        0,
        "CL003",
        "2",
        NULL
    );

-- ------------------------------------------------------------
-- ↓ thesis_proposal_degree table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_degree (thesis_proposal_id, degree_id)
VALUES
    (10187, "37-18"),
    (12946, "37-18"),
    (13169, "37-18"),
    (13253, "37-18"),
    (13275, "37-18"),
    (13363, "37-18"),
    (13470, "37-18"),
    (13837, "37-18"),
    (14026, "37-18"),
    (14027, "37-18");

-- ------------------------------------------------------------
-- ↓ thesis_proposal_keyword table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_keyword (thesis_proposal_id, keyword_id)
VALUES
    (10187, 11),
    (10187, 12),
    (10187, 13),
    (12946, 8),
    (13253, 8),
    (13253, 10),
    (13275, 1),
    (13275, 2),
    (13275, 3),
    (13275, 4),
    (13363, 5),
    (13363, 6),
    (13363, 7),
    (13363, 8),
    (13470, 1),
    (13470, 8),
    (13470, 9),
    (13837, 1),
    (13837, 4),
    (14026, 1),
    (14026, 8),
    (14027, 1),
    (14027, 8),
    (14027, 9);

-- ------------------------------------------------------------
-- ↓ thesis_proposal_type table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_type (thesis_proposal_id, type_id)
VALUES
    (10187, 9),
    (12946, 7),
    (13169, 7),
    (13275, 9),
    (13363, 9),
    (13837, 9);

-- ------------------------------------------------------------
-- ↓ thesis_proposal_supervisor_cosupervisor table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_supervisor_cosupervisor (thesis_proposal_id, teacher_id, is_supervisor)
VALUES
    (10187, 1921, 1),
    (12946, 38485, 1),
    (12946, 3019, 0),
    (13169, 38485, 1),
    (13253, 38485, 1),
    (13275, 3019, 1),
    (13363, 23270, 1),
    (13470, 38485, 1),
    (13837, 1921, 1),
    (14026, 38485, 1),
    (14027, 38485, 1);

-- ------------------------------------------------------------
-- ↓ logged_student table ↓
-- ------------------------------------------------------------
INSERT INTO
    logged_student (student_id)
VALUES
    (320213);