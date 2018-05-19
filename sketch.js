var resol = 25;
var bg = 6;
var grid;
var rule;
var sound;
var sound2;
var sound3;

var initialised = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bg);
    if (initialised) {

        grid.draw();
        grid = rule.getNext(grid);
    } else {
        background(bg);
        textSize(32);
        fill("#af2833");
        textAlign(CENTER);
        text('Click to begin (sound)', width / 2, height / 2);
        
    }
}

function initialse() {
    if (!initialised) {

        rule = new Rule();

        sound = new Sound();
        sound.initialise(138.59, 0, 0.5);

        sound2 = new Sound();
        sound2.initialise(185.00, 0, 1);

        sound3 = new Sound();
        sound3.initialise(233.08, 0, 2);

        grid = new Grid(resol);
        grid.create();
        grid.fill();

        frameRate(30);
        noStroke();
    }
}





