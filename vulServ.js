angular.module("kidsCode")
	.factory("vulServ", function($http, $rootScope){

		var answer = "";
		var purgomalamResponse = "";
		
		function printExercise(txt) {
        	return checkVulgar(txt);	    
     }

		function addAnswer(txt){
			answer+=txt;
		}

    function checkVulgar(txt) {
      
    	var text = "http://www.purgomalum.com/service/plain?text=" + txt;
    	console.log(text);

     	return $http.get(text).then(function(response) {
               console.log(response.data);
               txt = response.data;
               addAnswer(txt);
          		 $rootScope.input=answer;
               });

      }
	
		return {
			printExercise: printExercise
		};
});
