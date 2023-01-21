let creatingPhysicsObject=false
let new_object_mass=5;
let new_object_radius=20;

function mousePressedState(x,y){
    if(creatingPhysicsObject){
        createPhysicsObject(x, y, new_object_radius, new_object_mass)
    }
}

function createPhysicsObject(x,y,radius,mass){
    physicsObjectList.push(new PhysicsObj(x, y, radius, mass))
}