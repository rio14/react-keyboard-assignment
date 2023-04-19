import React from "react";
import Keypress from "../helpers/Keypress";
import { HandleToggle } from "../helpers/WithHandleToggle";
import "../App.css";

const B = (props) => {
  const { toggled, handleToggle } = props;

  return (
    <div className={"component b" + (toggled ? " tomato" : "")}>
      B
      <Keypress
        description="Toggle color of component B"
        combo="shift b"
        callback={handleToggle}
      />
    </div>
  );
};

export default HandleToggle(B);
