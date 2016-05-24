angular.module("kidsCode")
	.controller("inputCntrl3", function($scope, $rootScope, accServ, $location){
		$scope.showExercise = function(str){
			// accServ.printExercise(str);
			$location.path("/exercise4");
			console.log(str);
		}


	});