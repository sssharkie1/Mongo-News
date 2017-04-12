// DEPENDENCIES:
// intialize Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require("./controllers/controller.js")(app);

//port
var PORT = 3000 || process.env.PORT;

mongoose.connect('mongodb://heroku_6gwc42b2:8vecedubm8dsdnofvbllvcqnue@ds159330.mlab.com:59330/heroku_6gwc42b2');
var db = mongoose.connection;

// LISTENER:
app.listen(PORT, function(){
  console.log('listening on port: ', PORT)
});
