// DEPENDENCIES:
// intialize Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

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

//mongoose.connect('');
//var db = mongoose.connection;

// LISTENER:
app.listen(PORT, function(){
  console.log('listening on port: ', PORT)
});
