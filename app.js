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
	    	controller: 'inputCntrl2' 
	    })
	    	.when('/exercise3', 
	    {
	    	templateUrl: 'partials/exercise3.html',
	    	controller: 'inputCntrl3'
	    })
	    	.when('/exercise4', 
	    {
	    	templateUrl: 'partials/exercise4.html',
	    	controller: 'inputCntrl4'
	    })
	    	.when('/exercise5', 
	    {
	    	templateUrl: 'partials/exercise5.html',
	    	controller: 'inputCntrl5'
	    })
	    	.when('/assessment1', 
	    {
	    	templateUrl: 'partials/assessment1.html',
	    	controller: 'inputCntrl6'
	    })
	    

	 });