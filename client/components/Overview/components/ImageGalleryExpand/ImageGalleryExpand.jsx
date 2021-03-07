/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../styles/ImageGalleryStyles.css';
import ImageGalleryImageSlideExpanded from './ImageGalleryImageSlideExpanded';

const ImageGalleryExpand = ({
  currentImageIndex, setCurrentImageIndex, currentStyle,
  setCurrentStyle, thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, setOverviewModal,
}) => (
  <>
    <div id="imagegallery-expanded-background" onClick={() => setOverviewModal(false)} />
    <div id="imagegallery-expanded-container" style={{ height: window.innerHeight, width: window.innerHeight }}>
      <ImageGalleryImageSlideExpanded
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        thumbDisplayArr={thumbDisplayArr}
        thumbSplitArr={thumbSplitArr}
        setThumbDisplayArr={setThumbDisplayArr}
        setOverviewModal={setOverviewModal}
      />
    </div>
  </>
);

export default ImageGalleryExpand;
