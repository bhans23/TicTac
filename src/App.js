import React, { useState } from "react";
import "./App.css";
import WinningModal from "./components/WinningModal";
import useWinningConditions from './components/useWinningConditions';
import Square1 from "./squares/Square1";
import Square2 from "./squares/Square2";
import Square3 from "./squares/Square3";
import Square4 from "./squares/Square4";
import Square5 from "./squares/Square5";
import Square6 from "./squares/Square6";
import Square7 from "./squares/Square7";
import Square8 from "./squares/Square8";
import Square9 from "./squares/Square9";

const App = () => {
  const [player, setPlayer] = useState({ turn: "none" });
  const [player1Score, setPlayer1Score] = useState("");
  const [player2Score, setPlayer2Score] = useState("");
  const {gameResults,setGameResults,winningScores, setWinningScores, winningCondition} = useWinningConditions();
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
      return <h1> Player 2(O's) Turn</h1>;
    } else {
      return <h1> Player 1(X's) Turn</h1>;
    }
  };

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
    <>
      {winning()}
      <h1>Tic Tac Toe</h1>

      {playerTurn()}
      <div className="board">
        <Square1
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square2
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square3
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square4
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square5
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square6
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square7
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square8
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
        <Square9
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
          winningScores={winningScores}
          setWinningScores={setWinningScores}
        />
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
};

export default App;
