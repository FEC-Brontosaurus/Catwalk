import React, { useState } from 'react';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryImageSlide from './ImageGalleryImageSlide';
import ImageGalleryArrows from './ImageGalleryArrows';

const ImageGallery = ({
  imageArray, currentStyle, setCurrentStyle, setImageArray, currentImageIndex, setCurrentImageIndex,
}) => {

  return (
    <div id="imagegallery-container">
      <ImageGalleryImageSlide
        imageArray={imageArray}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        setCurrentStyle={setCurrentStyle}
      />
    </div>
  );
};

export default ImageGallery;
