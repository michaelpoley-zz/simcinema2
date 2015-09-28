TalentList = function(){  //this object should be extended through prototype inheritance to create the director list, actor list, etc.
	this.list = [];
}

TalentList.prototype.add = function(item){
	this.list.push(item);
}

TalentList.prototype.renderInto = function(target){
	console.log("RENDERING TALENT LIST")
	target.html("<div class = 'talentList'>DIRECTORS GO HERE</div>")
	for(var i = 0; i < this.list.length; i++){
		console.log("rendering " + this.list[i].name)
		newHTML = this.list[i].generateHTML();
		console.log(newHTML);
		target.append(newHTML);
	}
	
}