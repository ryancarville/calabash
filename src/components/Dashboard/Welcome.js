import React from "react";
export default function Welcome(props) {
  return (
    <article>
      <header>
        <h2>
          {" "}
          Welcome to Calabash Villa {window.sessionStorage.getItem("guestName")}
        </h2>
      </header>
      <p>
        We have created this dashboard to make sure you have all the important
        information you will need during your stay. Should you not find what you
        are looking you you can use the help section to contact us directly so
        we can answer any questions as quickly as possible.
      </p>
    </article>
  );
}
