angular.module("kidsCode")
	.factory("codeServ", function($rootScope){
		var userInput = {}; //creating a variable to get the clean, accurate input

		function saveInput(rendered){ //saving rendered code
			userInput = rendered; 
			$rootScope.$broadcast("drawthemHTMLs", userInput) //which is accessed through $broadcast
		}

		function getInput(){ //sending input to index.html
			return userInput
		}
		
		return {

			saveInput: saveInput,
			getInput: getInput

		}

	});

