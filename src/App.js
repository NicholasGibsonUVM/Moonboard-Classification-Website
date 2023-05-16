import React from "react";
import "./App.css";
import { Board } from "./features/moonboard/Board";
import { BoardSubmit } from "./features/moonboard/BoardSubmit";

function App() {
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
          <BoardSubmit/>
        </div>
      </div>
    </div>
  );
}

export default App;
