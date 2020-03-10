import React, { Component } from "react";
import "./GuestLogin.css";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      error: null
    };
  }
  resetState = () => {
    this.setState({
      userEmail: "",
      error: null
    });
  };
  handleEmail = e => {
    this.setState({
      userEmail: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      error: "Server has yet to be created."
    });
  };
  render() {
    return this.state.error ? (
      <section className="login-sec">
        <div className="form-wrapper">
          <p>{this.state.error}</p>
          <button className="guest-login-button" onClick={this.resetState}>
            Go Back
          </button>
        </div>
      </section>
    ) : (
      <section className="login-sec">
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <header>
            <h2>Log In</h2>
          </header>
          <input
            type="email"
            name="email"
            id="guest-email"
            placeholder="Email Address Used For Booking Confirmation"
            require
            onChange={this.handleEmail}
          />

          <button className="guest-login-button" type="submit">
            Log In
          </button>
          <button className="guest-login-button" type="reset">
            Clear Form
          </button>
        </form>
      </section>
    );
  }
}
