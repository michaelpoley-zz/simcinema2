

// Hides the game element
$("#game").hide();

mode = ""; //mode variable in global scope
changeMode("start");//start off in start mode; 

var currentProdco;
var currentMovie;
var studioList = [];
//Studios that will be in the game. These are stupid placeholders
studioList.push( new Studio("21st Century Faux", 0.9, 0.1));
studioList.push( new Studio("Fony Pictures", 0.7, 0.3));
studioList.push( new Studio("Willard Diznick Studios", 0.5, 0.5));
studioList.push( new Studio("Periapsis Pictures", 0.3, 0.7));
studioList.push( new Studio("Specific Studios", 0.1, 0.9));

//Selects which mode we are currently in
function changeMode(new_mode){
	if($("#" + new_mode).attr('class') != 'mode'){ //we tried to switch to a mode that doesn't have a div in index.html
		console.log("Tried to switch to mode '" + new_mode + "', which is not a div that I know of.")
		return null;
	}
	else{
		mode = new_mode;//update mode variable
		var mode_divs = $(".mode").hide();//hide all the mode divs
		$("#" + new_mode).show()//show just the div we want
		}
	}

//Run this from the console.  It will set up a fake production company and movie for testing so you don't have to keep typing stuff in every time you want to test
function test(mode){
	if(typeof mode !== 'undefined'){
		changeMode(mode);
	}
	currentProdco = new Prodco("Thugscience Productions")
	currentProdco.addCash(1000000000)//a billion dollars!
	currentProdco.update_hud();
	currentMovie = new Movie("Write a Story 2: Write a Story Harder", "In post-nuclear Indiana, James and Andy must learn to survive the radioactive zombie hordes, as well as their feelings", Array("action","drama"));
	
}
// Create a new Prodco
$("#newProdco").click(function(){
	var newProdcoName = $('#newProdcoName').val(); //get new name from textbox
	if(newProdcoName.length > 1){
		currentProdco = new Prodco($('#newProdcoName').val()); //instantiate prodco object
		currentProdco.update_hud(); //update the HUD
		changeMode("home");
	}
	else{
		alert("Please enter a longer name for your prodco!");
	}
});

// Start a new Movie
$("#startNewMovie").click(function(){
	changeMode("basics");
});

//Limit genre selection when planning a new movie
max_genres = 2;
checked_genres = [];
$(".genreCheckbox").click(function(){ //When any of the genre checkboxes are clicked
	checked_genres = [];
	$(".genreCheckbox").each(function(index,value){ //loop over all the genre checkboxes
		if($(this).is(":checked")){
			checked_genres.push($(this).val()); //if box is checked, push it into the array
		}
	});
	if(checked_genres.length >= max_genres){ //if more than the limit has been checked
		$(".genreCheckbox").each(function(index,value){ //loop over them all again
		if($(this).is(":checked")) {$(this).attr("disabled",false)} else {$(this).attr("disabled",true)}//disable unchecked boxes to prevent checking too many
		});
	}
	else{ //fewer than limit # of boxes checked
		$(".genreCheckbox").attr("disabled",false) //make sure all checkboxes are active
	}
});

//Actually create new movie.  Happens when user clicks the pitch button
$("#pitchMovie").click(function(){
	if(($("#newMovieTitle").val().length > 0 )&& ($("#newMovieSummary").val().length > 0) && checked_genres.length > 0){
		currentMovie = new Movie($("#newMovieTitle").val(), $("#newMovieSummary").val(),checked_genres) //instantiate new movie object
		changeMode("pitch")
	}
	else{
		alert("Please finish describing your movie!")
	}
});

//populate list of movie studios
function resetMovieStudios(){ //wrapped in a function so we can call it later
	$("#studioList").empty()
	for(var i = 0; i < studioList.length; i++){
		$("#studioList").append(studioList[i].toHTML());
	}
}
resetMovieStudios();

//create the director list
director_list = new DirectorList();
//add directors to the game.  These are placeholders and their stats are completely arbitrary
director_list.add(new Director("Tim Burton",1000000));
director_list.add(new Director("Martin Scorsese",4000000));
director_list.add(new Director("Stephen Spielberg",3000000));
director_list.add(new Director("Francis Ford Coppola",2000000));
director_list.add(new Director("Quentin Tarantino",1000000));
director_list.add(new Director("The Coen Brothers",6000000));
director_list.add(new Director("Clint Eastwood",5500000));
director_list.add(new Director("David Fincher",500000));
director_list.add(new Director("Cristopher Nolan",450000));
director_list.add(new Director("Ridley Scott",400000));
director_list.add(new Director("David Lynch",350000));
director_list.add(new Director("P.T. Anderson",3000000));
director_list.add(new Director("Woody Allen",2500000));
director_list.add(new Director("Ron Howard",2000000));
director_list.add(new Director("James Cameron",1500000));
director_list.add(new Director("Peter Jackson",1000000));
director_list.add(new Director("Wes Anderson",700000));
director_list.add(new Director("Roman Polanski",500000));
director_list.add(new Director("Brian DePalma",400000));
director_list.add(new Director("Robert Zemeckis",300000));
director_list.renderInto($("#directorList"));
//create the actors list
actor_list = new ActorList();

