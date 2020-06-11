import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square7 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
}) => {
  const { square7Turn } = squarePlayerTurn;
  const { score789, score357,score147 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "x"],
        score147: [...score147, "x"],
        score357: [...score357, "x"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square7Turn: "player2" });
    }
    if (player.turn === "player2") {
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
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square7Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square7Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square7Turn === "player2") {
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
    if (square7Turn === "none") {
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

  return <>{finalSelect()}</>;
};

export default Square7;
