angular.module("kidsCode")
	.factory("accServ", function($rootScope){
		var answer = "";
		function printExercise(txt){
			addAnswer(txt);
			$rootScope.input=answer;
			// $rootScope.tags="<h1>Leah</h1>"
		}

		function addAnswer(txt){
			answer+=txt;
		}
	
		return {
			printExercise: printExercise
		};
	});


