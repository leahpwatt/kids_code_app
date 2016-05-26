angular.module("kidsCode")
	.factory("checkInputService", function($rootScope, codeServ){ //required for $broadcast (only works with rootscope)
		var rendered = {text:""}; //var that is accepting rendered code

		var compareParts = function (input){
			var openingTags = input.substring(0, input.indexOf(">")+1); //separating required tags from user input and storing in variable
			var nameArray = input.split(""); //splitting the string
			var lastfive = nameArray.splice(-5,5); //separating last part of html tags
			var endingTags = lastfive.join(""); //join them together to print on html view
			if (openingTags != "<h1>") { //checking to see if the opening tags match the requirement
			    return false //if conditional is correct, it returns false
			}
			if (endingTags != "</h1>"){ //same same for ending tags
			    return false
			} else {
				return true
			}
		}
		var checkImage = function(input){
			if (input != "<img src='dog.jpg'>"){
				return false
			} else {
				return true
			}
		}
		
		var checkColor = function (input){
			var inputStyle       = " style='color:" + input + "'"; //builds style statement
			var saveRenderedText = codeServ.getInput(rendered); //getting and saving h1 string
            var saveEndofString  = saveRenderedText.substring(saveRenderedText.indexOf(">")+1); //pulling string apart to remove tags
            var openingTags      = saveRenderedText.substring(0, saveRenderedText.indexOf(">")); //saving end of string
            var newOpeningTags   = openingTags + inputStyle + ">"; 
            rendered.text = newOpeningTags + saveEndofString; //building a new string
			codeServ.saveInput(rendered.text); //rendering out new text to via codeServe
	
		}

		return { //allows two functions to be invoked
			compareParts: compareParts,
			checkColor: checkColor,
			checkImage: checkImage
		};
	});



