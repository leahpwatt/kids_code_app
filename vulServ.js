angular.module("kidsCode")
	.factory("vulServ", function($http, $rootScope){

		var answer = "";
		var purgomalamResponse = "";
     var rendered = {text:""};
		
		function printExercise(txt) {
        	return checkVulgar(txt);	
        	// $rootscope.tags = checkInputService.rendered;    
     	}

		function addAnswer(txt){
			answer+=txt;
		}

    function checkVulgar(txt) {
      
    	var text = "http://www.purgomalum.com/service/plain?text=" + txt;
      console.log(text);


      return $http.get(text).then(function(response) {
               console.log("response = " + response.data);
               txt = response.data;
               addAnswer(txt);
               $rootScope.input=answer;

               rendered.text += answer;
               $rootScope.$broadcast("rerender", rendered)
               console.log(rendered);
               });

      }
	
		return {
			printExercise: printExercise
		};
});