# Back End

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Project Structure](#project-structure)
    - [How to run the tests](#how-to-run-the-tests)
- [APIs](#apis)
    - [Students APIs](#students-apis)
    - [Thesis Proposals APIs](#thesis-proposals-apis)

## Description
This is the **back-end** of the project, a REST API built with **Node.js** and **Express**. It manages authentication, thesis applications, user data, and other core functionalities.

## Installation
To set up and run the back-end, follow these steps:

1. Navigate to the back-end directory:
    ```bash
    cd back-end
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a .env file in the back-end directory with the following content:
    ```env
    DB_NAME=polito
    DB_NAME_TEST=polito_test
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_PORT=your_port
    ```
4. Start the back-end server:
    ```bash
    npm start
    ```
    The server will be running at http://localhost:3001 (or the port specified in .env). 

> **Note:** This guide explains how to run the back-end API. The back-end relies on the MySQL database. Ensure the database is set up and running before starting the back-end server. To set up the database, please refer to the database documentation.

## Project Structure
The back-end project is organized into the following directories:
```
📂 back-end
 ├── 📂 src
 │   ├── 📂 config        # Database configuration (Sequelize)
 │   ├── 📂 controllers   # Request handlers
 │   ├── 📂 models        # Database models
 │   ├── 📂 routers       # Express route handlers
 │   ├── 📂 schemas       # Input validation with Zod
 │   ├── 📂 utils         # Utility functions
 │   ├── index.js         # Main entry point
 ├── 📂 test              # Unit and integration tests
 ├── .env.example         # Environment variables template
 ├── package.json         # Dependencies
 ```

### How to run the tests
1. **Import the test database into MySQL and load data:**
    - Open **MySQL Workbench** and connect to your MySQL server.
    - Open the `database/test/schema_test.sql` file and execute the script
    - Open the `database/test/data_test.sql` file and execute the script
2. **Verify that the `.env` file contains the following content:**
    ```env
    DB_NAME=polito
    DB_NAME_TEST=polito_test
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_PORT=your_port
    ```
    - Note: the `DB_NAME_TEST` variable is used to connect to the test database, while the `DB_NAME` variable is
    used to connect to the development database.
    - Note: you can rename the .env.example file in the back-end directory to .env and fill in the required
    fields.
3. **Run the tests:**
    - Run `npm test` in the back-end directory

## APIs
### Students APIs
- GET `/api/students`
    - Get all students
- GET `/api/students/logged-student`
    - Get the logged student
- PUT `/api/students/logged-student`
    - Update the logged student
    - Body: 

        ```json
        {
            "student_id": 1
        }
        ```

### Thesis Proposals APIs
- GET `/api/thesis-proposals`
    - Description: Retrieves all available thesis proposals, applying optional filters, sorting, and pagination based on query parameters.

    - Query Parameters:
        - `lang` (optional): The language of the thesis proposals (it for Italian, en for English).
        - `page` (optional): The page number for pagination (default: 1).
        - `limit` (optional): The number of results per page (default: 10).
        - `search` (optional): A search string to filter proposals by topic or description.
        - `isInternal` (optional): A boolean to filter by internal (true) or external (false) proposals.
        - `isAbroad` (optional): A boolean to filter by abroad (true) or Italian (false) proposals.
        - `teacherId` (optional): The ID of the teacher to filter proposals supervised by a specific teacher.
        - `keywordId` (optional): The ID of a keyword to filter proposals linked to specific topics.
        - `typeId` (optional): The ID of the proposal type (e.g., research, experimental, ...) for filtering.
        - `sortBy` (optional): The field to sort the results by (topic, description, creation_date, expiration_date).
        - `orderBy` (optional): The sorting order, either ascending (asc) or descending (desc).
    - Use Case:
    This API is used to fetch all thesis proposals available to any user, regardless of specific targeting. It provides a comprehensive view of all proposals.

- GET `/api/thesis-proposals/targeted`
    - Description: Retrieves only thesis proposals targeted at the logged-in student based on their degree programme or collegio. It applies optional filters, sorting, and pagination based on query parameters.
    - Query parameters: same as `/api/thesis-proposals`
    - Use Case: this API is specifically tailored to students to view proposals that are most relevant to their academic context.

- GET `/api/thesis-proposals/types`
    - Get all thesis proposals types, accepts query parameter `lang` to get the thesis proposal types in a specific language (it | en) and one query parameter `search` to filter the results.

- GET `/api/thesis-proposals/keywords`
    - Get all thesis proposals keywords, accepts query parameter `lang` to get the thesis proposal keywords in a specific language (it | en) and one query parameter `search` to filter the results.

- GET `/api/thesis-proposals/teachers`
    - Get all thesis proposals teachers, accepts one query parameter `search` to filter the results.

- GET `/api/thesis-proposals/:thesisProposalId`
    - Get a thesis proposal by id, accepts query parameter `lang` to get the thesis proposal in a specific language (it | en).