/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';
import Sizes from './components/Sizes';
import Quantity from './components/Quantity';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryExpand from './components/ImageGalleryExpand/ImageGalleryExpand';

const Overview = ({ currentProduct }) => {
  //  Current selection of items to be used in specific
  //  components that rely on others existing e.g. size depends on current style
  const [currentStyle, setCurrentStyle] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState();
  const [addToCartNoSize, setAddToCartNoSize] = useState(false);
  const [value, setValue] = useState('DEFAULT');
  // const [imageArray, setImageArray] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbSplitArr, setThumbSplitArr] = useState([]);
  const [thumbDisplayArr, setThumbDisplayArr] = useState(0);
  const [overviewModal, setOverviewModal] = useState(false);

  //  on user changing style in image gallery by clicking the arrows update the current style
  useEffect(() => setThumbDisplayArr(Math.floor(currentImageIndex / 7)), [currentImageIndex]);

  useEffect(() => setCurrentImageIndex(0), [currentStyle]);

  useEffect(() => {
    if (currentStyle) {
      setCurrentImageIndex(0);
      // //  create an array with all styles (not in rows of 4)
      // setImageArray(currentStyle.photos);
      //  set the number of rows for thumbnail on main image
      const numberOfRows = Math.ceil(currentStyle.photos.length / 7);
      //  split the thumbnails into n arrays of length 7
      setThumbSplitArr([...Array(numberOfRows)]
        .map((row, idx) => currentStyle.photos
          .slice(idx * 7, idx * 7 + 7)));
    }
  }, [currentStyle]);

  //  render each component and certain components will not render
  //  unless the data required is present (used to save some time);
  return (
    <div id="Overview">
      {(overviewModal === true) ? (
        <ImageGalleryExpand
          setCurrentStyle={setCurrentStyle}
          setCurrentImageIndex={setCurrentImageIndex}
          currentImageIndex={currentImageIndex}
          currentStyle={currentStyle}
          thumbDisplayArr={thumbDisplayArr}
          thumbSplitArr={thumbSplitArr}
          setThumbDisplayArr={setThumbDisplayArr}
          setOverviewModal={setOverviewModal}
        />
      ) : null}
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
          setThumbSplitArr={setThumbSplitArr}
          setCurrentImageIndex={setCurrentImageIndex}
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
        <ImageGallery
          setCurrentStyle={setCurrentStyle}
          setCurrentImageIndex={setCurrentImageIndex}
          currentImageIndex={currentImageIndex}
          currentStyle={currentStyle}
          thumbDisplayArr={thumbDisplayArr}
          thumbSplitArr={thumbSplitArr}
          setThumbDisplayArr={setThumbDisplayArr}
          setOverviewModal={setOverviewModal}
        />
      ) : null}
    </div>
  );
};

export default Overview;
