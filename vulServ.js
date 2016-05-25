angular.module("kidsCode")
	.factory("vulServ", function($http, $rootScope, codeServ){

		var answer = "";
		var purgomalamResponse = "";
     	var rendered = {text:""};
		
		function printExercise(txt) {
        	return checkVulgar(txt);	
        	$rootscope.tags = checkInputService.rendered;    
     	}

		function checkVulgar(txt) {
      
    	var text = "http://www.purgomalum.com/service/plain?text=" + txt;
      	console.log(text);


      	return $http.get(text).then(function(response) {
               console.log("response = " + response.data);
               codeServ.saveInput(response.data);
               });

      }
	
		return {
			printExercise: printExercise

		};
});