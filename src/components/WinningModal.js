import React, { useState } from "react";

const WinningModal = ({ gameResults, resetGame }) => {
  
  if (gameResults === "player1") {
    return (
      <>
        <h1>Player 1 Wins!</h1>
        <button onClick={resetGame}> Reset Game</button>
      </>
    );
  }
  if (gameResults === "player2") {
    return (
      <>
        <h1>Player 2 Wins!</h1>
        <button onClick={resetGame}> Reset Game</button>
      </>
    );
  }
  if (gameResults === "tie") {
    return <h1>Tie!</h1>;
  } else {
    return null;
  }
};

export default WinningModal;
