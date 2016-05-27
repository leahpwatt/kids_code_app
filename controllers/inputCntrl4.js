angular.module("kidsCode")
	.controller("inputCntrl4", function($scope, $rootScope, vulServ, checkInputService, $location){
			$scope.showExercise = function(str){
				checkInputService.checkColor(str);
				$location.path("/exercise5");
		}
	});





	
