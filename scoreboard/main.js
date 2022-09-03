import { Game } from "./modules/game.js";
import { Collection } from "./modules/collection.js";

let btnNewGame = document.getElementById("newGame");
let btnHomeGoal = document.getElementById("homeGoal");
let btnAwayGoal = document.getElementById("awayGoal");
let btnEndGame = document.getElementById("endGame");

let gameCollection = new Collection;
let gameCollectionByScore = new Collection;

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
    let score = activeGame.getScore();
    activeGame.setScore(score.homeScore + 1, score.awayScore);
});

btnAwayGoal.addEventListener("click", () => {
    let activeGame = gameCollection.getActiveGame();
    let score = activeGame.getScore();
    activeGame.setScore(score.homeScore, score.awayScore + 1);
});

btnEndGame.addEventListener("click", () => {

    btnNewGame.disabled = false;
    btnHomeGoal.disabled = true;
    btnAwayGoal.disabled = true;
    btnEndGame.disabled = true;

    gameCollectionByScore.copyGames(gameCollection);
    gameCollectionByScore.orderCollectionByTotalScore();

    gameCollection.buildGameList("gamesByDate");
    gameCollectionByScore.buildGameList("gamesByScore");

    let homeScore = document.getElementById("homeScore");
    let awayScore = document.getElementById("awayScore");
    let homeTeam = document.getElementById("homeTeam");
    let awayTeam = document.getElementById("awayTeam");

    homeScore.innerText = "Home Score";
    awayScore.innerText = "Away Score";
    homeTeam.innerText = "Home Team";
    awayTeam.innerText = "Away Team";

});