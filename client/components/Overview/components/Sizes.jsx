/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import SizesRender from './SizesRender';

//
const Sizes = ({ currentStyle, setCurrentSize, setCurrentQuantity }) => {
  //  for loop to make the sku property an array rather than multiple objects
  //  this makes it able to be mapped in SizesRender function
  const styleArray = [];
  for (const key in currentStyle.skus) {
    styleArray.push(currentStyle.skus[key]);
  }

  return (
    <SizesRender
      styleArray={styleArray}
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
    />
  );
};

export default Sizes;
