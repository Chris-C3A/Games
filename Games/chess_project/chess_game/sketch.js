let board_size = 825;

let board;

let index;

let mX;
let mY;

let turn = 'w';

let turn_abs;

function setup() {
	createCanvas(board_size, board_size);
	// background(255);

	index = 1;

	board = new Board(8, 8);
	
}

function draw() {
	background(255);
	noneSelected = true;
	mX = mouseX - 20;
	mY = mouseY - 20;
	translate(20, 20);

	board.draw();
	board.update_moves();
	board.draw_moves();

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

function mousePressed() {
	translate(20, 20);

	for (let i = 0; i < board.rows; i ++) {
		for (let j = 0; j < board.cols; j ++) {
			if (board.board[i][j] != 0) {
				if (board.board[i][j].color == turn) {
					if (mX > board.board[i][j].x
						&& mX < board.board[i][j].x + board.w
						&& mY > board.board[i][j].y 
						&& mY < board.board[i][j].y + board.w && board.board[i][j].select == false) {

						board.board[i][j].select = true;
						board.board[i][j].showmoves = true;
							// console.table(board.board);
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

}







