import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      startDate: "",
      endDate: "",
      defender: false,
      message: ""
    };
  }
  resetState = () => {
    this.setState({
      fullName: "",
      email: "",
      startDate: "",
      endDate: "",
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
      startDate: date
    });
  };
  handleEndDate = date => {
    this.setState({
      endDate: date
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
    fetch();
  };
  render() {
    return (
      <form action="../sendEmail.php" id="booking-form">
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
            selected={this.state.startDate}
            onChange={this.handleStartDate}
            value={this.state.startDate}
            required
          />
          <DatePicker
            placeholderText="Departure Date*"
            name="departureDate"
            selected={this.state.endDate}
            onChange={this.handleEndDate}
            value={this.state.endDate}
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
            <button type="submit">Send</button>
            <button type="button" onClick={this.resetState}>
              Clear Form
            </button>
          </span>
        </span>
      </form>
    );
  }
}
