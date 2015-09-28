Talent = function(name,fee){  //this object should be extended through prototype inheritance to create the director object, actor object, etc.
	this.list = [];
	
}

Talent.prototype.add = function(item){
	this.list.push(item);
}