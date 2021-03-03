import React from 'react';
import SizesRender from './SizesRender';
import LogClick from '../../LogClick';

const Sizes = ({ currentStyle, setCurrentSize }) => {
  let styleArray = [];
  for (var key in currentStyle.skus) {
    styleArray.push(currentStyle.skus[key]);
  }
  styleArray = styleArray.filter((size) => size.quantity > 0);
  setCurrentSize(styleArray[0])

  return (
    <SizesRender styleArray={styleArray} setCurrentSize={setCurrentSize} />
  )
};

export default Sizes;