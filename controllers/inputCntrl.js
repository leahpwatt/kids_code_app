angular.module("kidsCode")
.controller("inputCntrl", function($scope, $rootScope, vulServ, checkInputService, $location){
		$scope.showExercise = function(str){
			console.log("showExercise: " + str);
			vulServ.printExercise(str);
			console.log(str);
			checkInputService.compareParts(str);
			$location.path("/exercise2");
		}


	});



