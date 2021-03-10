/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const SizesRender = ({
  styleArray, setCurrentSize, setCurrentQuantity, currentSize,
  addToCartNoSize, setAddToCartNoSize, value, setValue, LogClick,
}) => {
  //  remove any sizes from the array to render that are out of stock
  styleArray = styleArray.filter((size) => size.quantity > 0);

  //  if the user did not have a size selected
  //  open the size drop down and request them to
  if (addToCartNoSize) {
    return (
      <div id="sizes-container-addtocart">
        <select
          id="sizes-select-addtocart"
          data-testid="sizes-select-addtocart"
          value={value}
          style={{ overflow: 'hidden' }}
          size={styleArray.length + 1}
          onChange={(event) => {
            setValue(event.target.value);
            setCurrentSize(event.target.value);
            setCurrentQuantity(null);
            setAddToCartNoSize(false);
            LogClick('select', 'Overview');
          }}
        >
          <option data-testid="option" value="DEFAULT">Select Size</option>
          {styleArray.map((size, idx) => (
            <option id="size-option-valid" data-testid="option" key={size + idx} value={size.size}>{size.size}</option>
          ))}
        </select>
      </div>
    );
  }

  //  if the user clicked on a different style or hasn't selected
  //  a size the value will be the default string

  //  when the user selects a different size change the
  //  displayed size / current size and reset the quantity selecte
  if (currentSize === null) {
    return (
      <div id="sizes-select">
        <select
          id="sizes-select"
          data-testid="sizes-select-nocurrent"
          value="DEFAULT"
          onChange={(event) => {
            setValue(event.target.value);
            setCurrentSize(event.target.value);
            setCurrentQuantity(null);
            LogClick('select', 'Overview');
          }}
        >
          <option disabled hidden value="DEFAULT">Select Size</option>
          {styleArray.map((size, idx) => (
            <option id="size-option-valid" data-testid="size-option-valid" key={size + idx} value={size.size}>{size.size}</option>
          ))}
        </select>
      </div>
    );
  }

  //  when the user selects a different size change the
  //  displayed size / current size and reset the quantity selecte
  return (
    <div id="sizes-select">
      <select
        id="sizes-select"
        data-testid="sizes-select-current"
        value={currentSize}
        onChange={(event) => {
          setValue(event.target.value);
          setCurrentSize(event.target.value);
          setCurrentQuantity(null);
          LogClick('select', 'Overview');
        }}
      >
        <option disabled hidden value="DEFAULT">Select Size</option>
        {styleArray.map((size, idx) => (
          <option id="size-option-valid" data-testid="size-option-valid" key={size + idx} value={size.size}>{size.size}</option>
        ))}
      </select>
    </div>
  );
};

export default SizesRender;
