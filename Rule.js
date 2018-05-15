function Rule() {

    this.counter = 0;

    this.getNext = function (g) {

        this.counter = 0;

        let next = new Grid(resol);
        next.create();

        for (let i = 0; i < g.cols; i++) {
            for (let j = 0; j < g.rows; j++) {
                let state = g.matrix[i][j];

                let neighbours = this.countNeighbours(g, i, j);

                if (state == 0 && neighbours == 3) {
                    next.matrix[i][j] = 1;
                } else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
                    next.matrix[i][j] = 0;
                } else {
                    next.matrix[i][j] = state;
                }

                if (next.matrix[i][j] == 1) {
                 this.counter += 1;   
                };

            }
        }
        osc.freq(this.getFreq(222));
        osc2.freq(this.getFreq(99));
        osc.amp(map(this.counter, 0, grid.cols + grid.rows, 0.05, 0.1));
        osc2.amp(map(this.counter, 0, grid.cols + grid.rows, 0.05, 0.1));
        return next;
    }

    this.countNeighbours = function (g,x,y) {
            let sum = 0;
            for (let i = -1; i < 2; i++) {
              for (let j = -1; j < 2; j++) {
                let col = (x + i + g.cols) % g.cols;
                let row = (y + j + g.rows) % g.rows;
                sum += g.matrix[col][row];
              }
            }
            sum -= g.matrix[x][y];
            return sum;
    }

    this.getColour = function () {
        let c = color(100, 100, 100);
        c.setRed(map(this.counter, 0, grid.rows + grid.cols, 0, 20));
        c.setGreen(map(this.counter, 0, grid.rows + grid.cols, 0, 100));
        c.setBlue(map(this.counter, 0, grid.rows + grid.cols, 0, 20));
        return c;
    }

    this.getFreq = function (highest) {
        return floor(map(this.counter, 0, grid.cols + grid.rows, 0, highest));
    }

}