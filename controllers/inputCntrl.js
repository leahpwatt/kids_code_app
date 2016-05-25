angular.module("kidsCode")
.controller("inputCntrl", function($scope, $rootScope, codeServ, vulServ, checkInputService, $location){
		$scope.showExercise = function(str){
			if(checkInputService.compareParts(str)){
				vulServ.printExercise(str);
				$location.path("/exercise2");
			}
		}


	});



// drawthemHTMLs