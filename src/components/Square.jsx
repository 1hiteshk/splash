import React from "react";
import "../App.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="">
      <div className="square" onClick={onSquareClick}>
        {value}
      </div>
    </div>
  );
};

export default Square;
