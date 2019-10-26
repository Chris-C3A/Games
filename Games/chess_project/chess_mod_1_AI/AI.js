// notes:

// -TODO:
//     - fix bugs with representing the new pieces positions

function chess_AI() {
    this.color = 'b'
    // this.pieces = []

    this.move = function() {
        if (turn == this.color) {
            this.randomMove()
            turn = 'w'
        }
    }

    this.randomMove = function() {
        /*
        - pick a random black piece on the board
        - check possible moves for the piece
        - pick a random move for the piece
        */
    //    sleep(5000)
    let pieces = [];
    for (let i = 0; i < board.rows; i ++) {
        for (let j = 0; j < board.cols; j ++) {
            if (board.board[i][j] != 0) {
                if (board.board[i][j].color == 'b') {
                    pieces.push(board.board[i][j])
                }
            }
        }
    }
    
    let piece = random(pieces)
    while (piece.move_list.length == 0) {
        piece = random(pieces)
    }

    move = random(piece.move_list)

    // console.log(piece)
    console.log(move)

    let xR = move[1] - piece.row
    let xC = move[0] - piece.col

    let prevR = piece.row;
    let prevC = piece.col;

    piece.row += xR
    piece.col += xC

    // this.row += xR;
    // this.col += xC;

    // console.log(this.row, this.col);

    console.log(xR)
    console.log(xC)

    board.board[piece.row][piece.col] = board.board[prevR][prevC];
    board.board[prevR][prevC] = 0;

    update(board.board[piece.row][piece.col], xR*piece.w, xC*piece.w);

    board.board[piece.row][piece.col].select = false;
	board.board[piece.row][piece.col].showmoves = false;
	board.board[piece.row][piece.col].first = false;

    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }