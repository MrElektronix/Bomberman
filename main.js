let canvas;
let grid;
let player;


let Start = ()=>{
    canvas = new Canvas(800, 600);
    canvas.Create();

    grid = new Grid(20, 15, 40, 40);
    grid.Create();
    grid.CreateBorder();
    grid.CreateWalkablePath();

    player = new Player(grid.tileWidth, grid.tileHeight, grid.tileWidth, grid.tileHeight, "blue");
    player.speed = 4;
    player.Create();
    Update();
}

let Update = ()=>{
    Keyboard();
    canvas.Clear();
    grid.Draw(canvas.context);
    player.Draw(canvas.context);

    grid.CheckBorder(player.playerObject);
    requestAnimationFrame(Update);
}


let Keys = {
    w: false, 
    a: false,
    s: false,
    d: false
}

window.onkeydown = (e)=>{
    let keyCode = e.key;
    //e.preventDefault();

    if (keyCode === "w") {Keys.w = true;}
    if (keyCode === "a") {Keys.a = true;}
    if (keyCode === "s") {Keys.s = true;}
    if (keyCode === "d") {Keys.d = true;}
}

window.onkeyup = (e)=>{
    let keyCode = e.key;
    //e.preventDefault();

    if (keyCode === "w") {Keys.w = false;}
    if (keyCode === "a") {Keys.a = false;}
    if (keyCode === "s") {Keys.s = false;}
    if (keyCode === "d") {Keys.d = false;}
}

/*
document.addEventListener("keydown", (event)=>{
    const keyName = event.key;
    if (keyName == "d"){
        player.playerObject.x += player.speed;
    }
    if (keyName == "a"){
        player.playerObject.x -= player.speed;
    }
    if (keyName == "s"){
        player.playerObject.y += player.speed;
    }
    if (keyName == "w"){
        player.playerObject.y -= player.speed;
    }
});
*/

let Keyboard = ()=>{
    if (Keys.w) {player.playerObject.y -= player.speed;}
    if (Keys.a) {player.playerObject.x -= player.speed;}
    if (Keys.s) {player.playerObject.y += player.speed;}
    if (Keys.d) {player.playerObject.x += player.speed;}
}


Start();