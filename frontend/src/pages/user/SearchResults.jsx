import React from "react";
import Header from "../../components/user/Header";
import MapAgency from "../../components/map/MapAgency";
import SearchResultCard from "../../components/user/SearchResultCard";

function SearchResults() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [city, setCity] = useState();
  // const [cars, setCars]

  // useEffect(() => {
  //   fetch(`http://localhost:5000/carByAgency/:id`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if ( city === result.name){
  //       setCars(result);} else sendStatus(400)
  //     })
  //     .catch((err) => console.warn(err));
  // }, []);

  return (
    <div>
      <Header
      // startDate={startDate}
      // setStartDate={setStartDate}
      // endDate={endDate}
      // setEndDate={setEndDate}
      // city={city}
      // setCity={setCity}
      />
      <div className="flex lg:flex-row justify-between flex-col">
        <MapAgency />
        <div className="flex lg:flex-col w-full flex-row ">
          <SearchResultCard
          // startDate={startDate}
          // endDate={endDate}
          // city={city}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
