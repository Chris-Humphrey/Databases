let express = require('express');
let router = express.Router();
let bcrypt = require('bcryptjs');
let db = require('../models');
let LocalStrategy = require('passport-local').Strategy;
let passport = require('passport');
let session = require('express-session');


let SequelizeStore = require('connect-session-sequelize')(session.Store);


let myStore = new SequelizeStore({
    db: db.sequelize
});

router.use(session({
    secret: 'cat',
    resave: false,
    proxy: true,
    store: myStore
}));


myStore.sync();


// initialize passport

router.use(passport.initialize());
router.use(passport.session());

router.post('/login', passport.authenticate('local', {successRedirect: '/dashboard', failureRedirect: '/login'}));


router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', (req, res) => {
    let password = bcrypt.hashSync(req.body.password, 8);
    let username = req.body.username;
    console.log(password);

    db.user.create({username: username, password: password})
    .then((result) => {
        res.redirect('/login')
    })
    .catch((error) => {
        res.send('Error');
    });
})

passport.use(new LocalStrategy((username, password, done) => {
    console.log(`I'm in passport`);

    db.user.findAll({where: {username: username}})
    .then((results) => {
        if(results != null){
            let record = results[0];

            bcrypt.compare(password, record.password, (err, res) => {
                if(res){
                    console.log('passwords matched');
                    // serialize user gets called here
                    done(null, {id:record.id, username: record.username})
                }else {
                    console.log("passwords didn't match");
                    done(null, false);
                }
            })
        } else {
            console.log(`gone fishing`);
            done(null, false);
        }
    })
}))

passport.serializeUser((user, done) => {
    // passport is adding information to the sessions

    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    db.user.findByPk(id)
    .then((record) => {
        done(null, record)
    })
});


module.exports = router;