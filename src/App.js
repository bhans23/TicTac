import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import WinningModal from "./components/WinningModal";
import useWinningConditions from "./components/useWinningConditions";
import PlayerScores from "./components/PlayerScores";

const App = () => {
  const [gameType, setGameType] = useState("");

  const {
    gameResults,
    setGameResults,
    winningScores,
    setWinningScores,
    winningCondition,
    setPlayer1Score,
    setPlayer2Score,
    player1Score,
    player2Score,
    aIMoves,
    setAIMoves,
    player,
    setPlayer,
    squarePlayerTurn,
    setSquarePlayerTurn,
    aIRandom,
  } = useWinningConditions();

  const playerTurn = () => {
    if (player.turn === "player2") {
      if (gameType === "human") {
        return <h1 className="player2-turn"> Player 2(O's) Turn</h1>;
      }
      if (gameType === "cpu") {
        return <h1 className="player2-turn"> CPU's Turn</h1>;
      } else {
        return null;
      }
    } else {
      return <h1 className="player1-turn"> Player 1(X's) Turn</h1>;
    }
  };
  const cpuTurn = () => {
    if (gameType === "cpu" && player.turn === "player2") {
      return <>{aIRandom()}</>;
    } else {
      return null;
    }
  };
  const titleScreen = () => {
    if (gameType === "human") {
      return (
        <div>
          <PlayerScores
            player1Score={player1Score}
            player2Score={player2Score}
          />

          {playerTurn()}
          <GameBoard
            player={player}
            setPlayer={setPlayer}
            squarePlayerTurn={squarePlayerTurn}
            setSquarePlayerTurn={setSquarePlayerTurn}
            winningScores={winningScores}
            setWinningScores={setWinningScores}
            aIMoves={aIMoves}
            
          />

          <button onClick={resetScores}>Reset Scores</button>
        </div>
      );
    }
    if (gameType === "cpu") {
      return (
        <div>
          <PlayerScores
            player1Score={player1Score}
            player2Score={player2Score}
          />

          {playerTurn()}
          {cpuTurn()}
          <GameBoard
            player={player}
            setPlayer={setPlayer}
            squarePlayerTurn={squarePlayerTurn}
            setSquarePlayerTurn={setSquarePlayerTurn}
            winningScores={winningScores}
            setWinningScores={setWinningScores}
            aIMoves={aIMoves}
            
          />

          <button onClick={resetScores}>Reset Scores</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Please Select game mode</h2>
          <button onClick={() => setGameType("cpu")}>Vs CPU</button>
          <button onClick={() => setGameType("human")}>Vs Human</button>
        </div>
      );
    }
  };

  const resetScores = () => {
    setPlayer2Score(0);
    setPlayer1Score(0);
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
    setAIMoves([1,2,3,4,5,6,7,8,9])
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
      <div className="title">
        <h1 className="tic">Tic</h1>
        <h1 className="tac">Tac</h1>
        <h1 className="toe">Toe</h1>
      </div>
      {titleScreen()}
    </div>
  );
};

export default App;
