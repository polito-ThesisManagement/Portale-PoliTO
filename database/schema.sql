/**------------------------------------------------------------------------------------------------------------------------------------
 * ?                                             Portale-PoliTO MySQL Schema (MySQL 8.4.3)
 * @author          :   polito-ThesisManagement
 * @repo            :   https://github.com/polito-ThesisManagement/Portale-PoliTO.git
 * @createdOn       :   09 November 2024
 * @description     :   SQL Schema for the Portale-PoliTO Database. Designed for MySQL 8.4.3
 * @note            :   [1681] Integer display width is deprecated and will be removed in a future release.
                        For that reason, we have removed the display width from the INT data type also in the provided original schema.
 *------------------------------------------------------------------------------------------------------------------------------------**/

START TRANSACTION;

DROP DATABASE IF EXISTS POLITO;
CREATE DATABASE IF NOT EXISTS POLITO;
USE POLITO;

-- Drop tables if they already exist
DROP TABLE IF EXISTS THESIS_PROPOSALS_SUPERVISORS_COSUPERVISORS;
DROP TABLE IF EXISTS THESIS_PROPOSALS_TYPES;
DROP TABLE IF EXISTS THESIS_PROPOSALS_KEYWORDS;
DROP TABLE IF EXISTS THESIS_PROPOSALS_ATTACHMENTS;
DROP TABLE IF EXISTS THESIS_PROPOSALS;
DROP TABLE IF EXISTS TYPES;
DROP TABLE IF EXISTS KEYWORDS;
DROP TABLE IF EXISTS TEACHERS;
DROP TABLE IF EXISTS STUDENTS;

-- Table for storing Students' Data 
CREATE TABLE IF NOT EXISTS STUDENTS (
    id VARCHAR(6) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Table for storing Teachers' Data
CREATE TABLE IF NOT EXISTS TEACHERS (
    id INT PRIMARY KEY, -- INT? -- was INT(10)
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    facility_short_name VARCHAR(50) NOT NULL
);

-- Table for storing Keywords
CREATE TABLE IF NOT EXISTS KEYWORDS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(50) DEFAULT NULL,
    keyword_en VARCHAR(50) DEFAULT NULL
);

-- Table for storing Thesis types
CREATE TABLE IF NOT EXISTS TYPES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) DEFAULT NULL,
    type_en VARCHAR(50) DEFAULT NULL
);

-- Table for storing Thesis Proposals' Data
CREATE TABLE IF NOT EXISTS THESIS_PROPOSALS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description_en TEXT NOT NULL,
    link TEXT DEFAULT NULL,
    required_skills TEXT DEFAULT NULL,
    required_skills_en TEXT DEFAULT NULL,
    additional_notes TEXT DEFAULT NULL,
    additional_notes_en TEXT DEFAULT NULL,
    external_cosupervisors VARCHAR(255) DEFAULT NULL,
    creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expiration_date DATETIME NOT NULL,
    is_internal BOOLEAN NOT NULL DEFAULT 1,
    is_abroad BOOLEAN NOT NULL DEFAULT 0
);

-- Table for storing Thesis Proposals' Attachments
CREATE TABLE IF NOT EXISTS THESIS_PROPOSALS_ATTACHMENTS (
    thesis_proposal_id INT NOT NULL,
    link VARCHAR(255) NOT NULL,
    PRIMARY KEY (thesis_proposal_id, link),
    FOREIGN KEY (thesis_proposal_id) REFERENCES THESIS_PROPOSALS(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Keywords
CREATE TABLE IF NOT EXISTS THESIS_PROPOSALS_KEYWORDS (
    thesis_proposal_id INT NOT NULL,
    keyword_id INT NOT NULL,
    PRIMARY KEY (thesis_proposal_id, keyword_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES THESIS_PROPOSALS(id) ON DELETE CASCADE,
    FOREIGN KEY (keyword_id) REFERENCES KEYWORDS(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Types
CREATE TABLE IF NOT EXISTS THESIS_PROPOSALS_TYPES (
    thesis_proposal_id INT NOT NULL,
    type_id INT NOT NULL,
    PRIMARY KEY (thesis_proposal_id, type_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES THESIS_PROPOSALS(id) ON DELETE CASCADE,
    FOREIGN KEY (type_id) REFERENCES TYPES(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Supervisors and Cosupervisors
CREATE TABLE IF NOT EXISTS THESIS_PROPOSALS_SUPERVISORS_COSUPERVISORS (
    thesis_proposal_id INT NOT NULL,
    teacher_id INT NOT NULL, -- was INT(10)
    is_supervisor BOOLEAN NOT NULL, -- if true then supervisor, else cosupervisor
    PRIMARY KEY (thesis_proposal_id, teacher_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES THESIS_PROPOSALS(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES TEACHERS(id) ON DELETE RESTRICT -- are you deleting a teacher?
);

COMMIT;

/**---------------------------------------------------------------------
 **               SQL Syntax
    *   TINYTEXT    max 255 characters
    *   TEXT        max 65,535 characters
    *   MEDIUMTEXT  max 16,777,215 characters
    *   LONGTEXT    max 4,294,967,295 characters
    *   Sometimes VARCHAR(x) is used for a better indexing performance.
 *-----------------------------------------------------------------------**/