/**------------------------------------------------------------------------------------------------------------------------------------
 * ?                                             Portale-PoliTO MySQL Schema (MySQL 8.4.3)
 * @createdOn       :   09 November 2024
 * @lastModifiedOn  :   29 November 2024
 * @description     :   SQL Schema for the Portale-PoliTO Database. Designed for MySQL 8.4.3
 * @note            :   [1681] Integer display width is deprecated and will be removed in a future release.
                        Therefore, we have removed the display width from the INT data type in the provided original schema as well.
                        Also, remember that BOOLEAN data type is treated as an alias for TINYINT(1) since version 5.0 of MySQL.
 *------------------------------------------------------------------------------------------------------------------------------------**/

-- Drop database if it already exists
DROP DATABASE IF EXISTS polito;
CREATE DATABASE IF NOT EXISTS polito;
USE polito;

-- Drop tables if they already exist
DROP TABLE IF EXISTS thesis_proposal_supervisor_cosupervisor;
DROP TABLE IF EXISTS thesis_proposal_keyword;
DROP TABLE IF EXISTS thesis_proposal_degree;
DROP TABLE IF EXISTS thesis_proposal;
DROP TABLE IF EXISTS keyword;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS degree;

-- Table for storing degrees' data
CREATE TABLE IF NOT EXISTS degree (
    id VARCHAR(5) PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);

-- Table for storing students' data 
CREATE TABLE IF NOT EXISTS student (
    -- misalignment regarding the data types used to store STUDENTS(id) and TEACHERS(id)
    id VARCHAR(6) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    profile_picture_url VARCHAR(100) DEFAULT NULL,
    degree_id VARCHAR(5) NOT NULL,
    FOREIGN KEY (degree_id) REFERENCES degree(id) ON DELETE RESTRICT -- RESTRICT policy in order to pay attention to the deletion of a degree
);

-- Table for storing teachers' data
CREATE TABLE IF NOT EXISTS teacher (
    -- misalignment regarding the data types used to store STUDENTS(id) and TEACHERS(id)
    id INT PRIMARY KEY, -- provided schema specifies INT(10)
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    profile_url VARCHAR(100) NOT NULL,
    profile_picture_url VARCHAR(100) DEFAULT NULL,
    facility_short_name VARCHAR(50) NOT NULL
);

-- Table for storing keywords
CREATE TABLE IF NOT EXISTS keyword (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(50) DEFAULT NULL,
    keyword_en VARCHAR(50) DEFAULT NULL
);

-- Table for storing thesis proposals' data
CREATE TABLE IF NOT EXISTS thesis_proposal (
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
    is_abroad BOOLEAN NOT NULL DEFAULT 0,
    area ENUM("Ingegneria", "Architettura") NOT NULL,
    level ENUM("1", "2") NOT NULL, -- 1 for Bachelor, 2 for Master
    attachment_url VARCHAR(100) DEFAULT NULL
);

-- Table for linking thesis proposals with degrees
CREATE TABLE IF NOT EXISTS thesis_proposal_degree (
    thesis_proposal_id INT NOT NULL,
    degree_id VARCHAR(5) NOT NULL,
    PRIMARY KEY (thesis_proposal_id, degree_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposal(id) ON DELETE CASCADE,
    FOREIGN KEY (degree_id) REFERENCES degree(id) ON DELETE RESTRICT -- RESTRICT policy in order to pay attention to the deletion of a degree
);

-- Table for linking thesis proposals with keywords
CREATE TABLE IF NOT EXISTS thesis_proposal_keyword (
    thesis_proposal_id INT NOT NULL,
    keyword_id INT NOT NULL,
    PRIMARY KEY (thesis_proposal_id, keyword_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposal(id) ON DELETE CASCADE,
    FOREIGN KEY (keyword_id) REFERENCES keyword(id) ON DELETE CASCADE
);

-- Table for linking thesis proposals with supervisors and cosupervisors
CREATE TABLE IF NOT EXISTS thesis_proposal_supervisor_cosupervisor (
    thesis_proposal_id INT NOT NULL,
    teacher_id INT NOT NULL, -- provided schema specifies INT(10)
    is_supervisor BOOLEAN NOT NULL, -- if true then supervisor, else cosupervisor
    PRIMARY KEY (thesis_proposal_id, teacher_id),
    FOREIGN KEY (thesis_proposal_id) REFERENCES thesis_proposal(id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id) ON DELETE RESTRICT -- RESTRICT policy because why should you delete a teacher?
);

/**---------------------------------------------------------------------
 **               SQL Syntax
    *   TINYTEXT    max 255 characters
    *   TEXT        max 65,535 characters
    *   MEDIUMTEXT  max 16,777,215 characters
    *   LONGTEXT    max 4,294,967,295 characters
    *   Sometimes VARCHAR(x) is used for a better indexing performance.
 *-----------------------------------------------------------------------**/