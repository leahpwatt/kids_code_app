angular.module("kidsCode")
	.controller("inputCntrl2", function($scope, $rootScope, vulServ, checkInputService, $location){
		$scope.showExercise = function(str){
			$location.path("/exercise3");
			console.log(str);
		}


	});