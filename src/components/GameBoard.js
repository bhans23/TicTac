import React from "react";
import Square1 from "../squares/Square1";
import Square2 from "../squares/Square2";
import Square3 from "../squares/Square3";
import Square4 from "../squares/Square4";
import Square5 from "../squares/Square5";
import Square6 from "../squares/Square6";
import Square7 from "../squares/Square7";
import Square8 from "../squares/Square8";
import Square9 from "../squares/Square9";

const GameBoard = ({
  player,
  setPlayer,
  squarePlayerTurn,
  setSquarePlayerTurn,
  winningScores,
  setWinningScores,
}) => {
  return (
    <div className="board">
      <Square1
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square2
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square3
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square4
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square5
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square6
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square7
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square8
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
      <Square9
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
      />
    </div>
  );
};

export default GameBoard;
