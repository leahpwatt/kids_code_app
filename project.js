angular.module("kidsCode")
	.directive('myDirective', function() {
  return {
    compile: function(element) {
      element.html('<input ng-model="heading">{{heading}}');
    }
  };

});
