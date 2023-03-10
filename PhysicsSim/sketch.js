var physicsObjectList=[]
var camera

function setup() {
  // put setup code here
  createCanvas(800, 600);
  frameRate(60);
  setup_gui()
  camera = new Camera(0, 0, width, height);

  //physicsObjectList.push(new PhysicsObj(0, 0, 20, 5))
  //physicsObjectList.push(new PhysicsObj(200,100, 20, 5))
  //physicsObjectList.push(new PhysicsObj(-100,20, 20, 5))
  //physicsObjectList.push(new PhysicsObj(100,200, 20, 5))
  
}

function draw() {
  // put drawing code here
  background(255)
  camera.draw_and_update(physicsObjectList, deltaTime);
  draw_gui()
}

function mousePressed(){
  var position = camera.screenSpaceToWorldSpace(createVector(mouseX, mouseY))
  mousePressedGui(mouseX, mouseY, position.x, position.y)

  for(var i = 0; i < physicsObjectList.length; i++){
    var physicsObj = physicsObjectList[i];
    physicsObj.mousePressed(position.x, position.y)
  }

}

