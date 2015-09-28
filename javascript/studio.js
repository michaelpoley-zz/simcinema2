

Studio = function(name, riskiness, generosity){
	this.name = name;
	this.riskiness = riskiness; //how likely the studio is to fund a movie from a low-prestige prodco
	this.generosity = generosity; //how much cash the studio is likely to fork over
}

Studio.prototype.pitch = function(prodco, movie){
	var baseline_movie_value = (prodco.prestige_level * 10) + 1;
	console.log("baseline:" + baseline_movie_value);
	var actual_movie_value = Math.round(baseline_movie_value * (this.generosity + Math.random()));
	console.log("actual_movie_value:" + actual_movie_value)
	alert("You pitch " + movie.title + " to " + this.name + "\n\nThey offer you $" +
	actual_movie_value + " million"
	);
	
}

Studio.prototype.toHTML = function(){  //Really not sure if this is done right, but it works

	var myLi = document.createElement("LI"); //create list item
	myLi.appendChild(document.createTextNode(this.name)); //add name of studio
	var myButton = document.createElement("BUTTON"); //create a button
	myButton.appendChild(document.createTextNode("pitch to " +this.name));//give the button some text
	myLi.appendChild(myButton);// put the button into the list item
	
	myButton.onclick = pitchClickHandler; //give the button a function to call when clicked
	myButton.studioInstance = this; //attach a reference to the instance of this object to the button 
	
	html = myLi
	return html;
}

pitchClickHandler = function() {
	this.studioInstance.pitch(currentProdco, currentMovie); //'this' refers to the button in this case
}

