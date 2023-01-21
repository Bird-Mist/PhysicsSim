var physicsObjectList=[]
var physicsObj
var camera

function setup() {
  // put setup code here
  createCanvas(800, 600);
  frameRate(60);

  camera = Camera(0, 0, width, height);

  physicsObjectList.push(new PhysicsObj(100,100, 20, 5))
  physicsObjectList.push(new PhysicsObj(200,200, 20, 5))
  physicsObjectList.push(new PhysicsObj(300,200, 20, 5))
  physicsObjectList.push(new PhysicsObj(400,200, 20, 5))
  
}

function draw() {
  // put drawing code here
  background(255)
  camera.draw_and_update(physicsObjectList);
  
  // for(var i = 0; i < physicsObjectList.length; i++){
  //   if(i==0){
  //     physicsObjectList[i].printProperties()
  //   }
  //   physicsObjectList[i].update(physicsObjectList, deltaTime)
  //   physicsObjectList[i].draw()
  // }
}

