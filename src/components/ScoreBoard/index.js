import React from "react";

export default function ({ userScore, computerScore, borderResultClass }) {
  const divClass = `score-board ${borderResultClass}`.trim();

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
