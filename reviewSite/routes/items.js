let express = require('express');
let router = express.Router();
let db = require('../models');
let bodyParser = require('body-parser');

router.get('/items', (req, res) => {
    db.items.findAll({order: [['createdAt', 'DESC']]})
    .then((records) => {
        res.render('items', {
            items: records
        })
    })
    .catch((error) => {
        res.send(error);
    });
});

router.use(bodyParser.urlencoded({extended: false}))
router.post('/items', (req,res) => {
    let productName = req.body.productName;
    let price = parseInt(req.body.price);
    let description = req.body.description;
    let imageURL = req.body.imageURL;

    db.items.create({productName:productName, price:price, description:description, imageURL:imageURL})
    .then((result) => {
        db.items.findAll({order: [['createdAt', 'DESC']]})
        .then((records) => {
            res.render('items', {
                items: records
            })
        })
        .catch((error) => {
            res.send(error);
        });
    });
});

module.exports = router;