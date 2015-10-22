function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	background(100, 190, 250);

  //ground
	fill(40, 180, 50);
	rect(0, 200, 640, 160);

	for (var i = 1; i < 50; i++) {
		var xRandom = random(10) + .5;
		var yRandom = i * 5;
		dandelion(xRandom, yRandom);

	}

  //draw dandelions
	function dandelion(x, y) {
		fill(0, 120, 10);
		rect(x * 60 - 1, y + 100, 4, 100, 20);
		fill(169, 225, 173);
		ellipse(x * 60, y + 100, 10, 10);
		for (var i = 1; i < 8; i++) {
			noStroke();
			fill(255, 255, 255, 80);
			ellipse(x * 60, y + 100, i * -10 + 50, i * -10 + 50);

		}
	}
}
