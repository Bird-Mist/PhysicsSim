var GravitationalConstant = 15;
var SimulationSpeed = 0.1;

class PhysicsObj{
    constructor(x, y, radius, mass){
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
    
    draw(translated_pos){
        circle(translated_pos.x, translated_pos.y, this.radius)
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
        var test = p5.Vector.mult(p5.Vector.normalize(distance), 20)
        line(this.pos.x, this.pos.y, this.pos.x + test.x, this.pos.y + test.y)
        this.printVector(distance, "Acceleration")
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
}