//an object representing a production company.

Prodco = function(name){
	this.name = name;
	this.cash = 0;
	this.prestige_level = 0; //stored as a number to make it easier to go up and down.
	this.movie_history = []; //an array of past movies
}

//functions to update the HUD
Prodco.prototype.update_name = function(){
	$("#currentProdco").html("Production Company Name: " + this.name);
}
Prodco.prototype.update_cash = function(){
	$("#currentCash").html("Cash on Hand: $" + numberWithCommas(this.cash));
}
Prodco.prototype.update_prestige = function(){
	$("#currentPrestige").html("Prestige Level: " + prestige_levels[this.prestige_level]);
}

Prodco.prototype.addCash = function(ammount){
	this.cash += ammount;
	this.update_cash();
}

Prodco.prototype.takeCash = function(ammount){
	this.cash -= ammount;
	update_cash();
}

Prodco.prototype.update_hud = function() {
	this.update_name();
	this.update_cash();
	this.update_prestige();
}


prestige_levels = ["Complete Unknown", "Newcomer", "Upstart", "Respected", "Mogul"] //array of prestige_levels, in global scope 
