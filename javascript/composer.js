function Composer(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
Composer.prototype = Object.create(Talent.prototype); //inherit from talent

Composer.prototype.hire = function(){
	if(this.affordable()){
		currentMovie.composer = this;
		currentProdco.takeCash(this.fee);
		changeMode("production_release");
	}
	else{
		alert("you can't afford " + this.name)
	}
}