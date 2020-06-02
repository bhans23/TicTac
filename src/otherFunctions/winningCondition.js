import React from 'react';


const xWinCondition = ["x","x","x"];
const oWinCondition = ["o", "o", "o"];

const winningCondition = () => {
  

    if (JSON.stringify(winningScores.score123) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score123) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    } 
    if (JSON.stringify(winningScores.score456) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score456) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score789) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score789) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score159) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score159) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score357) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score357) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score147) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score147) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score258) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score258) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    if (JSON.stringify(winningScores.score369) === JSON.stringify(xWinCondition)) {
      return <h1>PLayer 1 wins</h1>;
    }
    if (JSON.stringify(winningScores.score369) === JSON.stringify(oWinCondition)) {
      return <h1>PLayer 2 wins</h1>;
    }
    else {
      return <h1>Who will win?</h1>;
    }
  };


  export default winningCondition;