/**
 * Renders a scoreboard
 * @version 1.0
 * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
 * @param {Object} props - Parameters of the game to be shown
 * @param {String} props.scoreboard.homeTeam - Name of the home team
 * @param {String} props.scoreboard.awayTeam - Name of the visitor team
 * @param {Integer} props.scoreboard.homeScore - Goals scored by the home team
 * @param {Integer} props.scoreboard.awayScore - Goals scored by the visitor team
 * @returns - HTML containing the names of the two teams playing the game and their respective scores
 */
function Scoreboard(props) {
    return (
        <>
            <div id="scoreBoard">
                <b id="homeScore">{props.scoreboard.homeScore}</b>
                <b>-</b>
                <b id="awayScore">{props.scoreboard.awayScore}</b>
            </div>
            <div id="teamNames">
                <p id="homeTeam">{props.scoreboard.homeTeam}</p>
                <p id="awayTeam">{props.scoreboard.awayTeam}</p>
            </div>
        </>
    )
}

export { Scoreboard };