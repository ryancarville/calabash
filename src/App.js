import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: 1,
      fadeIn: "fadeIn"
    };
  }
  startSlides = () => {
    setInterval(() => {
      this.setState({
        currImg: this.state.currImg + 1,
        fadeIn: "fadeIn"
      });
      if (this.state.currImg > 9) {
        this.setState({
          currImg: 1
        });
      }
    }, 4000);
  };
  componentDidMount() {
    this.startSlides();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/images/calabash_logo_social.jpg" alt="logo" />
        </header>
        <section>
          <img
            className={`render-slides ${this.state.fadeIn}`}
            src={`/images/renders/${this.state.currImg}.jpg`}
            alt="renders"
          />
          <article className="welcome-content">
            <p>
              We are currently in the process of building the platform as well
              as the villa! <br />
              <br />
              You can view the current state of the villa via our
              <br />
              <a
                href="https://www.instagram.com/calabashvillabequia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" /> Instagram account
              </a>
              <br />
              or you can email us at
              <br />
              <a href="mailto:hello@calabashvillabequia.com?subject=Inquiry from website">
                hello@calabashvillabequia.com
              </a>
            </p>
          </article>
        </section>
      </div>
    );
  }
}
