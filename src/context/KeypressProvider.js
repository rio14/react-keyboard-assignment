import React, { createContext, useState } from "react";

const KeypressContext = createContext({});

const { Provider, Consumer: KeypressConsumer } = KeypressContext;

const KeypressProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const add = (listener) => {
    setState((prevState) => [...prevState, listener]);
  };

  const remove = (id) => {
    const newState = state.filter((idx) => idx.id !== id);
    setState(newState);
  };

  return (
    <Provider value={{ add, remove, keypressListeners: state }}>
      {children}
    </Provider>
  );
};

export default KeypressContext;

export { KeypressProvider, KeypressConsumer };
