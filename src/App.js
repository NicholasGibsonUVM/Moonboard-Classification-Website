import { React, useState } from "react";
import { useSelector } from "react-redux";
import { selectBoardForAPI } from "./features/moonboard/boardSlice";
import "./App.css";
import { Board } from "./features/moonboard/Board";
import { BoardSubmit } from "./features/moonboard/BoardSubmit";

function App() {
  const [loading, setLoading] = useState(false);
  const [grade, setGrade] = useState("");
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
      setGrade(body.prediction);
    } catch (error) {
      console.error(`API call failed with error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col gy-2">
          <div className="grid">
            <Board />
          </div>
        </div>
        <div className="col gy-2">
          <h1>Moonboard Grade Guesser</h1>
          <BoardSubmit callAPI={callAPI} loading={loading} />
          <h2>Predicted Grade</h2>
          <h3>{grade}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
