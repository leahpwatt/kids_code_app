var routerApp = angular.module("kidsCode", ['ui.router']);
	routerApp.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/home');
	    $stateProvider 
	       	
	       	//input for users to enter code
	    .state('home', {
	        url: '/home',
	        templateUrl: '/partials/home.html'    
	    })

	    .state('home.about', {	
	        url: '/about',
	        templateUrl: '/partials/about.html',
	        controller: "aboutCntrl"   
	    })
	  
	    .state('home.heading', {
	        url: '/heading',
	        templateUrl: '/partials/heading.html',
	        controller: "hdCntrl"   
	    })

	     .state('home.heading-reveal', {
	        url: '/your-heading',
	        templateUrl: '/partials/heading-reveal.html',
	        controller: "hdRevCntrl"  
	    })
	 });