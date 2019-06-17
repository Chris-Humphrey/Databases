let express = require('express');
let app = express();

let session = require('express-session');
let bcrypt = require('bcryptjs');
let db = require('./models');
let bodyParser = require('body-parser');

let LocalStrategy = require('passport-local').Strategy;
let passport = require('passport');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}))


app.get('/login', (req, res) => {
    res.render('login');
});

app.use(require('./routes/auth'));

app.all('/admin/*', (req, res, next) => {
    if(!req.isAuthenticated()){
        res.redirect('/login');
        return
    }
    next();
});

app.use(require('./routes/index'));
app.use(require('./routes/admin'));



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});