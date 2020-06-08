import React from 'react';

const PlayerScores = ({player1Score, player2Score}) => {


  return (
      <div className="players-score">
        <div className="player1-score">Player 1 Score: {player1Score}</div>
        <div className="player2-score">Player 2 Score: {player2Score}</div>
      </div>
  )


}

export default PlayerScores;