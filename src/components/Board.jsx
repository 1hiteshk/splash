import React, { useState } from "react";
import Square from "./Square";
import "../App.css";
import CalculateWinner from "./CalculateWinner";

const Board = ({ board }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "winner : " + winner;
  } else {
    status = "Next Player : " + (isXTurn ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (isXTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXTurn(!isXTurn); // for alt. x,y turn bydefault first is x
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
              key={index}
            />
          );
        })}
      </div>
      <button className="resetGame" onClick={() => resetBoard()}>
        reset
      </button>
    </div>
  );
};

export default Board;
