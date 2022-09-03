import { Game } from "./modules/game.js"

let btnNewGame = document.getElementById("newGame");

btnNewGame.addEventListener("click", function() {
    let newGame = new Game(0,0);
    newGame.create();
});