//more placeholders.
actor_list.add(new Actor("Robert DeNiro", 10000000));
actor_list.add(new Actor("Al Pacino", 7500000));
actor_list.add(new Actor("Jack Nicholson", 5000000));
actor_list.add(new Actor("Daniel Day-Lewis", 2500000));
actor_list.add(new Actor("Tom Hanks", 1000000));
actor_list.add(new Actor("Dustin Hoffman", 900000));
actor_list.add(new Actor("Sean Penn", 800000));
actor_list.add(new Actor("Johnny Depp", 900000));
actor_list.add(new Actor("Liam Neeson", 500000));
actor_list.add(new Actor("Leonardo DiCaprio", 700000));
actor_list.add(new Actor("Robert Downey Jr.", 600000));
actor_list.add(new Actor("Brad Pitt", 400000));
actor_list.add(new Actor("Tom Cruise", 300000));
actor_list.add(new Actor("Matt Damon", 200000));
actor_list.add(new Actor("Clint Eastwood", 400000));
actor_list.add(new Actor("Morgan Freeman", 100000));
actor_list.add(new Actor("Michael Caine", 1500000));
actor_list.add(new Actor("Gary Oldman", 150000));
actor_list.add(new Actor("Jim Carrey", 200000));
actor_list.renderInto($("#actorList"))

//even more placeholders
actress_list = new ActorList();
actress_list.add(new Actor("Meryl Streep", 240000000));
actress_list.add(new Actor("Glenn Close", 14000000));
actress_list.add(new Actor("Cate Blanchett", 14000000));
actress_list.add(new Actor("Judi Dench", 10000000));
actress_list.add(new Actor("Anette Bening", 20000000));
actress_list.add(new Actor("Marion Cotillard", 2000000));
actress_list.add(new Actor("Kate Winslet", 1000000));
actress_list.add(new Actor("Jennifer Saunders", 100000));
actress_list.add(new Actor("Holly Hunter", 20000000));
actress_list.add(new Actor("Nicole Kidman", 50000000));
actress_list.add(new Actor("Vanessa Redgrave", 60000000));
actress_list.add(new Actor("Julie Walters", 80000000));
actress_list.add(new Actor("Judy Davis", 14000000));
actress_list.add(new Actor("Maggie Smith", 13000000));
actress_list.add(new Actor("Juliette Binoche", 13000000));
actress_list.add(new Actor("Oprah Winfrey", 16000000));
actress_list.add(new Actor("Audrey Tautou", 17000000));
actress_list.add(new Actor("Julianne Moore", 19000000));
actress_list.add(new Actor("Susan Sarandon", 12000000));
actress_list.add(new Actor("Jessica Lange", 13000000));

actress_list.renderInto($("#actressList"))

//composer list

composer_list = new ComposerList();
composer_list.add(new Composer("John Willims",100000));
composer_list.add(new Composer("Hans Zimmer",100000));
composer_list.add(new Composer("James Horner",100000));
composer_list.add(new Composer("Thomas Newman",100000));
composer_list.add(new Composer("Danny Elfman",100000));
composer_list.add(new Composer("Michael Giacchino",100000));
composer_list.add(new Composer("James Newton Howard",100000));
composer_list.add(new Composer("Alan Silvestri",100000));
composer_list.add(new Composer("Public domain classical music",0));
composer_list.add(new Composer("Cold Silence",100000));

composer_list.renderInto($("#composerList"))
//special effects list
sfx_list = new SfxList();
sfx_list.add(new Sfx("Industrial Light & Magic",100000));
sfx_list.add(new Sfx("WETA Digital",100000));
sfx_list.add(new Sfx("Digital Domain",100000));
sfx_list.add(new Sfx("Zoic Studios",100000));
sfx_list.add(new Sfx("Double Negative",100000));
sfx_list.add(new Sfx("Framestore",100000));
sfx_list.add(new Sfx("Sony Image Works",100000));
sfx_list.add(new Sfx("Svengali FX",100000));
sfx_list.add(new Sfx("Stargate Digital",100000));
sfx_list.add(new Sfx("No SPecial Effects",100000));

sfx_list.renderInto($("#sfxList"))


$("#game").click(function(){
	var question2 = prompt("What is the name of your movie?");
	$("#movieName").append("Movie Title: " + question2);
	$("#game").hide();

});
