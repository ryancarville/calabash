import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import img1 from "./images/calabash-villa-exterior-1.jpf";
import img2 from "./images/calabash-villa-exterior-2.jpf";
import img3 from "./images/calabash-villa-exterior-3.jpf";
import img4 from "./images/calabash-villa-exterior-4.jpf";
import img5 from "./images/calabash-villa-exterior-5.jpf";
import img6 from "./images/calabash-villa-exterior-6.jpf";
import img7 from "./images/calabash-villa-exterior-7.jpf";
import img8 from "./images/calabash-villa-exterior-8.jpf";
import img9 from "./images/calabash-villa-exterior-9.jpf";

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Slideshow.css";

const images = [
  {
    original: img1,
    thumbnail: img1,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img2,
    thumbnail: img2,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img3,
    thumbnail: img3,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img4,
    thumbnail: img4,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img5,
    thumbnail: img5,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img6,
    thumbnail: img6,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img7,
    thumbnail: img7,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img8,
    thumbnail: img8,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
  },
  {
    original: img9,
    thumbnail: img9,
    originalAlt: "Exterior render of Calabash Villa",
    thumbnailAlt: "Exterior render of Calabash Villa"
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
