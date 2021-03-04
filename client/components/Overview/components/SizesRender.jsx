import React from 'react';
import LogClick from '../../LogClick';

const SizesRender = ({ styleArray, setCurrentSize }) => {

  //  remove any sizes from the array to render that are out of stock
  styleArray = styleArray.filter((size) => size.quantity > 0);

  //  set the default size to the first item in the array
  setCurrentSize(styleArray[0])

  //  will render all in stock sizes to the DOM
  //  on clicking a size it willl update the current size and log the click
  //  all sizes are out of stock OUT OF STOCK will be rendered to the DOM
  return (
    <div id="sizes-container">
      {(styleArray.length > 0) ?
      <select id="sizes-select" onChange={(event) => {
        setCurrentSize(event.target.value);
        LogClick('select', 'Overview');
      }}>
        {styleArray.map((size, idx) => (
          <option id="sizes-option" key={size.size + idx} value={size.size} >{size.size}</option>
        ))}
      </select> :
      <div>OUT OF STOCK</div>}
    </div>
  )
};

export default SizesRender;