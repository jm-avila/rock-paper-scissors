import React from "react";
import { paper, rock, scissors } from "../../assets";

export default function ({ userChoice, borderResultClass }) {
  function handleOnClick(e) {
    const value = e.currentTarget.value;
    userChoice(value);
  }

  const divClass = `choice ${borderResultClass}`.trim();

  return (
    <div className="choices">
      <button className={divClass} onClick={handleOnClick} value="rock">
        <img src={rock} alt="" />
      </button>

      <button className={divClass} onClick={handleOnClick} value="paper">
        <img src={paper} alt="" />
      </button>

      <button className={divClass} onClick={handleOnClick} value="scissors">
        <img src={scissors} alt="" />
      </button>
    </div>
  );
}
