

Studio = function(name, riskiness, generosity){
	this.name = name;
	this.riskiness = riskiness; //how likely the studio is to fund a movie from a low-prestige prodco
	this.generosity = generosity; //how much cash the studio is likely to fork over
}
studioList.push( new Studio("21st Century Faux", 0.5, 0.5));
studioList.push( new Studio("Fony Pictures", 0.5, 0.5));
studioList.push( new Studio("Willard Diznick Studios", 0.5, 0.5));
studioList.push( new Studio("Periapsis Pictures", 0.5, 0.5));
studioList.push( new Studio("Specific Studios", 0.5, 0.5));
