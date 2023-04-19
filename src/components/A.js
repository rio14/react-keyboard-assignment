import React from "react";
import Keypress from "../helpers/Keypress";
import { HandleToggle } from "../helpers/WithHandleToggle";
import "../App.css";

const A = (props) => {
  const { toggled, handleToggle } = props;

  return (
    <div className={"component a" + (toggled ? " olive" : "")}>
      A
      <Keypress
        description="Toggle color of component A"
        combo="shift a"
        callback={handleToggle}
      />
    </div>
  );
};

export default HandleToggle(A);
