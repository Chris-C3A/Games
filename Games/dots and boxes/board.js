class Board {
    
    constructor() {
        this.rows = 4; // variable (changes)
        this.cols = 4;
        this.size = 15;
        this.board = [];

        for (let i = 0; i < this.rows; i++) {
            let array = [];
            for (let j = 0; j < this.cols; j++) {
                array.push('.')
            }
            this.board.push(array)
        }
    }

    show() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                fill(255);
                ellipseMode(CENTER);
                ellipse(75*i+width/this.size, 75*j+height/this.size, this.size);
            }
        }
    }


}