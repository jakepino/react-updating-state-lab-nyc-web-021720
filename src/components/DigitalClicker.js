// Code DigitalClicker Component Here
import React from "react";

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0,
  };

  updatedState = () => {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.updatedState}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
