

Studio = function(name, riskiness, generosity){
	this.name = name;
	this.id = "studio_" + gReplace(name," ","_");
	this.riskiness = riskiness; //how likely the studio is to fund a movie from a low-prestige prodco
	this.generosity = generosity; //how much cash the studio is likely to fork over
	this.offer = ""; //how much this studio is offering you
	
}

Studio.prototype.accept = function(){ // accept this studio's offer. Happens when the accept offer button is clicked.
	currentProdco.addCash(this.offer * 1000000);
	changeMode("sel_director");
}

Studio.prototype.pitch = function(prodco, movie){
	var baseline_movie_value = (prodco.prestige_level * 10) + 1;//how much is your idea worth?

	var actual_movie_value = baseline_movie_value * (this.generosity + Math.random()); //modify value with studio's generosity, random element
		
	console.log("Value of your script:" + actual_movie_value)
	if(actual_movie_value >= 1 &&((prodco.prestige_level / 10 + this.riskiness) > Math.random())){ //are they willing to make the movie? Script will be automatically if value is < 1
		//yes!
		
		this.offer = Math.round(actual_movie_value);
		alert("You pitch " + movie.title + " to " + this.name + "\n\nThey offer you $" + //show alert
		this.offer + " million"
		);
		
		this.updateOfferText("$" + this.offer + " million" )//display offer next to studio
		
		this.getPitchButton().hide()//don't need the pitch button anymore
		this.getAcceptButton().show()//show the accept button
	}
	else{
		//no!
		alert("You pitch " + movie.title + " to " + this.name + "\n\nThey don't return your phone call");
		this.offer = "Not Interested"
		//this.getPitchButton().attr("disabled",true); //disable the pitch button so it can't be clicked again
		this.getPitchButton().hide();//don't need the pitch button anymore
		this.updateOfferText(" Not Interested ");
		
	}
	
	
	
}

Studio.prototype.getPitchButton = function(){
	return $("#pitch_button_" + this.id);
}

Studio.prototype.getAcceptButton = function(){
	return $("#accept_button_" + this.id);
}

Studio.prototype.updateOfferText = function(newText){ //display offer text
	$("#offer_" + this.id).html(newText);
}

Studio.prototype.toHTML = function(){  //Really not sure if this is done right, but it works.  This can be done better with jquery stuff I think.

	var studio_html_element = document.createElement("LI"); //create list item
	studio_html_element.id = this.id;//give it the right id so we can find it later with jquery
	studio_html_element.appendChild(document.createTextNode(this.name)); //add name of studio
	var pitch_button = document.createElement("BUTTON"); //create a button
	pitch_button.id = "pitch_button_" + this.id;
	pitch_button.appendChild(document.createTextNode("pitch to " +this.name));//give the button some text
	pitch_button.onclick = pitchClickHandler; //give the button a function to call when clicked
	
	var accept_button = document.createElement("BUTTON"); //create a button
	accept_button.id = "accept_button_" + this.id;
	accept_button.appendChild(document.createTextNode("Accept offer"));//give the button some text
	accept_button.onclick = acceptOfferClickHandler; //give the button a function to call when clicked
	accept_button.style.display = "none";
	
	var offer_span = document.createElement("SPAN");
	offer_span.className = "offer";
	offer_span.id = "offer_" + this.id;
	studio_html_element.appendChild(offer_span);
	studio_html_element.appendChild(pitch_button);
	studio_html_element.appendChild(accept_button);// put the button into the list item
	
	studio_html_element.studioInstance = this; //attach a reference to the instance of this object to the button 
	
	return studio_html_element;
}

acceptOfferClickHandler = function(){
	this.parentElement.studioInstance.accept();
}


pitchClickHandler = function() {
	this.parentElement.studioInstance.pitch(currentProdco, currentMovie); //'this' refers to the button in this case
}

