angular.module("kidsCode")
	.controller("inputCntrl2", function($scope, $rootScope, vulServ, checkInputService, errAlert, codeServ, $location){
			$scope.showExercise = function(str){
				if(checkInputService.checkColor(str)) {
//				   vulServ.printExercise(str);
				   $location.path("/exercise3");
			} else {
				codeServ.saveErr(str);
				errAlert.displayAlert(str);
			}

         }
	});