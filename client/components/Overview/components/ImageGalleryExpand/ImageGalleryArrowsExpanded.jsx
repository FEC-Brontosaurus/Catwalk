/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryArrowsExpanded = ({
  currentImageIndex, setCurrentImageIndex, currentStyle, LogClick,
}) => (
  <div id="imagegallery-arrows-container">
    {currentImageIndex === 0 ? null : <img id="imagegallery-leftarrow" src={leftArrow} alt="" onClick={() => setCurrentImageIndex((currentImageIndex - 1))} />}
    {currentImageIndex === currentStyle.photos.length - 1 ? null : (
      <img
        id="imagegallery-rightarrow"
        src={rightArrow}
        alt=""
        onClick={() => {
          LogClick('img', 'Overview');
          setCurrentImageIndex((currentImageIndex + 1));
        }}
      />
    )}
  </div>
);

export default ImageGalleryArrowsExpanded;
