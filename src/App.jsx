import React from "react";
import "./css/main.css";
import { Header, ScoreBoard, Result, Choices } from "./components";

function App() {
  return (
    <div>
      <Header />
      <ScoreBoard />
      <Result />
      <Choices />
    </div>
  );
}

export default App;
