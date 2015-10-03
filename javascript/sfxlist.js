function SfxList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
SfxList.prototype = Object.create(TalentList.prototype); //inherit from talentlist

SfxList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	target.on("click",null,data,SfxClicked);//call directorClicked 
}


function SfxClicked(e){
	console.log("Sfx Clicked!")
	e.data.hire();
}