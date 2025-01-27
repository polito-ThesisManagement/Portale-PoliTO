USE polito_test;

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
-- ↓ degree_programme_container table ↓
-- ------------------------------------------------------------
INSERT INTO
    degree_programme_container (id, name, name_en)
VALUES
    ("AER1", "Ingegneria Aerospaziale", "Aerospace Engineering"),
    ("AMB1", "Ingegneria per l'Ambiente e il Territorio", "Environmental and Land Engineering"),
    ("ARC1", "Architettura (Architecture)", "Architecture"),
    ("AUT1", "Ingegneria dell'Autoveicolo (Automotive Engineering)", "Automotive Engineering"),
    ("BIO1", "Ingegneria Biomedica", "Biomedical Engineering"),
    ("CEE1", "Civil and Environmental Engineering", "Civil and Environmental Engineering"),
    ("CHI1", "Ingegneria Chimica E Alimentare", "Chemical and Food Engineering"),
    ("CIN1", "Ingegneria del Cinema e dei mezzi di comunicazione", "Cinema and Media Engineering"),
    ("CIV1", "Ingegneria Civile", "Civil Engineering"),
    ("DEC1", "Design e Comunicazione", "Design and Communication"),
    ("ECE1", "Electronic and Communications Engineering (Ingegneria Elettronica E Delle Comunicazioni)", "Electronic and Communications Engineering"),
    ("EDI1", "Ingegneria Edile", "Building Engineering"),
    ("ELN1", "Ingegneria Elettronica", "Electronic Engineering"),
    ("ELT1", "Ingegneria Elettrica", "Electrical Engineering"),
    ("ENE1", "Ingegneria Energetica", "Energy Engineering"),
    ("FIS1", "Ingegneria Fisica", "Physical Engineering"),
    ("GES1", "Ingegneria Gestionale", "Engineering and Management"),
    ("INF1", "Ingegneria Informatica (Computer Engineering)", "Computer Engineering"),
    ("MAT1", "Ingegneria dei Materiali", "Materials Engineering"),
    ("MEC1", "Ingegneria Meccanica", "Mechanical Engineering"),
    ("MTM1", "Matematica per l'Ingegneria", "Mathematics for Engineering"),
    ("PRO1", "Ingegneria della Produzione Industriale", "Industrial Production Engineering"),
    ("PTU1", "Pianificazione Territoriale, Urbanistica e Paesaggistico-Ambientale", "Territorial, Urban, Environmental and Landscape Planning"),
    ("SSA1", "Design Sostenibile per il Sistema Alimentare", "Sustainable Design for Food Systems"),
    ("TIM1", "Tecnologie per L'Industria Manifatturiera", "Industrial Manufacturing Technologies"),
    ("ACCZ", "Architettura Costruzione Città", "Architecture Construction City"),
    ("ADPZ", "Architettura del Paesaggio", "Landscape Architecture"),
    ("AERZ", "Ingegneria Aerospaziale", "Aerospace Engineering"),
    ("AGEZ", "AgriTech Engineering", "AgriTech Engineering"),
    ("AMBZ", "Ingegneria per l'Ambiente e il Territorio", "Environmental and Land Engineering"),
    ("APAZ", "Architettura per il Patrimonio", "Architecture for Heritage"),
    ("ASOZ", "Architettura per la Sostenibilità", "Architecture for Sustainability"),
    ("AUTZ", "Automotive Engineering (Ingegneria dell'Autoveicolo)", "Automotive Engineering"),
    ("BIOZ", "Ingegneria Biomedica", "Biomedical Engineering"),
    ("CHIZ", "Ingegneria Chimica e dei Processi sostenibili", "Chemical and Sustainable Processes Engineering"),
    ("CINZ", "Ingegneria del Cinema e dei mezzi di comunicazione", "Cinema and Media Engineering"),
    ("CIVZ", "Ingegneria Civile", "Civil Engineering"),
    ("COEZ", "Communications Engineering", "Communications Engineering"),
    ("CYBZ", "Cybersecurity", "Cybersecurity"),
    ("DSEZ", "Data Science and Engineering", "Data Science and Engineering"),
    ("DSIZ", "Design Sistemico", "Systemic Design"),
    ("DSTZ", "Digital Skills for Sustainable Societal Transitions", "Digital Skills for Sustainable Societal Transitions"),
    ("ECTZ", "Economia dell'Ambiente, della Cultura e del Territorio", "Economics of the Environment, Culture and Territory"),
    ("EDIZ", "Ingegneria Edile", "Building Engineering"),
    ("ELNZ", "Ingegneria Elettronica (Electronic Engineering)", "Electronic Engineering"),
    ("ELTZ", "Ingegneria Elettrica", "Electrical Engineering"),
    ("ENUZ", "Ingegneria Energetica e Nucleare", "Energy and Nuclear Engineering"),
    ("FSCZ", "Physics of Complex Systems (Fisica dei Sistemi Complessi)", "Physics of Complex Systems"),
    ("GESZ", "Ingegneria Gestionale", "Engineering and Management"),
    ("GGEZ", "Georesources and Geoenergy Engineering", "Georesources and Geoenergy Engineering"),
    ("GSTZ", "Geografia e Scienze Territoriali", "Geography and Territorial Sciences"),
    ("ICCZ", "Industrial chemistry for circular and bio economy", "Industrial chemistry for circular and bio economy"),
    ("INFZ", "Ingegneria Informatica (Computer Engineering)", "Computer Engineering"),
    ("IPTZ", "Ingegneria della Produzione Industriale e dell'Innovazione Tecnologica", "Industrial Production and Technological Innovation Engineering"),
    ("ISSZ", "ICT for Smart Societies (ICT per la Società Del Futuro)", "ICT for Smart Societies"),
    ("MCTZ", "Mechatronic Engineering (Ingegneria Meccatronica)", "Mechatronic Engineering"),
    ("MECZ", "Ingegneria Meccanica (Mechanical Engineering)", "Mechanical Engineering"),
    ("MI4Z", "Ingegneria dei Materiali per l'Industria 4.0", "Materials Engineering for Industry 4.0"),
    ("MTMZ", "Ingegneria Matematica", "Mathematical Engineering"),
    ("NTIZ", "Nanotechnologies For ICTs (Nanotecnologie per le ICT)", "Nanotechnologies for ICTs"),
    ("PAVZ", "Progettazione delle Aree Verdi e del Paesaggio", "Green Areas and Landscape Design"),
    ("PTUZ", "Pianificazione Territoriale, Urbanistica e Paesaggistico-Ambientale", "Territorial, Urban, Environmental and Landscape Planning"),
    ("QUEZ", "Quantum Engineering", "Quantum Engineering");

