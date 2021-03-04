import React, {useCallback} from 'react';
import LogClick from '../../LogClick';

const SizesRender = ({ styleArray, setCurrentSize }) => {

  //  remove any sizes from the array to render that are out of stock
  styleArray = styleArray.filter((size) => size.quantity > 0);

  //  will render all in stock sizes to the DOM
  //  has a default text that will stay until the user selects a size
  //  on clicking a size it willl update the current size and log the click
  //  all sizes are out of stock OUT OF STOCK will be rendered to the DOM
  return (
    <div id="sizes-container">
      {(styleArray.length > 0) ?
      <select id="sizes-select"
        defaultValue={'DEFAULT'}
        onChange={(event) => {
          setCurrentSize(event.target.value);
          LogClick('select', 'Overview');
        }}>
        <option value='DEFAULT' disabled hidden>Select a Style</option>
        {styleArray.map((size, idx) => (
          <option id="sizes-option" key={size.size + idx} value={size.size} >{size.size}</option>
        ))}
      </select> :
      <div>OUT OF STOCK</div>}
    </div>
  )
};

export default SizesRender;