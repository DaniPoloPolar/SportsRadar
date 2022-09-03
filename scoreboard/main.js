import { Game } from "./modules/game.js";
import { Collection } from "./modules/collection.js";

let btnNewGame = document.getElementById("newGame");
let btnHomeGoal = document.getElementById("homeGoal");
let btnAwayGoal = document.getElementById("awayGoal");
let btnEndGame = document.getElementById("endGame");

let gameCollection = new Collection;

btnNewGame.addEventListener("click", () => {
    let newGame = new Game(0, 0);
    gameCollection.addGame(newGame);
    newGame.create();
    btnNewGame.disabled = true;
    btnHomeGoal.disabled = false;
    btnAwayGoal.disabled = false;
    btnEndGame.disabled = false;
});

btnHomeGoal.addEventListener("click", () => {
    let activeGame = gameCollection.getActiveGame();
    activeGame.incrementHomeScore();
});

btnAwayGoal.addEventListener("click", () => {
    let activeGame = gameCollection.getActiveGame();
    activeGame.incrementAwayScore();
});

btnEndGame.addEventListener("click", () => {
    
    btnNewGame.disabled = true;
    btnHomeGoal.disabled = true;
    btnAwayGoal.disabled = true;
    btnEndGame.disabled = true;

    let gameCollectionByScore = gameCollection.getCollectionByTotalScore();

    gameCollection.buildGameList("gamesByDate");
    gameCollectionByScore.buildGameList("gamesByScore");
    
});