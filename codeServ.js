angular.module("kidsCode")
	.factory("codeServ", function($rootScope){
		var userInput = {};

		function saveInput(rendered){
			userInput = rendered;
			console.log("codeServ =" + userInput);
			$rootScope.$broadcast("drawthemHTMLs", userInput)
		}

		function getInput(){
			return userInput;
		}
		
		return {

			saveInput: saveInput,
			getInput: getInput

		}

	});

