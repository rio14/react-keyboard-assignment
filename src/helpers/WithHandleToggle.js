import React, { Component } from "react";

export const HandleToggle = (C) => {
  class Comp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toggled: false,
      };
    }

    handleToggle = () => {
      this.setState({
        toggled: !this.state.toggled,
      });
    };

    render() {
      return (
        <C toggled={this.state.toggled} handleToggle={this.handleToggle} />
      );
    }
  }
  return Comp;
};
