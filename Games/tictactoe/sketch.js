let board;
let turn;

let Xscore;
let Oscore;

let interrupted = false;

let winner;
let computer;

function setup() {
    createCanvas(600, 600);
    board = new Board();
    computer = new AI();

    turn = 'X';
    Xscore = 0;
    Oscore = 0;
}

function draw() {
    background(21);
    board.show();
    board.checkWin('X');
    board.checkWin('O');
    if (interrupted) {
        textAlign(CENTER, CENTER);
        textSize(64);
        text("Player " + winner + " Wins!", width/2, height/2);
    }
    if (turn == "O") {
        computer.selectMove();
    }
}

function mousePressed() {
    // if (board.onTurn()) {
    //     console.log("ahahhay clicking babay");
    // }
    // board.onTurn()
    if (interrupted) {
        interrupted = false;
    } else {
        board.onTurn()
    }
}

function Win(player) {
    console.log('WINNNERRRR Player: ' + player);
    if (player == 'X') {
        Xscore ++;
    } else {
        Oscore ++;
    }

    interrupted = true;
    winner = player;

    board.reset();
}

