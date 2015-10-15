// mouse variables & ellipse size variable
var mouseUpX = 0;
var mouseUpY = 0;

var ellipseSize = 50;

// set up the canvas
function setup() {
	createCanvas(640, 480);
	fill(50, 94, 255);
	stroke(250, 250, 250);
	strokeWeight(10);
}

// draw the background
function draw() {
	background(47, 12, 11);

	if (!mouseIsPressed) {
	// when the mouse is not pressed, have the ellipse follow it
		mouseUpX = mouseX;
		mouseUpY = mouseY;
	} else {
	// if the mouse is pressed, stop the ellipse at that spot
	//if dragged, add a new line and ellipse going to the new point
		line(mouseUpX, mouseUpY, mouseX, mouseY);
		ellipse(mouseUpX, mouseUpY, ellipseSize, ellipseSize);
	}

	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}
