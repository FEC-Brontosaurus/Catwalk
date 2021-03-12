/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import ImageGalleryThumbnailArrowsExpanded from './ImageGalleryThumbnailArrowsExpanded';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnailExpanded = ({
  currentImageIndex, setCurrentImageIndex, currentStyle,
  thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, LogClick
}) => (
  <div id="imagegallery-thumbnail-container">
    {(thumbSplitArr.length > 1)
      ? (
        <ImageGalleryThumbnailArrowsExpanded
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          currentStyle={currentStyle}
          thumbSplitArr={thumbSplitArr}
          setThumbDisplayArr={setThumbDisplayArr}
          thumbDisplayArr={thumbDisplayArr}
          LogClick={LogClick}
        />
      )
      : null }
    <div id="imagegallery-thumbnail-slide-container">
      {thumbSplitArr[thumbDisplayArr].map((style, idx) => (
        <React.Fragment key={idx}>
          <div
            id="imagegallery-extended-thumbnail-slide-image"
            key={idx}
            style={(style.url === currentStyle.photos[currentImageIndex].url)
              ? { opacity: 1 } : null}
            alt=""
            onClick={() => {
              LogClick('select', 'Overview');
              setCurrentImageIndex(thumbDisplayArr * 7 + idx);
            }}
          />

        </React.Fragment>
      ))}
    </div>
  </div>
);

export default ImageGalleryThumbnailExpanded;
