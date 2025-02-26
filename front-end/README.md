# Front End

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Description
This is the front end of the project. It is a React application that consumes data from the back end. The application is written in JavaScript using the React library.

## Installation
To set up and run the front-end, follow these steps:

1. Navigate to the front-end directory:
    ```bash
    cd front-end
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the front-end server:
    ```bash
    npm start
    ```
    The application will be running at http://localhost:3000.

> **Note:** This guide explains how to run the front-end application. The front-end relies on the back-end API. Ensure the back-end server is running before using the application. To run the back-end server, please refer to the back-end documentation.

## Project Structure
The front-end project is organized into the following directories:
```
📂 front-end
 ├── 📂 src
 │   ├── 📂 components   # Reusable UI components
 │   ├── 📂 pages        # Application pages
 │   ├── 📂 styles       # CSS files
 │   ├── 📂 utils        # Utility functions
 │   ├── App.js         # Main application component
 │   ├── index.js       # Entry point
 ├── 📂 public          # Static assets
 ├── package.json       # Dependencies
 ├── README.md          # Front-end documentation
```
