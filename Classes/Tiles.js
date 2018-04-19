class Tiles {
    constructor(rows, columns, tileWidth, tileHeight){
        this.rows = rows;
        this.columns = columns;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.tileX;
        this.tileY;
        this.tiles = [];

        this.walkable;
    }

    Create(){
        for (let i = 0; i < this.rows; i++){
            this.tiles[i] = [];
            for (let j = 0; j < this.columns; j++){
                this.tileX = i * this.tileWidth;
                this.tileY = j * this.tileHeight;

                this.tiles[i][j] = new Rectangle(this.tileX, this.tileY, this.tileWidth, this.tileHeight);
            }
        }
    }

    Draw(context){
        for (let i = 0; i < this.tiles.length; i++){
            for (let j = 0; j < this.tiles[i].length; j++){
                this.tiles[i][j].Draw(context);
            }
        }
    }
}