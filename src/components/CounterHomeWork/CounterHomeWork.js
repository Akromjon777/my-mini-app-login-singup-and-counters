import React, { Component } from "react";
import "./CounterHomeWork.css";
class CounterHomeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
    };
  }

  incrment = () => {
    if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
  };

  decrment = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div className="w-50 mx-auto m-5 d-flex">
          <button
            className="btn btn-warning w-100 me-4"
            onClick={this.incrment}
          >
            +
          </button>
          <span>{this.state.count}</span>
          <button
            className="btn btn-warning w-100 ms-4"
            onClick={this.decrment}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default CounterHomeWork;
