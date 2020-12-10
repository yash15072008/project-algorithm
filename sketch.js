var box1, box2;

function setup () {

  createCanvas(600,600);

 box1 = createSprite(200,200,100,100);
 box2 = createSprite(100,300,50,50);

 box1.debug=true;
 box2.debug=true;

 box1.shapeColor="blue";
 box2.shapeColor="yellow";
}
function draw () {

  background(0);

  box2.x=mouseX;
  box2.y=mouseY;

  drawSprites();
}