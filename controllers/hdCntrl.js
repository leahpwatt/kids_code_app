angular.module('kidsCode')
	.controller('testWord', function($http) {
  
// vulgar
    $http.get("http://www.purgomalum.com/service/plain?text=jackass")
        .then(function(response) {
            console.log(response);
        });

// Not vulgar
        $http.get("http://www.purgomalum.com/service/plain?text=test")
        .then(function(response) {
            console.log(response);
        });
});