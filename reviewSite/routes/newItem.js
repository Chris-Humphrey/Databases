let express = require('express');
let router = express.Router();

router.get('/newitem', (req, res) => {
    res.render('newitem');
});

module.exports = router;