let express = require('express');
let router = express.Router();


router.get('/admin/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }
    res.send('You have been authenticated!')
});





module.exports = router;