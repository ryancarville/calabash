import React, { Component } from "react";
import Diving from "./Activities/Diving";
import Hiking from "./Activities/Hiking";
import Fishing from "./Activities/Fishing";
import WaterSports from "./Activities/WaterSports";
import Wellness from "./Activities/Wellness";
import Culture from "./Activities/Culture";
import "./Activities.css";

export default class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diving: true,
      hiking: false,
      fishing: false,
      waterSports: false,
      wellness: false,
      culture: false
    };
  }
  componentDidMount() {
    const el = document.getElementById(`activities-nav-diving`);
    el.style.backgroundColor = "orange";
    el.style.color = "white";
    el.style.borderRadius = "25px";
  }

  handleView = view => {
    for (let [key] of Object.entries(this.state)) {
      if (key === view) {
        const el = document.getElementById(`activities-nav-${key}`);
        el.style.backgroundColor = "orange";
        el.style.color = "white";
        el.style.borderRadius = "25px";
        const active = {};
        active[key] = true;
        this.setState(active);
      } else {
        const el = document.getElementById(`activities-nav-${key}`);
        el.style.backgroundColor = "white";
        el.style.color = "black";
        el.style.borderRadius = "0px";
        const notActive = {};
        notActive[key] = false;
        this.setState(notActive);
      }
    }
  };
  render() {
    return (
      <article id="dash-activities">
        <header>
          <h2>Activities</h2>
          <p>
            If you're not in the mood for liming, maybe try some of the best
            activities the island has to offer.
          </p>
        </header>
        <nav id="dash-activities-nav">
          <ul>
            <li
              onClick={() => this.handleView("diving")}
              id="activities-nav-diving"
            >
              <i className="fas fa-swimmer"></i>
              <br />
              Diving
            </li>
            <li
              onClick={() => this.handleView("hiking")}
              id="activities-nav-hiking"
            >
              <i className="fas fa-hiking"></i>
              <br />
              Hiking
            </li>
            <li
              onClick={() => this.handleView("fishing")}
              id="activities-nav-fishing"
            >
              <i className="fas fa-fish"></i>
              <br />
              Fishing
            </li>
            <li
              onClick={() => this.handleView("waterSports")}
              id="activities-nav-waterSports"
            >
              <i className="fas fa-anchor"></i>
              <br />
              Water Sports
            </li>
            <li
              onClick={() => this.handleView("wellness")}
              id="activities-nav-wellness"
            >
              <i className="fas fa-spa"></i>
              <br />
              Wellness
            </li>
            <li
              onClick={() => this.handleView("culture")}
              id="activities-nav-culture"
            >
              <i className="fas fa-paint-brush"></i>
              <br />
              Culture
            </li>
          </ul>
        </nav>
        <aside id="dash-activities-content">
          {this.state.diving ? <Diving /> : null}
          {this.state.hiking ? <Hiking /> : null}
          {this.state.fishing ? <Fishing /> : null}
          {this.state.waterSports ? <WaterSports /> : null}
          {this.state.wellness ? <Wellness /> : null}
          {this.state.culture ? <Culture /> : null}
        </aside>
      </article>
    );
  }
}
