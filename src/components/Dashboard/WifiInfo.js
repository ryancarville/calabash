import React from "react";
export default function WifiInfo(props) {
  return (
    <article id='wifi-sec' style={{ textAlign: "center" }}>
      <header>
        <h2>Wifi Information</h2>
      </header>
      <p>
        Calabash offers high speed internet access all around the property.{" "}
        <br />
        You will find all the connection information here.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <span>
          <h3>Wireless Network 2.8Ghz</h3>
          <i>Most coverage around the property</i>
          <p>Name: Calabash</p>
          <p>Password: RelaxNow</p>
        </span>
        <span>
          <h3>Wireless Network 5Ghz</h3>
          <i>Best for streaming but strongest in the house </i>
          <p>Name: CalabashHighSpeed</p>
          <p>Password: RelaxFastNow</p>
        </span>
      </div>
    </article>
  );
}
