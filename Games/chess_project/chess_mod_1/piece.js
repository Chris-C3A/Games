class Piece {
	constructor(row, col, color, imgb, imgw) {
		this.row = row;
		this.col = col;
		this.color = color;
		this.imgb = imgb;
		this.imgw = imgw;
		this.select = false;
		this.move_list = new Array();

		this.showmoves = false;

		this.first = true;

		this.w = 63;

		this.x = (this.col * this.w) + 2;
		this.y = (this.row * this.w) + 2;
	}

	sp() {
		// console.log(this.x);
		if (this.color == 'b') {
			image(this.imgb, this.x, this.y);
		} else if (this.color == 'w') {
			image(this.imgw, this.x, this.y);
		}
		
	}

	isSelected() {
		return this.select;
	}

	update_valid_moves() {
		this.move_list = this.valid_moves();
	}
	
	show_moves() {
		if (this.showmoves) {
			for (let i = 0; i < this.move_list.length; i++) {
				let r = this.move_list[i][0];
				let c = this.move_list[i][1];

				let x = (r * this.w) + this.w/2;
				let y = (c * this.w) + this.w/2;

				fill(255, 0, 0);
				ellipseMode(CENTER);
				ellipse(x, y, 15);
			}
		}
	}

	move() {
		if (this.showmoves) {
			for (let k = 0; k < this.move_list.length; k++) {
				let r = this.move_list[k][0];
				let c = this.move_list[k][1];

				
				let mR = floor(mX / this.w);
				let mC = floor(mY / this.w);

				console.log(mR, mC);

				if (mR == r && mC == c) {

					let xR = (mC - this.row);
					let xC = (mR - this.col);

					// console.log(xC, xR);

					let prevR = this.row;
					let prevC = this.col;

					this.row += xR;
					this.col += xC;

					// console.log(this.row, this.col);

					board.board[this.row][this.col] = board.board[prevR][prevC];
					board.board[prevR][prevC] = 0;

					update(board.board[this.row][this.col], xR*this.w, xC*this.w);
					// board.board[this.row + xR][this.col + xC].row += abs(xR);
					// board.board[this.row + xR][this.col + xC].col += abs(xC);
					this.select = false;
					this.showmoves = false;
					this.first = false;
					
					// board.board[this.row][this.col] = 0;
					// console.log(board.board[this.row][this.col]);
					console.table(board.board);
				}
			}
		}
	}


}

class Pawn extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/bp.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wp.png');
		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();

		if (this.color == 'b') {

			if (i < 7) {

				p = board.board[i+1][j];

				if (p == 0) {
					moves.push([j, i + 1]);
				}

				if (j < 7) {
					p = board.board[i+1][j+1];

					if (p != 0) {

                        if (p.color != this.color) {
                            moves.push([j + 1, i + 1]);
                        }
					}
				}

				if (j > 0) {
					p = board.board[i+1][j-1];

					if (p != 0) {

                        if (p.color != this.color) {
                            moves.push([j - 1, i + 1]);
                        }
					}
				}
			}

			if (this.first) {
				if (i < 6) {
                    p = board.board[i + 2][j]

                    if (p == 0) {
                        if (board.board[i + 1][j] == 0) {
                            moves.push([j, i + 2])
                        }
                    }
                }
			}

		} else {

			if (i > 0) {

				p = board.board[i-1][j];

				if (p == 0) {
					moves.push([j, i - 1]);
				}

				if (j < 7) {
					p = board.board[i-1][j+1];

					if (p != 0) {

                        if (p.color != this.color) {
                            moves.push([j + 1, i - 1]);
                        }
					}
				}

				if (j > 0) {
					p = board.board[i-1][j-1];

					if (p != 0) {

                        if (p.color != this.color) {
                            moves.push([j - 1, i - 1]);
                        }
					}
				}
			}

			if (this.first) {
				if (i > 1) {
                    p = board.board[i - 2][j]

                    if (p == 0) {
                        if (board.board[i - 1][j] == 0) {
                            moves.push([j, i - 2])
                        }
                    }
                }
			}
		}

		// console.log(moves);
		return moves;

	}

	

}

class Rook extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/br.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wr.png');;

		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();

		// UP
		for (let x = i - 1; x >= 0; x --) {
			p = board.board[x][j];

			if (p == 0) {
				moves.push([j, x]);
			} else if (p.color != this.color) {
				moves.push([j, x]);
				break;
			} else {
				break;
			}
		}

		// DOWN
		for (let x = i + 1; x < 8; x ++) {
			p = board.board[x][j];

			if (p == 0) {
				moves.push([j, x]);
			} else if (p.color != this.color) {
				moves.push([j, x]);
				break;
			} else {
				break;
			}
		}

		// LEFT
		for (let x = j - 1; x >= 0; x --) {
			p = board.board[i][x];

			if (p == 0) {
				moves.push([x, i]);
			} else if (p.color != this.color) {
				moves.push([x, i]);
				break;
			} else {
				break;
			}
		}

		// RIGHT
		for (let x = j + 1; x < 8; x ++) {
			p = board.board[i][x];

			if (p == 0) {
				moves.push([x, i]);
			} else if (p.color != this.color) {
				moves.push([x, i]);
				break;
			} else {
				break;
			}
		}

		return moves;
	}

}

