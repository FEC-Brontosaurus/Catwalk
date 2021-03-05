/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';
import leftArrow from '../../../../../public/static/leftarrow.png';
import rightArrow from '../../../../../public/static/rightarrow.png';

const ImageGallery = ({ imageArray, currentStyle, setCurrentStyle }) => {
  console.log('IMAGE ARRAY', imageArray);
  const [view, setView] = useState('collapsed');
  // const [currentImageIndex, setCurrentImageIndex] = useState(imageArray[0].photos[0].url);

  // const nextImage = () => {
  //   console.log(typeof imageArray)
  //   const currentImageIndex = imageArray.findIndex(currentStyle);
  //   setCurrentStyle(imageArray[currentImageIndex + 1]);
  // };

  // const prevImage = () => {
  //   const currentImageIndex = imageArray.findIndex(currentStyle);
  //   setCurrentStyle(imageArray[currentImageIndex - 1]);
  // };

  return (
    <div id="imagegallery-container">
      <div id="imagegallery-main-container">
        {/* {imageArray.findIndex(currentStyle) !== 0 ? <img id="imagegallery-main-leftarrow" src={leftArrow} alt="" onClick={prevImage} /> : null}
        {imageArray.findIndex(currentStyle) !== imageArray.length - 1 ? <img id="imagegallery-main-rightarrow" src={rightArrow} alt="" onClick={nextImage} /> : null} */}
        {imageArray.map((style, idx) => (
          <>
            {(style.photos[0].url !== null)
              ? (
                <div
                  id="imagegallery-main-image"
                  key={style.photos[0].url + idx}
                  style={style === currentStyle ? { backgroundImage: `url(${style.photos[0].url})`, opacity: 1 } : { backgroundImage: `url(${style.photos[0].url})`, opacity: 0 }}
                  alt=""
                />
              ) : (
                <div
                  key={style.photos[0].url + idx}
                  id="imagegallery-main-image"
                  style={style === currentStyle ? { backgroundImage: `url(${noImage})`, opacity: 1 } : { backgroundImage: `url(${noImage})`, opacity: 0 }}
                  alt=""
                />
              ) }
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
