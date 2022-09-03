import { Game } from "./game.js";

class Collection {

    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.unshift(game);
    }

    getGames() {
        return this.games;
    }

    copyGames(collection) {

        var gamesToCopy = collection.getGames();
        
        this.games = [];
        
        gamesToCopy.forEach((game) => {
            var copyGame = new Game(game.homeTeamName, game.awayTeamName, game.homeScore, game.awayScore);
            this.games.push(copyGame);
        });

    }

    orderCollectionByTotalScore() {

        this.games.sort((a, b) => {
            if ((a.homeScore + a.awayScore) >= (b.homeScore + b.awayScore)) {
                return -1;
            }
            if ((a.homeScore + a.awayScore) < (b.homeScore + b.awayScore)) {
                return 1;
            }
        });

    }

    getActiveGame() {
        return this.games[0];
    }

    buildGameList(listId) {

        let list = document.getElementById(listId);

        list.innerHTML = '';

        this.games.forEach((game) => {
            var sText = game.homeTeamName + ": " + game.homeScore + " - " + game.awayTeamName + ": " + game.awayScore;
            var oListNode = document.createElement("li");
            var sNodeText = document.createTextNode(sText);
            oListNode.appendChild(sNodeText);
            list.appendChild(oListNode);
        });

    }

}

export { Collection };