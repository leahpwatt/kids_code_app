var routerApp = angular.module("kidsCode", ['ngRoute']);
	routerApp.config(function($routeProvider) {
	    $routeProvider.when('/',
	    {
	    	templateUrl: 'partials/exercise1.html',
	    	controller: 'inputCntrl'
	    })
	    	.when('/exercise2',
	    {
	    	templateUrl: 'partials/exercise2.html',
	    	controller: 'inputCntrl'
	    })

	 	});