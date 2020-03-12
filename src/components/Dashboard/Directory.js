import React, { Component } from "react";
import Restaurants from "./DirSecs/Restaurants";
import Transportation from "./DirSecs/Transportation";
import Emergency from "./DirSecs/Emergency";
import "./Directory.css";
export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: true,
      landTrans: false,
      emergency: false
    };
  }
  componentDidMount() {
    const el = document.getElementById(`dash-dir-restaurants`);
    el.style.backgroundColor = "orange";
    el.style.color = "white";
    el.style.borderRadius = "25px";
  }

  handleView = view => {
    for (let [key] of Object.entries(this.state)) {
      if (key === view) {
        const el = document.getElementById(`dash-dir-${key}`);
        el.style.backgroundColor = "orange";
        el.style.color = "white";
        el.style.borderRadius = "25px";
        const active = {};
        active[key] = true;
        this.setState(active);
      } else {
        const el = document.getElementById(`dash-dir-${key}`);
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
      <article id="dash-dir">
        <header>
          <h2>Directory</h2>
          <p>
            Here you will find all the contact information for the best services
            on the island.
          </p>
        </header>

        <nav id="dash-dir-nav">
          <ul>
            <li
              onClick={() => this.handleView("restaurants")}
              id="dash-dir-restaurants"
            >
              <i className="fas fa-utensils"></i>
              <br />
              Restaurants
            </li>
            <li
              onClick={() => this.handleView("landTrans")}
              id="dash-dir-landTrans"
            >
              <i className="fas fa-car"></i>
              <br />
              Land Transport
            </li>

            <li
              onClick={() => this.handleView("emergency")}
              id="dash-dir-emergency"
            >
              <i className="fas fa-first-aid"></i>
              <br />
              Emergency
            </li>
          </ul>
        </nav>
        <aside id="dash-dir-content">
          {this.state.restaurants ? <Restaurants /> : null}
          {this.state.landTrans ? <Transportation /> : null}
          {this.state.emergency ? <Emergency /> : null}
        </aside>
      </article>
    );
  }
}
