class Camera{
    constructor(x, y, screen_width, screen_height){
        this.pos = createVector(x, y)
        this.scale = 1;
        this.scroll_speed = 0.001;
        this.screen = createVector(screen_width/2, screen_height/2)
    }

    draw_and_update(physicsObjectList, dt){
        this.move();
        for(var i = 0; i < physicsObjectList.length; i++){
            var physicsObj = physicsObjectList[i]
            physicsObj.update(physicsObjectList, dt)
            var translated_coords = this.translate(physicsObj.pos)
            physicsObj.draw(translated_coords, this.scale)
        }
    }

    translate(position){
        var output = p5.Vector.add(p5.Vector.mult(this.pos,this.scale), p5.Vector.add(this.screen, position).mult(this.scale))
        return output;
    }

    screenSpaceToWorldSpace(position){
        var output = p5.Vector.sub(this.screen, position);
        output.add(this.pos)
        output.mult(this.scale)
        return output;
    }

    move(){
        var speed = 5;
        if(inputs['a'] == true){
            this.pos.x += speed
        }
        if(inputs['s'] == true){
            this.pos.y -= speed
        }
        if(inputs['d'] == true){
            this.pos.x -= speed
        }
        if(inputs['w'] == true){
            this.pos.y += speed
        }
    }

    mouseEvent(event){
        this.scale -= event.delta*this.scroll_speed;
    }
}