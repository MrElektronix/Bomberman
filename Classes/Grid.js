class Grid extends Tiles{
    constructor(rows, columns, tileWidth, tileHeight){
        super(rows, columns, tileWidth, tileHeight);
        this.tileObject;
    }

    Create(){
       this.tileObject = new Tiles(this.rows, this.columns, this.tileWidth, this.tileHeight);
       this.tileObject.Create();
    }

    Draw(context){
        this.tileObject.Draw(context);
    }

    CreateBorder(){
        for (let i = 0; i < this.tileObject.tiles.length; i++){
            for (let j = 0; j < this.tileObject.tiles[i].length; j++){
                if (this.tileObject.tiles[i][j].x == 0 || this.tileObject.tiles[i][j].y == 0 
                    || this.tileObject.tiles[i][j].x == ((this.tileObject.rows * this.tileObject.tileWidth) - this.tileObject.tileWidth) 
                    || this.tileObject.tiles[i][j].y == ((this.tileObject.columns * this.tileObject.tileHeight) - this.tileObject.tileHeight))
                {
                   this.tileObject.tiles[i][j].color = "grey";
                   this.tileObject.tiles[i][j].walkable = false;
                }
            }
        }
    }

    CreateWalkableField() {
        for (let i = 1; i < this.tileObject.tiles.length - 1; i++){
            for (let j = 1; j < this.tileObject.tiles[i].length - 1; j++){
                if (this.tileObject.tiles[i][j].x == this.tileObject.tileWidth
                    || this.tileObject.tiles[i][j].y == this.tileObject.tileHeight 
                    || this.tileObject.tiles[i][j].x == (this.tileObject.rows * this.tileObject.tileWidth) - (this.tileObject.tileWidth * 2) 
                    || this.tileObject.tiles[i][j].y == (this.tileObject.columns * this.tileObject.tileHeight) - (this.tileObject.tileHeight * 2)
                    ){
                        for (let i = 1; i < this.tileObject.rows - 1; i++){
                            for (let j = 1; j < this.tileObject.columns - 1; j++){
                                this.tileObject.tiles[i][j].color = "green";
                                this.tileObject.tiles[i][j].lineWidth = 0;
                                this.tileObject.tiles[i][j].walkable = true;
                            }
                        }
                    }
            }
        } 
    }

    CheckBorder(object){
        if (object.x + object.width >= 760){
            object.x = 760 - object.width;
        }

        if (object.y + object.height >= 560){
            object.y = 560 - object.height;
        }

        if (object.x <= 40){
            object.x = 40;
        }

        if (object.y <= 40){
            object.y = 40;  
        }
    }
}