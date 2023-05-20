import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBoardForAPI } from "./boardSlice";

export const BoardSubmit = () => {
  const [loading, setLoading] = useState(false);
  const board = useSelector(selectBoardForAPI);

  const callAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://moonboard-grade-guesser-api.herokuapp.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: board }),
        }
      );

      if (response.status !== 200)
        throw Error(`Response failed with status: ${response.status}`);

      const body = await response.json(); // Notice the await here
      console.log(body);
    } catch (error) {
      console.error(`API call failed with error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button disabled={loading} onClick={() => callAPI()}>
      Guess Grade
    </button>
  );
};
