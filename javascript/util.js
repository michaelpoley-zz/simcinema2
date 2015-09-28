//random number generators and other utilities
randInt(min,max){//generates a random ingeger between min and max
	return Math.random() * (max - min) + min;
}