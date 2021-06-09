class Train {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        super(x,y,70,80)
        this.image=loadImage("images/coach.png")

    }
    display(){
        super.display();
    }
}