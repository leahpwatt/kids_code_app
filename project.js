<<<<<<< HEAD
angular.module("kidsCode")
	.directive('myDir', function(){
   return {
      restrict: "E",
      link: function(scope, elem, attrs){
        elem.html(scope.tags);
        console.log(scope.tags);
      }
    }
  });

