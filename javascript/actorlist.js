function ActorList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
ActorList.prototype = Object.create(TalentList.prototype); //inherit from talentlist

ActorList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	target.on("click",null,data,actorClicked);//call directorClicked 
}


function actorClicked(e){
	console.log("Actor Clicked!")
	e.data.hire();
}