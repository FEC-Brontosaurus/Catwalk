/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ LogClick, setCurrentProduct }) => {
  const [term, setTerm] = useState('');
  const searchId = () => {
    axios.get('/api/search', { params: { search: term } })
      .then((results) => setCurrentProduct(results.data))
      .catch((err) => console.log(err));
  };

  return (
    <div id="searchbar">
      <label htmlFor="search-text" style={{position: 'absolute', opacity: 0 }}>Search</label>
      <input
        name="search-text"
        id="search-text"
        type="text"
        value={term}
        onInput={(event) => {
          LogClick('input', 'Overview');
          setTerm(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          LogClick('button', 'Overview');
          searchId();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
