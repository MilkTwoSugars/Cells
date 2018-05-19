function Grid (resolution) {

    this.res = resolution;
    this.cols = floor(width / this.res);
    this.rows = floor(height / this.res);
    this.matrix;
    this.numbers = [0, 1];
    this.count = 0;

    this.create = function() {
        this.matrix = new Array(this.cols);
        for (let i = 0; i < this.matrix.length; i++) {
            this.matrix[i] = new Array(this.rows);
        }
    }

    this.fill = function() {
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix[i].length; j++){
                this.matrix[i][j] = random(this.numbers);
            }
        }
    }

    this.draw = function() {
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix[i].length; j++){
                let d = rule.countNeighbours(this, i, j);
                if (this.matrix[i][j] == 1){
                    fill(d * 50, 100, 100);
                } else {
                    fill(d * 10);
                }
                ellipse(i * this.res, j * this.res, this.res, this.res);
            }
        }
    }

}