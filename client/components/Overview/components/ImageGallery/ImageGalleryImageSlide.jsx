/* eslint-disable react/no-array-index-key */
import React from 'react';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryArrows from './ImageGalleryArrows';
import ImageGalleryThumbnail from './ImageGalleryThumbnail';

const ImageGalleryImageSlide = ({
  imageArray, setCurrentImageIndex, currentImageIndex, currentStyle,
}) => (
  <div id="imagegallery-mainimage-container">
    <ImageGalleryArrows
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      imageArray={imageArray}
    />
    <ImageGalleryThumbnail
      imageArray={imageArray}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
    />
    {/* <div id="imagegallery-slide-container"> */}
    {imageArray.map((style, idx) => (
      <>
        {(style.photos[0].url !== null)
          ? (
            <div
              id="imagegallery-slide-image"
              key={style.photos[0].url + idx}
              style={currentStyle === style ? { backgroundImage: `url(${style.photos[0].url})`, opacity: 1 } : { backgroundImage: `url(${style.photos[0].url})`, opacity: 0 }}
              alt=""
            />
          ) : (
            <div
              key={style.photos[0].url + idx}
              id="imagegallery-slide-image"
              style={currentStyle === style ? { backgroundImage: `url(${noImage})`, opacity: 1 } : { backgroundImage: `url(${noImage})`, opacity: 0 }}
              alt=""
            />
          ) }
      </>
    ))}
    {/* </div> */}
  </div>
);

export default ImageGalleryImageSlide;
