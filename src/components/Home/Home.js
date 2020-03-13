import React from "react";
import { Link } from "react-router-dom";
import defender from "./images/defender/2.jpg";
import island from "./images/island/bequia-image.jpg";
import Slideshow from "../Slideshow/Slideshow";
import "./Home.css";

export default function Home(props) {
  return (
    <section id="home-sec">
      <article id="home-main">
        <Slideshow autoPlay={true} />
        <header>
          <h2>Welcome to Calabash Villa!</h2>
          <p>
            A luxury rental house on the tropical island of Bequia, Saint
            Vincent and the Grenadines. Here you will find all the information
            about the house, the Land Rover Defender and all the island has to
            offer. Should you have any questions you can use the{" "}
            <Link to="/reservations#booking-form">Booking Enquiry Form</Link> or
            email us at{" "}
            <a href="mailto:hello@calabashvillabequia.com?subject=Question from CalabashVillaBequia.com">
              hello@calabashvillabequia.com
            </a>
            . <br />
            We look forward to sharing the well kept slice of paradise with you!
          </p>
        </header>
        <a href="#home-house">
          <i className="fas fa-angle-double-down downArrow" />
        </a>
      </article>

      <article id="home-house">
        <header>
          <i style={{ fontSize: 30 }} className="fas fa-home"></i>
          <h1>The House</h1>
        </header>
        <p>
          Tucked into the hillside overlooking the wild beach of Hope Bay,
          Calabash Villa is a pure tranquil escape from a hectic reality. Wild
          island luxury and quick access to all the island has to offer,
          Calabash is sure to provide a unparalleled holiday experience you will
          never forget.
        </p>
        <span id="home-house-links">
          <Link
            to="/the-house"
            className="home-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View The Villa
          </Link>{" "}
          <Link
            to="/reservations"
            className="home-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Book The Villa
          </Link>
        </span>
      </article>
      <article id="home-the-defender">
        <aside>
          <header>
            <h3>The Defender</h3>
          </header>
          <p>
            The last wild island of the Caribbean demands a wild and unique
            ride. With any rental of Calabash Villa you have to opportunity to
            cruise the roads in a sweet sweet 1987 Land Rover Defender 90.
          </p>
          <br />
          <Link
            to="/the-defender"
            className="home-link-green"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Check It Out
          </Link>
        </aside>
        <img src={defender} id="home-the-defender-img" alt="defender"></img>
      </article>
      <article id="home-bequia">
        <aside>
          <header>
            <h1>The Island</h1>
          </header>
          <p>
            The little unknown island of Bequia is the last frontier of the
            Caribbean. With it's white sand beaches, crystal clear turquoise
            waters and vibrant local culture, it is truly the worlds best kept
            secret.
          </p>
          <span>
            <Link
              to="/the-island"
              className="home-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Learn More
            </Link>
            <Link
              to={{ pathname: "/the-island", state: { from: "beaches" } }}
              className="home-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Beaches
            </Link>
            <Link
              to={{ pathname: "/the-island", state: { from: "food&drink" } }}
              className="home-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Food & Drink
            </Link>
            <Link
              to={{ pathname: "/the-island", state: { from: "travel" } }}
              className="home-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              How to Get Here
            </Link>
          </span>
        </aside>
        <figure>
          <img src={island} alt="bequia" id="home-bequia-img" />
        </figure>
      </article>
      <article id="home-our-story">
        <header>
          <h2>Our Story</h2>
        </header>
        <p>
          Who doesn't love a good love story? <br />
          Ours is a little tale of a boy, a girl and a very special island.{" "}
          <br />
          <span role="img" aria-label="emoji" style={{ fontSize: 40 }}>
            💙💛💚
          </span>
        </p>
        <br />
        <Link
          to={"/our-story"}
          className="home-link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Read More
        </Link>
      </article>
    </section>
  );
}
