/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import checkmark from '../../../../public/static/checkmark.jpg';
import LogClick from '../../LogClick';

//  will render each style in the current row
//  if the style id is the current styles id add a shadow effect and make the checkmark visible
//  onclick make the style clicked the new current style
const StylesRow = ({
  row, currentStyle, setCurrentStyle, setCurrentSize, setCurrentQuantity, setAddToCartNoSize
}) => (
  <div id="styles-row">
    {row.map((style, rowidx) => (
      <div id="style-div" key={style.name + rowidx}>
        <img
          id="check-img"
          onClick={() => {
            setCurrentStyle(style);
            setAddToCartNoSize(false);
            LogClick('img', 'Overview');
            (style === currentStyle ? null : setAddToCartNoSize(false));
            (style === currentStyle ? null : setCurrentSize(null));
            (style === currentStyle ? null : setCurrentQuantity(null));
          }}
          src={checkmark}
          style={(style.style_id === currentStyle.style_id) ? { opacity: 1 } : { opacity: 0 }}
          alt=""
        />
        <img
          id="style-img"
          style={(style.style_id === currentStyle.style_id) ? { boxShadow: '0px 0px 5px 3px #888888' } : null}
          src={style.photos[0].thumbnail_url}
          onClick={() => {
            setCurrentStyle(style);
            LogClick('img', 'Overview');
            (style === currentStyle ? null : setAddToCartNoSize(false));
            (style === currentStyle ? null : setCurrentSize(null));
            (style === currentStyle ? null : setCurrentQuantity(null));
          }}
          data-testid={style.name}
          alt=""
        />
      </div>
    ))}
  </div>
);

export default StylesRow;
