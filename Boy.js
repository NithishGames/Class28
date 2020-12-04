class Boy {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution:1.0,
			friction:1,
			density:1.2
        }
        
        this.image = loadImage ("boy.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      imageMode(CENTER);
      image(this.image,pos.x ,pos.y, this.width, this.height);
      
    }
}
