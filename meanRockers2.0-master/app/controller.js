var Rocker = require('./model/rocker');

// Obtiene todos los objetos Rocker de la base de datos
exports.getRocker = function (req, res){
	Rocker.find(
		function(err, rocker) {
			if (err)
				res.send(err)
					res.json(rocker); // devuelve todas las Rockers en JSON
				}
			);
}

// Guarda un objeto Rocker en base de datos
exports.setRocker = function(req, res) {

		// Creo un rocker
		Rocker.create(
			{nombre : req.body.nombre, apellido: req.body.apellido, edad: req.body.edad},
			function(err, rocker) {
				if (err)
					res.send(err);
				// Obtiene y devuelve todas las rockers tras crear una de ellas
				Rocker.find(function(err, rocker) {
				 	if (err)
				 		res.send(err)
				 	res.json(rocker);
				});
			});

	}

// Modificamos un rocker de la base de datos
exports.updateRocker = function(req, res){
	Rocker.update( {_id : req.params.rocker_id},
					{$set:{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}},
					function(err, rocker) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las rockers tras crear una de ellas
				Rocker.find(function(err, rocker) {
				 	if (err)
				 		res.send(err)
				 	res.json(rocker);
				});
			});
	}

// Elimino un objeto Rocker de la base de Datos
exports.removeRocker = function(req, res) {
	Rocker.remove({_id : req.params.rocker_id}, function(err, rocker) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las rockers tras borrar una de ellas
			Rocker.find(function(err, rocker) {
				if (err)
					res.send(err)
				res.json(rocker);
			});
		});
}
