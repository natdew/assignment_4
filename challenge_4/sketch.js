// Draw dozans of jittery circles of various sizes

//
var xPositions = [];
var yPositions = [];
var circleSize = [];

function setup() {
	createCanvas(640, 480);
	noStroke();

	// Set up random X and Y positions

	for (var i = 0; i < 50; i++) {
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);

	}
}

function draw() {

	background(150, 0, 0);

	// Make circles shake
	for (var i = 0; i < 100; i++) {
		xPositions[i] = xPositions[i] + random(-2, 2);
		yPositions[i] = yPositions[i] + random(-2, 2);

		var circleSize = i + 4;


		fill(100, 250, 250);
		ellipse(xPositions[i], yPositions[i], circleSize, circleSize);
	}
}
