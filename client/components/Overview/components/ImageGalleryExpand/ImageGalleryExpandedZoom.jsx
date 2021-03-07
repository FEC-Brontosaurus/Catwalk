/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryExpandedZoom = ({ currentStyle, currentImageIndex, setIsZoom }) => (
  <div
    id="imagegallery-extended-zoom-container"
    style={{ backgroundImage: `url(${currentStyle.photos[currentImageIndex].url})` }}
    onClick={() => setIsZoom(false)}
  >
    <div id="imagegallery-zoom-lens" />
  </div>
);

export default ImageGalleryExpandedZoom;
