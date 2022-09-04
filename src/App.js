import React, { Component } from "react";
import CounterHomeWork from "./components/CounterHomeWork/CounterHomeWork";
import Login from "./components/Login/Login";
import SignUp from "./components/SingUp/SignUp";
// import Practice from "./components/Practice/Practice";
// import Counter from "./components/Counter/Counter";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changePages: true,
    };
  }

  render() {
    return (
      <div>
        {/* <Counter />
        <Practice /> */}
        {this.state.changePages ? (
          <Login
            changeSignUpPage={() => this.setState({ changePages: false })}
          />
        ) : (
          <SignUp
            changeLoginPage={() => this.setState({ changePages: true })}
          />
        )}

        <div className="w-50 mx-auto m-5 border border-3">
          <h2 className="text-center mt-2">Counters</h2>
          <CounterHomeWork count={0} />
          <CounterHomeWork count={5} />
          <CounterHomeWork count={10} />
        </div>
      </div>
    );
  }
}

export default App;
