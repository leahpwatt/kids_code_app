angular.module("kidsCode")
	.directive('kidDir', function(){
   return {
      restrict: "E",
      link: function(scope, elem, attrs){
        elem.html(scope.tags);      
      }
    }
  });


