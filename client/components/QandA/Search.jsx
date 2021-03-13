import React, { useState, useEffect } from 'react';

const Search = ({
  searchResults, setQuestions, masterList, logClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => (searchTerm.length > 2 ? searchResults(searchTerm) : setQuestions(masterList)), [searchTerm]);

  return (
    <form>
      <label className="hidden-element" htmlFor="search-bar">Search Bar</label>
      <input id="search-bar" type="text" placeholder="Have a question? Search for answers…" onClick={() => logClick('search bar click', 'QandA')} value={searchTerm} onInput={(event) => setSearchTerm(event.target.value)} />
    </form>
  );
};

export default Search;
