import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/calabash_logo_social.jpg" alt="logo" />
      </header>
      <article className="welcome-content">
        <h2>Welcome to Calabash Villa</h2>
        <p>
          We are currently in the process of building the platform, but you can
          view the current state of the villa via our Instagram account{" "}
          <a
            href="https://www.instagram.com/calabashvillabequia"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
        </p>
      </article>
    </div>
  );
}

export default App;
