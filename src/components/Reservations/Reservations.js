import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";
import palms from "./images/palms.jpeg";
import "./Reservations.css";
import { Component } from "react";
export default class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactForm: false
    };
  }
  handleShowForm = () => {
    this.setState({
      showContactForm: !this.state.showContactForm
    });
  };
  render() {
    window.scrollTo(0, 0);
    return (
      <section id="res-sec">
        <header id="palm-img">
          <img src={palms} alt="palms" />
          <aside id="res-intro">
            <h2>Rates + Reservations</h2>
            <p>
              Calabash was designed to offer many rental options to suit your
              needs. <br />
              Rent the entire house or individual floors. All prices in USD
            </p>
            <span>
              <Link to={{ pathname: "/the-island", state: { from: "travel" } }}>
                How to get to Bequia
              </Link>
              <br />
              <a href="#booking-form">Booking Request Form</a>
            </span>
          </aside>
        </header>
        <article id="res-months">
          <span>
            <center>
              <h3>High Season</h3>
            </center>
            <aside id="high-season">
              <span>
                <h4>December - April</h4>
                <p>Entire Villa: $2500/week</p>
                <p>Penthouse Flat: $1500/week</p>
                <p>Garden Flat: $1200/week</p>
              </span>
              <span>
                <h4>Christmas and Easter period</h4>
                <p>Entire Villa: $3500/week</p>
                <p>Penthouse Flat: $2000/week</p>
                <p>Garden Flat: $1600/week</p>
              </span>
            </aside>
          </span>

          <span id="low-season">
            <h3>Low Season</h3>
            <h4>May - November</h4>
            <p>Entire Villa: $1800/week</p>
            <p>Penthouse Flat: $1100/week</p>
            <p>Garden Flat: $800/week</p>
          </span>
        </article>

        <span>
          <iframe
            src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FPort_of_Spain&amp;src=Y2FsYWJhc2hiZXF1aWFAZ21haWwuY29t&amp;src=a3NmM2w5ZGFtY25tOW50MmlhMTNwdjVzYTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OWhtdWhqMmZiOTNoNGM1Z2lsc2lpbWJ1a2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmFhaXJuY3B0NDg0MmxuY2VmNGh1OWFwMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%234285F4&amp;color=%237CB342&amp;color=%23F09300&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;title&amp;showTitle=0"
            style={{ border: 0 }}
            id="res-calender"
            frameBorder="0"
            scrolling="no"
            title="google-cal"
          />

          <div id="cal-legend-wrapper">
            <span>
              <div id="cal-legend-villa"></div>
              Entire Villa Booked
            </span>
            <span>
              <div id="cal-legend-penthouse"></div>
              Penthouse Flat Booked
            </span>
            <span>
              <div id="cal-legend-garden"></div>
              Garden Flat Booked
            </span>
          </div>
        </span>
        <ContactForm handleShowForm={this.handleShowForm} />
      </section>
    );
  }
}
