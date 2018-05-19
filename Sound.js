function checkAudioContext() {
    if (!soundStarted) {
        getAudioContext().resume().then(() => {
            sound.initialise();
            soundStarted = true;
        });
    }
}
function Sound() {
    this.osc1;
    this.osc2;
    this.lfo1;
    this.lfo2;
    this.filter1;
    this.filter2;
    this.initialised = false;

    this.initialise = function () {

        if (!this.initialised) {
            this.filter1 = new p5.Filter();

            this.osc1 = new p5.Oscillator();
            this.osc1.setType('triangle');
            this.osc1.disconnect();

            this.lfo1 = new p5.Oscillator();
            this.lfo1.disconnect();
            this.lfo1.setType('sine');

            this.osc1.connect(this.filter1);

            this.lfo1.start();
            this.osc1.start();

            this.lfo1.freq(0.5);
            this.osc1.freq(150);

            this.filter1.freq(1200);

            this.filter1.res(12);

            this.lfo1.amp(500);

            this.filter1.freq(this.lfo1);

            this.initialised = true;
        }
    }

    this.updateFreq = function (count) {
        let f = map(count, 0, grid.cols + grid.rows, 0, 5);
        let f2 = map(count, 0, grid.cols + grid.rows, 145, 155);
        this.lfo1.freq(f);
        //this.osc1.freq(f2);
    }
}