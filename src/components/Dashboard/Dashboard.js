import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import HouseRules from "./HouseRules";
import WifiInfo from "./WifiInfo";
import Enertainment from "./Entertainment";
import Directory from "./Directory";
import Help from "./Help";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      houseRules: false,
      wifiInfo: false,
      entertainment: false,
      directory: false,
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
    if (view === "welcome") {
      this.setState({
        welcome: true,
        houseRules: false,
        wifiInfo: false,
        entertainment: false,
        directory: false,
        help: false,
        loggedOut: false
      });
    }
    if (view === "rules") {
      this.setState({
        welcome: false,
        houseRules: true,
        wifiInfo: false,
        entertainment: false,
        directory: false,
        help: false,
        loggedOut: false
      });
    }
    if (view === "wifi") {
      this.setState({
        welcome: false,
        houseRules: false,
        wifiInfo: true,
        entertainment: false,
        directory: false,
        help: false,
        loggedOut: false
      });
    }
    if (view === "entertainment") {
      this.setState({
        welcome: false,
        houseRules: false,
        wifiInfo: false,
        entertainment: true,
        directory: false,
        help: false,
        loggedOut: false
      });
    }
    if (view === "dir") {
      this.setState({
        welcome: false,
        houseRules: false,
        wifiInfo: false,
        entertainment: false,
        directory: true,
        help: false,
        loggedOut: false
      });
    }
    if (view === "help") {
      this.setState({
        welcome: false,
        houseRules: false,
        wifiInfo: false,
        entertainment: false,
        directory: false,
        help: true,
        loggedOut: false
      });
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
            {this.state.houseRules ? <HouseRules /> : null}
            {this.state.wifiInfo ? <WifiInfo /> : null}
            {this.state.entertainment ? <Enertainment /> : null}
            {this.state.directory ? <Directory /> : null}
            {this.state.help ? <Help /> : null}
          </article>
        </div>
      </section>
    );
  }
}
