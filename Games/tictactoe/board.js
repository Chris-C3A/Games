class Board {
    
    constructor() {
        this.rows = 3;
        this.cols = 3;
        this.size = 200;

        this.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ]
    }

    show() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                noFill();
                stroke(255);
                strokeWeight(4);
                rect(i*this.size, j*this.size, this.size, this.size);
                if (this.board[i][j] == "X") {
                    // draw the X
                    stroke(120, 40, 200);
                    line(i*this.size+this.size/1.5, j*this.size+this.size/1.5, i*this.size+this.size-this.size/1.5, j*this.size+this.size-this.size/1.5);
                    line(i*this.size+this.size/1.5, j*this.size+this.size-this.size/1.5, i*this.size+this.size-this.size/1.5, j*this.size+this.size/1.5);

                } else if (this.board[i][j] == "O") {
                    // draw the O
                    // console.log('enemy')
                    ellipse(i*this.size+this.size/2, j*this.size+this.size/2, this.size/2);
                }
            }
        }
    }

    onTurn() {
        let mX = floor(mouseX/this.size);
        let mY = floor(mouseY/this.size);

        if (this.board[mX][mY] == " " && turn == 'X') {
            this.board[mX][mY] = turn;

            turn = 'O';
        }
        // console.log(this.board[mX][mY])
    }

    checkWin(player) {
        if (this.board[0][0] == player && this.board[0][1] == player && this.board[0][2] == player ||
            this.board[1][0] == player && this.board[1][1] == player && this.board[1][2] == player ||
            this.board[2][0] == player && this.board[2][1] == player && this.board[2][2] == player ||
            this.board[0][0] == player && this.board[1][0] == player && this.board[2][0] == player ||
            this.board[0][1] == player && this.board[1][1] == player && this.board[2][1] == player ||
            this.board[0][2] == player && this.board[1][2] == player && this.board[2][2] == player ||
            this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player ||
            this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
            
            Win(player);
        }
    }

    reset() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.board[i][j] = " ";
            }
        }
    }

}