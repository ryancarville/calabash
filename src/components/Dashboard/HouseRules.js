import React, { Component } from "react";
import Intro from "./Rules/Intro";
import House from "./Rules/House";
import Safes from "./Rules/Safes";
import Water from "./Rules/Water";
import Pool from "./Rules/Pool";
import Cleaning from "./Rules/Cleaning";
import Inventory from "./Rules/Inventory";
import Neighborhood from "./Rules/Neighborhood";
import Kids from "./Rules/Kids";
import Guests from "./Rules/Guests";
import Parking from "./Rules/Parking";
import Kitchen from "./Rules/Kitchen";
import Appliances from "./Rules/Appliancens";
import Garbage from "./Rules/Garbage";
import Security from "./Rules/Security";
import Smoking from "./Rules/Smoking";
import Garden from "./Rules/Garden";
import Damages from "./Rules/Damages";
export default class HouseRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      house: false,
      safes: false,
      water: false,
      pool: false,
      cleaning: false,
      inventory: false,
      neighbors: false,
      kids: false,
      guests: false,
      parking: false,
      kitchen: false,
      appliances: false,
      garbage: false,
      security: false,
      smoking: false,
      garden: false,
      damages: false
    };
  }
  componentDidMount() {
    const el = document.getElementById(`rules-intro`);
    el.style.borderBottom = "5px solid orange";
    el.style.color = "white";
  }

  handleView = view => {
    for (let [key] of Object.entries(this.state)) {
      if (key === view) {
        const el = document.getElementById(`rules-${key}`);
        el.style.borderBottom = "5px solid orange";
        el.style.color = "white";
        el.style.cursor = "pointer";

        let active = {};
        active[key] = true;
        this.setState(active);
      } else {
        const el = document.getElementById(`rules-${key}`);
        el.style.borderBottom = "none";
        el.style.color = "rgb(108, 108, 108)";
        el.style.cursor = "pointer";

        let notActive = {};
        notActive[key] = false;
        this.setState(notActive);
      }
    }
  };
  render() {
    return (
      <article id="house-rules-wrapper">
        <ul id="house-rules-nav">
          <li onClick={() => this.handleView("intro")} id="rules-intro">
            <i className="fas fa-bars"></i>
            <br />
            General
          </li>
          <li onClick={() => this.handleView("house")} id="rules-house">
            <i className="fas fa-home"></i>
            <br />
            House
          </li>
          <li onClick={() => this.handleView("safes")} id="rules-safes">
            <i className="fas fa-lock"></i>
            <br />
            Safes
          </li>
          <li onClick={() => this.handleView("water")} id="rules-water">
            <i className="fas fa-tint"></i>
            <br />
            Water
          </li>

          <li onClick={() => this.handleView("cleaning")} id="rules-cleaning">
            <i className="fas fa-broom"></i>
            <br />
            Cleaning
          </li>
          <li onClick={() => this.handleView("inventory")} id="rules-inventory">
            <i className="fas fa-boxes"></i>
            <br />
            Inventory
          </li>
          <li onClick={() => this.handleView("neighbors")} id="rules-neighbors">
            <i className="fas fa-store-alt"></i>
            <br />
            Neighbors
          </li>
          <li onClick={() => this.handleView("kids")} id="rules-kids">
            <i className="fas fa-child"></i>
            <br />
            Children
          </li>
          <li onClick={() => this.handleView("guests")} id="rules-guests">
            <i className="fas fa-users"></i>
            <br />
            Visitors
          </li>
          <li onClick={() => this.handleView("parking")} id="rules-parking">
            <i className="fas fa-parking"></i>
            <br />
            Parking
          </li>
          <li onClick={() => this.handleView("kitchen")} id="rules-kitchen">
            <i className="fas fa-blender"></i>
            <br />
            Kitchen
          </li>
          <li onClick={() => this.handleView("pool")} id="rules-pool">
            <i className="fas fa-swimmer"></i>
            <br />
            Pool & Deck
          </li>
          <li
            onClick={() => this.handleView("appliances")}
            id="rules-appliances"
          >
            <i className="fas fa-tv"></i>
            <br />
            Appliances & Utilities
          </li>
          <li onClick={() => this.handleView("garbage")} id="rules-garbage">
            <i className="fas fa-trash-alt"></i>
            <br />
            Garbage
          </li>
          <li onClick={() => this.handleView("security")} id="rules-security">
            <i className="fas fa-shield-alt"></i>
            <br />
            Security
          </li>
          <li onClick={() => this.handleView("smoking")} id="rules-smoking">
            <i className="fas fa-smoking"></i>
            <br />
            Smoking
          </li>
          <li onClick={() => this.handleView("garden")} id="rules-garden">
            <i className="fas fa-seedling"></i>
            <br />
            Garden
          </li>
          <li onClick={() => this.handleView("damages")} id="rules-damages">
            <i className="fas fa-house-damage"></i>
            <br />
            Damages
          </li>
        </ul>
        <aside>
          {this.state.intro ? <Intro /> : null}
          {this.state.house ? <House /> : null}
          {this.state.safes ? <Safes /> : null}
          {this.state.water ? <Water /> : null}
          {this.state.pool ? <Pool /> : null}
          {this.state.cleaning ? <Cleaning /> : null}
          {this.state.inventory ? <Inventory /> : null}
          {this.state.neighbors ? <Neighborhood /> : null}
          {this.state.kids ? <Kids /> : null}
          {this.state.guests ? <Guests /> : null}
          {this.state.parking ? <Parking /> : null}
          {this.state.kitchen ? <Kitchen /> : null}
          {this.state.appliances ? <Appliances /> : null}
          {this.state.garbage ? <Garbage /> : null}
          {this.state.security ? <Security /> : null}
          {this.state.smoking ? <Smoking /> : null}
          {this.state.garden ? <Garden /> : null}
          {this.state.damages ? <Damages /> : null}
        </aside>
      </article>
    );
  }
}
