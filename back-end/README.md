# Back End

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Project Structure](#project-structure)
    - [Test (directory)](#test-directory)
    - [Source code (directory)](#source-code-directory)
- [APIs](#apis)
    - [Students APIs](#students-apis)
    - [Thesis Proposals APIs](#thesis-proposals-apis)

## Description
This is the back end of the project. It is a REST API that provides the data for the front end. It is written in Node.js using the Express framework.

## Installation
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [MySQL Server](https://dev.mysql.com/downloads/mysql/)
3. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
4. Clone the repository
5. Import the database into MySQL and load data
    - Open MySQL Workbench
    - Connect to the MySQL Server -> Create a new connection
    - Open the `database/schema.sql` file and execute the script
    - Open the `database/data.sql` file and execute the script
6. Create a `.env` file in the back-end directory with the following content:
    
    ```env
    DB_NAME=polito
    DB_NAME_TEST=polito_test
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DB_PORT=your_port
    ```
7. Run `npm install` in the back-end directory
8. Run `npm start` to start the server (the server will be running on port defined in the `.env` file or 3001 by default)

## Project Structure
The backend project is divided into 3 parts :
- `src` => source code of the API
- `test` => all unit/integration tests of the project
- `.` => all the configuration (package.json, .env, etc...)

### Test (directory)
The test directory contains integration and unit testing of the backend. To simplify readability tests are divided 
into 2 folders:
- unit
- integration

#### How to run the tests
1. **Import the test database into MySQL and load data:**
    - Open MySQL Workbench
    - Connect to the MySQL Server -> Create a new connection
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

### Source code (directory)
The source directory has been divided into different folder to simplify the readability of the code:
- `config` => contains the file to configure and initialize the database connection using Sequelize.
- `controllers` => each file contains one or more functions used in routers ONLY to handle the request and response.
- `models` => each file contains a class representing a model of an entity.
- `routers` => each file contains one router exported as default. The router contains all API endpoint related to his domain. They are used in the `server.js` file to register the router to the express application.
- `schemas` => each file contains one or more "zod" schemas object used to validate user input.
- `utils` => contains utility functions used in the project

The `index.js` file is the entry point where the HTTP server is created/set up.

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