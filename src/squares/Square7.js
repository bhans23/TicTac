import React, { useState } from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square7 = ({ player1, setPlayer1 }) => {
  const [squareType, setSquareType] = useState("none");
  const playerSelect = () => {
    if (player1.turn === "none") {
      setPlayer1({
        turn: "player2",
      });

      setSquareType("player2");
    }
    if (player1.turn === "player2") {
      setPlayer1({
        turn: "player1",
      });
      setSquareType("player1");
    } else {
      setPlayer1({
        turn: "player2",
      });

      setSquareType("player2");
    }
  };

  const squareSelect = () => {
    if (squareType === "none") {
      return <> </>;
    }
    if (squareType === "player2") {
      return (
        <>
          <XSquare />
        </>
      );
    } else {
      return (
        <>
          <OSquare />
        </>
      );
    }
  };

  const finalSelect = () => {
    if (squareType === "none") {
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

export default Square7;