import React from 'react';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryImageSlide from './ImageGalleryImageSlide';

const ImageGallery = ({
  currentImageIndex, setCurrentImageIndex, currentStyle,
  setCurrentStyle, thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, setOverviewModal,
}) => (
  <div id="imagegallery-container">
    <ImageGalleryImageSlide
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
      thumbDisplayArr={thumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setOverviewModal={setOverviewModal}
    />
  </div>
);

export default ImageGallery;
