/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../styles/ProductInformationStyles.css';
import RenderStars from '../../renderStars';

//  function to render the general information to the DOM
//  the price is rendered in a different way however
//  if there is not a current price don't render anything
//  if there is a current price but no sale price render the current price
//  if there is botha current price and sale price render the sale price in red followed by the current price with a line through it
const ProductInformation = ({
  currentProduct, currentStyle, overviewAverage, reviewScroll,
}) => (
  <div id="productinformation-container">
    <div id="product-info-star-rating">
      <div id="overviewAverage">
        <RenderStars rating={overviewAverage} />
      </div>
      <div
        id="review-text"
        onClick={
        () => reviewScroll.current.scrollIntoView({ behavior: 'smooth' })
      }
      >read all reviews
      </div>
    </div>
    <div id="product-info-category">{currentProduct.category}</div>
    <div id="product-info-title">{currentProduct.name}</div>

    {currentStyle ? currentStyle.sale_price
      ? (
        <div id="productinformation-sale" style={{ display: 'inline-block' }}>
          <div id="product-info-price-discount" style={{ color: 'red', display: 'inline-block' }}>
            ${currentStyle.sale_price}
          </div>
          <div id="product-info-price-line" style={{ textDecoration: 'line-through', display: 'inline-block' }}>
            ${currentProduct.default_price}
          </div>
        </div>
      )
      : <div id="product-info-price">${currentProduct.default_price}</div>
      : <div id="product-info-price">${currentProduct.default_price}</div>}
  </div>
);

export default ProductInformation;
