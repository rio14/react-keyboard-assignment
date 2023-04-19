import React from "react";
import Keypress from "../helpers/Keypress";
import { HandleToggle } from "../helpers/WithHandleToggle";
import "../App.css";

const C = (props) => {
  const { toggled, handleToggle } = props;

  return (
    <div className={"component c" + (toggled ? " purple" : "")}>
      C
      <Keypress
        description="Toggle color of component c"
        combo="shift c"
        callback={handleToggle}
      />
    </div>
  );
};

export default HandleToggle(C);
