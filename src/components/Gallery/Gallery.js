import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  return (
    <section id="gallery-sec">
      <header>
        <h2>Instagram Gallery</h2>
        <a
          href="https://www.instagram.com/calabashvillabequia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @calabashvillabequia
        </a>
      </header>
      <br />

      <iframe
        src="https://cdn.lightwidget.com/widgets/58806c532ffb50589554fa3898d2d732.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        title="insta-gallery"
        id="instagram-gallery"
      ></iframe>
    </section>
  );
}
