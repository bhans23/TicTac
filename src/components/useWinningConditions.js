import React, { useState } from "react";
const useWinningConditions = () => {
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
  const [player, setPlayer] = useState({ turn: "none" });
  const [aIMoves, setAIMoves] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [gameResults, setGameResults] = useState("");
  const xWinCondition = ["x", "x", "x"];
  const oWinCondition = ["o", "o", "o"];
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  console.log(aIMoves);

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
  const {
    score123,
    score456,
    score789,
    score159,
    score357,
    score147,
    score258,
    score369,
  } = winningScores;

  const aIRandom = () => {
    const randomSquare = aIMoves[Math.floor(Math.random() * aIMoves.length)];
    const randomSquareIndex = aIMoves.findIndex((move) => move === randomSquare);
     console.log(randomSquareIndex)
    console.log(randomSquare);
    aIMoves.splice(randomSquareIndex, 1);

    if (randomSquare === 1) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "o"],
        score159: [...score159, "o"],
        score147: [...score147, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square1Turn: "player1" });
    }
    if (randomSquare === 2) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "o"],
        score258: [...score258, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square2Turn: "player1" });
    }
    if (randomSquare === 3) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "o"],
        score357: [...score357, "o"],
        score369: [...score369, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square3Turn: "player1" });
    }
    if (randomSquare === 4) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score147: [...score147, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square4Turn: "player1" });
    }
    if (randomSquare === 5) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score159: [...score159, "o"],
        score357: [...score357, "o"],
        score258: [...score258, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square5Turn: "player1" });
    }
    if (randomSquare === 6) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score369: [...score369, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square6Turn: "player1" });
    }
    if (randomSquare === 7) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "o"],
        score147: [...score147, "o"],
        score357: [...score357, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square7Turn: "player1" });
    }
    if (randomSquare === 8) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "o"],
        score258: [...score258, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square8Turn: "player1" });
    }
    if (randomSquare === 9) {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "o"],
        score159: [...score159, "o"],
        score369: [...score369, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square9Turn: "player1" });
    }
  };

  const winningCondition = () => {
    if (
      JSON.stringify(winningScores.score123) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score123) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score456) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score456) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score789) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score789) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score159) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score159) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score357) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score357) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score147) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score147) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score258) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score258) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
    }
    if (
      JSON.stringify(winningScores.score369) === JSON.stringify(xWinCondition)
    ) {
      setGameResults("player1");
      setPlayer1Score(player1Score + 1);
    }
    if (
      JSON.stringify(winningScores.score369) === JSON.stringify(oWinCondition)
    ) {
      setGameResults("player2");
      setPlayer2Score(player2Score + 1);
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
      JSON.stringify(winningScores.score123) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score123) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score456) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score456) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score789) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score789) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score159) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score159) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score357) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score357) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score147) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score147) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score258) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score258) !==
        JSON.stringify(oWinCondition) &&
      JSON.stringify(winningScores.score369) !==
        JSON.stringify(xWinCondition) &&
      JSON.stringify(winningScores.score369) !== JSON.stringify(oWinCondition)
    ) {
      setGameResults("tie");
    } else {
      return <></>;
    }
  };
  return {
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
    aIRandom,
    player,
    setPlayer,
    squarePlayerTurn,
    setSquarePlayerTurn,
  };
};

export default useWinningConditions;