class Knight extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/bn.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wn.png');;

		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();

		//DOWN LEFT
		 if (i < 6 && j > 0){
            p = board.board[i + 2][j - 1]
            if (p == 0){
                moves.push([j - 1, i + 2])
            } else if (p.color != this.color){
                moves.push([j - 1, i + 2])
            }
        }

        //UP LEFT
        if (i > 1 && j > 0){
            p = board.board[i - 2][j - 1]
            if (p == 0){
                moves.push([j - 1, i - 2])
            } else if (p.color != this.color){
                moves.push([j - 1, i - 2])
            }
        }

        // DOWN RIGHT
        if (i < 6 && j < 7){
            p = board.board[i + 2][j + 1]
            if (p == 0){
                moves.push([j + 1, i + 2])
            } else if (p.color != this.color){
                moves.push([j + 1, i + 2])
            }
        }

        // UP RIGHT
        if (i > 1 && j < 7){
            p = board.board[i - 2][j + 1]
            if (p == 0){
                moves.push([j + 1, i - 2])
            } else if (p.color != this.color){
                moves.push([j + 1, i - 2])
            }
        }

        // TOP LEFT
        if (i > 0 && j > 1){
            p = board.board[i - 1][j - 2]
            if (p == 0){
                moves.push([j - 2, i - 1])
            } else if (p.color != this.color){
                moves.push([j - 2, i - 1])
            }
        }

        // TOP RIGHT
        if (i > 0 && j < 6){
            p = board.board[i - 1][j + 2]
            if (p == 0){
                moves.push([j + 2, i - 1])
            } else if (p.color != this.color){
                moves.push([j + 2, i - 1])
            }
        }

        // BOTTOM LEFT
        if (i < 7 && j > 1){
            p = board.board[i + 1][j - 2]
            if (p == 0){
                moves.push([j - 2, i + 1])
            } else if (p.color != this.color){
                moves.push([j - 2, i + 1])
            }
        }

        // BOTTOM RIGHT
        if (i < 7 && j < 6){
            p = board.board[i + 1][j + 2]
            if (p == 0){
                moves.push([j + 2, i + 1])
            } else if (p.color != this.color){
                moves.push([j + 2, i + 1])
            }
        }

        return moves;

	}

}

