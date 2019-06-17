let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('./models');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    db.blog.findAll()
    .then((records) => {
        res.render('index', {
            blogs: records
        })
    })
    .catch((err) => {
        res.send('You have encountered an error');
    })
});
app.get('/details', (req, res) => {
    
});
app.get('/admin', (req, res) => {
    db.categories.findAll()
    .then((results) => {
        res.render('/admin', {
            categories: results
        })
    })
});






app.listen(3000, () => {
    console.log('App listening on port 3000!');
});