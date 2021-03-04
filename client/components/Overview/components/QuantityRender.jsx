import React from 'react';
import LogClick from '../../LogClick';

const QuantityRender = ({ quantityArray, setCurrentQuantity, currentSize }) => {

  return (
    <div id="quantity-container">
      {(currentSize) ?
      <select id="quantity-select-valid"
        defaultValue={'DEFAULT'}
        onChange={(event) => {
          setCurrentQuantity(event.target.value);
          LogClick('select', 'Overview');
        }}>
        <option value='DEFAULT' disabled hidden>Select Quantity</option>
        {quantityArray.map((quantity, idx) => (
          <option id="quantity-option-valid" key={quantity + idx} value={quantity} >{quantity}</option>
        ))}
      </select> :
      <select id="quantity-select-invalid"><option id="quantity-option-invalid" value='DEFAULT' hidden>------</option></select>}
    </div>
  )
};

export default QuantityRender;