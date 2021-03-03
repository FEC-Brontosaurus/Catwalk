import React, { useState } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';
import Sizes from './components/Sizes';

const Overview = ({ currentProduct }) => {
  const [currentStyle, setCurrentStyle] = useState();
  const [currentSize, setCurrentSize] = useState();

  return (
    <div id="Overview">
      {(currentProduct && currentStyle) ? <ProductInformation currentProduct={currentProduct} currentStyle={currentStyle} /> : null }
      <Styles
        id={currentProduct.id}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
      />
      {currentStyle ? <Sizes currentStyle={currentStyle} setCurrentSize={setCurrentSize} /> : null }
    </div>
  );
};

export default Overview;
