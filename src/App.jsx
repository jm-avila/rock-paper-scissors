import React, { useState } from "react";
import "./css/main.css";
import {
  Header,
  ScoreBoard,
  Result,
  Choices,
  CallToAction,
  withBorder,
} from "./components";

const ScoreBoardWithBorder = withBorder(ScoreBoard);
const ChoicesWithBorder = withBorder(Choices);

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
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        return "win";
      // LOOSE
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
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

  function handleReset() {
    setUserScore(0);
    setComputerScore(0);
    setResult();
  }

  return (
    <div>
      <Header />
      <ScoreBoardWithBorder
        userScore={userScore}
        computerScore={computerScore}
        result={result}
      />
      <Result />
      <ChoicesWithBorder userChoice={game} result={result} />
      <CallToAction result={result} handleReset={handleReset} />
    </div>
  );
}

export default App;
