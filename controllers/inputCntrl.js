angular.module("kidsCode")
.controller("inputCntrl", function($scope, $rootScope, vulServ, $location){
		$scope.showExercise = function(str){
			console.log("showExercise: " + str);
			vulServ.printExercise(str);
			$location.path("/exercise2");
			console.log(str);
		}


	});



