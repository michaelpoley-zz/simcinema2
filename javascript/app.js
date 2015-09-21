

// Hides the game element

$("#game").hide();

money = "Budget: $" + 10000000;
prestige  = "Hollywood Outsider";

mode = "";
change_mode("home")//start off on home mode; 

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

// Prints the name of the Studio from a prompt

$("#target").click(function(){
	var question1 = prompt("What is the name of your studio?");
	$("#printStudio").append(question1 + " Studio(s)");
	$("#currentCash").append(money);
	$("#currentPrestige").append("Current Prestige: " + prestige);
	$("#target").hide();
	$("#game").show();
});

// Button that will start the game 
// Prompts for a movie title

$("#game").click(function(){
	var question2 = prompt("What is the name of your movie?");
	$("#movieName").append("Movie Title: " + question2);
	$("#game").hide();

});
