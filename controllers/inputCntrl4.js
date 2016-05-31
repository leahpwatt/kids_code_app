angular.module("kidsCode")
	.controller("inputCntrl4", function($scope, $rootScope, $location, checkInputService){
	$scope.showExercise = function(input){
			checkInputService.checkImgStyle(input); //runs input through compareParts function
				$location.path("/exercise5"); //changing views
			} 

	});


