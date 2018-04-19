class Player extends Rectangle{
    constructor(x, y, width, height, color){
        super(x,y,width,height, color);
        this.playerObject;
        this.speed;
    }

    Create(){
        this.playerObject = new Rectangle(this.x, this.y, this.width, this.height, this.color);
    }

    Draw(context){
       this.playerObject.Draw(context);
    }
}