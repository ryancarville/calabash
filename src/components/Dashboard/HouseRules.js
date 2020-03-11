import React, { Component, Children } from "react";
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
      neighborhood: false,
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
  handleView = view => {
    if (view === "intro") {
      this.setState({
        intro: true,
        house: false,
        safes: false,
        water: false,
        pool: false,
        cleaning: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "house") {
      this.setState({
        house: true,
        intro: false,
        safes: false,
        water: false,
        pool: false,
        cleaning: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "safes") {
      this.setState({
        safes: true,
        intro: false,
        house: false,
        water: false,
        pool: false,
        cleaning: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "water") {
      this.setState({
        water: true,
        safes: false,
        intro: false,
        house: false,
        pool: false,
        cleaning: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "pool") {
      this.setState({
        pool: true,
        water: false,
        safes: false,
        intro: false,
        house: false,
        cleaning: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "cleaning") {
      this.setState({
        cleaning: true,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        inventory: false,
        neighborhood: false,
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
      });
    }
    if (view === "inventory") {
      this.setState({
        inventory: true,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        neighborhood: false,
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
      });
    }
    if (view === "neighbors") {
      this.setState({
        neighborhood: true,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
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
      });
    }
    if (view === "kids") {
      this.setState({
        kids: true,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        guests: false,
        parking: false,
        kitchen: false,
        appliances: false,
        garbage: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "guests") {
      this.setState({
        guests: true,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        parking: false,
        kitchen: false,
        appliances: false,
        garbage: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "parking") {
      this.setState({
        parking: true,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        kitchen: false,
        appliances: false,
        garbage: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "kitchen") {
      this.setState({
        kitchen: true,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        appliances: false,
        garbage: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "appliances") {
      this.setState({
        appliances: true,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        garbage: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "garbage") {
      this.setState({
        garbage: true,
        appliances: false,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        security: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "security") {
      this.setState({
        security: true,
        garbage: false,
        appliances: false,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        smoking: false,
        garden: false,
        damages: false
      });
    }
    if (view === "smoking") {
      this.setState({
        smoking: true,
        security: false,
        garbage: false,
        appliances: false,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        garden: false,
        damages: false
      });
    }
    if (view === "garden") {
      this.setState({
        garden: true,
        smoking: false,
        security: false,
        garbage: false,
        appliances: false,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false,
        damages: false
      });
    }
    if (view === "damages") {
      this.setState({
        damages: true,
        garden: false,
        smoking: false,
        security: false,
        garbage: false,
        appliances: false,
        kitchen: false,
        parking: false,
        guests: false,
        kids: false,
        neighborhood: false,
        inventory: false,
        cleaning: false,
        pool: false,
        water: false,
        safes: false,
        intro: false,
        house: false
      });
    }
  };
  render() {
    return (
      <article id="house-rules-wrapper">
        <ul id="house-rules-nav">
          <li onClick={() => this.handleView("intro")}>
            <i className="fas fa-bars"></i>
            <br />
            Intro
          </li>
          <li onClick={() => this.handleView("house")}>
            <i className="fas fa-home"></i>
            <br />
            House
          </li>
          <li onClick={() => this.handleView("safes")}>
            <i className="fas fa-lock"></i>
            <br />
            Safes
          </li>
          <li onClick={() => this.handleView("water")}>
            <i className="fas fa-tint"></i>
            <br />
            Water
          </li>
          <li onClick={() => this.handleView("pool")}>
            <i className="fas fa-swimmer"></i>
            <br />
            Pool & Deck
          </li>
          <li onClick={() => this.handleView("cleaning")}>
            <i className="fas fa-broom"></i>
            <br />
            Cleaning
          </li>
          <li onClick={() => this.handleView("inventory")}>
            <i className="fas fa-boxes"></i>
            <br />
            Inventory
          </li>
          <li onClick={() => this.handleView("neighbors")}>
            <i className="fas fa-store-alt"></i>
            <br />
            Neighbors
          </li>
          <li onClick={() => this.handleView("kids")}>
            <i className="fas fa-child"></i>
            <br />
            Children
          </li>
          <li onClick={() => this.handleView("guests")}>
            <i className="fas fa-users"></i>
            <br />
            Friends & Visitors
          </li>
          <li onClick={() => this.handleView("parking")}>
            <i className="fas fa-parking"></i>
            <br />
            Parking
          </li>
          <li onClick={() => this.handleView("kitchen")}>
            <i className="fas fa-blender"></i>
            <br />
            Kitchen
          </li>
          <li onClick={() => this.handleView("appliances")}>
            <i className="fas fa-tv"></i>
            <br />
            Appliances & Utilities
          </li>
          <li onClick={() => this.handleView("garbage")}>
            <i className="fas fa-trash-alt"></i>
            <br />
            Garbage
          </li>
          <li onClick={() => this.handleView("security")}>
            <i className="fas fa-shield-alt"></i>
            <br />
            Security
          </li>
          <li onClick={() => this.handleView("smoking")}>
            <i className="fas fa-smoking"></i>
            <br />
            Smoking
          </li>
          <li onClick={() => this.handleView("garden")}>
            <i className="fas fa-seedling"></i>
            <br />
            Garden
          </li>
          <li onClick={() => this.handleView("damages")}>
            <i className="fas fa-house-damage"></i>
            <br />
            Damages
          </li>
        </ul>
        {this.state.intro ? <Intro /> : null}
        {this.state.house ? <House /> : null}
        {this.state.safes ? <Safes /> : null}
        {this.state.water ? <Water /> : null}
        {this.state.pool ? <Pool /> : null}
        {this.state.cleaning ? <Cleaning /> : null}
        {this.state.inventory ? <Inventory /> : null}
        {this.state.neighborhood ? <Neighborhood /> : null}
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
      </article>
    );
  }
}
