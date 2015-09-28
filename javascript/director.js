function Director(name,fee){
	Talent.call(this,name,fee);//call the constructor of the object we're inheriting from
}
Director.prototype = Object.create(Talent.prototype); //inherit from talent
