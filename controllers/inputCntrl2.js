angular.module("kidsCode")
	.controller("inputCntrl2", function($scope, $rootScope, accServ, $location){
		$scope.showExercise = function(str){
			accServ.printExercise(str);
			$location.path("/exercise3");
			console.log(str);
		}


	});