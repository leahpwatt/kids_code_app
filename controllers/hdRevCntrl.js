angular.module("kidsCode")
	.controller("hdRevCntrl", function(){





	});


//this is a function to restrict the inbox to accept only what we want



function only(htmlInput){
	var regex = /[1-9][a-g][i-z]/g;
	htmlInput.value = htmlInput.value.replace(regex, "");
}	