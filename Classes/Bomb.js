class Bomb extends Object{
    constructor(x, y, width, height, color){
        super(x, y, width,height, color);
        this.explosionRate = 3;
        this.bombObject;
    }

    Create(){
        this.bombObject = new Rectangle(this.x, this.y, this.width, this.height, this.color);
    }

    Draw(context){
        this.bombObject.Draw(context);
    }

    DeployBomb(object){

    }
}