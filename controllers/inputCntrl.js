angular.module("kidsCode")
.controller("inputCntrl", function($scope, $rootScope, codeServ, vulServ, checkInputService, $location){
		$scope.showExercise = function(str){ //showExercise is a function 
			if(checkInputService.compareParts(str)){ //runs input through compareParts function
				vulServ.printExercise(str); //runs through vulgarity API
				$location.path("/exercise2"); //changing views
			} else{
				alert("Oops! Please try again.");
			}
		}


	});



