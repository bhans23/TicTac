import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square8 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
}) => {
  const { square8Turn } = squarePlayerTurn;

  const playerSelect = () => {
    if (player.turn === "none") {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square8Turn: "player2" });
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
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

  const buttonSquare = () => {
    return <div className="square">{finalSelect()}</div>;
  };

  return <>{buttonSquare()}</>;
};

export default Square8;
