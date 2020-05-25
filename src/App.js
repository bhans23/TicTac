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
  const [player1, setPlayer1] = useState({ turn: "none" });
  const playerTurn = () => {
    if (player1.turn === "player2") {
      return (
      <h1> Player 2(O's) Turn</h1>
      )
    } else {
      return (
      <h1> Player 1(X's) Turn</h1>
      )
    }
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {playerTurn()}
      <div className="board">
        <Square1 player1={player1} setPlayer1={setPlayer1} />
        <Square2 player1={player1} setPlayer1={setPlayer1} />
        <Square3 player1={player1} setPlayer1={setPlayer1} />
        <Square4 player1={player1} setPlayer1={setPlayer1} />
        <Square5 player1={player1} setPlayer1={setPlayer1} />
        <Square6 player1={player1} setPlayer1={setPlayer1} />
        <Square7 player1={player1} setPlayer1={setPlayer1} />
        <Square8 player1={player1} setPlayer1={setPlayer1} />
        <Square9 player1={player1} setPlayer1={setPlayer1} />
      </div>
    </>
  );
};

export default App;
