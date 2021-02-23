var balloon
var backgroundImage
function preload(){

}
function setup() {
  database = firebase.database();
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  var balloonPosition = database.ref('balloon/height')
balloonPosition.on("value",readPosition,showError)
}

function draw() {
  background("black");  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }

  if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    balloon.addAnimation("HotAirBalloon",balloonImage2)
    balloon.scale = balloon.scale -0.01;
  }
  drawSprites();
}

function updateHeight(){
  database.ref('balloon/height').set({
    'x':height.x+x,
    'y':height.y+y
  })
}

function readHeight(data){
height = data.val()
balloon.x = height.x;
balloon.y = height.y;


}

function showError(){
  console.log("erroe in writing to the database")
}
