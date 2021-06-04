import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/calabash_logo_social.jpg";
import "./Footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayClass: "fadeOut"
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        this.setState({
          displayClass: "fadeIn"
        });
      } else {
        this.setState({
          displayClass: "fadeOut"
        });
      }
    });
  }

  render() {
    const loggedIn = window.sessionStorage.getItem("loggedIn");
    return (
      <footer id="footer">
        <article id="footer-contact-info">
          <aside>
            <img src={logo} alt="logo" id="footer-logo" />

            <span>
              <i className="fas fa-mobile-alt" /> Bequia: +1(784)432-6679
            </span>
            <span>
              <i className="fas fa-mobile-alt" /> Switzerland: +41(79)156-2329
            </span>
            <span>
              <i className="far fa-paper-plane"></i>{" "}
              <a href="mailto:calabashbequia@gmail.com">
                calabashbequia@gmail.com
              </a>
            </span>
            <span>
              Find us on{" "}
              <a
                href="https://www.google.com/maps/place/Calabash+Villa+Bequia/@13.0083318,-61.2271898,15z/data=!4m2!3m1!1s0x0:0x85e6429d6fbf9bc2?sa=X&hl=en&ved=2ahUKEwi-jrHwhO3nAhXHct8KHVPqA2oQ_BIwCnoECBUQCA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </span>
          </aside>
          <aside id="footer-instagram">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/calabashvillabequia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
          </aside>

          <i
            className={`far fa-arrow-alt-circle-up ${this.state.displayClass}`}
            id="back-to-top-btn"
            onClick={() => window.scrollTo(0, 0)}
          ></i>
        </article>
        <ul
          id="footer-ul"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="the-house">The House</Link>
          </li>
          <li>
            <Link to="the-defender">The Defender</Link>
          </li>
          <li>
            <Link to="the-island">The Island</Link>
          </li>
          <li>
            <Link to="reservations">Rates + Reservations</Link>
          </li>
          <li>
            <Link to="gallery">Gallery</Link>
          </li>
          <li>
            <Link to="our-story">Our Story</Link>
          </li>
          {loggedIn ? (
            <li>
              <Link to="/dashboard" onClick={this.openMenu}>
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={this.openMenu}>
                Guest Login
              </Link>
            </li>
          )}
        </ul>
        <br />
        <span id="copyright">
          <p>©2020 Calabash Villa Bequia</p>
        </span>
      </footer>
    );
  }
}
