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
		
		var checkColor = function (input){
			var inputStyle       = " style='color:" + input + "'";
			var saveRenderedText = codeServ.getInput(rendered);
            // var saveRenderedText = rendered.text;
            console.log("save = " + saveRenderedText);
            var saveEndofString  = saveRenderedText.substring(saveRenderedText.indexOf(">")+1);
            var openingTags      = saveRenderedText.substring(0, saveRenderedText.indexOf(">"));
            var newOpeningTags   = openingTags + inputStyle + ">"; 
            rendered.text = newOpeningTags + saveEndofString;
            console.log(" new Rendered = " + rendered.text);  
//			$rootScope.$broadcast("rerender", rendered)
			console.log(rendered.text);
			codeServ.saveInput(rendered.text);
	
		}

		return {
			compareParts: compareParts,
			checkColor: checkColor
		};
	});



