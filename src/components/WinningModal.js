import React, { useState } from "react";

const WinningModal = ({ gameResults, resetGame }) => {
  if (gameResults === "player1") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1>Player 1 Wins!</h1>
          <button onClick={resetGame}> Reset Game</button>
        </div>
      </div>
    );
  }
  if (gameResults === "player2") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1>Player 2 Wins!</h1>
          <button onClick={resetGame}> Reset Game</button>
        </div>
      </div>
    );
  }
  if (gameResults === "tie") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1>Tie</h1>
          <button onClick={resetGame}> Reset Game</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default WinningModal;
