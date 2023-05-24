import React from "react";
import { useDispatch } from "react-redux";
import { flipHold } from "./boardSlice";

export function BoardSquare({ image, row, col, active }) {
  const dispatch = useDispatch();

  const squareStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div stye={squareStyle}>
      <img
        src={image}
        onClick={() => dispatch(flipHold({ i: row, j: col }))}
        alt="Moonboard Hold"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: active ? "2px solid red" : "none",
        }}
      />
    </div>
  );
}
