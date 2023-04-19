import React, { Component } from "react";
import { KeypressConsumer } from "../context/KeypressProvider";

export const WithKeyPress = (C) => {
  class Comp extends Component {
    render() {
      return (
        <KeypressConsumer>{(values) => <C {...values} />}</KeypressConsumer>
      );
    }
  }
  return Comp;
};
