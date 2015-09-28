function Director(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
Director.prototype = Object.create(Talent.prototype); //inherit from talent

Director.prototype.hire = function(){
	if(this.affordable()){
		currentMovie.director = this;
		currentProdco.takeCash(this.fee);
		changeMode("sel_actor");
	}
	else{
		alert("you can't afford " + this.name)
	}
}