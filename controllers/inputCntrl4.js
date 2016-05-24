angular.module("kidsCode")
	.controller("inputCntrl4", function($scope, $rootScope, $location){
		$scope.showExercise = function(str){
			// accServ.printExercise(str);
			$location.path("/exercise5");
			console.log(str);
		}


	});