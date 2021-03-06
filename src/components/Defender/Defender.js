import React from "react";
import "./Defender.css";
import ImageGallery from "react-image-gallery";
import img1 from "./images/land-rover-defender-on-palm-beach-1.jpg";
import img2 from "./images/land-rover-defender-on-palm-beach-2.jpg";
const images = [
  {
    original: img1,
    thumbnail: img1,
    originalAlt: "land rover defender on palm beach",
    thumbnailAlt: "land rover defender on palm beach"
  },
  {
    original: img2,
    thumbnail: img2,
    originalAlt: "land rover defender on palm beach",
    thumbnailAlt: "land rover defender on palm beach"
  }
];
export default function Defender(props) {
  return (
    <section id="defender-sec">
      <article id="defender-intro">
        <img src={img1} alt="land rover defender on palm beach" />

        <aside>
          <h1>
            The <br />
            Land Rover <br />
            Defender <br />
            90
          </h1>
          <br />
          <p>
            The Land Rover Defender 90 is a British four-wheel drive off-road
            vehicle developed in the 1980s from the original Land Rover series
            which was launched at the Amsterdam Motor Show in April 1948. After
            a continuous run of 67 years production finally ended on the 29th of
            January 2016, after a total of just over two million Land Rover
            Series and Defender models had been built. <br />
            <br />
            Drive a piece of history in paradise.
          </p>
          <a href="#defender-gallery" className="home-link">
            Learn More
          </a>
        </aside>
      </article>

      <div id="defender-gallery">
        <ImageGallery items={images} />
        <article id="about-the-defender">
          <header>
            <h2>Enjoy the Drive</h2>
          </header>
          <p>
            This restored 1987 Land Rover Defender 90 is like a kid on christmas
            morning. <br />
            For $40/day you can cruise the island roads and beaches with ease
            and style.
          </p>
          <ul>
            <li>Seat up to 6 adults</li>
            <li>Powerful 300TDI Diesel Engine</li>
            <li>5-speed manual transmission</li>
            <li>All-time Four wheel drive (High/Low Gear selector)</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
