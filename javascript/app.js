
// Hides the game element

$("#game").hide();
money = "Budget: $" + 10000000;
prestige  = "unknown";

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

$("#game").click(function(){

});
