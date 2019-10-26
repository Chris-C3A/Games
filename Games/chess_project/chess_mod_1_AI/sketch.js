let board_size = 825;

let board;
let AI;

let index;

let mX;
let mY;

let turn = 'w';

let turn_abs;

let startScreen;

function setup() {
	createCanvas(board_size, board_size);
	startScreen = true;

	index = 1;

	board = new Board(8, 8);
	AI = new chess_AI()
	
}

function draw() {
	if (startScreen) {
		background(255);
		translate(20, 20);
		board.draw(true);

		textSize(50);
		textAlign(CENTER, CENTER);
		fill(0);
		text("Chess", 230, 100);
		text("Start Game", 235, 235);
		textSize(30);
		text("Programmed from scratch by:", 220, 350);
		text("@anonc3a", 270, 395);


	} else {
		
		background(255);
		noneSelected = true;
		mX = mouseX - 20;
		mY = mouseY - 20;
		translate(20, 20);

		board.draw();
		board.startpos();
		board.update_moves();
		board.draw_moves();
		board.checkgameover();

		AI.move()

		textSize(30);
		textAlign(CENTER, CENTER);
		fill(0);
		if (turn == 'w') {
			turn_abs = 'white';
		} else {
			turn_abs = 'Black';
		}
		text('Turn: ' + turn_abs, 585, 100);
	}

	

}

function mousePressed() {
	translate(20, 20);

	if(startScreen) {
		startScreen = false;
	}

	for (let i = 0; i < board.rows; i ++) {
		for (let j = 0; j < board.cols; j ++) {
			if (board.board[i][j] != 0) {
				if (board.board[i][j].color == 'w' && turn == 'w') {
					if (mX > board.board[i][j].x
						&& mX < board.board[i][j].x + board.w
						&& mY > board.board[i][j].y 
						&& mY < board.board[i][j].y + board.w && board.board[i][j].select == false) {

						board.board[i][j].select = true;
						board.board[i][j].showmoves = true;
						console.table(board.board);
					} else {


						board.board[i][j].move();

						board.board[i][j].select = false;
						board.board[i][j].showmoves = false;

						// if (turn == 'w') {
						// 	turn = 'b';
						// } else {
						// 	turn = 'w';
						// }
						console.log('can move')
					}
				}
			}
		}
	}

	// getMouseMatrix();
	
}

function getMouseMatrix() {
	let mR = floor(mX / board.w);
	let mC = floor(mY / board.w);

	return mR, mC;
}

function update(p, xvel, yvel) {
	p.y += xvel;
	p.x += yvel;

	if (turn == 'w') {
		turn = 'b';
	} else {
		turn = 'w';
	}

	// board.switch();
	// let temp = board.board[0][0];
	// board.board[0][0] = 0;
	// board.board[0][0] = board.board[7][7];
	// board.board[7][7] = 0;
	// board.board[7][7] = temp;
	// swaper();	

}

function swap(a, b) {
	let temp = a;
	a = b;
	b = temp;
}

function swaper() {

	let xR = 7;
	let xC = 7;

	// console.log(xC, xR);

	let prevR = 0;
	let prevC = 0;

	// 0 += xR;
	// 0 += xC;

	// console.log(this.row, this.col);
	let temp = board.board[xC][xR];
	board.board[xC][xR] = board.board[prevR][prevC];
	// board.board[prevR][prevC] = 0;
	board.board[prevR][prevC] = temp;

	update(board.board[xC][xR], prevR*board.w, prevC*board.w);
	update(board.board[prevR][prevC], xR*board.w, xC*board.w);



	// board.board[this.row + xR][this.col + xC].row += abs(xR);
	// board.board[this.row + xR][this.col + xC].col += abs(xC);
	// this.select = false;
	// this.showmoves = false;
	// this.first = false;
	
	// board.board[this.row][this.col] = 0;
	// console.log(board.board[this.row][this.col]);
	// console.table(board.board);
}




