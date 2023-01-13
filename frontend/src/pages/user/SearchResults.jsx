import React from "react";
import MapAgency from "../../components/map/MapAgency";
import SearchResultCard from "../../components/user/SearchResultCard";

function SearchResults({ cars }) {
  console.warn("cars", cars);
  return (
    <div>
      <div className="flex lg:flex-row justify-between flex-col">
        <MapAgency cars={cars} />
        <div className="flex lg:flex-col w-full flex-row overflow-y-scroll h-[60vh]">
          {cars?.map((car) => (
            <SearchResultCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
