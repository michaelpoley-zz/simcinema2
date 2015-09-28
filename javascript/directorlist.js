function DirectorList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
DirectorList.prototype = Object.create(TalentList.prototype); //inherit from talentlist

TalentList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	console.log("You forgot to override the assignClickHandler function")
	target.on("click",null,data,directorClicked);//call directorClicked 
}


function directorClicked(e){
	console.log("Director Clicked!")
	e.data.hire();
}