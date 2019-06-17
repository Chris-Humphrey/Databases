let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser')


let app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'cat',
    resave: false
}));

// authentication functions
let authenticationLogin = (req, res, next) => {
    console.log('hello');
    
    if(req.session.username){
        next();
    } else {
        res.redirect('/login');
    }
    
}

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.all('/admin/*', authenticationLogin, (req, res, next) => {
    next();
});

app.get('/admin/dashboard', (req, res) => {
    res.send('dashboard')
})

// app.get('/admin', authenticationLogin, (req, res) => {
//     res.send('admin section');
// });

app.get('/login', (req, res) => {
    res.render('login');
});

app.use(bodyParser.urlencoded({extended: false}));

let users = [
    {username: "john", password: "1234"},
    {username: "mary", password: "1234"},
    {username: "buffy", password: "1234"},
    {username: "cindy", password: "1234"},
    {username: "mark", password: "1234"},
]

app.post('/login', (req, res) => {
    let userID = req.body.userID;
    let password = req.body.password;

    let user = users.find((userRecord)=>{
        return userRecord.username == userID && userRecord.password == password
    })

    if(user != null){
        // set session information
        if(req.session){
            req.session.username = userID;
            res.redirect('/')
        }
    } else {
        res.redirect('/login')
    }
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});