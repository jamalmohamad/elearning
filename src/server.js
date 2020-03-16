const express = require('express'),
    path = require('path');

const app = express();

// importing routes
//const classesRoutes = require('./routes/class');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// routes
//app.use('/', classesRoutes);
app.get('/', (req, res) => res.send('Hello World!'))

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
