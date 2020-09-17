import React, { useState, useEffect } from "react";

export default function ({ userScore, computerScore, result }) {
  const [borderResultClass, setBorderResultClass] = useState("");

  useEffect(() => {
    if (result) setBorderResultClass(result);
  }, [result]);

  const divClass = `score-board ${borderResultClass}`;

  return (
    <div className={divClass}>
      <div id="user-label" className="badge">
        user
      </div>
      <div id="computer-label" className="badge">
        comp
      </div>
      <span id="user-score">{userScore}</span>:
      <span id="computer-score">{computerScore}</span>
    </div>
  );
}
