//The entry point for the application

var express = require('express')

//starting the express app
var app = express();

var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var config = require('./config');

var setupController = require('./controllers/setupController')
var apiController = require('./controllers/apiController')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString());

setupController(app);
apiController(app);

app.listen(port);