import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./GuestLogin.css";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      loggedIn: false,
      error: null
    };
  }
  resetState = () => {
    this.setState({
      userEmail: "",
      loggedIn: false,
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
    if (this.state.userEmail === "testUser@gmail.com") {
      window.sessionStorage.setItem("loggedIn", true);
      window.sessionStorage.setItem("guestName", 'Test User');
      setTimeout(() => {
        this.setState({
          loggedIn: true
        });
      }, 50);
    } else {
      this.setState({
        error: "Email is incorrect"
      });
    }
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return this.state.error ? (
      <section className="login-sec">
        <div className="form-wrapper">
          <p>{this.state.error}</p>
          <button className="guest-login-button" onClick={this.resetState}>
            Try Again
          </button>
          <Link className="guest-login-button" to="/">
            Homepage
          </Link>
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
