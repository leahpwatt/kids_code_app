angular.module("kidsCode")
	.controller("inputCntrl5", function($scope, $rootScope, accServ, $location){
		$scope.showExercise = function(str){
			accServ.printExercise(str);
			$location.path("/exercise6");
			console.log(str);
		}


	});