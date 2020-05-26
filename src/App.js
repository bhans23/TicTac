import React, { useState } from "react";
import "./App.css";
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
  console.log(player.turn);

  const resetGame = () => {
    setPlayer({ turn: "none" });
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

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {playerTurn()}
      <div className="board">
        <Square1
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square2
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square3
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square4
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square5
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square6
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square7
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square8
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
        <Square9
          player={player}
          setPlayer={setPlayer}
          squarePlayerTurn={squarePlayerTurn}
          setSquarePlayerTurn={setSquarePlayerTurn}
        />
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
};

export default App;
