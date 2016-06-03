app
	.config(($routeProvider) => {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/partials/home.html'
			})
			.when('/add', {
				templateUrl: 'app/partials/add.html',
				controller: 'mainControl',
				controllerAs: '',
			})
			.when('/delete', {
				templateUrl: 'app/partials/delete.html',
				controller: 'HelloPersonCtrl',
				controllerAs: '',
			})
			.otherwise('/home')
	})

	function mainControl ($scope, $location) {
		$scope.setRoute = function(route) {
			$location.path(route);
		}
	}
