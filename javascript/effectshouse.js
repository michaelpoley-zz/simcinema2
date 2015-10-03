function EffectsHouse(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
EffectsHouse.prototype = Object.create(Talent.prototype); //inherit from talent

EffectsHouse.prototype.hire = function(){
	if(this.affordable()){
		currentMovie.cast.push(this);
		currentProdco.takeCash(this.fee);
		changeMode("production_release");
	}
	else{
		alert("you can't afford " + this.name)
	}
}