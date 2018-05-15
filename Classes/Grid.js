class Grid {
    constructor(canvas, tileWidth, tileHeight){
        this.tileObject;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.canvas = canvas;
        this.rows;
        this.columns;
    }

    Create(){
        this.rows = (this.canvas.width / this.tileWidth);
        this.columns = (this.canvas.height / this.tileHeight);
        this.tileObject = new Tiles(this.rows, this.columns, this.tileWidth, this.tileHeight);
        this.tileObject.Create();
    }

    Draw(context){
        this.tileObject.Draw(context);
    }
}