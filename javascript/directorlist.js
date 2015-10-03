function DirectorList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
DirectorList.prototype = Object.create(TalentList.prototype); //inherit from talentlist

DirectorList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	target.on("click",null,data,directorClicked);//call directorClicked 
}


function directorClicked(e){
	console.log("Director Clicked!")
	e.data.hire();
}