//random number generators and other utilities
function randInt(min,max){//generates a random ingeger between min and max
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//simple global find-replace
function gReplace(haystack,needle,replacement){
	return haystack.split(needle).join(replacement);
}

//return a number with commas as thousands separators
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}