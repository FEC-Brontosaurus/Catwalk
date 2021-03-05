import React, { useState, useEffect } from 'react';

const Search = ({ searchResults, setQuestions, masterList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchTerm = (e, value) => {
  //   e.preventDefault();
  //   //console.log(value);
  //   searchResults(value);

  // }
  console.log('masterlist inside search', masterList);
  useEffect(() => (searchTerm.length > 2 ? searchResults(searchTerm) : setQuestions(masterList)), [searchTerm]);

  return (
    <form>
      <label>Search Bar</label>
      <input type="text" placeholder="Have a question? Search for answers…" value={searchTerm} onInput={() => setSearchTerm(event.target.value)}></input>
      <button type="button"></button>
    </form>
  )
}

export default Search;
