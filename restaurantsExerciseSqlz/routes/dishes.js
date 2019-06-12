let express = require('express');
let router = express.Router();
let db = require('../models');
let bodyParser = require('body-parser');

router.get('/dishes', (req, res) => {
    db.dishes.findAll()
    .then((records) => {

        res.render('dishes', {
            dishes: records
        })
    })
    .catch((error) => {
        res.send(error)
    })
})

router.use(bodyParser.urlencoded({extended: false}))
router.post('/dishes', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let course = req.body.course;
    let imageURL = req.body.imageURL;

    db.dishes.create({title:title, description:description, price:price, course:course, imageURL:imageURL})
    .then((result) => {
        db.dishes.findAll()
        .then((records) => {

            res.render('dishes', {
                dishes: records
            })
        })
        .catch((error) => {
            res.send(error)
        })
    })
})

module.exports = router;