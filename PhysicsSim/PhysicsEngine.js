var GravitationalConstant = 15;
var SimulationSpeed = 0.1;

class PhysicsObj{
    constructor(x, y, radius, mass){
        this.id= physicsObjectList.length
        this.pos = createVector(x, y)
        this.velocity = createVector(random(2), 0)
        this.acceleration = createVector(0, 0)
        this.radius= radius
        this.mass= mass
    }

    update(physicsObjList, dt){
        this.acceleration = createVector(0,0)
        this.gravity(physicsObjectList, dt)
        this.velocity.add(this.acceleration)
        this.pos.add(p5.Vector.mult(this.velocity, (dt /  50.0) * SimulationSpeed))
    }
    
    draw(translated_pos,scale){
        circle(translated_pos.x, translated_pos.y, this.radius*scale)
        var test = p5.Vector.mult(p5.Vector.normalize(this.acceleration), 20*scale)
        line(translated_pos.x, translated_pos.y, translated_pos.x + test.x, translated_pos.y + test.y)
    }

    gravity(physicsObjsList, dt){
        for(var i = 0; i<physicsObjsList.length;i++){
            this.gravitationalForce(physicsObjsList[i], dt)
        }
    }

    gravitationalForce(physicsObj, dt){
        var distance = this.distance(physicsObj)
        var force = 0
        if(distance.mag() >= 10){
            force = (GravitationalConstant * physicsObj.mass) / sq(distance.mag())
        }
        distance.setMag(force)
        this.acceleration.add(distance);
    }
    distance(physicsObj){
        var distance= p5.Vector.sub(physicsObj.pos, this.pos)
        return distance
    }

    printProperties(){
        console.log("Acceleration: ", this.acceleration.x , ", ", this.acceleration.y)
        console.log("Velocity: ", this.velocity.x , ", ", this.velocity.y)
    }
    
    printVector(vector, name){
        console.log(name, ": ", vector.x , ", ", vector.y)
    }

    mousePressed(x,y){
        let distance=this.pos.copy();
        distance.sub(x,y);
        console.log(distance.mag()*camera.scale)
        if(distance.mag() <= this.radius){
            selected_physics_object= this.id;
            console.log('id:', this.id)
        }
    }
}