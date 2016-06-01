angular.module("kidsCode")
	.factory("checkInputService", function($rootScope, codeServ){ //required for $broadcast (only works with rootscope)
		var rendered = {text:""}; //var that is accepting rendered code

		var colorArray = [
			"AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige", "Bisque",
			"Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue",
			"Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue",
			"DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
			"DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
			"DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink",
			"DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen",
			"Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
			"HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen",
			"LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey",
			"LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey",
			"LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
			"MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
			"MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite",
			"Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
			"PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple",
			"RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell",
			"Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal",
			"Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen",
			"aliceblue","antiquewhite","aqua","aquamarine","azure","beige", "bisque",
			"black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue",
			"chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkBlue",
			"darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta",
			"darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen",
			"darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink",
			"deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen",
			"fuchsia","gainsboro","ghostwhite","gold","goldenRod","gray","grey","green","greenyellow",
			"honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen",
			"lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey",
			"lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey",
			"lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine",
			"mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen",
			"mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite",
			"navy","oldLace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen",
			"paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple",
			"rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell",
			"sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springreen","steelblue","tan","Teal",
			"thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen",
			];

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
		
	var checkColor = function (input){
        	var locateColor = colorArray.indexOf(input);
        	var saveRenderedText = codeServ.getInput(rendered); //getting and saving h1 string     

            if (locateColor < 0) {
          		    return false
			} 
			else {

				var inputStyle       = " style='color:" + input + "'"; //builds style statement
            	var saveEndofString  = saveRenderedText.substring(saveRenderedText.indexOf(">")+1); //pulling string apart to remove tags
           		var openingTags      = saveRenderedText.substring(0, saveRenderedText.indexOf(">")); //saving end of string
            	var newOpeningTags   = openingTags + inputStyle + ">"; 
            	rendered.text = newOpeningTags + saveEndofString; //building a new string
				codeServ.saveInput(rendered.text); 
				return true
			}

		}

		var checkImg = function(image){ 
			var saveRenderedImg = codeServ.getInput(rendered);	

			if (image != "<img src='dog.jpg'>"){
				return false
			} else {
				var newConcat = saveRenderedImg.concat(image);
				codeServ.saveInput(rendered.text + "\n" + image);
				return true
			}
		}

	var checkImgStyle = function (input){

		    var saveRenderedText = codeServ.getInput(rendered); //getting and saving appended string

			if (input != "border-radius:150px"){
				return false
			} else {
			var inputStyle       = " style='" + input + "' "; //builds style statement
            var saveEndofString  = saveRenderedText.substring(saveRenderedText.indexOf("src")); //pulling string apart to remove tags
            var saveStartofString = saveRenderedText.substring(0, saveRenderedText.indexOf("img")+3); //saving end of string
            var newImageString = saveStartofString + inputStyle + saveEndofString; 
            rendered.text = newImageString; //building a new string
			codeServ.saveInput(rendered.text); //rendering out new text to via codeServe
			return true
	        }
		}


		return { //allows two functions to be invoked
			compareParts: compareParts,
			checkColor: checkColor,
			checkImg: checkImg,
			checkImgStyle : checkImgStyle
		};
	});



