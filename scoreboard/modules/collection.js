import { Game } from "./game.js";

class Collection {

    games = [];

    constructor() {
        this.games = games;
    }

    addGame(game) {
        this.games.push(game);
    }

    getCollectionByTotalScore() {

        let sortedCollection = this.games.sort((a, b) => {
            if ((a.homeScore + a.awayScore) >= (b.homeScore + b.awayScore)) {
                return 1;
            }
            if ((a.homeScore + a.awayScore) < (b.homeScore + b.awayScore)) {
                return -1;
            }
        });

        return sortedCollection;

    }

}

export { Collection };