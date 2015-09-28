TalentList = function(){  //this object should be extended through prototype inheritance to create the director list, actor list, etc.
	this.list = [];
	
}

TalentList.prototype.add(item) = function(){
	this.list.push(item);
}