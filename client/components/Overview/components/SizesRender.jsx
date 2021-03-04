/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import LogClick from '../../LogClick';

const SizesRender = ({
  styleArray, setCurrentSize, setCurrentQuantity, currentSize, addToCartNoSize, setAddToCartNoSize,
}) => {
  //  remove any sizes from the array to render that are out of stock
  styleArray = styleArray.filter((size) => size.quantity > 0);
  let value = '';

  if (!currentSize) {
    value = 'DEFAULT';
  }

  if (addToCartNoSize) {
    return (
      <div>
        <div>Please Select Size</div>
        <select
          id="sizes-select-addtocart"
          value={value}
          onChange={(event) => {
            value = event.target.value;
            setCurrentSize(event.target.value);
            setCurrentQuantity(null);
            setAddToCartNoSize(false);
            LogClick('select', 'Overview');
          }}
        >
          <option disabled hidden value="DEFAULT">Select Size</option>
          {styleArray.map((size, idx) => (
            <option id="size-option-valid" key={size + idx} value={size.size}>{size.size}</option>
          ))}
        </select>
      </div>
    );
  }
  //  will render all in stock sizes to the DOM
  //  changing the current size will set the reset what the current quantity is
  return (
    <div>
      <select
        id="sizes-select"
        value={value}
        onChange={(event) => {
          value = event.target.value;
          setCurrentSize(event.target.value);
          setCurrentQuantity(null);
          LogClick('select', 'Overview');
        }}
      >
        <option disabled hidden value="DEFAULT">Select Size</option>
        {styleArray.map((size, idx) => (
          <option id="size-option-valid" key={size + idx} value={size.size}>{size.size}</option>
        ))}
      </select>
    </div>
  );
};

export default SizesRender;
