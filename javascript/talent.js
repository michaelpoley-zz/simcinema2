Talent = function(name,fee){  //this object should be extended through prototype inheritance to create the director object, actor object, etc.
	this.name = name;
	this.fee = fee;
	
}


Talent.prototype.generateHTML = function(){
	html = "<div class = 'talentRow'>"
	html += "<div class = 'talentColumn'>"
	html += this.name
	html += "</div>"
	html += "<div class = 'talentColumn'>"
	html += "$" + numberWithCommas(this.fee)
	html += "</div>"
	html += "</div>"
	html = $(html)
	html.myTalentObject = this;
	return html;
}

Talent.prototype.affordable = function(){
	return (this.fee < currentProdco.cash);
}