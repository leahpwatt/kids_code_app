angular.module("kidsCode")
	.controller("homeCntrl", function($scope, codeServ, checkInputService){
		$scope.$on("drawthemHTMLs", function(event, data){
			console.log('event recieved', data);
			angular.element(renderCode).html(data);
			$scope.input = data;
			// console.log(data);
		});
	});

