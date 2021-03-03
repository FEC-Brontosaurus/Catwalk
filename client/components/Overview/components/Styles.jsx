/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StylesRow from './StylesRow';

const Styles = ({ id, currentStyle, setCurrentStyle }) => {
  const [styles, setStyles] = useState([]);

  //  ajax request to get all styles for the current products id
  const getAllStyles = () => {
    axios.get('http://localhost:3000/api/getallstyles', { params: { id } })
      .then((results) => {
        //  makes the default style the first style
        setCurrentStyle(results.data[0]);
        // this will take all of the styles and seperate them into n arrays of length 4
        const numberOfRows = Math.ceil(results.data.length / 4);
        setStyles([...Array(numberOfRows)]
          .map((row, idx) => results.data
            .slice(idx * 4, idx * 4 + 4)));
      })
      .catch((err) => console.log(err));
  };

  //  only get styles when there is an id
  //  this solves the initial loading errors
  useEffect(() => (id ? getAllStyles() : null), [id]);

  //  render the current style above the styles thumbnail
  //  then will render each row by calling styles row equal to the amount of rows present
  return (
    <div id="styles-div">
      {currentStyle ? <div>{currentStyle.name}</div> : null}
      {styles.map((row, rowidx) => (
        <StylesRow
          row={row}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          key={rowidx}
        />
      ))}
    </div>
  );
};

export default Styles;
