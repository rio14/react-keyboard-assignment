import React from "react";
import { WithKeyPress } from "../helpers/WithKeyPress";

const Listeners = ({ keypressListeners }) => {
  return (
    <div className="list">
      <h3>Active listeners</h3>
      <ul>
        {keypressListeners.map((item) => (
          <li key={item.id}>
            {item.combo} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithKeyPress(Listeners);
