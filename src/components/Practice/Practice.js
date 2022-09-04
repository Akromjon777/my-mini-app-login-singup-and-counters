import React, { Component } from "react";
import LightOff from "../assets/images/light-bulb-off.png";
import LightOn from "../assets/images/light-bulb-on.png";

export default class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    };
  }

  off = () => {
    this.setState({ active: true });
  };

  on = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <>
        {this.state.active ? (
          <img
            className="mx-3 m-5"
            onClick={this.on}
            width="200"
            height="200"
            src={LightOn}
            alt="This is image a Light blub on"
          />
        ) : (
          <img
            className="mx-3 m-5"
            onClick={this.off}
            width="200"
            height="200"
            src={LightOff}
            alt="This is image a Light blub of"
          />
        )}
      </>
    );
  }
}
