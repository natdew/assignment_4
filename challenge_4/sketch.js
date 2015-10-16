var xPositions = [];
var yPositions = [];
var size = [];

function setup() {
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
		size[i] = random(1, 10)

	}
}

function draw() {
	background(129, 0, 0);

	for (var i = 0; i < 10; i++){
		xPositions[i] = xPositions[i] + random(-2, 2);
		yPositions[i] = yPositions[i] + random(-2, 2);

		ellipse(xPositions[i], yPositions[i], random(1, 50), random(1, 50));
		fill(158, 250, 251)
		noStroke();

	}
}
