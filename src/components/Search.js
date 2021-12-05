import React, {useState} from "react";

function Search({onSearchListings}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearchListings(search);
  }

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
