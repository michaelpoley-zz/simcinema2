

Studio = function(name, riskiness, generosity){
	this.name = name;
	this.riskiness = riskiness; //how likely the studio is to fund a movie from a low-prestige prodco
	this.generosity = generosity; //how much cash the studio is likely to fork over
}

Studio.prototype.toHTML = function(){
	html = "<li>"+
		this.name + '	' +
		'<button class= "pitchButton" id="pitchTo' + this.name + '">'
		+"Pitch Movie to " + this.name +
		"</button></li>";
	return html;
}


