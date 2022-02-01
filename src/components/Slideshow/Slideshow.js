import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
// import img1 from './images/JPEG/CalabashVilla_01.jpg';
// import img2 from './images/JPEG/CalabashVilla_02.jpg';
// import img3 from './images/JPEG/CalabashVilla_03.jpg';
// import img4 from './images/JPEG/CalabashVilla_04.jpg';
// import img5 from './images/JPEG/CalabashVilla_05.jpg';
// import img6 from './images/JPEG/CalabashVilla_06.jpg';
// import img7 from './images/JPEG/CalabashVilla_07.jpg';
// import img8 from './images/JPEG/CalabashVilla_08.jpg';
// import img9 from './images/JPEG/CalabashVilla_09.jpg';
// import img10 from './images/JPEG/CalabashVilla_10.jpg';
// import img11 from './images/JPEG/CalabashVilla_11.jpg';
// import img12 from './images/JPEG/CalabashVilla_12.jpg';
// import img13 from './images/JPEG/CalabashVilla_13.jpg';
// import img14 from './images/JPEG/CalabashVilla_14.jpg';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Slideshow.css";

export default class Slideshow extends Component {
  makeImages = () => {
    function importAll(r) {
      return r.keys().map(r);
    }

    const imagesOG = importAll(
      require.context('./images/JPEG', false, /\.(jpe?g)$/)
    );
    // const imagesOG = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
    let images = [];
    for (let i = 0; i < imagesOG.length; i++) {
      images.push({
        original: imagesOG[i],
        thumbnail: imagesOG[i],
        sizes: '200px',
        originalAlt: `Exterior render of Calabash Villa ` + i,
        thumbnailAlt: `Exterior render of Calabash Villa` + i,
      });
    }
    return images;
  };

  render() {
    return (
      <ImageGallery
        id='the-house-slideshow'
        items={this.makeImages()}
        showBullets={true}
        slideDuration={1000}
        slideInterval={4000}
        showThumbnails={true}
        thumbnailPosition={'bottom'}
        showNav={true}
        lazyLoad={true}
      />
    );
  }
}
