/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import facebook from '../../../../public/static/facebook.png';
import twitter from '../../../../public/static/twitter.png';
import pinterest from '../../../../public/static/pinterest.png';

//  function to render the general information to the DOM
//  the price is rendered in a different way however
//  if there is not a current price don't render anything
//  if there is a current price but no sale price render the current price
//  if there is botha current price and sale price render the sale price in red followed by the current price with a line through it
const ProductInformation = ({ currentProduct, currentStyle }) => (
  <div id="ProductInformation">
    <div id="product-info-star-rating">Star Rating Placeholder</div>
    <div id="product-info-category">Category: {currentProduct.category}</div>
    <div id="product-info-title">Title: {currentProduct.name}</div>

    {currentStyle ? currentStyle.sale_price
      ? (
        <div style={{ display: 'inline-block' }}>
          <div id="product-info-price-discount" style={{ color: 'red', display: 'inline-block' }}>
            {currentStyle.sale_price}
          </div>
          <div id="product-info-price-line" style={{ textDecoration: 'line-through', display: 'inline-block' }}>
            {currentProduct.default_price}
          </div>
        </div>
      )
      : <div id="product-info-price">Price: {currentProduct.default_price}</div>
      : <div id="product-info-price">Price: {currentProduct.default_price}</div>}

    <div id="product-info-overview">Overview: {currentProduct.description}</div>
    <div id="product-info-share">
      <img id="product-info-share-facebook" src={facebook} alt="" />
      <img id="product-info-share-twitter" src={twitter} alt="" />
      <img id="product-info-share-pinterest" src={pinterest} alt="" />
    </div>
  </div>
);

export default ProductInformation;
