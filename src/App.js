import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, clearSearch } from "./swapiSlice";

const App = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.swapi.searchResults);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchCharacters(query));
    }
  };

  const handleClear = () => {
    dispatch(clearSearch());
    setQuery("");
  };

  return (
    <div className="app">
      <h1>SWAPI</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter People 1 or People 2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="character-list">
        {searchResults.length > 0 ? (
          searchResults.map((character) => (
            <div key={character.id} className="character-card">
              <h2>{character.name}</h2>
              <p>Height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
              <p>Gender: {character.gender}</p>
            </div>
          ))
        ) : (
          <div className="character-card empty">
            <p>No data available</p>
          </div>
        )}
      </div>

      <footer>
        <button onClick={handleClear}>Clear</button>
      </footer>
    </div>
  );
};

export default App;
