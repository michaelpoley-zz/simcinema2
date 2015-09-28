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
		newHTML = this.list[i].generateHTML();
		target.append(newHTML);
		console.log(newHTML);
		//newHTML.on("click",null,this.list[i],talentClickHandler);//add a click handler to the list item, and pass it the talent object
		this.assignClickHandler(newHTML,this.list[i])
	}
	
}

TalentList.prototype.assignClickHandler = function(target,data){//override this function!
	console.log("You forgot to override the assignClickHandler function")
	target.on("click",null,data,function(){alert("You forgot to override this function")});//add a click handler to the list item, and pass it the talent object
}
