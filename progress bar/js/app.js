var myApp = angular.module('myApp', ['ngRoute', 'artistControllers']);
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/progressBars', {
		templateUrl: 'partials/progressbar.html',
		controller: 'ProgressbarController'
	}).
	otherwise({
		redirectTo: '/progressBars'
	});
}]);