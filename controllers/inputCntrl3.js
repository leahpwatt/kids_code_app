angular.module("kidsCode")
	.controller("inputCntrl3", function($scope, $rootScope, $location, checkInputService){
		$scope.showExercise = function(input){
			if(checkInputService.checkImg(input)){ //runs input through compareParts function
				$location.path("/exercise4"); //changing views
			} else{
				alert("Oops! Please try again.");
		}
	}

	});