/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryExpandedZoom = ({ currentStyle, currentImageIndex, setIsZoom, LogClick, }) => {
  const mouseMove = (e) => {
    //  get x and y positions of image
    const imagePos = e.target.getBoundingClientRect();
    //  find cursors x and y positions relative to image
    let x = e.pageX - imagePos.left;
    let y = e.pageY - imagePos.top;
    //  if the user decides to scroll while in modal
    x -= window.pageXOffset;
    y -= window.pageYOffset;
    //  update the display "window"
    e.target.style.backgroundPosition = `-${1.5 * x}px -${1.5 * y}px`;
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
      onClick={() => {
        LogClick('select', 'Overview');
        setIsZoom(false);
      }}
    />
  );
};

export default ImageGalleryExpandedZoom;
