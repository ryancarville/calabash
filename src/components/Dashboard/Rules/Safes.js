import React from "react";

export default function Safes(props) {
  return (
    <article>
      <span>
        <h2>Safes</h2>
        <p>
          Each bedroom comes with one(1) personal effects safe. They are large
          enough to fit laptops/tablets/phones/travel documents/money etc.{" "}
        </p>
        <h3>How to Use Safe: </h3>
        <ol>
          <li>Place all items inside and close the door. </li>
          <li>Enter your secret 4 digit code</li>
          <li>Press “Lock” </li>
          <li>
            You should hear the safe door lock and the digital display will read
            “ LOCKED”{" "}
          </li>
          <li>To open enter your secret code.</li>
          <li>Safe will unlock and door will open.</li>{" "}
        </ol>
        <p>
          A code must be entered every time you want to lock the safe. It can be
          the same code as before, but it does not remember your last entry.
          Should you forget your code or have any questions please contact us.
          We keep the master keys to all the safes off-site for your protection.
        </p>
      </span>
    </article>
  );
}
