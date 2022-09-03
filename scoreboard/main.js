import { Game } from "./modules/game.js";
import { Collection } from "./modules/collection.js";

let btnNewGame = document.getElementById("newGame");
let btnHomeGoal = document.getElementById("homeGoal");
let btnAwayGoal = document.getElementById("awayGoal");

let gameCollection = new Collection;

btnNewGame.addEventListener("click", () => {
    let newGame = new Game(0,0);
    gameCollection.addGame(newGame);
    newGame.create();
});

btnHomeGoal.addEventListener("click", () => {
    let activeGame = gameCollection.getActiveGame();
    activeGame.incrementHomeScore();
});

btnAwayGoal.addEventListener("click", () => {
    let activeGame = gameCollection.getActiveGame();
    activeGame.incrementAwayScore();
});


