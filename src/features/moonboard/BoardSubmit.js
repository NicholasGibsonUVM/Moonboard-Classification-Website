import React from "react";

export const BoardSubmit = (props) => {
  return (
    <button disabled={props.loading} onClick={() => props.callAPI()}>
      Guess Grade
    </button>
  );
};
