let express = require('express');
let app = express();
let port = 3000;


// set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', 'views');

// create public folder
app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/newitem'));
app.use(require('./routes/items'));


app.listen(port,() => {
    console.log(`Your app is running on port ${port}`)
})