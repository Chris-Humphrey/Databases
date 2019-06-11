let express = require('express');
let app = express();

const promise = require('bluebird');

// Step 1 Configurations

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'PGPromiseDB',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);
// Create the database instance:
const db = pgp(config);

// db.query('SELECT * FROM restaurants')
//     .then((results) => {
//         results.forEach((record) => {
//             console.log(`id: ${record.id} name: ${record.name} category: ${record.category}`);
//         });
//     });

// db.one('SELECT * FROM restaurants WHERE id = 1')
//     .then((result) => {
//         console.log(result.id, result.name, result.category);
//     });

// db.result("INSERT INTO restaurants VALUES (DEFAULT, 'Pad Thai', 1)")
// .then((result) => {
//     for (let i in result) {
//         console.log(result[i]);
//     }
// });

// OPEN TO SQL INJECTION
// let name = "Big Belly Burger";
// let query = `INSERT INTO restaurants \
// VALUES (DEFAULT, ${name}')`

// SANITIZING INPUTS
let name = "Big Belly Burger";
let query = `INSERT INTO restaurants \
VALUES (DEFAULT, ${name}')`