/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnailArrows = ({
  setThumbDisplayArr, thumbDisplayArr, thumbSplitArr, LogClick,
}) => (
  <div id="imagegallery-thumbnail-arrows-container" data-testid="imagegallery-thumbnail-arrows-container">
    {thumbDisplayArr === 0 ? null : (
      <img
        id="imagegallery-thumbnail-leftarrow"
        data-testid="imagegallery-thumbnail-leftarrow"
        src={leftArrow}
        alt=""
        onClick={(e) => {
          e.stopPropagation();
          setThumbDisplayArr((thumbDisplayArr - 1));
          LogClick('img', 'Overview');
        }}
      />
    )}
    {thumbDisplayArr === thumbSplitArr.length - 1 ? null : (
      <img
        id="imagegallery-thumbnail-rightarrow"
        data-testid="imagegallery-thumbnail-rightarrow"
        src={rightArrow}
        alt=""
        onClick={(e) => {
          e.stopPropagation();
          setThumbDisplayArr((thumbDisplayArr + 1));
          LogClick('img', 'Overview');
        }}
      />
    )}
  </div>
);

export default ImageGalleryThumbnailArrows;
