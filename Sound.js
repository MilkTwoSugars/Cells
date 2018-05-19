function checkAudioContext() {
    if (!initialised) {
        getAudioContext().resume().then(() => {
            initialse();
            initialised = true;
        });
    }
}
function Sound() {
    this.osc;
    this.lfo;
    this.filter;
    this.initialised = false;
    this.lfoLow;
    this.lfoHigh;
    this.oscFreq;

    this.initialise = function (oscFreq, lfoLow, lfoHigh) {

        if (!this.initialised) {

            this.lfoLow = lfoLow;
            this.lfoHigh = lfoHigh;
            this.oscFreq = oscFreq;

            this.filter = new p5.Filter();

            this.osc = new p5.Oscillator();
            this.osc.setType('sawtooth');
            this.osc.disconnect();

            this.lfo = new p5.Oscillator();
            this.lfo.disconnect();
            this.lfo.setType('sine');

            this.osc.connect(this.filter);
            this.osc.amp(0.1);

            this.lfo.start();
            this.osc.start();

            this.lfo.freq(0.5);
            this.osc.freq(oscFreq);

            this.filter.freq(2000);

            this.filter.res(4);

            this.lfo.amp(600);

            this.filter.freq(this.lfo);

            this.initialised = true;
        }
    }

    this.updateFreq = function (count) {
        let f = map(count, 0, grid.cols + grid.rows, this.lfoLow, this.lfoHigh);
        let f2 = map(count, 0, grid.cols + grid.rows, this.oscFreq / 2, this.oscFreq * 2);
        this.lfo.freq(f);
        this.osc.freq(f2);
    }
}