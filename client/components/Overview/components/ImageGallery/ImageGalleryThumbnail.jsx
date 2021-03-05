/* eslint-disable react/no-array-index-key */
import React from 'react';
import ImageGalleryThumbnailArrows from './ImageGalleryArrows';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnail = ({ currentImageIndex, setCurrentImageIndex, imageArray }) => (
  <div id="imagegallery-thumbnail-container">
    <ImageGalleryThumbnailArrows
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      imageArray={imageArray}
    />
    <div id="imagegallery-thumbnail-slide-container">
      {imageArray.map((style, idx) => (
        <>
          {(style.photos[0].url !== null)
            ? (
              <div
                id="imagegallery-thumbnail-slide-image"
                key={style.photos[0].thumbnail_url + idx}
                style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
                alt=""
              />
            ) : (
              <div
                key={style.photos[0].thumbnail_url + idx}
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

export default ImageGalleryThumbnail;
