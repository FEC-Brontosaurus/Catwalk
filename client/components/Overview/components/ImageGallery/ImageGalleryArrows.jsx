/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryArrows = ({
  currentImageIndex, setCurrentImageIndex, currentStyle, LogClick,
}) => (
  <div id="imagegallery-arrows-container">
    {currentImageIndex === 0 ? null : (
      <div
        id="imagegallery-leftarrow"
        data-testid="leftarrow"
        // src={leftArrow}
        // alt=""
        onClick={(e) => {
          e.stopPropagation();
          setCurrentImageIndex((currentImageIndex - 1));
          LogClick('img', 'Overview');
        }}
      />
    )}
    {currentImageIndex === currentStyle.photos.length - 1 ? null : (
      <div
        id="imagegallery-rightarrow"
        data-testid="rightarrow"
        // src={rightArrow}
        // alt=""
        onClick={(e) => {
          e.stopPropagation();
          setCurrentImageIndex((currentImageIndex + 1));
          LogClick('img', 'Overview');
        }}
      />
    )}
  </div>
);

export default ImageGalleryArrows;
