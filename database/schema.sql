/**------------------------------------------------------------------------------------------------------------------------------------
 * ?                                             Portale-PoliTO MySQL Schema (MySQL 8.4.3)
 * @author          :   polito-ThesisManagement
 * @repo            :   https://github.com/polito-ThesisManagement/Portale-PoliTO.git
 * @createdOn       :   09 November 2024
 * @description     :   SQL Schema for the Portale-PoliTO Database. Designed for MySQL 8.4.3
 * @note            :   [1681] Integer display width is deprecated and will be removed in a future release.
                        For that reason, we have removed the display width from the INT data type also in the provided original schema.
 *------------------------------------------------------------------------------------------------------------------------------------**/

DROP DATABASE IF EXISTS polito;
CREATE DATABASE IF NOT EXISTS polito;
USE polito;

-- Drop tables if they already exist
DROP TABLE IF EXISTS thesis_proposals_supervisors_cosupervisors;
DROP TABLE IF EXISTS thesis_proposals_types;
DROP TABLE IF EXISTS thesis_proposals_keywords;
DROP TABLE IF EXISTS thesis_proposals_attachments;
DROP TABLE IF EXISTS thesis_proposals;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS keywords;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;

-- Table for storing Students' Data 
CREATE TABLE IF NOT EXISTS students (
    id VARCHAR(6) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

-- Table for storing Teachers' Data
CREATE TABLE IF NOT EXISTS teachers (
    id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    profile_url VARCHAR(100) NOT NULL,
    facility_short_name VARCHAR(50) NOT NULL
);

-- Table for storing Keywords
CREATE TABLE IF NOT EXISTS keywords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(50) DEFAULT NULL,
    keyword_en VARCHAR(50) DEFAULT NULL
);

-- Table for storing Thesis types
CREATE TABLE IF NOT EXISTS types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) DEFAULT NULL,
    type_en VARCHAR(50) DEFAULT NULL
);

-- Table for storing Thesis Proposals' Data
CREATE TABLE IF NOT EXISTS thesis_proposals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(255) NOT NULL,
    topic_en VARCHAR(255) NOT NULL,
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
CREATE TABLE IF NOT EXISTS thesis_proposals_attachments (
    thesis_proposal_id INT PRIMARY KEY,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposals(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Keywords
CREATE TABLE IF NOT EXISTS thesis_proposals_keywords (
    thesis_proposal_id INT NOT NULL,
    keyword_id INT NOT NULL,
    PRIMARY KEY (thesis_proposal_id, keyword_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposals(id) ON DELETE CASCADE,
    FOREIGN KEY (keyword_id) REFERENCES keywords(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Types
CREATE TABLE IF NOT EXISTS thesis_proposals_types (
    thesis_proposal_id INT NOT NULL,
    type_id INT NOT NULL,
    PRIMARY KEY (thesis_proposal_id, type_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposals(id) ON DELETE CASCADE,
    FOREIGN KEY (type_id) REFERENCES types(id) ON DELETE CASCADE
);

-- Table for linking Thesis Proposals with Supervisors and Cosupervisors
CREATE TABLE IF NOT EXISTS thesis_proposals_supervisors_cosupervisors (
    thesis_proposal_id INT NOT NULL,
    teacher_id INT NOT NULL,
    is_supervisor BOOLEAN NOT NULL,
    PRIMARY KEY (thesis_proposal_id, teacher_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposals(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE RESTRICT
);

/**---------------------------------------------------------------------
 **               SQL Syntax
    *   TINYTEXT    max 255 characters
    *   TEXT        max 65,535 characters
    *   MEDIUMTEXT  max 16,777,215 characters
    *   LONGTEXT    max 4,294,967,295 characters
    *   Sometimes VARCHAR(x) is used for a better indexing performance.
 *-----------------------------------------------------------------------**/
