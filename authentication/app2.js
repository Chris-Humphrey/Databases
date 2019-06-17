let express = require('express');
let session = require('express-session');

let app = express();


// server receives request - middleware - routed to handler
app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 14*24*60*60*1000}
}));


app.get('/', (req, res) => {
    req.session.someAttribute = 'session on front page'
    res.send(req.session.someAttribute);
});

app.get('/about', (req, res) => {
    let retrieve = req.session.someAttribute;
    res.send(`about page ${retrieve}`);
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});