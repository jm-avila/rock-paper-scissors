import React, { useState } from "react";
import "./css/main.css";
import {
  Header,
  ScoreBoard,
  Result,
  Choices,
  CallToAction,
} from "./components";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState();

  function computerChoice() {
    const choicesValues = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesValues[randomIndex];
  }

  function gameResult(userInput, computerInput) {
    switch (userInput + computerInput) {
      //WIN
      case "rock" + "scissors":
      case "paper" + "rock":
      case "scissors" + "paper":
        return "win";
      // LOOSE
      case "rock" + "paper":
      case "paper" + "scissors":
      case "scissors" + "rock":
        return "loose";
      // Anything else is a TIE
      default:
        return "tie";
    }
  }

  function game(userInput) {
    const computerInput = computerChoice();
    const result = gameResult(userInput, computerInput);
    updateResults(result);
  }

  function updateResults(result) {
    switch (result) {
      case "win":
        setUserScore((prevState) => ++prevState);
        setResult("win");
        break;
      case "loose":
        setComputerScore((prevState) => ++prevState);
        setResult("loose");
        break;
      default:
        setResult("tie");
    }
  }

  return (
    <div>
      <Header />
      <ScoreBoard
        userScore={userScore}
        computerScore={computerScore}
        result={result}
      />
      <Result />
      <Choices userChoice={game} />
      <CallToAction />
    </div>
  );
}

export default App;
