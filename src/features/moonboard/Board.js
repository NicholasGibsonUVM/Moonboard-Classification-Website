import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "./boardSlice";
import { BoardSquare } from "./BoardSquare";

export const Board = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const board = useSelector(selectBoard);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth * 0.28,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(12, 1fr)`,
    gridTemplateRows: `repeat(19, 1fr)`,
    width: `${dimensions.width}px`,
    height: `${(dimensions.width * 19) / 12}px`,
    maxHeight: "100vh",
    margin: "auto",
  };

  const squares = board.map((hold, index) => (
    <BoardSquare
      image={hold.imageName}
      row={hold.row}
      col={hold.col}
      active={hold.active}
    />
  ));

  return <div style={gridStyle}>{squares}</div>;
};
