let canvas;
let bombermangrid;
let player;
let bomb;
let spacebarUp = true;
let value;

const keyState = {};
window.addEventListener("keydown", (e)=>{
    keyState[e.keyCode || e.which] = true;
});

window.addEventListener("keyup", (e)=>{
    keyState[e.keyCode || e.which] = false;
    spacebarUp = true;
});

let Keys = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
    spacebar: 32
}

const Start = ()=>{
    value = 2;
    canvas = new Canvas(600, 600);
    canvas.Create();

    bombermangrid = new BombermanGrid(canvas._canvas, 40, 40);
    bombermangrid.Create();
    bombermangrid.CreateBorder();
    bombermangrid.CreateWalkableField();
    bombermangrid.CreateUnbreakableBlocks();

    player = new Player(bombermangrid.tileWidth, bombermangrid.tileHeight, 30, 30, "blue");
    player.speed = 3.5;
    player.Create();
   

    for (let i = 0; i < player.bombAmount; i++){
        bomb = new Bomb(20, 0, 20, 20, "grey");
        bomb.Create();
        player.bombs.push(bomb);
    }
    Update();
}

const Update = ()=>{
    Keyboard();
    canvas.Clear();
    bombermangrid.Draw(canvas.context);
    bombermangrid.CheckBorder(player.playerObject);
    player.Draw(canvas.context);
    for (let b = 0; b < player.bombAmount; b++){
        player.bombs[b].Draw(canvas.context);
    }

    if (bombermangrid.CheckUnbreakableBlocks(player.playerObject)){
        //player.speed = 0;
    }
    requestAnimationFrame(Update);
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

    if (keyState[Keys.w]){player.playerObject.y -= player.speed;}
    if (keyState[Keys.a]){player.playerObject.x -= player.speed;}
    if (keyState[Keys.s]){player.playerObject.y += player.speed;}
    if (keyState[Keys.d]){player.playerObject.x += player.speed;}
    if (keyState[Keys.spacebar] && spacebarUp){
        spacebarUp = false;

        if (value != -1) {
            player.bombs[value].bombObject.x = player.playerObject.x + ((player.playerObject.width ) / 6);
            player.bombs[value].bombObject.y = player.playerObject.y + ((player.playerObject.height) / 6);
            player.bombs[value].bombObject.color = "white";1

            value -= 1;
        }
    }
}


Start();