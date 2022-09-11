import { Scoreboard } from './components/Scoreboard.js';
import { Results } from './components/Results.js';
import { useState } from 'react';

/**
 * Renders the main component of the view
 * @version 1.0
 * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
 * @returns - HTML containing the scoreboard, the buttons that interact with said scoreboard and the lists that display the results of the completed games.
 */
function App() {

    //Game state -- Controls the values used by the Scoreboard component
    const [scoreboard, setScoreboard] = useState({
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: "Home Score",
        awayScore: "Away Score"
    });
    //Game active state -- Controls the enabled property of the action buttons
    const [activeGame, setActiveGame] = useState(false);
    //Results by Date state -- Contains a list with all completed games
    const [resultsByDate, setResultsByDate] = useState([]);
    //Results by Score state -- Contains a list with all completed games, which will be sorted by total score
    const [resultsByScore, setResultsByScore] = useState([]);

    /**
     * Creates a new game, picking two teams randomly and setting their initial score.
     * @version 1.0
     * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
     */
    const newGame = () => {

        const generateTeams = () => {

            const aTeams = ["Spain", "UK", "Italy", "Germany", "France", "Ireland", "USA", "Mexico", "Canada", "Japan", "China", "Russia"];

            let homeTeam = aTeams[Math.floor(Math.random() * aTeams.length)];
            let awayTeam = aTeams[Math.floor(Math.random() * aTeams.length)];

            while (homeTeam === awayTeam) {
                awayTeam = aTeams[Math.floor(Math.random() * aTeams.length)];
            }

            return { homeTeam, awayTeam }

        }

        const teams = generateTeams();
        setScoreboard({
            homeTeam: teams.homeTeam,
            awayTeam: teams.awayTeam,
            homeScore: 0,
            awayScore: 0
        });

        setActiveGame(true);

    }

    /**
     * Increments the score of the home team by 1.
     * @version 1.0
     * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
     */
    const homeGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, homeScore: previousState.homeScore + 1 }
        });
    }

    /**
     * Increments the score of the visitor team by 1.
     * @version 1.0
     * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
     */
    const awayGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, awayScore: previousState.awayScore + 1 }
        });
    }

    /**
     * Ends the active game, storing its result in the two lists. The 'resultsByScore' array is rearranged in the process to reflect the new changes.
     * @version 1.0
     * @author [Daniel Polo Villegas](https://github.com/DaniPoloPolar/)
     */
    const endGame = () => {

        setResultsByDate(previousState => {
            let previousStateLength = previousState.length;
            let newArray = [{
                id: previousStateLength,
                homeTeam: scoreboard.homeTeam,
                awayTeam: scoreboard.awayTeam,
                homeScore: scoreboard.homeScore,
                awayScore: scoreboard.awayScore
            }, ...previousState];
            return newArray;
        });

        setResultsByScore(previousState => {
            let previousStateLength = previousState.length;
            let newArray = [{
                id: previousStateLength,
                homeTeam: scoreboard.homeTeam,
                awayTeam: scoreboard.awayTeam,
                homeScore: scoreboard.homeScore,
                awayScore: scoreboard.awayScore
            }, ...previousState].sort((a, b) => {
                if ((a.homeScore + a.awayScore) > (b.homeScore + b.awayScore)) {
                    return -1;
                }
                if ((a.homeScore + a.awayScore) < (b.homeScore + b.awayScore)) {
                    return 1;
                }
                else {
                    return a.id > b.id ? -1 : 1;
                }
            });;

            return newArray;
        })

        setScoreboard({
            homeTeam: "Home Team",
            awayTeam: "Away Team",
            homeScore: "Home Score",
            awayScore: "Away Score"
        });

        setActiveGame(false);

    }

    return (
        <>
            <Scoreboard scoreboard={scoreboard} />
            <div id="actions">
                <button id="newGame" onClick={newGame} disabled={activeGame}>New Game</button>
                <button id="homeGoal" onClick={homeGoal} disabled={!activeGame}>Home Team Goal</button>
                <button id="awayGoal" onClick={awayGoal} disabled={!activeGame}>Visitor Team Goal</button>
                <button id="endGame" onClick={endGame} disabled={!activeGame}>End Game</button>
            </div>
            <Results resultsByDate={resultsByDate} resultsByScore={resultsByScore} />
        </>
    );
};

export { App };