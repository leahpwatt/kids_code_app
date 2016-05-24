angular.module("kidsCode")
	.factory("checkInputService", function($rootScope){
		var rendered = {text:""};

		var compareParts = function (input){
			console.log(input);
			var openingTags = input.substring(0, input.indexOf(">")+1);
			var nameArray = input.split("");
			var lastfive = nameArray.splice(-5,5);
			var endingTags = lastfive.join("");
			if (openingTags != "<h1>") {
			    console.log("Wrong Input, pls try again");
			}
			console.log(endingTags);
			if (endingTags != "</h1>"){
			    console.log("Wrong Input, pls try again");
			} else {
				rendered.text += input;
				$rootScope.$broadcast("rerender", rendered)
			console.log(rendered);
			}
		}
		
		return {
			compareParts: compareParts,
			rendered: function(){
				return rendered.text;
			}
		};
	});



