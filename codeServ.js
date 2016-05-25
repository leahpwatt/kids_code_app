angular.module("kidsCode")
	.factory("codeServ", function($rootScope){
		var userInput = {}; //creating a variable to get the clean, accurate input

		function saveInput(rendered){ //saving rendered code
			userInput = rendered; 
			$rootScope.$broadcast("drawthemHTMLs", userInput) //which is accessed through $broadcast
		}

		function getInput(){ //remaining functionality needed to print to the page
			return userInput;
		}
		
		return {

			saveInput: saveInput,
			getInput: getInput

		}

	});

