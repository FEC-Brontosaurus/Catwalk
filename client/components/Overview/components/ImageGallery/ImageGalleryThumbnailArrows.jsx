/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryArrows = ({
  currentImageIndex, setCurrentImageIndex, imageArray,
}) => (
  <div id="imagegallery-thumbnail-arrows-container">
    {currentImageIndex === 0 ? null : <img id="imagegallery-thumbnail-leftarrow" src={leftArrow} alt="" onClick={() => setCurrentImageIndex((currentImageIndex - 1))} />}
    {currentImageIndex === imageArray.length - 1 ? null : <img id="imagegallery-thumbnail-rightarrow" src={rightArrow} alt="" onClick={() => setCurrentImageIndex((currentImageIndex + 1))} />}
  </div>
);

export default ImageGalleryArrows;
