import React from 'react';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryImageSlide from './ImageGalleryImageSlide';

const ImageGallery = ({
  imageArray, currentImageIndex, setCurrentImageIndex, currentStyle
}) => (
  <div id="imagegallery-container">
    <ImageGalleryImageSlide
      imageArray={imageArray}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
    />
  </div>
);

export default ImageGallery;
