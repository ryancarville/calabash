import React, { Component } from "react";
import "./Help.css";
export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: "",
      name: window.sessionStorage.getItem("guestName"),
      message: "",
      error: null
    };
  }
  handleSelect = e => {
    this.setState({
      reason: e.target.value
    });
  };
  handleMsg = e => {
    this.setState({
      message: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch();
  };
  render() {
    return (
      <article id="dash-help">
        <header>
          <h2>Help</h2>
          <p>
            {window.sessionStorage.getItem("guestName")} we are here to help.
            <br />
            Please fill out the form below and we will get in touch as soon as
            possible.
          </p>
        </header>
        {this.state.error ? (
          <div>
            <h3>{this.state.error}</h3>
          </div>
        ) : null}
        <aside>
          {!this.state.messageSent ? (
            <>
              <form onSubmit={e => this.handleSubmit(e)}>
                <select
                  name="reason"
                  id="dash-help-select"
                  onChange={this.handleSelect}
                  required
                >
                  <option value="" disabled selected>
                    Select a reason*
                  </option>
                  <option value="general">General</option>
                  <option value="water">Water</option>
                  <option value="pool">Pool</option>
                  <option value="house">House</option>
                  <option value="wifi">WiFi</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  id="dash-help-msg"
                  placeholder="Enter message here...*"
                  onChange={this.handleMsg}
                  required
                ></textarea>
                <i style={{ fontSize: "14px", float: "right", width: "100%" }}>
                  <b style={{fontSize:'20px'}}>*</b> denotes required fields
                </i>
                <button type="submit">Send</button>
                <button type="reset">Clear Form</button>
              </form>
            </>
          ) : (
            <div>
              <p>
                Your message has been successfully submitted. Make yourself a
                drink and we will response before you finish it.
              </p>
            </div>
          )}
        </aside>
      </article>
    );
  }
}
