
// Hides the game element

$("#game").hide();

money = "Budget: $" + 10000000;
prestige  = "Hollywood Outsider";

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
