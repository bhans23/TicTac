import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import WinningModal from "./components/WinningModal";
import useWinningConditions from "./components/useWinningConditions";
import PlayerScores from './components/PlayerScores';

const App = () => {
  const [player, setPlayer] = useState({ turn: "none" });
  
  const {
    gameResults,
    setGameResults,
    winningScores,
    setWinningScores,
    winningCondition,
    setPlayer1Score,
    setPlayer2Score,
    player1Score,
    player2Score
  } = useWinningConditions();
  const [squarePlayerTurn, setSquarePlayerTurn] = useState({
    square1Turn: "none",
    square2Turn: "none",
    square3Turn: "none",
    square4Turn: "none",
    square5Turn: "none",
    square6Turn: "none",
    square7Turn: "none",
    square8Turn: "none",
    square9Turn: "none",
  });

  const playerTurn = () => {
    if (player.turn === "player2") {
      return <h1 className="players-turn"> Player 2(O's) Turn</h1>;
    } else {
      return <h1 className="players-turn"> Player 1(X's) Turn</h1>;
    }
  };
  
  const resetScores = () => {
    setPlayer2Score(0)
    setPlayer1Score(0)
  }
  const resetGame = () => {
    setGameResults("");
    setPlayer({ turn: "none" });
    setWinningScores({
      score123: "",
      score456: "",
      score789: "",
      score159: "",
      score357: "",
      score147: "",
      score258: "",
      score369: "",
    });
    setSquarePlayerTurn({
      square1Turn: "none",
      square2Turn: "none",
      square3Turn: "none",
      square4Turn: "none",
      square5Turn: "none",
      square6Turn: "none",
      square7Turn: "none",
      square8Turn: "none",
      square9Turn: "none",
    });
  };
  const winning = () => {
    if (gameResults === "") {
      return winningCondition();
    } else {
      return <WinningModal gameResults={gameResults} resetGame={resetGame} />;
    }
  };
  return (
    <div className="game">
      {winning()}
      <h1 className="title">Tic Tac Toe</h1>
      <PlayerScores player1Score={player1Score} player2Score={player2Score}/>
      {playerTurn()}
      <GameBoard
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />

      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;
