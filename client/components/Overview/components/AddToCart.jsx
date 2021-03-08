/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import './../styles/AddToCartStyles.css';

const AddToCart = ({ currentQuantity, currentSize, setAddToCartNoSize }) => {
  //  handle clicking the add to cart button
  const handleAddToCart = () => {
    if (!currentSize) {
      setAddToCartNoSize(true);
    }
    if (currentQuantity && currentSize) {
      console.log('ADDED TO CART');
    }
  };

  //  render the button as long as the current size is in stock
  return (
    <div id="addtocart-container">
      {(currentSize === 'OUT OF STOCK') ? null : <button id="addtocart-button" type="button" onClick={handleAddToCart}><div id="addtocart-text">Add to Cart</div></button>}
    </div>
  );
};

export default AddToCart;
