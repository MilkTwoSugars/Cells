var resol = 40;
var grid;
var rule;
var osc;
var osc2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    osc = new p5.Oscillator();
    osc.setType('square');
    osc.freq(240);
    osc.amp(0.1);
    osc.start();

    osc2 = new p5.Oscillator();
    osc2.setType('square');
    osc2.freq(240);
    osc2.amp(0.1);
    osc2.start();

    rule = new Rule();

    grid = new Grid(resol);
    grid.create();
    grid.fill();

    frameRate(60);
}

function draw() {
    background(0);
    grid.draw();
    grid = rule.getNext(grid);

}

function checkAudioContext() {
    getAudioContext().resume().then(() => {
        console.log("Started");
    });
}

function touchStarted() {
    checkAudioContext();
    grid.fill();
}




