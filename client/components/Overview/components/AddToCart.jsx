/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import '../styles/AddToCartStyles.css';
import axios from 'axios';

const AddToCart = ({
  currentQuantity, currentSize, setAddToCartNoSize, currentStyle, LogClick,
}) => {
  //  handle clicking the add to cart button
  const handleAddToCart = () => {
    LogClick('button', 'Overview');
    if (!currentSize) {
      setAddToCartNoSize(true);
    }
    if (currentQuantity && currentSize) {
      for (const sku_id in currentStyle.skus) {
        if (currentStyle.skus[sku_id].size === currentSize) {
          axios.post('/api/addtocart', { sku_id })
            .catch((err) => console.log(err));
        }
      }
    }
  };

  //  render the button as long as the current size is in stock
  return (
    <div id="addtocart-container">
      {(currentSize === 'OUT OF STOCK') ? null : <button data-testid="addtocart" id="addtocart-button" type="button" onClick={handleAddToCart}><div id="addtocart-text">Add to Cart</div></button>}
    </div>
  );
};

export default AddToCart;
