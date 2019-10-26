let r = 34/2;
let x = 500;
let y = 360;
let xdir = 5;
let ydir = 0;
let dir1 = -5;

let food = [];

let health = 100;

let scaryPhoto;
let song;

let music;

function preload() {
  music = loadSound('music.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight-4);
    rectMode(CENTER);
    // food object
    food[0] = new Food();
    scaryPhoto = loadImage('scary.jpeg');
    song = loadSound("nmh_scream1.mp3");
    music.loop();
}

function draw() {
    background(0);
    fill(255);

    // player circle
    ellipse(x, y, r*2); 

    // motion
    x += xdir;
    y += ydir;

    // conditions
    if (x > width){
        x = dir1;
    } else if (x < 0) {
        x = width;
    } else if (y > height) {
        y = ydir;
    } else if (y < 0) {
        y = height;
    }

    // show food
    food[0].show();

    // eat food
    let radiusSum = r + food[0].r;
    let d = dist(x, y, food[0].x, food[0].y);

    // console.log("sum :" + radiusSum);
    // console.log("distance:" + d);

    // condition
    if (d <= radiusSum) {
        food[0] = new Food();
        r += 25;
        health += 5;
    }

    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Mass: " + r, width-120, height-50);
    text("Health: " + health, 100, height-50);

    // decrease health overtime
    let rand = random(0, 1);

    if (rand < 0.05 && r < 150) {
        health --;
    }

    if (health <= 0) {
        textSize(32);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Game Over, Ntek", width/2, height/2);

        xdir = 0;
        ydir = 0;
        music.pause();
        image(scaryPhoto, 0, 0,scaryPhoto.width * 3, scaryPhoto.height * 2.5);
        song.play();
    } else if (r >= 200){
        textSize(32);
        fill(255);
        textAlign(CENTER, CENTER);
        text("YOU WIN BABE", width/2, height/2);
        

        xdir = 0;
        ydir = 0;
    }




}
     
function keyPressed(){
    if (keyCode == UP_ARROW) {
        ydir = -5;
        xdir = 0;
    } if (keyCode == DOWN_ARROW) {
        ydir = 5;
        xdir = 0;
    } if (keyCode == LEFT_ARROW) {
        xdir = -5;
        ydir = 0;
    } if (keyCode == RIGHT_ARROW) {
        xdir = 5;
        ydir = 0;
    } if (keyCode == 32) {
        xdir = 0;
        ydir = 0;
    }
}