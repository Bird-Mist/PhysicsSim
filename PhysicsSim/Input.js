function keyPressed(){
    inputs[key] = true;
}

function keyReleased(){
    inputs[key] = false;
}

function mousePressed(){
    var vector = camera.screenSpaceToWorldSpace(createVector(mouseX, mouseY))
    console.log("WorldPos", ": ", vector.x , ", ", vector.y)
}

function mouseWheel(event){
    camera.mouseEvent(event)
}

var inputs = {}
inputs['a'] = false;
inputs['s'] = false;
inputs['d'] = false;
inputs['w'] = false;