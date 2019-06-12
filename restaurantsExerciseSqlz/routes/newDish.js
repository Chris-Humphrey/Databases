let express = require('express');
let router = express.Router();


router.get('/newdish', (req, res) => {
    res.render('newdish')
});

module.exports = router;