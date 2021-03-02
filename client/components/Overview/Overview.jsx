import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from './components/Styles';

const Overview = ({ currentProduct }) => {
  const [currentStyle, setCurrentStyle] = useState();

  return (
    <div id="Overview" >
      <Styles id={currentProduct.id} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
    </div>
  );
}

export default Overview;