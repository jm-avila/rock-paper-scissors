import React, { useState, useEffect } from "react";

export default function ({ result }) {
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    switch (result) {
      case "win":
        setResultMessage("You Win!");
        break;
      case "loose":
        setResultMessage("You Loose!");
        break;
      case "tie":
        setResultMessage("Tie");
        break;
      default:
        setResultMessage("");
    }
  }, [result]);

  return (
    <div className="result">
      <p>{resultMessage}</p>
    </div>
  );
}
