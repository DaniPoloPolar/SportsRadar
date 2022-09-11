function Results(props) {
    return (
        <div id="lists">
            <div>
                <p>Games By Date (Newest to Oldest)</p>
                <ul id="gamesByDate">
                    {props.resultsByDate.map((item) => (
                        <li key={item.id}>{item.homeTeam}: {item.homeScore} - {item.awayTeam}: {item.awayScore}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Games By Total Score (Highest to Lowest)</p>
                <ul id="gamesByScore">
                    {props.resultsByScore.map((item) => (
                        <li key={item.id}>{item.homeTeam}: {item.homeScore} - {item.awayTeam}: {item.awayScore}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Results };