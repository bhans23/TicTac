import React from "react";

const WinningModal = ({ gameResults, resetGame }) => {
  if (gameResults === "player1") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1 className="player1-win">Player 1 Wins!</h1>
          <button onClick={resetGame}> Play Again</button>
        </div>
      </div>
    );
  }
  if (gameResults === "player2") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1 className="player2-win">Player 2 Wins!</h1>
          <button onClick={resetGame}> Play Again</button>
        </div>
      </div>
    );
  }
  if (gameResults === "tie") {
    return (
      <div className="modal">
        <div className="modal-main">
          <h1 className="tie">Tie</h1>
          <button onClick={resetGame}> Play Again</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default WinningModal;
