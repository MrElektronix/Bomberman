class BombermanGrid extends Grid{
    constructor(canvas, tileWidth, tileHeight){
        super(canvas, tileWidth, tileHeight);
        this.grid = undefined;

        this.Start();

        this.unbreakableBlocksListX = [];
        this.unbreakableBlocksListY = [];
        this.unbreakAbleSize = undefined;
    }

    Start(){
        this.grid = new Grid(this.canvas, this.tileWidth, this.tileHeight);
    }

    Create(){
        this.grid.Create();
    }

    Draw(context){
        this.grid.Draw(context);
    }

    CreateBorder(color){
        for (let i = 0; i < this.grid.tileObject.tiles.length; i++){
            for (let j = 0; j < this.grid.tileObject.tiles[i].length; j++){
                if (this.grid.tileObject.tiles[i][j].x == 0 || this.grid.tileObject.tiles[i][j].y == 0 
                    || this.grid.tileObject.tiles[i][j].x == ((this.grid.tileObject.rows * this.grid.tileObject.tileWidth) - this.grid.tileObject.tileWidth) 
                    || this.grid.tileObject.tiles[i][j].y == ((this.grid.tileObject.columns * this.grid.tileObject.tileHeight) - this.grid.tileObject.tileHeight))
                {
                   this.grid.tileObject.tiles[i][j].color = color || "grey";
                   this.grid.tileObject.tiles[i][j].walkable = false;
                }
            }
        }
    }

    CreateWalkableField(color) {
        for (let i = 1; i < this.grid.tileObject.tiles.length - 1; i++){
            for (let j = 1; j < this.grid.tileObject.tiles[i].length - 1; j++){
                if (this.grid.tileObject.tiles[i][j].x == this.grid.tileObject.tileWidth
                    || this.grid.tileObject.tiles[i][j].y == this.grid.tileObject.tileHeight 
                    || this.grid.tileObject.tiles[i][j].x == (this.grid.tileObject.rows * this.grid.tileObject.tileWidth) - (this.grid.tileObject.tileWidth * 2) 
                    || this.grid.tileObject.tiles[i][j].y == (this.grid.tileObject.columns * this.grid.tileObject.tileHeight) - (this.grid.tileObject.tileHeight * 2)
                    ){
                        for (let i = 1; i < this.grid.tileObject.rows - 1; i++){
                            for (let j = 1; j < this.grid.tileObject.columns - 1; j++){
                                this.grid.tileObject.tiles[i][j].color = color || "green";
                                this.grid.tileObject.tiles[i][j].lineWidth = 0;
                                this.grid.tileObject.tiles[i][j].walkable = true;
                            }
                        }
                    }
            }
        } 
    }

    CheckBorder(object){
        if (object.x <= this.tileWidth){
            object.x = this.tileWidth;
        }

        if (object.y <= this.tileHeight){
            object.y = this.tileHeight;  
        }

        if (object.x + object.width >= (this.canvas.width - this.tileWidth)){
            object.x = ((this.canvas.width - object.width) - this.tileWidth);
        }

        if (object.y + object.height >= (this.canvas.height - this.tileHeight)){
            object.y = ((this.canvas.height - object.height) - this.tileHeight);
        }
    }

    CreateUnbreakableBlocks(color){
        for (let i = 2; i < this.grid.tileObject.tiles.length - 2; i++){
            for (let j = 2; j < this.grid.tileObject.tiles[i].length - 2; j++){
                if (i % 2 == 0 && j % 2 == 0) {
                    this.grid.tileObject.tiles[i][j].color = color || "black";
                    this.unbreakableBlocksListX.push(this.grid.tileObject.tiles[i][j].x);
                    this.unbreakAbleSize = this.grid.tileObject.tileWidth;
                    this.unbreakableBlocksListY.push(this.grid.tileObject.tiles[i][j].y);
                }
            }
        }
    }

    CheckUnbreakableBlocks(object){
        for (let i = 0; i < this.unbreakableBlocksListX.length; i++){
            for (let j = 0; j < this.unbreakableBlocksListY.length; j++){
                if (object.x < this.unbreakableBlocksListX[i] + this.unbreakAbleSize
                     && object.x + object. width > this.unbreakableBlocksListX[i] 
                     && object.y < this.unbreakableBlocksListY[j] + this.unbreakAbleSize 
                     && object.y + object.height > this.unbreakableBlocksListY[j]){
                        return true;
                }
            }
        }
    }
}