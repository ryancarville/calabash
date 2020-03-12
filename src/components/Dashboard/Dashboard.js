import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import HouseRules from "./HouseRules";
import WifiInfo from "./WifiInfo";
import Activities from "./Activities";
import Directory from "./Directory";
import Help from "./Help";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      rules: false,
      wifi: false,
      activities: false,
      dir: false,
      help: false,
      loggedOut: false
    };
  }
  logOut = () => {
    window.sessionStorage.clear();
    setTimeout(() => {
      this.setState({
        loggedOut: true
      });
    }, 50);
  };
  handleView = view => {
    for (let [key] of Object.entries(this.state)) {
      if (key === view) {
        const active = {};
        active[key] = true;
        this.setState(active);
      } else {
        const notActive = {};
        notActive[key] = false;
        this.setState(notActive);
      }
    }
  };
  render() {
    if (this.state.loggedOut) {
      return <Redirect to="/" />;
    }
    return (
      <section>
        <header id="dash-header">
          <h2>
            Welcome to Calabash Villa{" "}
            {window.sessionStorage.getItem("guestName")}
          </h2>

          <button onClick={() => this.logOut()} className="logOut-button">
            Log Out
          </button>
        </header>
        <div id="dash-main">
          <aside id="dash-nav">
            <ul>
              <li onClick={() => this.handleView("welcome")}>
                <i className="fas fa-hospital-symbol"></i>
                <br />
                Welcome
              </li>
              <li onClick={() => this.handleView("rules")}>
                <i className="far fa-file-alt"></i>
                <br />
                House Rules
              </li>
              <li onClick={() => this.handleView("wifi")}>
                <i className="fas fa-wifi"></i>
                <br />
                Wifi Info
              </li>
              <li onClick={() => this.handleView("activities")}>
                <i className="fas fa-hiking"></i>
                <br />
                Activities
              </li>
              <li onClick={() => this.handleView("dir")}>
                <i className="far fa-address-card"></i>
                <br />
                Directory
              </li>
              <li onClick={() => this.handleView("help")}>
                <i className="far fa-question-circle"></i>
                <br />
                Help
              </li>
            </ul>
          </aside>
          <article id="dash-content">
            {this.state.welcome ? <Welcome /> : null}
            {this.state.rules ? <HouseRules /> : null}
            {this.state.wifi ? <WifiInfo /> : null}
            {this.state.activities ? <Activities /> : null}
            {this.state.dir ? <Directory /> : null}
            {this.state.help ? <Help /> : null}
          </article>
        </div>
      </section>
    );
  }
}
