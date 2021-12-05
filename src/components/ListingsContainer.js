import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {
  const listingsToBeDisplayed = listings.map(listing => <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing}/>);

  return (
    <main>
      <ul className="cards">
        {listingsToBeDisplayed}
      </ul>
    </main>
  );
}

export default ListingsContainer;
