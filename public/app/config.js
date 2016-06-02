angular.module('app')
	.config(($routeProvider) => {
		$routeProvider
			.when('/', {
				templateUrl: 'app/partials/home.html'
			})
			.when('/add', {
				templateUrl: 'app/partials/add.html',
				controller: 'TodoCtrl',
				controllerAs: '',
			})
			.when('/delete', {
				templateUrl: 'app/partials/delete.html',
				controller: 'HelloPersonCtrl',
				controllerAs: '',
			})
			.otherwise('/')
	})
