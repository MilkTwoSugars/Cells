var resol = 20;
var grid;
var rule;
var sound;

var soundStarted = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    rule = new Rule();
    sound = new Sound();
    sound.initialise();

    grid = new Grid(resol);
    grid.create();
    grid.fill();

    frameRate(60);
    noStroke();
}

function draw() {
    background(0);

    if(mouseIsPressed){
        clickPoint();
    }

    grid.draw();
    grid = rule.getNext(grid);
}





