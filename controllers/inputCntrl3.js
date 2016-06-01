angular.module("kidsCode")
	.controller("inputCntrl3", function($scope, $rootScope, $location, errAlert, vulServ, checkInputService){
		$scope.showExercise = function(str){
			if(checkInputService.checkImg(str)) { //runs input through compareParts function
//				 vulServ.printExercise(str);
				$location.path("/exercise4"); //changing views
			} else{
				errAlert.displayAlert(str);
			}
	}

	});



	