-- ------------------------------------------------------------
-- ↓ degree_programme table ↓
-- ------------------------------------------------------------
INSERT INTO
    degree_programme (id, description, description_en, level, id_collegio, container_id)
VALUES
    (
        "32-1",
        "Laurea Triennale - INGEGNERIA DELL'AUTOVEICOLO",
        "Bachelor's Degree - AUTOMOTIVE ENGINEERING",
        "1",
        "CL009",
        "AUT1"
    ),
    (
        "32-2",
        "Laurea Magistrale - AUTOMOTIVE ENGINEERING (INGEGNERIA DELL'AUTOVEICOLO)",
        "Master's Degree - AUTOMOTIVE ENGINEERING",
        "2",
        "CL009",
        "AUTZ"
    ),
    (
        "32-6",
        "Laurea Triennale - INGEGNERIA DEI MATERIALI",
        "Bachelor's Degree - MATERIALS ENGINEERING",
        "1",
        "CL011",
        "MAT1"
    ),
    (
        "32-9",
        "Laurea Triennale - INGEGNERIA ELETTRICA",
        "Bachelor's Degree - ELECTRICAL ENGINEERING",
        "1",
        "CL017",
        "ELT1"
    ),
    (
        "32-11",
        "Laurea Triennale - INGEGNERIA AEROSPAZIALE",
        "Bachelor's Degree - AEROSPACE ENGINEERING",
        "1",
        "CL009",
        "AER1"
    ),
    (
        "32-12",
        "Laurea Triennale - INGEGNERIA BIOMEDICA",
        "Bachelor's Degree - BIOMEDICAL ENGINEERING",
        "1",
        "CL010",
        "BIO1"
    ),
    (
        "32-13",
        "Laurea Triennale - INGEGNERIA CHIMICA E ALIMENTARE",
        "Bachelor's Degree - CHEMICAL AND FOOD ENGINEERING",
        "1",
        "CL011",
        "CHI1"
    ),
    (   "32-14", 
        "Laurea Triennale - INGEGNERIA CIVILE",
        "Bachelor's Degree - CIVIL ENGINEERING",
        "1",
        "CL018",
        "CIV1"
    ),
    (   "32-17", 
        "Laurea Triennale - INGEGNERIA EDILE",
        "Bachelor's Degree - BUILDING ENGINEERING",
        "1",
        "CL018",
        "EDI1"  
    ),
    (
        "32-18",
        "Laurea Triennale - INGEGNERIA ENERGETICA",
        "Bachelor's Degree - ENERGY ENGINEERING",
        "1",
        "CL017",
        "ENE1"
    ),
    (
        "32-19",
        "Laurea Triennale - INGEGNERIA MECCANICA (MECHANICAL ENGINEERING)",
        "Bachelor's Degree - MECHANICAL ENGINEERING",
        "1",
        "CL009",
        "MEC1"  
    ),
    (
        "32-21", 
        "Laurea Triennale - INGEGNERIA MECCANICA", 
        "Bachelor's Degree - MECHANICAL ENGINEERING",
        "1",
        "CL009",
        "MEC1"
    ),
    (
        "32-22",
        "Laurea Triennale - INGEGNERIA PER L'AMBIENTE E IL TERRITORIO",
        "Bachelor's Degree - ENVIRONMENTAL AND LAND ENGINEERING",
        "1",
        "CL007",
        "AMB1"
    ),
    (
        "32-23",
        "Laurea Triennale - MATEMATICA PER L'INGEGNERIA",
        "Bachelor's Degree - MATHEMATICS FOR ENGINEERING",
        "1",
        "CL014",
        "MTM1"
    ),
    (
        "32-26",
        "Laurea Magistrale - INGEGNERIA AEROSPAZIALE",
        "Master's Degree - AEROSPACE ENGINEERING",
        "2",
        "CL009",
        "AERZ"
    ),
    (
        "32-27",
        "Laurea Magistrale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE E DELL'INNOVAZIONE TECNOLOGICA",
        "Master's Degree - INDUSTRIAL PRODUCTION AND TECHNOLOGICAL INNOVATION ENGINEERING",
        "2",
        "CL008",
        "IPTZ"
    ),
    (
        "32-28",
        "Laurea Magistrale - INGEGNERIA BIOMEDICA",
        "Master's Degree - BIOMEDICAL ENGINEERING",
        "2",
        "CL010",
        "BIOZ"
    ),
    (
        "32-29",
        "Laurea Magistrale - INGEGNERIA CHIMICA E DEI PROCESSI SOSTENIBILI",
        "Master's Degree - CHEMICAL AND SUSTAINABLE PROCESSES ENGINEERING",
        "2",
        "CL011",
        "CHIZ"
    ),
    (
        "32-30",
        "Laurea Magistrale - INGEGNERIA CIVILE",
        "Master's Degree - CIVIL ENGINEERING",
        "2",
        "CL018",
        "CIVZ"
    ),
    (
        "32-34",
        "Laurea Magistrale - INGEGNERIA EDILE",
        "Master's Degree - BUILDING ENGINEERING",
        "2",
        "CL018",
        "EDIZ"
    ),
    (
        "32-35",
        "Laurea Magistrale - INGEGNERIA ELETTRICA",
        "Master's Degree - ELECTRICAL ENGINEERING",
        "2",
        "CL017",
        "ELTZ"
    ),
    (
        "32-36",
        "Laurea Magistrale - INGEGNERIA ENERGETICA E NUCLEARE",
        "Master's Degree - ENERGY AND NUCLEAR ENGINEERING",
        "2",
        "CL017",
        "ENUZ"
    ),
    (
        "32-37",
        "Laurea Magistrale - INGEGNERIA MECCANICA",
        "Master's Degree - MECHANICAL ENGINEERING",
        "2",
        "CL009",
        "MECZ"
    ),
    (
        "32-38",
        "Laurea Magistrale - INGEGNERIA PER L'AMBIENTE E IL TERRITORIO",
        "Master's Degree - ENVIRONMENTAL AND LAND ENGINEERING",
        "2",
        "CL007",
        "AMBZ"
    ),
    (
        "32-39",
        "Laurea Magistrale - INGEGNERIA MATEMATICA",
        "Master's Degree - MATHEMATICAL ENGINEERING",
        "2",
        "CL014",
        "MTMZ"
    ),
    (
        "32-42",
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE",
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008",
        "PRO1"
    ),
    (   
        "32-44", 
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE", 
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008",
        "PRO1"
    ),
    (
        "32-51", 
        "Laurea Triennale - INGEGNERIA DELLA PRODUZIONE INDUSTRIALE", 
        "Bachelor's Degree - INDUSTRIAL PRODUCTION ENGINEERING",
        "1",
        "CL008",
        "PRO1"
    ),
    (
        "32-52", 
        "Laurea Triennale - INGEGNERIA DELL'AUTOVEICOLO (AUTOMOTIVE ENGINEERING)", 
        "Bachelor's Degree - AUTOMOTIVE ENGINEERING",
        "1",
        "CL009",
        "AUT1"
    ),
    (
        "32-53", 
        "Laurea Magistrale - INGEGNERIA MECCANICA (MECHANICAL ENGINEERING)", 
        "Master's Degree - MECHANICAL ENGINEERING",
        "2",
        "CL009",
        "MECZ"
    ),
    (
        "32-136",
        "Laurea Magistrale - AGRITECH ENGINEERING",
        "Master's Degree - AGRITECH ENGINEERING",
        "2",
        "CL006",
        "AGEZ"
    ),
    (
        "32-137",
        "Laurea Magistrale - QUANTUM ENGINEERING",
        "Master's Degree - QUANTUM ENGINEERING",
        "2",
        "CL016",
        "QUEZ"
    ),
    (
        "32-138",
        "Laurea Magistrale - CYBERSECURITY",
        "Master's Degree - CYBERSECURITY",
        "2",
        "CL003",
        "CYBZ"
    ),
    (
        "32-139",
        "Laurea Magistrale - CYBERSECURITY",
        "Master's Degree - CYBERSECURITY",
        "2",
        "CL003",
        "CYBZ"
    ),
    (
        "32-141",
        "Laurea Magistrale - CIVIL ENGINEERING",
        "Master's Degree - CIVIL ENGINEERING",
        "2",
        "CL018",
        "CIVZ"
    ),
    (
        "32-282",
        "Laurea Triennale - CIVIL AND ENVIRONMENTAL ENGINEERING",
        "Bachelor's Degree - CIVIL AND ENVIRONMENTAL ENGINEERING",
        "1",
        "CL018",
        "CEE1"
    ),
    (
        "32-283",
        "Laurea Magistrale - GEORESOURCES AND GEOENERGY ENGINEERING",
        "Master's Degree - GEORESOURCES AND GEOENERGY ENGINEERING",
        "2",
        "CL007",
        "GGEZ"
    ),
    (
        "32-284",
        "Laurea Magistrale - INDUSTRIAL CHEMISTRY FOR CIRCULAR AND BIO ECONOMY",
        "Master's Degree - INDUSTRIAL CHEMISTRY FOR CIRCULAR AND BIO ECONOMY",
        "2",
        "CL011",
        "ICCZ"
    ),
    (
        "32-932",
        "Laurea Magistrale - INGEGNERIA DEI MATERIALI PER L'INDUSTRIA 4.0",
        "Master's Degree - MATERIALS ENGINEERING FOR INDUSTRY 4.0",
        "2",
        "CL011",
        "MI4Z"
    ),
    (
        "37-1",
        "Laurea Triennale - INGEGNERIA ELETTRONICA",
        "Bachelor's Degree - ELECTRONIC ENGINEERING",
        "1",
        "CL006",
        "ELN1"
    ),
    (
        "37-3",
        "Laurea Triennale - INGEGNERIA INFORMATICA",
        "Bachelor's Degree - COMPUTER ENGINEERING",
        "1",
        "CL003",
        "INF1"
    ),
    (
        "37-9",
        "Laurea Triennale - INGEGNERIA FISICA",
        "Bachelor's Degree - PHYSICAL ENGINEERING",
        "1",
        "CL006",
        "FIS1"
    ),
    (
        "37-10", 
        "Laurea Triennale - INGEGNERIA INFORMATICA (COMPUTER ENGINEERING)", 
        "Bachelor's Degree - COMPUTER ENGINEERING",
        "1",
        "CL003",
        "INF1"
    ),
    (
        "37-13",
        "Laurea Magistrale - INGEGNERIA ELETTRONICA (ELECTRONIC ENGINEERING)",
        "Master's Degree - ELECTRONIC ENGINEERING",
        "2",
        "CL006",
        "ELNZ"
    ),
    (
        "37-17",
        "Laurea Triennale - ELECTRONIC AND COMMUNICATIONS ENGINEERING (INGEGNERIA ELETTRONICA E DELLE COMUNICAZIONI)",
        "Bachelor's Degree - ELECTRONIC AND COMMUNICATIONS ENGINEERING",
        "1",
        "CL006",
        "ECE1"
    ),
    (
        "37-18",
        "Laurea Magistrale - INGEGNERIA INFORMATICA (COMPUTER ENGINEERING)",
        "Master's Degree - COMPUTER ENGINEERING",
        "2",
        "CL003",
        "INFZ"
    ),
    (
        "37-20",
        "Laurea Magistrale - ICT FOR SMART SOCIETIES (ICT PER LA SOCIETA' DEL FUTURO)",
        "Master's Degree - ICT FOR SMART SOCIETIES",
        "2",
        "CL003",
        "ISSZ"
    ),
    (
        "37-21",
        "Laurea Triennale - INGEGNERIA DEL CINEMA E DEI MEZZI DI COMUNICAZIONE",
        "Bachelor's Degree - CINEMA AND MEDIA ENGINEERING",
        "1",
        "CL003",
        "CIN1"
    ),
    (
        "37-22",
        "Laurea Magistrale - INGEGNERIA DEL CINEMA E DEI MEZZI DI COMUNICAZIONE",
        "Master's Degree - CINEMA AND MEDIA ENGINEERING",
        "2",
        "CL003",
        "CINZ"
    ),
    (
        "37-23",
        "Laurea Magistrale - NANOTECHNOLOGIES FOR ICTs (NANOTECNOLOGIE PER LE ICT)",
        "Master's Degree - NANOTECHNOLOGIES FOR ICTs",
        "2",
        "CL006",
        "NTIZ"
    ),
    (
        "37-24",
        "Laurea Magistrale - PHYSICS OF COMPLEX SYSTEMS (FISICA DEI SISTEMI COMPLESSI)",
        "Master's Degree - PHYSICS OF COMPLEX SYSTEMS",
        "2",
        "CL006",
        "FSCZ"
    ),
    (
        "37-55",
        "Laurea Magistrale - MECHATRONIC ENGINEERING (INGEGNERIA MECCATRONICA)",
        "Master's Degree - MECHATRONIC ENGINEERING",
        "2",
        "CL003",
        "MCTZ"  
    ),
    (
        "37-320",
        "Laurea Magistrale - DATA SCIENCE AND ENGINEERING",
        "Master's Degree - DATA SCIENCE AND ENGINEERING",
        "2",
        "CL003",
        "DSEZ"
    ),
    (
        "37-930",
        "Laurea Magistrale - COMMUNICATIONS ENGINEERING",
        "Master's Degree - COMMUNICATIONS ENGINEERING",
        "2",
        "CL006",
        "COEZ"
    ),
    (
        "38-1",
        "Laurea Magistrale - INGEGNERIA GESTIONALE",
        "Master's Degree - ENGINEERING AND MANAGEMENT",
        "2",
        "CL008",
        "GESZ"
    ),
    (
        "38-3",
        "Laurea Triennale - INGEGNERIA GESTIONALE",
        "Bachelor's Degree - ENGINEERING AND MANAGEMENT",
        "1",
        "CL008",
        "GES1"
    ),
    (   
        "38-5", 
        "Laurea Triennale - INGEGNERIA GESTIONALE", 
        "Bachelor's Degree - ENGINEERING AND MANAGEMENT",
        "1",
        "CL008",
        "GES1"
    ),
    (
        "38-10", 
        "Laurea Magistrale - INGEGNERIA GESTIONALE (ENGINEERING AND MANAGEMENT)", 
        "Master's degree - ENGINEERING AND MANAGEMENT",
        "2",
        "CL008",
        "GESZ"
    ),
    (
        "38-281",
        "Laurea Triennale - TECNOLOGIE PER L'INDUSTRIA MANIFATTURIERA",
        "Bachelor's Degree - INDUSTRIAL MANUFACTURING TECHNOLOGIES",
        "1",
        "CL008",
        "TIM1"
    ),
    (
        "80-1",
        "Laurea Triennale - ARCHITETTURA",
        "Bachelor's Degree - ARCHITECTURE",
        "1",
        "CL016",
        "ARC1"
    ),
    (   
        "80-2", 
        "Laurea Triennale - ARCHITETTURA (ARCHITECTURE)", 
        "Bachelor's Degree - ARCHITECTURE",
        "1",
        "CL016",
        "ARC1"  
    ),
    (
        "81-4",
        "Laurea Magistrale - DESIGN SISTEMICO",
        "Master's Degree - SYSTEMIC DESIGN",
        "2",
        "CL016",
        "DSIZ"
    ),
    (
        "81-5",
        "Laurea Magistrale - ARCHITETTURA COSTRUZIONE CITTA'",
        "Master's Degree - ARCHITECTURE CONSTRUCTION CITY",
        "2",
        "CL016",
        "ACCZ"
    ),
    (
        "81-6",
        "Laurea Triennale - DESIGN E COMUNICAZIONE",
        "Bachelor's Degree - DESIGN AND COMMUNICATION",
        "1",
        "CL016",
        "DEC1"
    ),
    (
        "81-81",
        "Laurea Magistrale - GEOGRAFIA E SCIENZE TERRITORIALI",
        "Master's Degree - GEOGRAPHY AND TERRITORIAL SCIENCES",
        "2",
        "CL015",
        "GSTZ"
    ),
    (
        "81-83",
        "Laurea Magistrale - DIGITAL SKILLS FOR SUSTAINABLE SOCIETAL TRANSITIONS",
        "Master's Degree - DIGITAL SKILLS FOR SUSTAINABLE SOCIETAL TRANSITIONS",
        "2",
        "CL015",
        "DSTZ"
    ),
    (
        "81-84",
        "Laurea Triennale - DESIGN SOSTENIBILE PER IL SISTEMA ALIMENTARE",
        "Bachelor's Degree - SUSTAINABLE DESIGN FOR FOOD SYSTEM",
        "1",
        "CL016",
        "SSA1"
    ),
    (
        "81-135",
        "Laurea Magistrale - ARCHITETTURA DEL PAESAGGIO",
        "Master's Degree - LANDSCAPE ARCHITECTURE",
        "2",
        "CL015",
        "ADPZ"
    ),
    (
        "81-140",
        "Laurea Magistrale - PIANIFICAZIONE URBANISTICA E TERRITORIALE",
        "Master's Degree - URBAN AND REGIONAL PLANNING",
        "2",
        "CL015",
        "PTUZ"  
    ),
    (
        "82-4",
        "Laurea Magistrale - ARCHITETTURA PER IL PATRIMONIO",
        "Master's Degree - ARCHITECTURE FOR HERITAGE",
        "2",
        "CL016",
        "APAZ"
    ),
    (
        "82-5",
        "Laurea Triennale - PIANIFICAZIONE TERRITORIALE, URBANISTICA E PAESAGGISTICO-AMBIENTALE",
        "Bachelor's Degree - TERRITORIAL, URBAN, ENVIRONMENTAL AND LANDSCAPE PLANNING",
        "1",
        "CL015",
        "PTU1"
    ),
    (
        "82-6",
        "Laurea Magistrale - ARCHITETTURA PER LA SOSTENIBILITA'",
        "Master's Degree - ARCHITECTURE FOR SUSTAINABILITY",
        "2",
        "CL016",
        "ASOZ"
    ),
    (
        "82-8",
        "Laurea Magistrale - PROGETTAZIONE DELLE AREE VERDI E DEL PAESAGGIO",
        "Master's Degree - GREEN AREAS AND LANDSCAPE DESIGN",
        "2",
        "CL015",
        "PAVZ"
    ),
    (
        "82-9",
        "Laurea Magistrale - PIANIFICAZIONE TERRITORIALE, URBANISTICA E PAESAGGISTICO-AMBIENTALE",
        "Master's Degree - TERRITORIAL, URBAN, ENVIRONMENTAL AND LANDSCAPE PLANNING",
        "2",
        "CL015",
        "PTUZ"
    ),
    (
        "82-73",
        "Laurea Magistrale - ECONOMIA DELL'AMBIENTE, DELLA CULTURA E DEL TERRITORIO",
        "Master's Degree - ECONOMICS OF THE ENVIRONMENT, CULTURE AND TERRITORY",
        "2",
        "CL015",
        "ECTZ"
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
    (1, 'RICERCA', 'RESEARCH'),
    (2, 'SPERIMENTALE', 'EXPERIMENTAL');
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
        13169,
        "Studio esplorativo delle soluzioni IA-based per la generazione del codice",
        "An exploration of the solutions for AI-based code generation",
        "Descrizione 13169",
        "Description 13169",
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        "2022-12-07",
        "2023-12-07",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13275,
        "Valutazione Critica delle Capacità di Generazione del Codice da Parte di LLM in Contesto di Istruzione",
        "Critical Appraisal of LLM Code Generation Capabilities in Educational Context",
        "Descrizione 13275",
        "Description 13275",
        NULL,
        "Sviluppo in Java, Software Engineering, possibilmente Machine Learning",
        "Java development, Software Engineering, possibly Machine Learning",
        NULL,
        NULL,
        NULL,
        "2024-11-11",
        "2025-11-11",
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
        "Descrizione 13363",
        "Description 13363",
        NULL,
        "Python",
        "Python",
        NULL,
        NULL,
        "Domenico De Guglielmo",
        "2024-09-05",
        "2025-09-05",
        1,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        14027,
        "Migliorare il Testing del Software attraverso l'IA Generativa",
        "Enhancing Software Testing Through Generative AI",
        "Descrizione 14027",
        "Description 14027",
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        "2026-01-09",
        "2024-01-09",
        0,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        13470,
        "IA Generativa per la Creazione di OpenScenario e OpenDrive da Serie di Immagini del Traffico",
        "Generative AI for Generation of OpenScenario and OpenDrive from series of traffic images",
        "Descrizione 13470",
        "Description 13470",
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
        "2026-02-26",
        0,
        1,
        "CL003",
        "2",
        NULL
    ),
    (
        12946,
        "Gamification applicata al test refactoring",
        "Gamification for test refactoring",
        "Descrizione 12946",
        "Description 12946",
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
        13837,
        "Coach personale basato sull'IA generativa",
        "Personal coach based on generative AI",
        "Descrizione 13837",
        "Description 13837",
        NULL,
        "Sviluppo software, IA generativa",
        "Software development, Generative AI",
        NULL,
        NULL,
        NULL,
        "2024-05-31",
        "2025-10-31",
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
        "Descrizione 13253",
        "Description 13253",
        NULL,
        "soft skill necessarie: padronanza della lingua inglese, capacità di lavoro da remoto, buona connessione a internet (almeno 50Mbps in download)

        hard skill (opzionali): Unity, C#, software testing, OpenAI, Selenium",
        "mandatory soft skills: English proficiency, Ability to work remotely, Good internet connection (more than 50Mbps download)

        technical optional skills: Unity, C#, Software testing.

        Nice to have: OpenAI, Selenium, Lego passion",
        NULL,
        NULL,
        "Edgar Pironti - innoactive.io",
        "2023-10-31",
        "2024-10-31",
        0,
        0,
        "CL003",
        "2",
        NULL
    ),
    (
        14026,
        "Utilizzo dell'IA per la generazione automatizzata di script di test",
        "Use of AI for automated test script generation",
        "Descrizione 14026",
        "Description 14026",
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
        10187,
        "App per il benessere",
        "Well being app",
        "Descrizione 10187",
        "Description 10187",
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
    );

