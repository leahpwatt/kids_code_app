angular.module("kidsCode")
	.factory("vulServ", function($http, $rootScope, codeServ){
		var answer = ""; //user input
		
		function printExercise(txt) {
        	return checkVulgar(txt);	//function checks rendered html for vulgarity
        	// $rootscope.tags = checkInputService.rendered;    
     	}

		function checkVulgar(txt) {
    	var text = "http://www.purgomalum.com/service/plain?text=" + txt; //combining input with API
  

      	return $http.get(text).then(function(response) { //checks user's input against API
               codeServ.saveInput(response.data); //sending clean input to codeServ for render to the page
               });

      	}
	
		return {
			printExercise: printExercise //functions invoked

		};
});