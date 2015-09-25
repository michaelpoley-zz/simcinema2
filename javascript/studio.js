//an object representing a studio.

Studio = function(name){
	this.name = name;
	this.cash = 0;
	this.prestige_level = 0; //stored as a number to make it easier to go up and down.
	this.movie_history = []; //an array of past movies
}

//functions to update the HUD
Studio.prototype.update_name = function(){
	$("#printStudio").html("Studio Name: " + this.name);
}
Studio.prototype.update_cash = function(){
	$("#currentCash").html("Cash on Hand: $" + this.cash);
}
Studio.prototype.update_prestige = function(){
	$("#currentPrestige").html("Prestige Level: " + prestige_levels[this.prestige_level]);
}
Studio.prototype.update_hud = function() {
	this.update_name();
	this.update_cash();
	this.update_prestige();
}

prestige_levels = ["Unknown", "Newcomer", "Upstart", "Respected", "Mogul"] //array of prestige_levels, in global scope 
