/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import ImageGalleryThumbnailArrows from './ImageGalleryThumbnailArrows';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnail = ({
  currentImageIndex, setCurrentImageIndex, imageArray, setCurrentStyle,
  thumbSplitArr, thumbDisplayArr, setThumbDisplayArr,
}) => (
  <div id="imagegallery-thumbnail-container">
    {(thumbSplitArr.length > 1)
      ? (
        <ImageGalleryThumbnailArrows
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          imageArray={imageArray}
          thumbSplitArr={thumbSplitArr}
          setThumbDisplayArr={setThumbDisplayArr}
          thumbDisplayArr={thumbDisplayArr}
        />
      )
      : null }
    <div id="imagegallery-thumbnail-slide-container">

      {thumbSplitArr[thumbDisplayArr].map((style, idx) => (
        <>
          {(style.photos[0].url !== null)
            ? (
              <div
                id="imagegallery-thumbnail-slide-image"
                key={style.photos[0].thumbnail_url + idx}
                style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
                alt=""
                onClick={() => {
                  setCurrentStyle(style);
                  setCurrentImageIndex(thumbDisplayArr * 7 + idx);
                }}
              />
            ) : (
              <div
                key={style.photos[0].thumbnail_url + idx}
                id="imagegallery-thumbnail-slide-image"
                style={{ backgroundImage: `url(${noImage})` }}
                alt=""
                onClick={() => {
                  setCurrentStyle(style);
                  setCurrentImageIndex(thumbDisplayArr * 7 + idx);
                }}
              />
            ) }
        </>
      ))}
    </div>
  </div>
);

export default ImageGalleryThumbnail;
