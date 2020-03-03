import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./components/Animations/Animations.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Router />
        <Footer />
      </div>
    );
  }
}
