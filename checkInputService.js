angular.module("kidsCode")
	.factory("checkInputService", function($rootScope, codeServ){
		var rendered = {text:""};

		var compareParts = function (input){
			console.log(input);
			var openingTags = input.substring(0, input.indexOf(">")+1);
			var nameArray = input.split("");
			var lastfive = nameArray.splice(-5,5);
			var endingTags = lastfive.join("");
			if (openingTags != "<h1>") {
			    alert("Wrong Input, pls try again"); //return false
			}
			console.log(endingTags);
			if (endingTags != "</h1>"){
			    alert("Wrong Input, pls try again");
			} else {
				return true
			}
		}
		
		return {
			compareParts: compareParts
		};
	});



