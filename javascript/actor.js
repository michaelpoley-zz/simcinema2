function Actor(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
Actor.prototype = Object.create(Talent.prototype); //inherit from talent

Actor.prototype.hire = function(){
	if(this.affordable()){
		currentMovie.cast.push(this);
		currentProdco.takeCash(this.fee);
		if(mode == "sel_actor"){
			changeMode("sel_actress");
		}
		else{

			changeMode("sel_composer");
			
		}
	}
	else{
		alert("you can't afford " + this.name)
	}
}