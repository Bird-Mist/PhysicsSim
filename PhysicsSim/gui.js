let gui;
let slider_simulation_speed;

simulation_speed_min=0.1
simulation_speed_max=1

function setup_gui(){
    gui= createGui();

    slider_simulation_speed= createSlider("Simulation speed", 500, 50, 300, 32, simulation_speed_min, simulation_speed_max)
}

function update_gui(){
    if(slider_simulation_speed.isChanged){
        SimulationSpeed=slider_simulation_speed.val
    }
}

function draw_gui(){
    update_gui()
    drawGui();
    push();
    textSize(20)
    text('Simulation speed', 550, 30)
    text(SimulationSpeed, 725, 30)
    pop();
}