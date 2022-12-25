import React, { useState } from "react";
import ImageMarker from "react-image-marker";
import { useDispatch } from "react-redux";
import { flipHold } from "./boardSlice";
import "./Square.css";

export function Square({ image, row, col, active }) {
  const dispatch = useDispatch()

  return (
    <td className="holdcontainer">
      <div className={col === 0 || row === 0 ? "" : "img-fluid hold"}>
        <ImageMarker
          src={image}
          markers={active ? [{ top: 25, left: 40 }] : []}
          markerComponent={CustomMarker}
          onAddMarker={() =>
            col > 0 && row > 0 ? dispatch(flipHold({i: row - 1, j: col - 1})) : ''
          }
        />
      </div>
    </td>
  );
}

const CustomMarker = (props) => {
  return <span className="dot"></span>;
};
