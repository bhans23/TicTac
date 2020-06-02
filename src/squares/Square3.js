import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square3 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
}) => {
  const { square3Turn } = squarePlayerTurn;
  const { score123, score357,score369 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "x"],
        score357: [...score357, "x"],
        score369: [...score369, "x"],
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square3Turn: "player2" });
    }
    if (player.turn === "player2") {
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
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square3Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square3Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square3Turn === "player2") {
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
    if (square3Turn === "none") {
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

export default Square3;
