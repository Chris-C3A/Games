let board;
let dots = [];

function setup() {
    createCanvas(600, 600);
    board = new Board();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            dots.push(new Dots(i, j));
        }
    }
}

function draw() {
    translate(width/4, height/4);
    background(51); 
    for (let dot of dots) {
        dot.show();
    }
    
    

}

function mousePressed() {
    for (let dot of dots) {
        if (mouseX < dot.x+dot.size && mouseX > dot.x-dot.size && 
            mouseY < dot.y+dot.size && mouseY > dot.y-dot.size) {
        console.log("clicked");
        }
    }
}