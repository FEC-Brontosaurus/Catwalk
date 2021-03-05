/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';
import Sizes from './components/Sizes';
import Quantity from './components/Quantity';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery/ImageGallery';

const Overview = ({ currentProduct }) => {
  //  Current selection of items to be used in specific
  //  components that rely on others existing e.g. size depends on current style
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSize, setCurrentSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState();
  const [addToCartNoSize, setAddToCartNoSize] = useState(false);
  const [value, setValue] = useState('DEFAULT');
  const [imageArray, setImageArray] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //  on user changing style in image gallery by clicking the arrows update the current style
  useEffect(() => setCurrentStyle(imageArray[currentImageIndex]), [currentImageIndex]);

  //  update the current index to be where the current style exists in the image array
  useEffect(() => setCurrentImageIndex(imageArray.findIndex((style) => style.style_id === currentStyle.style_id)), [currentStyle]);

  console.log('currentImageIndex', currentImageIndex);
  console.log('imageArray', imageArray);

  //  render each component and certain components will not render
  //  unless the data required is present (used to save some time);
  return (
    <div id="Overview">
      {(currentStyle) ? (
        <ProductInformation
          currentProduct={currentProduct}
          currentStyle={currentStyle}
        />
      )
        : null}
      {currentProduct ? (
        <Styles
          id={currentProduct.id}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          setCurrentSize={setCurrentSize}
          setCurrentQuantity={setCurrentQuantity}
          setAddToCartNoSize={setAddToCartNoSize}
          setValue={setValue}
          setImageArray={setImageArray}
        />
      ) : null}
      {currentStyle
        ? (
          <Sizes
            currentStyle={currentStyle}
            setCurrentSize={setCurrentSize}
            setCurrentQuantity={setCurrentQuantity}
            currentSize={currentSize}
            addToCartNoSize={addToCartNoSize}
            setAddToCartNoSize={setAddToCartNoSize}
            value={value}
            setValue={setValue}
          />
        ) : null }
      {currentStyle ? (
        <Quantity
          currentStyle={currentStyle}
          currentSize={currentSize}
          setCurrentQuantity={setCurrentQuantity}
          currentQuantity={currentQuantity}
        />
      )
        : null }
      {currentStyle ? (
        <AddToCart
          currentQuantity={currentQuantity}
          currentSize={currentSize}
          setAddToCartNoSize={setAddToCartNoSize}
        />
      )
        : null }
      {(currentStyle) ? (
        <ImageGallery imageArray={imageArray} setCurrentStyle={setCurrentStyle} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} currentStyle={currentStyle} />
      ) : null}
    </div>
  );
};

export default Overview;
