

// Hides the game element
$("#game").hide();

mode = ""; //mode variable in global scope
change_mode("start");//start off in start mode; 

var currentProdco;
var currentMovie;

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

// Create a new Prodco
$("#newProdco").click(function(){
	var newProdcoName = $('#newProdcoName').val(); //get new name from textbox
	if(newProdcoName.length > 1){
		currentProdco = new Prodco($('#newProdcoName').val()); //instantiate prodco object
		currentProdco.update_hud(); //update the HUD
		change_mode("home");
	}
	else{
		alert("Please enter a longer name for your prodco!");
	}
});

// Create a new Movie
$("#startNewMovie").click(function(){
	change_mode("basics");
});

//Limit genre selection when planning a new movie
max_genres = 2;
checked_genres = [];
$(".genreCheckbox").click(function(){ //When any of the genre checkboxes are clicked
	checked_genres = [];
	$(".genreCheckbox").each(function(index,value){ //loop over all the genre checkboxes
		if($(this).is(":checked")){
			checked_genres.push($(this).val()); //if box is checked, push it into the array
		}
	});
	if(checked_genres.length >= max_genres){ //if more than the limit has been checked
		$(".genreCheckbox").each(function(index,value){ //loop over them all again
		if($(this).is(":checked")) {$(this).attr("disabled",false)} else {$(this).attr("disabled",true)}//disable unchecked boxes to prevent checking too many
		});
	}
	else{ //fewer than limit # of boxes checked
		$(".genreCheckbox").attr("disabled",false) //make sure all checkboxes are active
	}
});

//Create new movie.  Happens when user clicks the pitch button
$("#pitchMovie").click(function(){
	//alert("making a movie!")
	currentMovie = new Movie($("#newMovieTitle").val(), $("#newMovieSummary").val(),checked_genres) //instantiate new movie object
});

$("#game").click(function(){
	var question2 = prompt("What is the name of your movie?");
	$("#movieName").append("Movie Title: " + question2);
	$("#game").hide();

});
