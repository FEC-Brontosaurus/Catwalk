/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import facebook from '../../../../public/static/facebook.png';
import twitter from '../../../../public/static/twitter.png';
import pinterest from '../../../../public/static/pinterest.png';

const ProductInformation = ({ currentProduct, currentStyle }) => (
  <div id="ProductInformation">
    {console.log(currentStyle)}
    <div id="product-info-star-rating">Star Rating Placeholder</div>
    <div id="product-info-category">Category: {currentProduct.category}</div>
    <div id="product-info-title">Title: {currentProduct.name}</div>
    <div id="product-info-price">Price: {currentProduct.default_price}</div>
    <div id="product-info-overview">Overview: {currentProduct.description}</div>
    <div id="product-info-share">
      <img id="product-info-share-facebook" src={facebook} alt="" />
      <img id="product-info-share-twitter" src={twitter} alt="" />
      <img id="product-info-share-pinterest" src={pinterest} alt="" />
    </div>
  </div>
);

export default ProductInformation;
