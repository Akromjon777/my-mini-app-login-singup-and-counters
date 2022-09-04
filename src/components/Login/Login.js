import React, { Component } from "react";
import "./SignUp.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitForm = (evt) => {
      evt.preventDefault();
    };
  }

  activePage = () => {
    this.props.changeSignUpPage();
  };

  render() {
    return (
      <div className="app w-50 mx-auto border border-3 p-5">
        <h3 className="text-uppercase text-secondary fs-5">Login</h3>
        <form onSubmit={this.handleSubmitForm}>
          <label>Email:</label>
          <input className="form-control" type="text" />
          <label className="mt-3">Password:</label>
          <input className="form-control mb-3" type="password" />
          <button className="btn btn-danger w-100 rounded">Login</button>
        </form>
        <p className="text-end fs-6 text-secondary">Forgot password?</p>
        <div className="icons text-center">
          <i class="fa-brands fa-google border border-3 rounded p-2 pe-auto"></i>
          <i class="fa-brands fa-facebook mt-4 mx-3 border border-3 rounded p-2 pe-auto"></i>
          <i class="fa-brands fa-linkedin-in border border-3 rounded p-2 pe-auto"></i>
        </div>
        <p className="text-center mt-3 text-secondary">
          Need a account?{" "}
          <a
            onClick={this.activePage}
            className="text-uppercase text-secondary"
            href="#"
          >
            SingUp
          </a>
        </p>
      </div>
    );
  }
}
