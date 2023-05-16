import React from "react";
import ImageMarker from "react-image-marker";
import { useDispatch } from "react-redux";
import { flipHold } from "./boardSlice";

export function BoardSquare({ image, row, col, active }) {
  const dispatch = useDispatch();

  return (
    <ImageMarker
      src={image}
      markers={active ? [{ top: 25, left: 40 }] : []}
      markerComponent={CustomMarker}
      onAddMarker={() =>
        col > 1 && row > 1 ? dispatch(flipHold({ i: row, j: col })) : ""
      }
    />
  );
}

const CustomMarker = (props) => {
  const dotStyle = {
    height: "10px",
    width: "10px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
  };

  return <span className="dot" style={dotStyle}></span>;
};
