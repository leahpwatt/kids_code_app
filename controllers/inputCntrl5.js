angular.module("kidsCode")
	.controller("inputCntrl5", function($scope, $rootScope, $location){
		$scope.showExercise = function(input){
				$location.path("/assessment1");
			} 
			
		
	});
