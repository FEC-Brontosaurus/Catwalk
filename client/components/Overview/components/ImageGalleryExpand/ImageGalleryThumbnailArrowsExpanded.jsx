/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnailArrowsExpanded = ({
  setThumbDisplayArr, thumbDisplayArr, thumbSplitArr,
}) => (
  <div id="imagegallery-thumbnail-arrows-container">
    {thumbDisplayArr === 0 ? null : <img id="imagegallery-expanded-thumbnail-leftarrow" src={leftArrow} alt="" onClick={() => setThumbDisplayArr((thumbDisplayArr - 1))} />}
    {thumbDisplayArr === thumbSplitArr.length - 1 ? null : <img id="imagegallery-expanded-thumbnail-rightarrow" src={rightArrow} alt="" onClick={() => setThumbDisplayArr((thumbDisplayArr + 1))} />}
  </div>
);

export default ImageGalleryThumbnailArrowsExpanded;
