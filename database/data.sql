/**----------------------------------------------------------------------------------------------------
 * ?                             Portale-PoliTO MySQL Data (MySQL 8.4.3)
 * @author          :   polito-ThesisManagement
 * @repo            :   https://github.com/polito-ThesisManagement/Portale-PoliTO.git
 * @createdOn       :   12 November 2024
 * @description     :   SQL Data for the Portale-PoliTO Database. Designed for MySQL 8.4.3
 * @note            :   Please make sure to run schema.sql before running data.sql
 *----------------------------------------------------------------------------------------------------**/

USE polito;

INSERT INTO teachers (id, first_name, last_name, role, email, profile_url, facility_short_name) VALUES
(1, 'Marco', 'Torchiano', 'Full Professor', 'marco.torchiano@polito.it', 'https://upload.wikimedia.org/wikipedia/it/4/47/Logo_PoliTo_dal_2021_blu.png', 'DAUIN'),
(2, 'Riccardo', 'Coppola', 'Fixed-term Researcher', 'riccardo.coppola@polito.it', 'https://upload.wikimedia.org/wikipedia/it/4/47/Logo_PoliTo_dal_2021_blu.png', 'DAUIN');

INSERT INTO types (id, type, type_en) VALUES
(1, 'Ricerca', 'Research'),
(2, 'Progetto', 'Project');

INSERT INTO students (id, first_name, last_name) VALUES
('320213', 'Luca', 'Barbato'),
('318952', 'Sylvie', 'Molinatto'),
('314796', 'Daniele', 'De Rossi');

INSERT INTO thesis_proposals (
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
    is_abroad
) VALUES
(
    1,
    'Gamification applicata al test refactoring',
    'Gamification for test refactoring',
    'Il test refactoring rappresenta una pratica essenziale nello sviluppo del software, mirata a ottimizzare e migliorare la qualità dei test automatizzati senza alterarne la funzionalità. Questo processo coinvolge la riscrittura del codice dei test al fine di renderlo più efficiente, manutenibile e adatto agli scopi di testing. Tuttavia, implementare con successo il test refactoring richiede un elevato livello di competenza tecnica e una comprensione approfondita del sistema in esame.\nLa gamification è una strategia che applica elementi tipici dei giochi, come punti, sfide e ricompense, in contesti non ludici per motivare e coinvolgere gli utenti. L''obiettivo della gamification è trasformare compiti complessi o noiosi in attività coinvolgenti e gratificanti.\nLa presente tesi propone un''indagine approfondita sull''applicazione della gamification nel contesto del test refactoring. L''obiettivo principale è esplorare come l''introduzione di elementi ludici possa influenzare positivamente l''efficacia e l''efficienza del processo di test refactoring.\nGli aspetti chiave della ricerca includeranno:\n- Studio dei Metodi di Test Refactoring: Analisi delle diverse tecniche e metodologie di test refactoring attualmente utilizzate nello sviluppo del software.\n- Analisi dei Problemi Comuni: Identificazione e analisi dei problemi comuni riscontrati nello svolgimento del test refactoring, come la resistenza agli aggiornamenti e la complessità del processo.\n- Gamification Applicata: Progettazione e implementazione di un sistema di gamification per incentivare e migliorare l''adozione del test refactoring. Ciò potrebbe includere la definizione di obiettivi, la creazione di sfide e la valutazione delle ricompense.\n- Valutazione dell''Impatto: Valutazione dell''efficacia della gamification attraverso indicatori chiave di prestazione, confrontando i risultati con gruppi di controllo che seguono approcci tradizionali di test refactoring.',
    'Test refactoring is an essential practice in software development aimed at optimizing and improving the quality of automated tests without altering their functionality.\nThis process involves rewriting test code to make it more efficient, maintainable, and suitable for testing purposes.\nHowever, successfully implementing test refactoring requires a high level of technical expertise and a deep understanding of the system under consideration.\n\nOn the other hand, gamification is a strategy that applies typical game elements, such as points, challenges, and rewards, in non-game contexts to motivate and engage users.\nThe goal of gamification is to transform complex or tedious tasks into engaging and rewarding activities.\n\nThis thesis proposes an in-depth investigation into the application of gamification in the context of test refactoring.\nThe main objective is to explore how the introduction of playful elements can positively influence the effectiveness and efficiency of the test refactoring process.\n\nKey aspects of the research will include:\n- Study of Test Refactoring Methods: Analysis of different techniques and methodologies of test refactoring currently used in software development.\n- Analysis of Common Issues: Identification and analysis of common problems encountered in test refactoring, such as resistance to updates and process complexity.\n- Applied Gamification: Design and implementation of a gamification system to encourage and improve the adoption of test refactoring.\nThis may include goal definition, challenge creation, and reward evaluation.\n- Impact Evaluation: Assessment of the effectiveness of gamification through key performance indicators, comparing results with control groups following traditional approaches to test refactoring.',
    NULL,
    'Sviluppo con linguaggi di programmazione a oggetti (preferibilmente Java), Fondamenti del software testing',
    'Development with OOP languages (preferably Java), Testing fundamentals',
    NULL,
    NULL,
    NULL,
    '2024-10-25 10:00:00',
    '2025-10-16 23:59:59',
    1,
    0
),
(
    2,
    'Analisi empirica dei difetti in R Markdown',
    'Empirical analysis of defects in R Markdown',
    'I file R Markdown sono adottati ampiamente per lo sviluppo iterativo di workflow di analisi e visualizzazione dei dati.\nL''affidabilità dei risultati e la possibilità di riutilizzare le analisi dipendono pesantemente dalla correttezza dei file Rmd. Obiettivo della tesi è quello di analizzare file Rmd disponibili in repository pubblici e identificare e classificare i difetti.',
    'R Markdown files are widely adopted to iteratively develop data analysis and visualization workflows.\nThe reliability of the results and the capability of reusing the analysis is determined by the quality of such files.\nThe goal of this thesis is to analyze Rmd files present in public repositories to identify and classify the existing defects',
    NULL,
    'Linguaggio R, Ambiente R Studio',
    'R package, R Studio IDE',
    NULL,
    NULL,
    NULL,
    '2024-10-10 11:00:00',
    '2024-11-18 23:59:59',
    1,
    0
);

INSERT INTO keywords (id, keyword, keyword_en) VALUES
(1, 'Testing', 'Testing');

INSERT INTO thesis_proposals_supervisors_cosupervisors (thesis_proposal_id, teacher_id, is_supervisor) VALUES
(1, 1, 1),
(1, 2, 0),
(2, 1, 1);

INSERT INTO thesis_proposals_types (thesis_proposal_id, type_id) VALUES
(1, 1);

/*INSERT INTO thesis_proposals_attachments (thesis_proposal_id, link) VALUES
();*/

INSERT INTO thesis_proposals_keywords (thesis_proposal_id, keyword_id) VALUES
(1, 1);