/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ProductInformation from './components/ProductInformation';
import Styles from './components/Styles';
import Sizes from './components/Sizes';
import Quantity from './components/Quantity';
import AddToCart from './components/AddToCart';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryExpand from './components/ImageGalleryExpand/ImageGalleryExpand';
import './styles/ProductInformationStyles.css';
import facebook from '../../../public/static/facebook.png';
import twitter from '../../../public/static/twitter.png';
import pinterest from '../../../public/static/pinterest.png';
import './styles/OverviewStyle.css';

const Overview = ({
  currentProduct, overviewAverage, reviewScroll, LogClick,
}) => {
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

  console.log(thumbSplitArr);

  //  render each component and certain components will not render
  //  unless the data required is present (used to save some time);
  return (
    <div id="Overview">
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
          LogClick={LogClick}
        />
      ) : null}
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
          LogClick={LogClick}
        />
      ) : null}
      <div id="overview-order-container">
        {(currentStyle) ? (
          <ProductInformation
            overviewAverage={overviewAverage}
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            reviewScroll={reviewScroll}
            LogClick={LogClick}
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
            LogClick={LogClick}
          />
        ) : null}
        {(addToCartNoSize) ? <div style={{ height: '18.4px' }} id="no-cart">Please Select Size</div> : <div style={{ height: '18.4px' }} id="no-cart" />}
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
              LogClick={LogClick}
            />
          ) : null }
        {currentStyle ? (
          <Quantity
            currentStyle={currentStyle}
            currentSize={currentSize}
            setCurrentQuantity={setCurrentQuantity}
            currentQuantity={currentQuantity}
            LogClick={LogClick}
          />
        )
          : null }
        {currentStyle ? (
          <AddToCart
            currentQuantity={currentQuantity}
            currentSize={currentSize}
            setAddToCartNoSize={setAddToCartNoSize}
            currentStyle={currentStyle}
            LogClick={LogClick}
          />
        )
          : null }
      </div>
      {currentProduct
        ? (
          <>
            <div id="product-info-overview">
              Overview:
              {currentProduct.description}
            </div>
            <div id="product-info-share">
              <img id="product-info-share-facebook" src={facebook} alt="" onClick={() => LogClick('img', 'Overview')} />
              <img id="product-info-share-twitter" src={twitter} alt="" onClick={() => LogClick('img', 'Overview')} />
              <img id="product-info-share-pinterest" src={pinterest} alt="" onClick={() => LogClick('img', 'Overview')} />
            </div>
          </>
        ) : null}
    </div>
  );
};

export default Overview;
