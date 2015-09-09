
// Hides the game element

$("#game").hide();
money = "Budget $" + 10000000;

// Prints the name of the Studio from a prompt

$("#target").click(function(){
	var question1 = prompt("What is the name of your studio?");
	$("#printStudio").append(question1 + " Studio");
	$("#currentCash").append(money);
	$("#target").hide();
	$("#game").show();
});

$("#game").click(function(){

});
