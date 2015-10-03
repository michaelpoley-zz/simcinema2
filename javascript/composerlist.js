function ComposerList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
ComposerList.prototype = Object.create(TalentList.prototype); //inherit from talentlist

ComposerList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	target.on("click",null,data,ComposerClicked);//call directorClicked 
}


function ComposerClicked(e){
	console.log("Composer Clicked!")
	e.data.hire();
}