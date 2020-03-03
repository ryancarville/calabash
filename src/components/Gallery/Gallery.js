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
      <iframe
        src="//lightwidget.com/widgets/aab25989ef26501b896b9f68eb14ecec.html"
        id="instagram-gallery"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget"
        title="insta-gallery"
      ></iframe>
    </section>
  );
}
