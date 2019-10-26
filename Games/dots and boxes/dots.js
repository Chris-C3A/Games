class Dots {
    constructor(i, j) {
        this.size = 15;
        this.x = 75*i+width/this.size;
        this.y = 75*j+height/this.size;

    }


    show() {
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.size);
    }
}