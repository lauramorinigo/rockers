// Inicialización
var express  = require('express');
var app      = express(); 					// express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port  	 = process.env.PORT || 8080; 			// Puerto local 8080


// Configuracion
mongoose.connect('mongodb://localhost:27017/MeanExample'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"


//Middleware
app.use(express.static(__dirname + '/angular'));
app.use(morgan('combined'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));


// Cargamos los endpoints
require('./app/routes.js')(app);

// Puerto
app.listen(port);
console.log("APP por el puerto " + port);
