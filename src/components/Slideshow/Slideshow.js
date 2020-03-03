import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Slideshow.css";
const images = [
  {
    original: "../images/renders/1.jpg",
    thumbnail: "../images/renders/1.jpg"
  },
  {
    original: "../images/renders/2.jpg",
    thumbnail: "../images/renders/2.jpg"
  },
  {
    original: "../images/renders/3.jpg",
    thumbnail: "../images/renders/3.jpg"
  },
  {
    original: "../images/renders/4.jpg",
    thumbnail: "../images/renders/4.jpg"
  },
  {
    original: "../images/renders/5.jpg",
    thumbnail: "../images/renders/5.jpg"
  },
  {
    original: "../images/renders/6.jpg",
    thumbnail: "../images/renders/6.jpg"
  }
];
export default class Slideshow extends Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showBullets={true}
        slideDuration={1000}
        slideInterval={5000}
        showThumbnails={false}
        id="the-house-slideshow"
      />
    );
  }
}
