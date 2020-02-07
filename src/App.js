import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/calabash_logo_social.jpg" alt="logo" />
        <figure className="bg-img" />
      </header>
      <article className="welcome-content">
        <p>
          We are currently in the process of building the platform as well as
          the villa! <br />
          <br />
          You can view the current state of the villa via our{" "}
          <a
            href="https://www.instagram.com/calabashvillabequia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram" /> Instagram account
          </a>{" "}
          or you can email us at{" "}
          <a href="mailto:hello@calabashvillabequia.com?subject=Inquiry from website">
            hello@calabashvillabequia.com
          </a>
        </p>
      </article>
    </div>
  );
}

export default App;
