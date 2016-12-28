angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newRocker= {};
	$scope.rockers= {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/rocker').success(function(data) {
		$scope.rockers= data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a un rocker
	$scope.registrarRocker= function() {
		$http.post('/api/rocker', $scope.newRocker)
		.success(function(data) {
				$scope.newRocker= {}; // Borramos los datos del formulario
				$scope.rockers= data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un rocker
	$scope.modificarRocker= function(newRocker) {
		$http.put('/api/rocker/' + $scope.newRocker._id, $scope.newRocker)
		.success(function(data) {
				$scope.newRocker= {}; // Borramos los datos del formulario
				$scope.rockers= data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto rocker conocido su id
	$scope.borrarRocker= function(newRocker) {
		$http.delete('/api/rocker/' + $scope.newRocker._id)
		.success(function(data) {
			$scope.newRocker= {};
			$scope.rockers= data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para seleccionar el objeto seleccionado en la tabla
	$scope.selectRocker = function(rocker) {
		$scope.newRocker= rocker;
		$scope.selected = true;
		console.log($scope.newRocker, $scope.selected);
	};
}