class Bishop extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/bb.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wb.png');;

		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();

		// TOP RIGHT
        let djL = j + 1;
        let djR = j - 1;

        for(let di = i - 1; di > 0; di --) {
        	if (djL < 8) {
        		p = board.board[di][djL];
                if (p == 0){
                    moves.push([djL, di]);
                } else if (p.color != this.color) {
                    moves.push([djL, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	// console.log(djL);

        	djL += 1;
        }

        for(let di = i - 1; di >= 0; di --) {
        	if (djR >= 0) {
        		p = board.board[di][djR];
                if (p == 0){
                    moves.push([djR, di]);
                } else if (p.color != this.color) {
                    moves.push([djR, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djR -= 1;
        }

        // TOP LEFT
        djL = j + 1;
        djR = j - 1;

        for(let di = i + 1; di < 7; di ++) {
        	if (djL < 8) {
        		p = board.board[di][djL];
                if (p == 0){
                    moves.push([djL, di]);
                } else if (p.color != this.color) {
                    moves.push([djL, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djL += 1;
        }

        for(let di = i + 1; di <= 7; di ++) {
        	if (djR >= 0) {
        		p = board.board[di][djR];
                if (p == 0){
                    moves.push([djR, di]);
                } else if (p.color != this.color) {
                    moves.push([djR, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djR -= 1;
        }

        return moves;

	}


}

class Queen extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/bq.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wq.png');;

		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();


		// TOP RIGHT
        let djL = j + 1;
        let djR = j - 1;

        for(let di = i - 1; di > 0; di --) {
        	if (djL < 8) {
        		p = board.board[di][djL];
                if (p == 0){
                    moves.push([djL, di]);
                } else if (p.color != this.color) {
                    moves.push([djL, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	console.log(djL);

        	djL += 1;
        }

        for(let di = i - 1; di >= 0; di --) {
        	if (djR >= 0) {
        		p = board.board[di][djR];
                if (p == 0){
                    moves.push([djR, di]);
                } else if (p.color != this.color) {
                    moves.push([djR, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djR -= 1;
        }

        // TOP LEFT
        djL = j + 1;
        djR = j - 1;

        for(let di = i + 1; di < 7; di ++) {
        	if (djL < 8) {
        		p = board.board[di][djL];
                if (p == 0){
                    moves.push([djL, di]);
                } else if (p.color != this.color) {
                    moves.push([djL, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djL += 1;
        }

        for(let di = i + 1; di <= 7; di ++) {
        	if (djR >= 0) {
        		p = board.board[di][djR];
                if (p == 0){
                    moves.push([djR, di]);
                } else if (p.color != this.color) {
                    moves.push([djR, di]);
                    break;
                } else {
                    break;
                }
        	} else {
        		break;
        	}
        	djR -= 1;
        }

        // UP
		for (let x = i - 1; x >= 0; x --) {
			p = board.board[x][j];

			if (p == 0) {
				moves.push([j, x]);
			} else if (p.color != this.color) {
				moves.push([j, x]);
				break;
			} else {
				break;
			}
		}

		// DOWN
		for (let x = i + 1; x < 8; x ++) {
			p = board.board[x][j];

			if (p == 0) {
				moves.push([j, x]);
			} else if (p.color != this.color) {
				moves.push([j, x]);
				break;
			} else {
				break;
			}
		}

		// LEFT
		for (let x = j - 1; x >= 0; x --) {
			p = board.board[i][x];

			if (p == 0) {
				moves.push([x, i]);
			} else if (p.color != this.color) {
				moves.push([x, i]);
				break;
			} else {
				break;
			}
		}

		// RIGHT
		for (let x = j + 1; x < 8; x ++) {
			p = board.board[i][x];

			if (p == 0) {
				moves.push([x, i]);
			} else if (p.color != this.color) {
				moves.push([x, i]);
				break;
			} else {
				break;
			}
		}

		return moves;

	}
}

class King extends Piece {

	constructor(row, col, color) {
		let imgb = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/bk.png');
		let imgw = loadImage('https://images.chesscomfiles.com/chess-themes/pieces/preview/60/wk.png');;

		super(row, col, color, imgb, imgw);
	}

	valid_moves() {
		let i = this.row;
		let j = this.col;

		let p;

		let moves = new Array();

		if (i > 0) {

			// TOP LEFT
			if (j > 0) {
				p = board.board[i-1][j-1];
				if (p == 0) {
					moves.push([j-1, i-1]);
				} else if(p.color != this.color) {
					moves.push([j-1, i-1]);
				}
			}

			// TOP MIDDLE
			p = board.board[i-1][j];
			if (p == 0) {
				moves.push([j, i-1]);
			} else if(p.color != this.color) {
				moves.push([j, i-1]);
			}

			// TOP RIGHT
			if (j < 7) {
				p = board.board[i-1][j+1];
				if (p == 0) {
					moves.push([j+1, i-1]);
				} else if(p.color != this.color) {
					moves.push([j+1, i-1]);
				}
			}
		}

		if (i < 7) {

			// BOTTOM LEFT
			if (j > 0) {
				p = board.board[i+1][j-1];
				if (p == 0) {
					moves.push([j-1, i+1]);
				} else if(p.color != this.color) {
					moves.push([j-1, i+1]);
				}
			}

			// BOTTOM MIDDLE
			p = board.board[i+1][j];
			if (p == 0) {
				moves.push([j, i+1]);
			} else if(p.color != this.color) {
				moves.push([j, i+1]);
			}

			// BOTTOM RIGHT
			if (j < 7) {
				p = board.board[i+1][j+1];
				if (p == 0) {
					moves.push([j+1, i+1]);
				} else if(p.color != this.color) {
					moves.push([j+1, i+1]);
				}
			}

		}

		// MIDDLE LEFT
		if (j > 0) {
			p = board.board[i][j-1];
			if (p == 0) {
				moves.push([j-1, i]);
			} else if(p.color != this.color) {
				moves.push([j-1, i]);
			}
		}

		// MIDDLE RIGHT
		if (j < 7) {
			p = board.board[i][j+1];
			if (p == 0) {
				moves.push([j+1, i]);
			} else if(p.color != this.color) {
				moves.push([j+1, i]);
			}
		}

		return moves;

	}
}







// Pawns (8 pieces) Pawn. ...
// Rooks (2 pieces) There are two rooks in a set of chess pieces. ...
// Knights (2 pieces) There are two knights in every team in chess. ...
// Bishops (2 pieces) The bishops are also known as the camels. ...
// Queen (1 pieces) The Queen is the second-most tallest piece in the whole set. ...
// King (1 pieces)




























