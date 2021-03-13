/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryArrows from './ImageGalleryArrows';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';

const ImageGalleryImageSlide = ({
  setCurrentImageIndex, currentImageIndex, currentStyle, setCurrentStyle,
  thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, setOverviewModal, LogClick,
}) => (
  <div id="imagegallery-mainimage-container">
    {currentStyle.photos.map((style, idx) => (
      <React.Fragment key={idx}>
        {(style.url !== null)
          ? (
            <div
              id="imagegallery-slide-image"
              key={idx}
              style={currentImageIndex === idx ? { backgroundImage: `url(${style.url})`, opacity: 1, zIndex: 2 } : { backgroundImage: `url(${style.url})`, opacity: 0 }}
              alt=""
              onClick={() => {
                LogClick('div', 'Overview');
                setOverviewModal(true);
              }}
            >
              {thumbSplitArr.length > 0 ? (
                <>
                  <ImageGalleryArrows
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    currentStyle={currentStyle}
                    LogClick={LogClick}
                  />
                  <ImageGalleryThumbnail
                    currentStyle={currentStyle}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    setCurrentStyle={setCurrentStyle}
                    thumbDisplayArr={thumbDisplayArr}
                    thumbSplitArr={thumbSplitArr}
                    setThumbDisplayArr={setThumbDisplayArr}
                    LogClick={LogClick}
                  />
                </>
              ) : null }
            </div>
          ) : (
            <div
              key={idx}
              id="imagegallery-slide-image"
              style={currentStyle === style ? { backgroundImage: `url(${noImage})`, opacity: 1, zIndex: 2 } : { backgroundImage: `url(${noImage})`, opacity: 0 }}
              alt=""
              onClick={() => setOverviewModal(true)}
            >
              {thumbSplitArr.length > 0 ? (
                <>
                  <ImageGalleryArrows
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    currentStyle={currentStyle}
                    LogClick={LogClick}
                  />
                  <ImageGalleryThumbnail
                    currentStyle={currentStyle}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                    setCurrentStyle={setCurrentStyle}
                    thumbDisplayArr={thumbDisplayArr}
                    thumbSplitArr={thumbSplitArr}
                    setThumbDisplayArr={setThumbDisplayArr}
                    LogClick={LogClick}
                  />
                </>
              ) : null }
            </div>
          ) }
      </React.Fragment>
    ))}
  </div>
);

export default ImageGalleryImageSlide;
