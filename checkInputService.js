angular.module("kidsCode")
	.factory("checkInputService", function(){

		var htmlInput = "<h1>Lily</h1>";
		var openingTags = htmlInput.substring(0, htmlInput.indexOf(">")+1);
		console.log(openingTags);
		var nameArray = htmlInput.split("");
		var lastfive = nameArray.splice(-5,5);
		var endingTags = lastfive.join("");
		console.log (endingTags);

		function compareParts(){
			if (openingTags !="<h1>") {
			    document.write("Wrong Input, pls try again");
			}

			if (endingTags != "</h1>"){
			    document.write("Wrong Input, pls try again");
			} else {
				return htmlInput;
			}
		}
		
		return compareParts();
	});



