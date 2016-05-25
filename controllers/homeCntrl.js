angular.module("kidsCode")
	.controller("homeCntrl", function($scope, codeServ, checkInputService){
		$scope.$on("drawthemHTMLs", function(event, data){ //$on listening for $broadcast event
			angular.element(renderCode).html(data); //function that is rendering the html
			$scope.input = data; //this is interacting with $broadcast to receive rendered data
		});
	});

