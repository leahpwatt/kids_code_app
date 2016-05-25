angular.module("kidsCode")
	.controller("homeCntrl", function($scope, checkInputService){
		// $scope.tags = checkInputService.rendered();
		// console.log("homecontroller", checkInputService.rendered);
		$scope.$on("drawthemHTMLs", function(event, data){
			console.log('event recieved');
			angular.element(renderCode).html(data.text);
			$scope.tags = data.text;
			console.log(data);
		});
	});

