import React from "react";

export default function () {
  return (
    <div className="score-board">
      <div id="user-label" className="badge">
        user
      </div>
      <div id="computer-label" className="badge">
        comp
      </div>
      <span id="user-score">0</span>:<span id="computer-score">0</span>
    </div>
  );
}
