import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square8 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
  aIMoves
}) => {
  const { square8Turn } = squarePlayerTurn;
  const { score789, score258 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "x"],
        score258: [...score258, "x"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square8Turn: "player2" });
      const squareIndex = aIMoves.findIndex((move) => move === 8);
      aIMoves.splice(squareIndex,1)
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "o"],
        score258: [...score258, "o"],
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square8Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square8Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square8Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square8Turn === "player2") {
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
    if (square8Turn === "none") {
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

  

  return <>{finalSelect()}</>;
};

export default Square8;
