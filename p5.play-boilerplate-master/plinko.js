class Plinkos{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = new Bodies.circle(x, y, 10, options)
        this.x = x
        this.y = y
    }

    display(){
        var pos = this.body.position;
        fill("white");
        circle(pos.x, pos.y, 10);
    }
}