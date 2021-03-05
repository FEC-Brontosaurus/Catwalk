/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import noImage from '../../../../../public/static/noimage.jpg';

const ImageGallery = ({ imageArray, currentStyle, setCurrentStyle}) => {
  console.log('IMAGE ARRAY', imageArray);
  const [view, setView] = useState('collapsed');
  const [currentImage, setCurrentImage] = useState(imageArray[0].photos[0].url);

  return (
    <div id="imagegallery-container">
      {imageArray.map((style, idx) => (
        <>
          {style.photos[0].thumbnail_url ? <img key={style.photos[0].thumbnail_url + idx} src={style.photos[0].thumbnail_url} alt="" /> : <img src={noImage} alt="" /> }
        </>
      ))}
      {currentImage ? <img src={currentImage} alt="" /> : <img src={noImage} alt="" />}
    </div>
  );
};

export default ImageGallery;