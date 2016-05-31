angular.module("kidsCode")
  .factory("errAlert", function($rootScope){ //required for $broadcast (only works with rootscope)
		var rendered = {text:""}; //var that is accepting rendered code

		var displayAlert = function (){
             var modal = document.getElementById('errModal');
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";

           // When the user clicks on <span> (x), close the modal
                 span.onclick = function() {
                       modal.style.display = "none";
		          }
		 }         

return { //allows two functions to be invoked
			displayAlert: displayAlert
		};
 });
