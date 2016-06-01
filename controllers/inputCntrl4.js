angular.module("kidsCode")
.controller("inputCntrl4", function($scope, $rootScope, $location, errAlert, codeServ, checkInputService){
	$scope.showExercise = function(str){
			if(checkInputService.checkImgStyle(str)) { 
//			     vulServ.printExercise(str);
				$location.path("/exercise5"); //changing views
	} else {
				codeServ.saveErr(str);
				errAlert.displayAlert(str);
			}
		}
	});

