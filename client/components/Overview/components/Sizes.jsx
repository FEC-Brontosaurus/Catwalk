import React from 'react';
import SizesRender from './SizesRender';
import LogClick from '../../LogClick';

//
const Sizes = ({ currentStyle, setCurrentSize }) => {

  //  for loop to make the sku property an array rather than multiple objects
  //  this makes it able to be mapped in SizesRender function
  let styleArray = [];
  for (var key in currentStyle.skus) {
    styleArray.push(currentStyle.skus[key]);
  }

  return (
    <SizesRender styleArray={styleArray} setCurrentSize={setCurrentSize} />
  )
};

export default Sizes;