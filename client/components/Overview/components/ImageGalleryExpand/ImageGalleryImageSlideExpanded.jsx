/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryArrowsExpanded from './ImageGalleryArrowsExpanded';
import ImageGalleryThumbnailExpanded from './ImageGalleryThumbnailExpanded';
import ImageGalleryExpandedZoom from './ImageGalleryExpandedZoom';

const ImageGalleryImageSlideExpanded = ({
  setCurrentImageIndex, currentImageIndex, currentStyle, setCurrentStyle,
  thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, setOverviewModal,
}) => {
  const [isZoom, setIsZoom] = useState(false);
  return (
    <div id="imagegallery-expanded-mainimage-container">
      {(isZoom) ? (
        <ImageGalleryExpandedZoom
          currentStyle={currentStyle}
          currentImageIndex={currentImageIndex}
          setIsZoom={setIsZoom}
        />
      ) : null }
      <ImageGalleryArrowsExpanded
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        currentStyle={currentStyle}
      />
      <ImageGalleryThumbnailExpanded
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        setCurrentStyle={setCurrentStyle}
        currentStyle={currentStyle}
        thumbDisplayArr={thumbDisplayArr}
        thumbSplitArr={thumbSplitArr}
        setThumbDisplayArr={setThumbDisplayArr}
      />
      {currentStyle.photos.map((style, idx) => (
        <React.Fragment key={idx}>
          {(style.url !== null)
            ? (
              <div
                id="imagegallery-expanded-slide-image"
                key={idx}
                style={idx === currentImageIndex ? { backgroundImage: `url(${style.url})`, opacity: 1, zIndex: 2 } : { backgroundImage: `url(${style.url})`, opacity: 0 }}
                alt=""
                onClick={() => setIsZoom(true)}
              />
            ) : (
              <div
                key={idx}
                id="imagegallery-extended-slide-noimage"
                style={idx === currentImageIndex ? { backgroundImage: `url(${noImage})`, opacity: 1, zIndex: 2 } : { backgroundImage: `url(${noImage})`, opacity: 0 }}
                alt=""
                onClick={() => setOverviewModal(true)}
              />
            ) }
        </React.Fragment>
      ))}
    </div>
  );
};
export default ImageGalleryImageSlideExpanded;
