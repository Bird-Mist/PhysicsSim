let gui;
let slider_simulation_speed;
let toggle_create_physics_object_Button;
let jostick_velocity;

let simulation_speed_min=0.1;
let simulation_speed_max=1;

function setup_gui(){
    gui= createGui();

    slider_simulation_speed= createSlider("Simulation speed", 500, 50, 300, 32, simulation_speed_min, simulation_speed_max)
    toggle_create_physics_object_Button= createCheckbox("Create new object", 550, 120, 40, 40);
    joystick_velocity= createJoystick("Joystick velocity", 650, 450, 150, 150, -1, 1, 1, -1);

}

function update_gui(){
    if(slider_simulation_speed.isChanged){
        SimulationSpeed=slider_simulation_speed.val
    }

    if(toggle_create_physics_object_Button.val){
        creatingPhysicsObject=true
    }
    else{
        creatingPhysicsObject=false
    }

    if(joystick_velocity.isChanged){
        physicsObjectList[selected_physics_object].velocity.add(joystick_velocity.valX, joystick_velocity.valY)
    }
}

function draw_gui(){
    update_gui()
    drawGui();
    push();

    //show simulation speed
    textSize(20)
    text('Simulation speed', 550, 30)
    text(SimulationSpeed, 725, 30)

    //show creation object toggle
    text('create object', 525, 110)

    //number of objects in simulation
    text('number of object:'+physicsObjectList.length, 400, 50)
    pop();
}

function mousePressedGui(realX, realY, worldX, worldY){
    if(!toggle_create_physics_object_Button._checkHit(realX, realY)){
        mousePressedState(worldX, worldY)
    }
}