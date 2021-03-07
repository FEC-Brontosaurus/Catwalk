/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryExpandedZoom = ({ currentStyle, currentImageIndex, setIsZoom }) => {
  const mouseMove = (e) => {
    const {
      left, top, width, height,
    } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    e.target.style.backgroundPosition = `-${x}% -${y}%`;
  };

  return (
    <div
      id="imagegallery-extended-zoom-container"
      style={{
        backgroundImage: `url(${currentStyle.photos[currentImageIndex].url})`,
        height: 2.5 * window.innerHeight,
        width: 2.5 * window.innerHeight,
        backgroundPosition: '0% 0%',
      }}
      onMouseMove={mouseMove}
      onClick={() => setIsZoom(false)}
    >
      <div id="imagegallery-zoom-lens" />
    </div>
  );
};

export default ImageGalleryExpandedZoom;
