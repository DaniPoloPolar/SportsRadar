class Game {

    aTeams = ["Spain", "UK", "Italy", "Germany", "France", "Ireland", "USA", "Mexico"];

    constructor(homeScore = 0, awayScore = 0) {
        let teams = this.generateTeams();

        this.homeTeamName = teams.homeTeamName;
        this.awayTeamName = teams.awayTeamName;
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

    generateTeams() {

        let homeTeamName = aTeams[Math.floor(Math.random() * this.aTeams.length-1)];
        let awayTeamName = aTeams[Math.floor(Math.random() * this.aTeams.length-1)];

        while (homeTeamName === awayTeamName) {
            awayTeamName = aTeams[Math.floor(Math.random() * this.aTeams.length-1)];
        }

        return {homeTeamName, awayTeamName}

    }

}

export { Game };