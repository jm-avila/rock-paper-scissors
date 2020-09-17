import React from "react";
import "./css/main.css";
import {
  Header,
  ScoreBoard,
  Result,
  Choices,
  CallToAction,
} from "./components";

function App() {
  return (
    <div>
      <Header />
      <ScoreBoard />
      <Result />
      <Choices />
      <CallToAction />
    </div>
  );
}

export default App;
