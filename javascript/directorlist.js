function DirectorList(){
	TalentList.call(this);//call the constructor of the object we're inheriting from
}
DirectorList.prototype = Object.create(TalentList.prototype); //inherit from talentlist
