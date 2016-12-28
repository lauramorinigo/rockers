var Rocker = require('./model/rocker');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Rockers
	app.get('/api/rocker', Controller.getRocker);
	// Crear una nueva Persona
	app.post('/api/rocker', Controller.setRocker);
	// Modificar los datos de una Persona
	app.put('/api/rocker/:rocker_id', Controller.updateRocker);
	// Borrar una Persona
	app.delete('/api/rocker/:rocker_id', Controller.removeRocker);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};