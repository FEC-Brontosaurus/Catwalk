/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import React from 'react';
import QuantityRender from './QuantityRender';

const Quantity = ({
  currentStyle, currentSize, setCurrentQuantity, currentQuantity,
}) => {
  //  array to keep track of list of elements to be mapped in Quantity Render
  const quantityArray = [];

  //  used to keep count of all items of the current size in the current style
  let quantityOfCurrentSize = 0;

  //  if current size exists (this is to prevent an error if no size is selected)
  if (currentSize) {
    //  for loop to find the quantity of the current size
    for (const key in currentStyle.skus) {
      if (currentStyle.skus[key].size === currentSize) {
        quantityOfCurrentSize = currentStyle.skus[key].quantity;
        break;
      }
    }

    //  loop to make the displayed quantity number 15 or less
    for (let i = 1; i < quantityOfCurrentSize + 1; i++) {
      if (i === 16) {
        break;
      } else {
        quantityArray.push(i);
      }
    }
  }

  return (
    <QuantityRender
      quantityArray={quantityArray}
      setCurrentQuantity={setCurrentQuantity}
      currentSize={currentSize}
      currentQuantity={currentQuantity}
    />
  );
};

export default Quantity;
