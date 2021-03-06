import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import img1 from "./images/calabash-villa-exterior-1.jpg";
import img2 from "./images/calabash-villa-exterior-2.jpg";
import img3 from "./images/calabash-villa-exterior-3.jpg";
import img4 from "./images/calabash-villa-exterior-4.jpg";
import img5 from "./images/calabash-villa-exterior-5.jpg";
import img6 from "./images/calabash-villa-exterior-6.jpg";
import img7 from "./images/calabash-villa-exterior-7.jpg";
import img8 from "./images/calabash-villa-exterior-8.jpg";
import img9 from "./images/calabash-villa-exterior-9.jpg";

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Slideshow.css";

export default class Slideshow extends Component {
  makeImages = () => {
    const imagesOG = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    let images = [];
    for (let i = 0; i < 9; i++) {
      images.push({
        original: imagesOG[i],
        thumbnail: imagesOG[i],
        originalAlt: `Exterior render of Calabash Villa ` + i,
        thumbnailAlt: `Exterior render of Calabash Villa` + i,
      });
    }
    return images;
  };

  render() {
    return (
      <ImageGallery
        id="the-house-slideshow"
        items={this.makeImages()}
        showBullets={true}
        slideDuration={1000}
        slideInterval={4000}
        showThumbnails={false}
      />
    );
  }
}
