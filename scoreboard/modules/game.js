class Game {

    constructor(homeScore = 0, awayScore = 0) {
        this.homeScore = homeScore;
        this.awayScore = awayScore;
    }

    create() {
        let homeScore = document.getElementById("homeScore");
        let awayScore = document.getElementById("awayScore");

        homeScore.innerText = 0;
        awayScore.innerText = 0;
    }

}

export { Game };