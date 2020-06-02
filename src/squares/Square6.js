import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square6 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
}) => {
  const { square6Turn } = squarePlayerTurn;
  const { score456, score369 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "x"],
        score369: [...score369, "x"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square6Turn: "player2" });
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score369: [...score369, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square6Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square6Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square6Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square6Turn === "player2") {
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
    if (square6Turn === "none") {
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

export default Square6;
