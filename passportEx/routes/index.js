let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {
    res.send('This is the front page.')
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        // if(err) return next(err)

        req.logout();
        res.redirect('/');
    })
})





module.exports = router;