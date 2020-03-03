import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, rotate: "" };
  }
  openMenu = () => {
    if (this.state.isActive === false) {
      this.setState({
        isActive: true,
        rotate: "rotateLeft",
        fade: "fadeIn"
      });
    } else {
      this.setState({
        fade: "fadeOut",
        rotate: "rotateRight"
      });
      setTimeout(() => {
        this.setState({
          isActive: false
        });
      }, 1000);
    }
  };
  closeMenu = () => {
    this.setState({
      fade: "fadeOut",
      rotate: "rotateRight"
    });
    setTimeout(() => {
      this.setState({
        isActive: false
      });
    }, 1000);
  };
  render() {
    return (
      <>
        <Link to="/" onClick={this.closeMenu} id="logo">
          <img src="/images/calabash_logo_social.jpg" alt="logo" />
        </Link>
        <nav
          className="nav"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {this.state.isActive ? (
            <ul className={`${this.state.fade}`}>
              <li>
                <Link to="/" onClick={this.openMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/the-house" onClick={this.openMenu}>
                  The House
                </Link>
              </li>
              <li>
                <Link to="/the-defender" onClick={this.openMenu}>
                  The Defender
                </Link>
              </li>
              <li>
                <Link to="/the-island" onClick={this.openMenu}>
                  The Island
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={this.openMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-story" onClick={this.openMenu}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/reservations" onClick={this.openMenu}>
                  Rates + Reservations
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={this.openMenu}>
                  Guest Login
                </Link>
              </li>
            </ul>
          ) : null}
          <i
            className={`far fa-compass hamburger ${this.state.rotate}`}
            onClick={this.openMenu}
          />
        </nav>
      </>
    );
  }
}
export default Nav;
