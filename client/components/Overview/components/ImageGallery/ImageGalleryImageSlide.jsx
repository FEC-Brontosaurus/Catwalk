/* eslint-disable react/no-array-index-key */
import React from 'react';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryArrows from './ImageGalleryArrows';

const ImageGalleryImageSlide = ({ imageArray, setCurrentImageIndex, currentImageIndex, setCurrentStyle }) => (
  <div id="imagegallery-mainimage-container">
    <ImageGalleryArrows
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      imageArray={imageArray}
      setCurrentStyle={setCurrentStyle}
    />
    <div id="imagegallery-slide-container">
      {imageArray.map((style, idx) => (
        <>
          {(style.photos[0].url !== null)
            ? (
              <div
                id="imagegallery-slide-image"
                key={style.photos[0].url + idx}
                style={{ backgroundImage: `url(${style.photos[0].url})` }}
                alt=""
              />
            ) : (
              <div
                key={style.photos[0].url + idx}
                id="imagegallery-slide-image"
                style={{ backgroundImage: `url(${noImage})` }}
                alt=""
              />
            ) }
        </>
      ))}
    </div>
  </div>
);

export default ImageGalleryImageSlide;
