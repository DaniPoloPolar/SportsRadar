import { Game } from "./game.js";

class Collection {

    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.unshift(game);
    }

    getCollectionByTotalScore() {

        let sortedCollection = new Collection();
        sortedCollection.games = this.games.sort((a, b) => {
            if ((a.homeScore + a.awayScore) >= (b.homeScore + b.awayScore)) {
                return 1;
            }
            if ((a.homeScore + a.awayScore) < (b.homeScore + b.awayScore)) {
                return -1;
            }
        });

        return sortedCollection;

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