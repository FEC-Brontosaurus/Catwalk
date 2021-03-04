/* eslint-disable react/no-array-index-key */
import React from 'react';
import LogClick from '../../LogClick';

//  made to render to the screen
//  if there is no valid current size it will render ------ and nothing else in list
//  otherwise it will render the list possible quantities
//  if the user changes sizes it will re-select to display select select quantity
//  this essentially will reset the displayed quantity everytime a new size is chosen
const QuantityRender = ({
  quantityArray, setCurrentQuantity, currentSize, currentQuantity,
}) => (
  <div id="quantity-container">
    {(currentSize)
      ? (
        <select
          id="quantity-select-valid"
          defaultValue="DEFAULT"
          onChange={(event) => {
            setCurrentQuantity(event.target.value);
            LogClick('select', 'Overview');
          }}
        >
          {currentQuantity ? <option value="DEFAULT" disabled hidden>Select Quantity</option>
            : <option value="DEFAULT" selected disabled hidden>Select Quantity</option>}
          {/* <option value="DEFAULT" disabled hidden >Select Quantity</option> */}
          {quantityArray.map((quantity, idx) => (
            <option id="quantity-option-valid" key={quantity + idx} value={quantity}>{quantity}</option>
          ))}
        </select>
      )
      : <select id="quantity-select-invalid"><option id="quantity-option-invalid" value="DEFAULT" hidden>------</option></select>}
  </div>
);

export default QuantityRender;
