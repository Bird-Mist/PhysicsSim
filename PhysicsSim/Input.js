function keyPressed(){
    inputs[key] = true;
}

function keyReleased(){
    inputs[key] = false;
}

function mouseWheel(event){
    camera.mouseEvent(event)
}

var inputs = {}
inputs['a'] = false;
inputs['s'] = false;
inputs['d'] = false;
inputs['w'] = false;