import { Scoreboard } from './components/Scoreboard.js';
import { Results } from './components/Results.js';
import { useState } from 'react';

function App() {

    //Game state
    const [scoreboard, setScoreboard] = useState({
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: "Home Score",
        awayScore: "Away Score"
    });
    //Buttons state
    const [activeGame, setActiveGame] = useState(false);
    //Results by Date
    const [resultsByDate, setResultsByDate] = useState([]);
    //Results by Score
    const [resultsByScore, setResultsByScore] = useState([]);

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

    const homeGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, homeScore: previousState.homeScore+1}
        });
    }

    const awayGoal = () => {
        setScoreboard(previousState => {
            return { ...previousState, awayScore: previousState.awayScore+1}
        });
    }

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
            <Results resultsByDate={resultsByDate} resultsByScore={resultsByScore}/>
        </>
    );
};

export { App };