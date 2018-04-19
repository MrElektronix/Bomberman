class Rectangle extends Object{
    constructor(x, y, width, height, color){
        super(x,y,width,height);
        this.color = color || "black";
        this.lineWidth;
    }

    Draw(context){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        /*
        context.lineWidth = this.lineWidth || 1;
        context.strokeStyle = "white";
        context.stroke();
        */
        context.closePath();
    }

}