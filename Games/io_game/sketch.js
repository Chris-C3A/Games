var player;

var players = []; 
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  player = new Player(0, 0, 20);
}

function draw() {
  background(0);

  translate(width/2, height/2);
  var newzoom = 20 / player.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-player.pos.x, -player.pos.y);

  ellipse(200, 200, 20, 20);



  player.show();
  player.update();

}