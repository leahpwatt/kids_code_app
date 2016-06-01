angular.module("kidsCode")
	.controller("inputCntrl3", function($scope, $rootScope, $location, errAlert, vulServ, codeServ, checkInputService){
		$scope.showExercise = function(str){
			if(checkInputService.checkImg(str)) { //runs input through compareParts function
//				 vulServ.printExercise(str);
				$location.path("/exercise4"); //changing views
			} else{
				codeServ.saveErr(str);
				errAlert.displayAlert(str);
			}
	}

	});



	