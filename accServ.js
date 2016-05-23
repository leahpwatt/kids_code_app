angular.module("kidsCode")
	.factory("accServ", function($rootScope){
		var answer = "";
		function printExercise(txt){
			addAnswer(txt);
			$rootScope.input=answer;
		}

		function addAnswer(txt){
			answer+=txt;
		}
	
		return {
			printExercise: printExercise
		};
	});

