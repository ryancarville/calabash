import React, { Component } from "react";
import "./GuestLogin.css";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      pass: ""
    };
  }
  handleEmail = e => {
    this.setState({
      userEmail: e.target.value
    });
  };
  handlePass = e => {
    this.setState({
      pass: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    window.alert("Server Not Created Yet");
  };
  render() {
    return (
      <section id="login-sec">
        <form onSubmit={this.handleSubmit}>
          <header>
            <h2>Log In</h2>
          </header>
          <input
            type="email"
            name="email"
            id="guest-email"
            placeholder="Email Address"
            require
            onChange={this.handleEmail}
          />
          <input
            type="password"
            name="pass"
            id="guest-pass"
            placeholder="Password"
            required
            onChange={this.handlePass}
          />
          <button type="submit">Log In</button>
          <button type="reset">Clear Form</button>
        </form>
      </section>
    );
  }
}
