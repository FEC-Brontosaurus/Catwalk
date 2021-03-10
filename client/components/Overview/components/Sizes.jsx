/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import SizesRender from './SizesRender';
import '../styles/SizesStyles.css';

//
const Sizes = ({
  currentStyle, setCurrentSize, setCurrentQuantity, currentSize,
  addToCartNoSize, setAddToCartNoSize, value, setValue, LogClick,
}) => {
  //  for loop to make the sku property an array rather than multiple objects
  //  this makes it able to be mapped in SizesRender function
  const styleArray = [];
  for (const key in currentStyle.skus) {
    if (currentStyle.skus[key].quantity === 0) {
      styleArray.push({ size: 'OUT OF STOCK' });
    } else {
      styleArray.push(currentStyle.skus[key]);
    }
  }

  return (
    <div id="sizes-container" data-testid="sizes-container">
      <SizesRender
        LogClick={LogClick}
        styleArray={styleArray}
        setCurrentSize={setCurrentSize}
        setCurrentQuantity={setCurrentQuantity}
        currentSize={currentSize}
        addToCartNoSize={addToCartNoSize}
        setAddToCartNoSize={setAddToCartNoSize}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default Sizes;
