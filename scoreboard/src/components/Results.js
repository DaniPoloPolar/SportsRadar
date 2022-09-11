/**
 * Creates lists of completed games and renders them
 * 
 * @version 1.0
 * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
 * @param {Object} props - Contains two lists of completed games
 * @param {Object[]} props.resultsByDate - Contains games added to the system ordered from newest to oldest
 * @param {Object[]} props.resultsByScore - Contains games added to the system ordered from highest total score to lowest
 * @returns - HTML containing the two lists of completed games
 */
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