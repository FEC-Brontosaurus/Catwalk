import React from 'react';
import LogClick from '../../LogClick';

const SizesRender = ({ styleArray, setCurrentSize }) => {

  return (
    <select id="sizes-select" onChange={(event) => {
      setCurrentSize(event.target.value);
      LogClick('select', 'Overview');
    }}>
      {styleArray.map((size, idx) => (
        <option id="sizes-option" key={size.size + idx} value={size.size} >{size.size}</option>
      ))}
    </select>
  )
};

export default SizesRender;