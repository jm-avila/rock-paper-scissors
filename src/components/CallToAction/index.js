import React from "react";

export default function ({ result, handleReset }) {
  const action = result ? (
    <button onClick={handleReset}>Reset</button>
  ) : (
    <p> Make your move!</p>
  );

  return <div className="call-to-action">{action}</div>;
}
