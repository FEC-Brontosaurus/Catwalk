/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import checkmark from '../../../../public/static/checkmark.jpg';
import LogClick from '../../LogClick';
import '../styles/StylesStyle.css';
import noimage from '../../../../public/static/noimage.jpg';

//  will render each style in the current row
//  if the style id is the current styles id add a shadow effect and make the checkmark visible
//  onclick make the style clicked the new current style
const StylesRow = ({
  row, currentStyle, setCurrentStyle, setCurrentSize,
  setCurrentQuantity, setAddToCartNoSize, setValue,
}) => (
  <div id="styles-row-container" data-testid="styles-row-container">
    {row.map((style, styleidx) => (
      <div id="style-div" key={style.name + styleidx}>
        <img
          id="check-img"
          onClick={() => {
            // setCurrentImageIndex(rowidx * 4 + styleidx)
            LogClick('img', 'Overview');
            setCurrentStyle(style);
            (style !== currentStyle ? null : setCurrentStyle(style));
            (style === currentStyle ? null : setAddToCartNoSize(false));
            (style === currentStyle ? null : setCurrentSize(null));
            (style === currentStyle ? null : setCurrentQuantity(null));
            (style === currentStyle ? null : setValue('DEFAULT'));
          }}
          src={checkmark}
          style={(style.style_id === currentStyle.style_id) ? { opacity: 1 } : { opacity: 0 }}
          alt=""
          data-testid={`thumbnailcheck${style.name}`}
        />
        {(style.photos[0].thumbnail_url) ? (
          <img
            id="style-img"
            title="imagethumbnail"
            style={(style.style_id === currentStyle.style_id) ? { boxShadow: '0px 0px 5px 3px #888888' } : null}
            src={style.photos[0].thumbnail_url}
            onClick={() => {
              LogClick('img', 'Overview');
              setCurrentStyle(style);
              (style === currentStyle ? null : setAddToCartNoSize(false));
              (style === currentStyle ? null : setCurrentSize(null));
              (style === currentStyle ? null : setCurrentQuantity(null));
              (style === currentStyle ? null : setValue('DEFAULT'));
            }}
            data-testid={style.name}
            alt=""
          />
        ) : (
          <img
            id="style-img"
            title="imagethumbnail"
            style={(style.style_id === currentStyle.style_id) ? { boxShadow: '0px 0px 5px 3px #888888' } : null}
            src={noimage}
            onClick={() => {
              setCurrentStyle(style);
              LogClick('img', 'Overview');
              (style !== currentStyle ? null : setCurrentStyle(style));
              (style === currentStyle ? null : setAddToCartNoSize(false));
              (style === currentStyle ? null : setCurrentSize(null));
              (style === currentStyle ? null : setCurrentQuantity(null));
              (style === currentStyle ? null : setValue('DEFAULT'));
            }}
            data-testid={`noimage${style.name}`}
            alt=""
          />
        )}
      </div>
    ))}
  </div>
);

export default StylesRow;
