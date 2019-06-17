let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// public folder
app.use(express.static('public'));

//routes

app.use(require('./routes/dishes'));


app.listen(3000, () => {
    console.log('listening on port 3000');
});