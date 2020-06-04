import React from "react";

const WinningModal = (gameResults) => {
    console.log(gameResults)
  if (gameResults === "player1") {
    return <h1>Player 1 Wins!</h1>;
  }
  if (gameResults === "player2") {
    return <h1>Player 2 Wins!</h1>;
  }
  if (gameResults === "tie") {
    return <h1>Tie!</h1>;
  } else {
    return null;
  }
};

export default WinningModal;
