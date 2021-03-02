import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Styles = ({ id, currentStyle, setCurrentStyle }) => {
  const [styles, setStyles] = useState([]);

  const getAllStyles = () => {
    axios.get('http://localhost:3000/api/getallstyles', { params: { 'id': id } })
      .then((results) => {
        setCurrentStyle(results.data[0]);
        const numberOfRows = Math.ceil(results.data.length / 4);
        // [...Array(numberOfRows)].map((row, idx) => results.data.slice(idx * 4, idx * 4 + 4));
        setStyles([...Array(numberOfRows)].map((row, idx) => results.data.slice(idx * 4, idx * 4 + 4)));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => (id ? getAllStyles() : null), [id]);

  return (
    <div id="styles-div">
      {styles.map((row, rowidx) => (
        <div key={rowidx} id="styles-row">
          {row.map((style, styleidx) => (
            <img
              id="style-div"
              style={(style.style_id === currentStyle.style_id) ? {boxShadow: '0px 0px 5px 3px #888888'} : null }
              src={style.photos[0].thumbnail_url}
              key={style.name + styleidx}
              onClick={() => setCurrentStyle(style) }
              value={style}>
            </img>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Styles;