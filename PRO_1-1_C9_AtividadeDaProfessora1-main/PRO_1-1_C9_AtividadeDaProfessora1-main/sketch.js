var quadrado;

function setup() {
  createCanvas(800, 800);
  quadrado = createSprite(100,100,50,50);
}

function draw() {
  background(220);
  if (keyDown("up_arrow")){
    quadrado.y -=10;
  }
  if (keyDown("down_arrow")){
    quadrado.y +=10;
  }
  if(keyDown("right_arrow")){
    quadrado.x +=10
  }
  if(keyDown("left_arrow")){
    quadrado.x -=10
  }
  

  
  drawSprites();
}