class AI {
    constructor() {
        this.player = "O";
        this.board = board.board;
        // this.moves = [];

    }

    selectMove() {
        let moves = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == ' ') {
                    moves.push([i, j]);
                }
            }
        }

        console.log(moves);

        let move = random(moves);
        // let move = this.moves[index];
        this.board[move[0]][move[1]] = "O";
        // console.log(move);
        turn = 'X'
        
    }
}