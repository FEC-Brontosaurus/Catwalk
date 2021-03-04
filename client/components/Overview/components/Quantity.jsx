import React from 'react';
import QuantityRender from './QuantityRender';
import LogClick from '../../LogClick';

//
const Quantity = ({ currentStyle, currentSize, setCurrentQuantity }) => {

  //  array to keep track of list of elements to be mapped in Quantity Render
  let quantityArray = [];

  //  used to keep count of all items of the current size in the current style
  let quantityOfCurrentSize = 0;

  //  if current size exists (this is to prevent an error if no size is selected)
  if (currentSize) {
    //  for loop to find the quantity of the current size
    for (let key in currentStyle.skus) {
      if(currentStyle.skus[key].size === currentSize) {
        quantityOfCurrentSize = currentStyle.skus[key].quantity
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
    <QuantityRender quantityArray={quantityArray} setCurrentQuantity={setCurrentQuantity} currentSize={currentSize} />
  )
};

export default Quantity;