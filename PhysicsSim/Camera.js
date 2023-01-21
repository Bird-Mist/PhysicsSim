class Camera{
    constructor(x, y, screen_width, screen_height){
        this.pos = createVector(x, y)
        this.screen = createVector(-screen_width/2, -screen_height/2)
    }

    draw_and_update(physicsObjectList){
        for(var i = 0; i < physicsObjectList.length; i++){
            physicsObj = physicsObjectList[i]
            var translated_coords = translate(physicsObj.pos)
            physicsObj.draw(translated_coord)
        }
    }

    translate(position){
        return p5.Vector.add(this.pos, p5.Vector.add(this.screen, position))
    }
}