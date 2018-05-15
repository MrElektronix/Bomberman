let canvas;
let bombermangrid;
let player;


const Start = ()=>{
    canvas = new Canvas(600, 600);
    canvas.Create();

    bombermangrid = new BombermanGrid(canvas._canvas, 40, 40);
    bombermangrid.Create();
    bombermangrid.CreateBorder();
    bombermangrid.CreateWalkableField();

    player = new Player(bombermangrid.tileWidth, bombermangrid.tileHeight, bombermangrid.tileWidth, bombermangrid.tileHeight, "blue");
    player.speed = 4;
    player.Create();
    bombermangrid.CreateUnbreakableBlocks();
    Update();
}

const Update = ()=>{
    Keyboard();
    canvas.Clear();
    bombermangrid.Draw(canvas.context);
    player.Draw(canvas.context);

    bombermangrid.CheckBorder(player.playerObject);
    requestAnimationFrame(Update);
}


const Keys = {
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

const Keyboard = ()=>{
    if (Keys.w) {player.playerObject.y -= player.speed;}
    if (Keys.a) {player.playerObject.x -= player.speed;}
    if (Keys.s) {player.playerObject.y += player.speed;}
    if (Keys.d) {player.playerObject.x += player.speed;}
}


Start();