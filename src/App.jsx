import React from "react";
import "./css/main.css";
import { Header, ScoreBoard, Result } from "./components";

function App() {
  return (
    <div>
      <Header />
      <ScoreBoard />
      <Result />
    </div>
  );
}

export default App;
