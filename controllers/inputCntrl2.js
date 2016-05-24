angular.module("kidsCode")
	.controller("inputCntrl2", function($scope, $rootScope,  $location){
		$scope.showExercise = function(str){
			console.log('hi');
			// accServ.printExercise(str);
			$location.path("/exercise3");
			console.log(str);
		}


	});