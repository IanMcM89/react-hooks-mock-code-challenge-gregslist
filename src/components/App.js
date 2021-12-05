import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListings(data))
  }, []);

  function handleDeleteListing(deletedItem) {
    const updatedListings = listings.filter(listing => listing.id !== deletedItem.id);
    setListings(updatedListings);
  }

  function handleSearchListings(searchValue) {
    if (searchValue === '') {
      fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => setListings(data))
    } else {
      fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => {
        const filteredListings = data.filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()));
        setListings(filteredListings)
      })
    }
  }

  return (
    <div className="app">
      <Header listings={listings} onSearchListings={handleSearchListings}/>
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
