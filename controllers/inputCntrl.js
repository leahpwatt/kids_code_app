angular.module("kidsCode")
	.controller("inputCntrl", function($scope, $rootScope, accServ, $location){
		$scope.showExercise = function(str){
			accServ.printExercise(str);
			$location.path("/exercise2");
			console.log(str);
		}


	});


