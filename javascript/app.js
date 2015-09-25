

// Hides the game element
$("#game").hide();

mode = ""; //mode variable in global scope
change_mode("start");//start off in start mode; 

var currentStudio;

//Selects which mode we are currently in
function change_mode(new_mode){
	if($("#" + new_mode).attr('class') != 'mode'){ //we tried to switch to a mode that doesn't have a div in index.html
		console.log("Tried to switch to mode '" + new_mode + "', which is not a div that I know of.")
		return null;
	}
	else{
		mode = new_mode;//update mode variable
		var mode_divs = $(".mode").hide();//hide all the mode divs
		$("#" + new_mode).show()//show just the div we want
		}
	}

// Create a new Studio
$("#newStudio").click(function(){
	var newStudioName = $('#newStudioName').val(); //get new name from textbox
	if(newStudioName.length > 1){
		currentStudio = new Studio($('#newStudioName').val()); //instantiate studio object
		currentStudio.update_hud(); //update the HUD
		change_mode("home");
	}
	else{
		alert("Please enter a longer name for your studio!");
	}
});

// Create a new Movie
$("#startNewMovie").click(function(){
	change_mode("basics");
});

//Limit genre selection 
max_genres = 2;
$(".genreCheckbox").click(function(){ //When any of the genre checkboxes are clicked
	var checked_counter = 0;
	$(".genreCheckbox").each(function(index,value){ //loop over all the genre checkboxes
		if($(this).is(":checked")){
			checked_counter ++; //if box is checked, add one to counter
		}
	});
	if(checked_counter >= max_genres){ //if more than one has been checked
		$(".genreCheckbox").each(function(index,value){ //loop over them all again
		if($(this).is(":checked")) {$(this).attr("disabled",false)} else {$(this).attr("disabled",true)}//disable unchecked boxes to prevent checking too many
		});
	}
	else{ //fewer than 2 boxes checked
		$(".genreCheckbox").attr("disabled",false) //make sure all checkboxes are active
	}
});

$("#game").click(function(){
	var question2 = prompt("What is the name of your movie?");
	$("#movieName").append("Movie Title: " + question2);
	$("#game").hide();

});
