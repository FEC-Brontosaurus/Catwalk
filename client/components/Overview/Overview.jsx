import React, { useState } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';

const Overview = ({ currentProduct }) => {
  const [currentStyle, setCurrentStyle] = useState();

  return (
    <div id="Overview">
      <ProductInformation currentProduct={currentProduct} currentStyle={currentStyle} />
      <Styles
        id={currentProduct.id}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
      />
    </div>
  );
};

export default Overview;
