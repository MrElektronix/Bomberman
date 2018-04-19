class Canvas {
    constructor(sceneWidth, sceneHeight){
        this.sceneWidth = sceneWidth;
        this.sceneHeight = sceneHeight;

        this._canvas;
        this._canvasID;
        this.context;
    }

    Create(){
        this._canvas = document.createElement("canvas");
        this._canvasID = "canvas";
        this._canvas.setAttribute("id", this._canvasID);
        this.context = this._canvas.getContext("2d");

        this._canvas.width = this.sceneWidth;
        this._canvas.height = this.sceneHeight;

        document.body.appendChild(this._canvas);
    }

    Clear(){
        this.context.clearRect(0, 0, this.sceneWidth, this.sceneHeight);
    }

}