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
  aIMoves
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
        aIMoves={aIMoves}
      />
      <Square2
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square3
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square4
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square5
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square6
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square7
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square8
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
      <Square9
        player={player}
        setPlayer={setPlayer}
        squarePlayerTurn={squarePlayerTurn}
        setSquarePlayerTurn={setSquarePlayerTurn}
        winningScores={winningScores}
        setWinningScores={setWinningScores}
        aIMoves={aIMoves}
      />
    </div>
  );
};

export default GameBoard;
