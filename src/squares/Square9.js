import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square9 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
  aIMoves
}) => {
  const { square9Turn } = squarePlayerTurn;
  const { score789, score159,score369 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "x"],
        score159: [...score159, "x"],
        score369: [...score369, "x"],
       
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square9Turn: "player2" });
      const squareIndex = aIMoves.findIndex((move) => move === 9);
      aIMoves.splice(squareIndex,1)
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score789: [...score789, "o"],
        score159: [...score159, "o"],
        score369: [...score369, "o"]
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square9Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square9Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square9Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square9Turn === "player2") {
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
    if (square9Turn === "none") {
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

export default Square9;
