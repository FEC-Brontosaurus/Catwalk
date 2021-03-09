import React, { useState, useEffect } from 'react';

const Search = ({ searchResults, setQuestions, masterList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => (searchTerm.length > 2 ? searchResults(searchTerm) : setQuestions(masterList)), [searchTerm]);

  return (
    <form>
      <label>Search Bar</label>
      <input type="text" placeholder="Have a question? Search for answers…" value={searchTerm} onInput={() => setSearchTerm(event.target.value)}></input>
    </form>
  )
}

export default Search;
