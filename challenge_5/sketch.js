
var mouseUpX = 0;
var mouseUpY = 0;

var ellipseSize = 50;

function setup() {
	createCanvas(640, 480);
	fill(50, 94, 255);
	stroke(250, 250, 250);
	strokeWeight(10);
}

function draw() {
	background(47, 12, 11);

	if (!mouseIsPressed) {
		// if the mouse button is up, we need to
		// store the location
		mouseUpX = mouseX;
		mouseUpY = mouseY;
	} else {
		// if it is down, we need to draw an ellipse
		// at the stored location
		line(mouseUpX, mouseUpY, mouseX, mouseY);
		ellipse(mouseUpX, mouseUpY, ellipseSize, ellipseSize);
	}

	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}
