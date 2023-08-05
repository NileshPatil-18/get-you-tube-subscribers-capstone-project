# Almabetter Capstone Project: Get YouTube Subscribers

This project is a part of the Almabetter Capstone project and aims to provide an API for retrieving YouTube subscriber data. It consists of three routers: `http://localhost:3000/subscribers/:id`, `http://localhost:3000/subscribers/names`, and `http://localhost:3000/subscribers`.

## Project Setup

To get started with the project, follow the steps below:

1. Clone the repository:
   ```
   git clone https://github.com/IamPiyushChauhan/almabetter-capestone-project-get-youtube-subscribers.git
   ```

2. Install the dependencies by running the following command in the project directory:
   ```
   npm install
   ```

3. Create a `.env` file in the project root directory and set the `MONGO_DB_URL` variable to your MongoDB URL. For example:
   ```
   MONGO_DB_URL=mongodb://localhost:27017/mydatabase
   ```

## API Routes

The project consists of the following API routes:

1. `GET http://localhost:3000/subscribers/:id`
   - Retrieves the subscriber data for the specified `id`.

2. `GET http://localhost:3000/subscribers/names`
   - Retrieves the names of all subscribers.

3. `GET http://localhost:3000/subscribers`
   - Retrieves all subscriber data.

## Running Tests

To run the test cases, follow the steps below:

1. Change the directory to the `test` folder:
   ```
   cd test
   ```

2. Run the following command to execute the tests using Mocha:
   ```
   mocha api.test.js
   ```

## Technologies Used

The project utilizes the following technologies:

- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database used for storing subscriber data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- EJS: A view engine for Node.js
- Chai: A BDD/TDD assertion library for Node.js.
- Chai-HTTP: A plugin for Chai that provides HTTP integration testing capabilities.
- Mocha: A JavaScript testing framework.
- Nodemon: A utility that automatically restarts the server when changes are detected.
- Swagger: API documentation and testing framework.