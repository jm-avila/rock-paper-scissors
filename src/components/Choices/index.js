import React from "react";
import { paper, rock, scissors } from "../../assets";

export default function ({ userChoice }) {
  function handleOnClick(e) {
    const value = e.currentTarget.value;
    userChoice(value);
  }
  return (
    <div className="choices">
      <button className="choice" onClick={handleOnClick} value="rock">
        <img src={rock} alt="" />
      </button>

      <button className="choice" onClick={handleOnClick} value="paper">
        <img src={paper} alt="" />
      </button>

      <button className="choice" onClick={handleOnClick} value="scissors">
        <img src={scissors} alt="" />
      </button>
    </div>
  );
}