-- ------------------------------------------------------------
-- ↓ thesis_proposal_degree table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_degree (thesis_proposal_id, container_id)
VALUES
    (13169, "INFZ"),
    (13275, "INFZ"),
    (13363, "INFZ"),
    (14027, "INFZ"),
    (13470, "INFZ"),
    (13253, "DSEZ"),
    (14026, "DSEZ"),
    (10187, "DSEZ");

-- ------------------------------------------------------------
-- ↓ thesis_proposal_keyword table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_keyword (thesis_proposal_id, keyword_id)
VALUES
    (13275, 1),
    (13275, 2),
    (13275, 3),
    (13275, 4),
    (13363, 5),
    (13363, 6),
    (13363, 7),
    (13363, 8),
    (14027, 1),
    (14027, 8),
    (14027, 9),
    (13470, 1),
    (13470, 8),
    (13470, 9),
    (12946, 8),
    (13837, 1),
    (13837, 4),
    (13253, 8),
    (13253, 10),
    (14026, 1),
    (14026, 8),
    (10187, 11),
    (10187, 12),
    (10187, 13);

-- ------------------------------------------------------------
-- ↓ thesis_proposal_type table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_type (thesis_proposal_id, type_id)
VALUES
    (13169, 1),
    (13275, 2),
    (13363, 2),
    (12946, 1),
    (13837, 2),
    (10187, 2);
-- ------------------------------------------------------------
-- ↓ thesis_proposal_supervisor_cosupervisor table ↓
-- ------------------------------------------------------------
INSERT INTO
    thesis_proposal_supervisor_cosupervisor (thesis_proposal_id, teacher_id, is_supervisor)
VALUES
    (13169, 38485, 1),
    (13275, 3019, 1),
    (13363, 23270, 1),
    (14027, 38485, 1),
    (13470, 38485, 1),
    (12946, 38485, 1),
    (12946, 3019, 0),
    (13837, 1921, 1),
    (13253, 38485, 1),
    (14026, 38485, 1),
    (10187, 1921, 1);
-- ------------------------------------------------------------
-- ↓ logged_student table ↓
-- ------------------------------------------------------------
INSERT INTO
    logged_student (student_id)
VALUES
    (320213);