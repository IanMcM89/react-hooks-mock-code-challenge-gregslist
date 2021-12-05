import React from "react";
import Search from "./Search";

function Header({listings, onSearchListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} onSearchListings={onSearchListings}/>
    </header>
  );
}

export default Header;
