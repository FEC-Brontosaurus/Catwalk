import React, { useEffect, useState } from 'react';
import axios from 'axios';
import checkmark from '../../../../public/static/checkmark.jpg';

const Styles = ({ id, currentStyle, setCurrentStyle }) => {
  const [styles, setStyles] = useState([]);

  //  ajax request to get all styles for the current products id
  const getAllStyles = () => {
    axios.get('http://localhost:3000/api/getallstyles', { params: { 'id': id } })
      .then((results) => {
        //  makes the default style the first style
        setCurrentStyle(results.data[0]);
        // this will take all of the styles and seperate them into n arrays of length 4
        const numberOfRows = Math.ceil(results.data.length / 4);
        setStyles([...Array(numberOfRows)].map((row, idx) => results.data.slice(idx * 4, idx * 4 + 4)));
      })
      .catch((err) => console.log(err));
  };

  //  only get styles when there is an id
  //  this solves the initial loading errors
  useEffect(() => (id ? getAllStyles() : null), [id]);

  //  rendering all the styles
  //  render the current styles name above all the style thumbnails
  //  since the styles is an array with n arrays of length 4
  //  map all of the rows and then map each style in that row
  //  if the current style id matches the rendering styles id add a box shadow around it to signify selected and change the opacity of the checkmark to be visible.
  //  if the style is clicked make it the current style
  return (
    <div id="styles-div">
      {currentStyle ? <div>{currentStyle.name}</div> : null}
      {styles.map((row, rowidx) => (
        <div key={rowidx} id="styles-row">
          {row.map((style, styleidx) => (
            <div id="style-div" key={style.name + styleidx} >
              {/* {(style.style_id === currentStyle.style_id) ? <img id="check-img" src={checkmark} />: null} */}
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
                value={style}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Styles;