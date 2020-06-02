import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square1 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
}) => {
  const { square1Turn } = squarePlayerTurn;
  const { score123,score159,score147 } = winningScores;
  const playerSelect = () => {
   
    if (player.turn === "none" || "player1") {
      
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "x"],
        score159: [...score159, "x"],
        score147: [...score147, "x"],
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square1Turn: "player2" });
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score123: [...score123, "o"],
        score159: [...score159, "o"],
        score147: [...score147, "o"]
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square1Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square1Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square1Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square1Turn === "player2") {
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
    if (square1Turn === "none") {
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

export default Square1;
