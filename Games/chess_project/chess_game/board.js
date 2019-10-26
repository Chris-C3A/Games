class Board {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;

	this.board = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],

	]

	for (let i = 0; i < this.rows; i ++) {
		for (let j = 0; j < this.cols; j ++) {
			this.board[i][j] = 0;
		}
	}

	// white

	this.board[0][0] = new Rook(0, 0, 'w');
	this.board[0][1] = new Knight(0, 1, 'w');
	this.board[0][2] = new Bishop(0, 2, 'w');
	this.board[0][3] = new Queen(0, 3, 'w');
	this.board[0][4] = new King(0, 4, 'w');
	this.board[0][5] = new Bishop(0, 5, 'w');
	this.board[0][6] = new Knight(0, 6, 'w');
	this.board[0][7] = new Rook(0, 7, 'w');

	this.board[1][0] = new Pawn(1, 0, 'w');
	this.board[1][1] = new Pawn(1, 1, 'w');
	this.board[1][2] = new Pawn(1, 2, 'w');
	this.board[1][3] = new Pawn(1, 3, 'w');
	this.board[1][4] = new Pawn(1, 4, 'w');
	this.board[1][5] = new Pawn(1, 5, 'w');
	this.board[1][6] = new Pawn(1, 6, 'w');
	this.board[1][7] = new Pawn(1, 7, 'w');


	// black

	this.board[7][0] = new Rook(7, 0, 'b');
	this.board[7][1] = new Knight(7, 1, 'b');
	this.board[7][2] = new Bishop(7, 2, 'b');
	this.board[7][3] = new Queen(7, 3, 'b');
	this.board[7][4] = new King(7, 4, 'b');
	this.board[7][5] = new Bishop(7, 5, 'b');
	this.board[7][6] = new Knight(7, 6, 'b');
	this.board[7][7] = new Rook(7, 7, 'b');

	this.board[6][0] = new Pawn(6, 0, 'b');
	this.board[6][1] = new Pawn(6, 1, 'b');
	this.board[6][2] = new Pawn(6, 2, 'b');
	this.board[6][3] = new Pawn(6, 3, 'b');
	this.board[6][4] = new Pawn(6, 4, 'b');
	this.board[6][5] = new Pawn(6, 5, 'b');
	this.board[6][6] = new Pawn(6, 6, 'b');
	this.board[6][7] = new Pawn(6, 7, 'b');




	console.table(this.board);

	this.w = 63;
	}

	update_moves() {
        for (let i = 0; i < this.rows; i ++) {
        	for (let j = 0; j < this.cols; j ++) {
        		if (this.board[i][j] != 0) {
        			this.board[i][j].update_valid_moves();
        			// console.log()
        		}
        	}
        }
	}

	draw_moves() {
		for (let i = 0; i < this.rows; i ++) {
			for (let j = 0; j < this.cols; j ++) {
				if (this.board[i][j] != 0) {
					if (board.board[i][j].isSelected()) {
						board.board[i][j].show_moves();
					}
				}
			}
		}
	}


	draw() {
		noFill();
		rect(0, 0, 505, 505);

		for (let j = 0; j < 8; j++) {

			for (let i = 0; i < 8; i ++) {
				if (j % 2 == 0) {

					if (i % 2 == 0) {
						fill(238, 238, 213);
					} else {
						fill(125, 149, 93);
					}

				} else {

					if (i % 2 != 0) {
						fill(238, 238, 213);
					} else {
						fill(125, 149, 93);
					}
				}
				if (this.board[j][i] != 0) {
					if (board.board[j][i].isSelected()) {
						fill(40, 158, 200, 200);
						// board.board[j][i].show_moves();
					}
				}

				rect(i*this.w, j*this.w, this.w, this.w);
			}
		}
		for (let i = 0; i < this.rows; i ++) {
			for (let j = 0; j < this.cols; j ++) {
				if (this.board[i][j] != 0) {
					this.board[i][j].sp();
				}
			}
		}
	}

}









