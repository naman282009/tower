class Block  {
    constructor(x,y,width,height)  {
        var options={
            restitution:0.4,
            friction:0.0
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        
        if(this.body.speed < 3){ 
           push();
           translate(this.body.position.x, this.body.position.y)
           rotate(this.body.angle)
           rectMode(CENTER)
           rect(0,0,this.width,this.height)
           pop();
        } else
        { World.remove(world, this.body);
            push();
             this.Visiblity = this.Visiblity - 5;
              tint(255,this.Visiblity);
               rect( this.body.position.x, this.body.position.y, this.width,this.height);
                pop();
             }

       
       

    }
}