function Sfx(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
Sfx.prototype = Object.create(Talent.prototype); //inherit from talent

Sfx.prototype.hire = function(){
	if(this.affordable()){
		currentMovie.sfx= this;
		currentProdco.takeCash(this.fee);
		changeMode("production_release");
	}
	else{
		alert("you can't afford " + this.name)
	}
}