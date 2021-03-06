import React from 'react';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryImageSlide from './ImageGalleryImageSlide';

const ImageGallery = ({
  imageArray, currentImageIndex, setCurrentImageIndex, currentStyle,
  setCurrentStyle, thumbSplitArr, thumbDisplayArr, setThumbDisplayArr,
}) => (
  <div id="imagegallery-container">
    <ImageGalleryImageSlide
      imageArray={imageArray}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
      thumbDisplayArr={thumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
    />
  </div>
);

export default ImageGallery;
