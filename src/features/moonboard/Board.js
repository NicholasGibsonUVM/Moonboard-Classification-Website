import React from "react";
import { useSelector } from "react-redux";
import { Square } from "./Square";
import { selectBoard } from "./boardSlice";
import "./Board.css";

const rows = [...Array(19).keys()];
const cols = [...Array(12).keys()];

export function Board() {
  const board = useSelector(selectBoard);

  return (
    <div className="board">
      <table className="boardgrid">
        <tbody>
          {rows.map((row_number, i) => (
            <tr key={i} className={"row-" + i}>
              {cols.map((col_number, j) => (
                <Square
                  image={
                    "images/moonboard_segments/row-" +
                    (row_number + 1) +
                    "-column-" +
                    (col_number + 1) +
                    ".jpg"
                  }
                  row={row_number}
                  col={col_number}
                  active={
                    row_number > 0 && col_number > 0
                      ? board[row_number - 1][col_number - 1] === 1
                      : 0
                  }
                  key={j}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
