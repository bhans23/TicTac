import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square2 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
  player1Score,
  setPlayer1Score
}) => {
  const { square2Turn } = squarePlayerTurn;
  const { score123,score258 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "x"],
        score258: [...score258, "x"],
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square2Turn: "player2" });
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "o"],
        score258: [...score258, "o"]
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square2Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square2Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square2Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square2Turn === "player2") {
      return (
        <>
          <XSquare />
        </>
      );
    } else {
      return <></>;
    }
  };

  const finalSelect = () => {
    if (square2Turn === "none") {
      return (
        <button
          className="square"
          onClick={() => {
            playerSelect();
          }}
        ></button>
      );
    } else {
      return squareSelect();
    }
  };

  const buttonSquare = () => {
    return <div className="square">{finalSelect()}</div>;
  };

  return <>{buttonSquare()}</>;
};

export default Square2;
