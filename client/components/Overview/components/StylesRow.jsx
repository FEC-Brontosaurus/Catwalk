import React, { useState } from 'react';
import checkmark from '../../../../public/static/checkmark.jpg';

//  will render each style in the current row
//  if the style id is the current styles id add a shadow effect and make the checkmark visible
//  onclick make the style clicked the new current style
const StylesRow = ({ row, currentStyle, setCurrentStyle }) => (
  <div id="styles-row">
    {row.map((style, styleidx) => (
      <div id="style-div" key={style.name + styleidx} >
        <img
          id="check-img"
          onClick={() => setCurrentStyle(style) }
          src={checkmark} style={(style.style_id === currentStyle.style_id) ? {opacity: 1} : {opacity: 0} }
        />
        <img
          id="style-img"
          style={(style.style_id === currentStyle.style_id) ? {boxShadow: '0px 0px 5px 3px #888888'} : null }
          src={style.photos[0].thumbnail_url}
          key={style.name + styleidx}
          onClick={() => setCurrentStyle(style) }
        />
      </div>
    ))}
  </div>
)

export default StylesRow;