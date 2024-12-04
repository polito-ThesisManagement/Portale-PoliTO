# Back End

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Project Structure](#project-structure)
    - [Test (directory)](#test-directory)
    - [Source code (directory)](#source-code-directory)
- [APIs](#apis)

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

### Source code (directory)
The source has been divided into different folder to simplify the readability of the code:
- `config` => contains the file to configure and initialize the database connection using Sequelize.
- `controllers` => each file contains one or more functions used in routers ONLY to handle the request and response.
- `models` => each file contains a class representing a model of an entity
- `routers` => each file contains one router exported as default. The router contains all API endpoint related to his domain. They are used in the `server.js` file to register the router to the express application
- `schemas` => each file contains one or more "zod" schemas object used to validate user input
- `utils` => contains utility functions used in the project

The `server.js` file is the entry point where the HTTP server is created/set up.

## APIs

- GET `/api/thesis-proposals`
    - Get all thesis proposals, accepts query parameter `lang` to get the thesis proposals in a specific language (it | en)

- GET `/api/thesis-proposals/:thesisProposalId`
    - Get a thesis proposal by id, accepts query parameter `lang` to get the thesis proposal in a specific language (it | en)