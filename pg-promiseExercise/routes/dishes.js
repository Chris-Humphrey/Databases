let express = require('express');
let router = express.Router();
let db = require('../db/database.js');
let bodyParser = require('body-parser');

// display list of dishes on 
router.get('/dishes', (req, res) => {
    db.query('SELECT * FROM restaurants')
    .then((results) => {
        // results is an array of objects
        res.render('dishes', {
            dishes: results
        })
    })
    .catch(() => {
        res.send('error')
    })
});

router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', (req, res) => {
    // insert record into database
    let name = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imageurl = req.body.imageurl;
    let category = parseInt(req.body.category);

    db.none('INSERT INTO restaurants (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)',
    [name, 1, description, price, "", imageurl])
    .then((data) => {
        db.query('SELECT * FROM restaurants')
        .then((results) => {
            // results is an array of objects
            res.render('dishes', {
                dishes: results
            })
        })
        .catch(() => {
            res.send('error')
        });
    });
});

router.get('/newdish', (req, res) => {

    db.query('SELECT * FROM categories')
    .then((results) => {
        res.render('newdish', {
            categories: results
        })
    })
    .catch((error) => {
        res.send(error)
    })
})

module.exports = router;