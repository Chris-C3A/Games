function Food() {
    this.x = floor(random(0, width));
    this.y = floor(random(0, height));
    this.r = 10;

    this.show = function() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r*2);
    }
    
}