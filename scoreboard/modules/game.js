class Game {

    aTeams = ["Spain", "UK", "Italy", "Germany", "France", "Ireland", "USA", "Mexico", "Canada", "Japan", "China", "Russia"];

    constructor(homeScore = 0, awayScore = 0, homeTeamName = "", awayTeamName = "",) {
        if (homeTeamName === "" && awayTeamName === "") {
            let teams = this.generateTeams();
            this.homeTeamName = teams.homeTeamName;
            this.awayTeamName = teams.awayTeamName;
        }
        else {
            this.homeTeamName = homeTeamName;
            this.awayTeamName = awayTeamName;
        }

        this.homeScore = homeScore;
        this.awayScore = awayScore;
    }

    create() {

        let homeScore = document.getElementById("homeScore");
        let awayScore = document.getElementById("awayScore");
        let homeTeam = document.getElementById("homeTeam");
        let awayTeam = document.getElementById("awayTeam");

        homeScore.innerText = 0;
        awayScore.innerText = 0;
        homeTeam.innerText = this.homeTeamName;
        awayTeam.innerText = this.awayTeamName;

    }

    getScore() {
        return {homeScore: this.homeScore, awayScore: this.awayScore};
    }

    setScore(homeScore, awayScore) {

        this.homeScore = homeScore;
        this.awayScore = awayScore;

        let homeScoreText = document.getElementById("homeScore");
        let awayScoreText = document.getElementById("awayScore");

        homeScoreText.innerText = this.homeScore;
        awayScoreText.innerText = this.awayScore;

    }

    generateTeams() {

        let homeTeamName = this.aTeams[Math.floor(Math.random() * this.aTeams.length)];
        let awayTeamName = this.aTeams[Math.floor(Math.random() * this.aTeams.length)];

        while (homeTeamName === awayTeamName) {
            awayTeamName = this.aTeams[Math.floor(Math.random() * this.aTeams.length)];
        }

        return { homeTeamName, awayTeamName }

    }

}

export { Game };