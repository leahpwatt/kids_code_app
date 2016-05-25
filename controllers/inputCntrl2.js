angular.module("kidsCode")
	.controller("inputCntrl2", function($scope, $rootScope, vulServ, checkInputService, $location){
			$scope.showExercise = function(str){
				console.log("showExercise 2: " + str);
				checkInputService.checkColor(str);
				$location.path("/exercise3");
		}
	});
