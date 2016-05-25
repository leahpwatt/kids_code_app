angular.module("kidsCode")
	.factory("checkInputService", function($rootScope){
		var rendered = {text:""};

		var compareParts = function (input){
			console.log(input);
			var inputGood = false;
			var openingTags = input.substring(0, input.indexOf(">")+1);
			var nameArray = input.split("");
			var lastfive = nameArray.splice(-5,5);
			var endingTags = lastfive.join("");
			if (openingTags != "<h1>") {
			    alert("Wrong Input, pls try again");
			}
			console.log(endingTags);
			if (endingTags != "</h1>"){
			    alert("Wrong Input, pls try again");
			} else {
				rendered.text += input;
				$rootScope.$broadcast("drawthemHTMLs", rendered)
				console.log('event sent');
				inputGood = true;
			}
			return inputGood;
		}
		
		return {
			compareParts: compareParts,
			rendered: function(){
				return rendered.text;
			}
		};
	});



