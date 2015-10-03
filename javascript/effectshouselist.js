function EffectsHouseList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
EffectsHouse.prototype = Object.create(TalentList.prototype); //inherit from talentlist

TalentList.prototype.assignClickHandler = function(target,data){//override the assign ClickHandler Function
	target.on("click",null,data,effectsHouseClicked);//call directorClicked 
}


function effectsHouseClicked(e){
	console.log("EffectsHouse Clicked!")
	e.data.hire();
}