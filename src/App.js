import React from "react";
import "./App.css";
import { Board } from "./features/moonboard/Board";

function App() {
  return (
    <div className="col gy-5">
      <nav className="navbar navbar-light bg-light row">
        <div className="container gx-5">
          <h1>Moonboard Grade Guesser</h1>
        </div>
      </nav>
      <div className="row">
        <Board />
      </div>
      <footer className="bg-light text-center text-lg-start row">
        <div className="text-center p-3">Created by Nicholas Gibson</div>
      </footer>
    </div>
  );
}

export default App;
