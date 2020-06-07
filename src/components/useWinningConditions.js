import React, { useState } from "react";
const useWinningConditions = () => {
  const [gameResults, setGameResults] = useState("");
  const xWinCondition = ["x", "x", "x"];
  const oWinCondition = ["o", "o", "o"];
  const [winningScores, setWinningScores] = useState({
    score123: "",
    score456: "",
    score789: "",
    score159: "",
    score357: "",
    score147: "",
    score258: "",
    score369: "",
  });

  const winningCondition = () => {
    if (
      JSON.stringify(winningScores.score123) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score123) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score456) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score456) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score789) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score789) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score159) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score159) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score357) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score357) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score147) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score147) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score258) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score258) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      JSON.stringify(winningScores.score369) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
    }
    if (
      JSON.stringify(winningScores.score369) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
    }
    if (
      winningScores.score123.length === 3 &&
      winningScores.score456.length === 3 &&
      winningScores.score789.length === 3 &&
      winningScores.score159.length === 3 &&
      winningScores.score357.length === 3 &&
      winningScores.score147.length === 3 &&
      winningScores.score258.length === 3 &&
      winningScores.score369.length === 3 &&
      JSON.stringify(winningScores.score123) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score123) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score456) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score456) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score789) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score789) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score159) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score159) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score357) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score357) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score147) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score147) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score258) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score258) !== JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score369) !== JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score369) !== JSON.stringify(oWinCondition)
    ) {
      setGameResults("tie");
    } else {
      return (
        <>
          <h1>Who will win?</h1>
        </>
      );
    }
  };

  return {
    gameResults,
    setGameResults,
    winningScores,
    setWinningScores,
    winningCondition,
  };
};

export default useWinningConditions;
