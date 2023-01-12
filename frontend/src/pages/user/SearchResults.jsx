import React from "react";
import Header from "../../components/user/Header";
import MapAgency from "../../components/map/MapAgency";
import SearchResultCard from "../../components/user/SearchResultCard";

function SearchResults() {
  return (
    <div>
      <Header />
      <div className="flex lg:flex-row justify-between flex-col">
        <MapAgency />
        <div className="flex lg:flex-col w-full flex-row ">
          <SearchResultCard />
          <SearchResultCard />
          <SearchResultCard />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
