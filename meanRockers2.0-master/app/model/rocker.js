var mongoose = require('mongoose');

module.exports = mongoose.model('Rocker', {
	nombre: String,
	apellido: String,
	edad: String
});