import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactForm.css";

const API = "https://powerful-garden-10065.herokuapp.com/calabash/send";
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      arrivalDate: "",
      departureDate: "",
      defender: false,
      message: "",
      mailSent: false,
      error: null
    };
  }
  resetState = () => {
    this.setState({
      fullName: "",
      email: "",
      arrivalDate: "",
      departureDate: "",
      defender: false,
      message: ""
    });
  };
  handleFullName = e => {
    this.setState({
      fullName: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleStartDate = date => {
    this.setState({
      arrivalDate: date
    });
  };
  handleEndDate = date => {
    this.setState({
      departureDate: date
    });
  };
  handleDefender = () => {
    this.setState({
      defender: !this.state.defender
    });
  };
  handleMessage = e => {
    this.setState({
      message: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let data = this.state;
    console.log(JSON.stringify(data));
    fetch(`${API}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data),
      mode: "cors"
    })
      .then(result => {
        console.log(result);
        if (!result.ok) {
          this.setState({
            error: true
          });
        } else {
          this.setState({
            mailSent: result.ok
          });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };
  render() {
    return (
      <>
        {this.state.error ? (
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            We are sorry for the inconvenience, but something went wrong with
            your submission. <br /> Please email us at{" "}
            <a href="mailto:calabashbequia@gmail.com?subject=Website Enquiry">
              hello@calabashvillabequia.com
            </a>
          </div>
        ) : null}
        {!this.state.error ? (
          !this.state.mailSent ? (
            <form id="booking-form">
              <span>
                <header>
                  <h2>Booking Request Form</h2>
                </header>
                <input
                  type="text"
                  name="fullName"
                  onChange={this.handleFullName}
                  placeholder="Full Name*"
                  value={this.state.fullName}
                  required
                />

                <input
                  type="email"
                  name="email"
                  onChange={this.handleEmail}
                  placeholder="Email Address*"
                  value={this.state.email}
                  required
                />

                <DatePicker
                  placeholderText="Arrival Date*"
                  name="arrivalDate"
                  selected={this.state.arrivalDate}
                  onChange={this.handleStartDate}
                  value={this.state.arrivalDate}
                  required
                />
                <DatePicker
                  placeholderText="Departure Date*"
                  name="departureDate"
                  selected={this.state.departureDate}
                  onChange={this.handleEndDate}
                  value={this.state.departureDate}
                  required
                />
                <span id="defender-checkbox">
                  <label htmlFor="defender">
                    Check if interested in the Defender?
                  </label>
                  <input
                    type="checkbox"
                    name="defender"
                    onChange={this.handleDefender}
                  />
                </span>
                <i style={{ fontSize: 14 }}>* denotes required fields</i>
              </span>
              <span>
                <textarea
                  name="message"
                  placeholder="Enter message here..."
                  value={this.state.message}
                  onChange={this.handleMessage}
                ></textarea>
                <span id="contact-form-buttons">
                  <button
                    type="submit"
                    onClick={e => {
                      this.handleSubmit(e);
                    }}
                  >
                    Send
                  </button>
                  <button type="button" onClick={this.resetState}>
                    Clear Form
                  </button>
                </span>
              </span>
            </form>
          ) : (
            <div id="form-confirmation">
              Thank you for contacting us. We will get in touch with you as soon
              as we can.
            </div>
          )
        ) : null}
        )}
      </>
    );
  }
}
