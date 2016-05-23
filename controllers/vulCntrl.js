var app = angular.module('kidsCode')
    app.controller('hdCntrl', function($http) {
    console.log("In hdCntrl");

    // var htmlInput = "text";
    var htmlInput = "jackass";
    var text = "http://www.purgomalum.com/service/plain?text=" + htmlInput;
    console.log(text);

    $http.get(text)
        .then(function(response) {
            console.log(response.data);
            return (response.data);
        });

});