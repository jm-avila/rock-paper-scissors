import React from "react";
import { paper, rock, scissors } from "../../assets";

export default function () {
  return (
    <div className="choices">
      <div id="paper" className="choice">
        <img src={paper} alt="" />
      </div>
      <div id="rock" className="choice">
        <img src={rock} alt="" />
      </div>
      <div id="scissors" className="choice">
        <img src={scissors} alt="" />
      </div>
    </div>
  );
}
