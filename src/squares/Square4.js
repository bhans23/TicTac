import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square4 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
  aIMoves
}) => {
  const { square4Turn } = squarePlayerTurn;
  const { score456, score147 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "x"],
        score147: [...score147, "x"]
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square4Turn: "player2" });
      const squareIndex = aIMoves.findIndex((move) => move === 4);
      aIMoves.splice(squareIndex,1)
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score147: [...score147, "o"]
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square4Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square4Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square4Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square4Turn === "player2") {
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
    if (square4Turn === "none") {
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

export default Square4;
