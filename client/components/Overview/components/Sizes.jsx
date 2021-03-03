import React from 'react';
import SizesRender from './SizesRender';
import LogClick from '../../LogClick';

const Sizes = ({ currentStyle, setCurrentSize }) => {
  let styleArray = [];
  for (var key in currentStyle.skus) {
    styleArray.push(currentStyle.skus[key]);
  }

  return (
    <SizesRender styleArray={styleArray} setCurrentSize={setCurrentSize} />
  )
};

export default Sizes;