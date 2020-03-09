import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Slideshow.css";

const images = [
  {
    original: img1,
    thumbnail: img1
  },
  {
    original: img2,
    thumbnail: img2
  },
  {
    original: img3,
    thumbnail: img3
  },
  {
    original: img4,
    thumbnail: img4
  },
  {
    original: img5,
    thumbnail: img5
  },
  {
    original: img6,
    thumbnail: img6
  },
  {
    original: img7,
    thumbnail: img7
  },
  {
    original: img8,
    thumbnail: img8
  },
  {
    original: img9,
    thumbnail: img9
  }
];
export default class Slideshow extends Component {
  render() {
    return (
      <ImageGallery
        id="the-house-slideshow"
        items={images}
        showBullets={true}
        slideDuration={1000}
        slideInterval={3000}
        showThumbnails={false}
        autoPlay={this.props.autoPlay}
      />
    );
  }
}
