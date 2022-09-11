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