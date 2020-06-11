import React from "react";
import XSquare from "./XSquare";
import OSquare from "./OSquare";

const Square5 = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
  player1Score,
  setPlayer1Score
}) => {
  const { square5Turn } = squarePlayerTurn;
  const { score456, score159,score357,score258 } = winningScores;
  const playerSelect = () => {
    if (player.turn === "none" || "player1") {
      setPlayer({
        turn: "player2",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "x"],
        score159: [...score159, "x"],
        score357: [...score357, "x"],
        score258: [...score258, "x"],
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square5Turn: "player2" });
    }
    if (player.turn === "player2") {
      setPlayer({
        turn: "player1",
      });
      setWinningScores({
        ...winningScores,
        score456: [...score456, "o"],
        score159: [...score159, "o"],
        score357: [...score357, "o"],
        score258: [...score258, "o"],
        
      });
      setSquarePlayerTurn({ ...squarePlayerTurn, square5Turn: "player1" });
    } else {
      setPlayer({
        turn: "player2",
      });

      setSquarePlayerTurn({ ...squarePlayerTurn, square5Turn: "player2" });
    }
  };

  const squareSelect = () => {
    if (square5Turn === "player1") {
      return (
        <>
          <OSquare />
        </>
      );
    }
    if (square5Turn === "player2") {
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
    if (square5Turn === "none") {
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

export default Square5;
