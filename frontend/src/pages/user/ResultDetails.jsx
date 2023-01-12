import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCurrentUserContext } from "../../contexts/UserContext";
import MapBorn from "../../components/map/MapBorn";

function ResultDetails({ startDate, endDate, city }) {
  const { token } = useCurrentUserContext();
  const [valuesCar, setValuesCar] = useState();
  const idParam = useParams();
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/car/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesCar(result))
      .catch((error) => console.warn("error", error));
  }, []);

  const dateSoustraction = (dateStart, dateEnd) => {
    const dateConvertedStart = new Date(dateStart);
    const dateConvertedEnd = new Date(dateEnd);

    // retourn la difference entre la date date2Start et date2End
    const diffDays = Math.ceil(
      (dateConvertedEnd - dateConvertedStart) / (1000 * 60 * 60 * 24)
    );

    return diffDays;
  };

  const dateConverte = (date) => {
    const dateConverted = new Date(date);
    const year = dateConverted.getFullYear();
    const month = dateConverted.getMonth() + 1;
    const day = dateConverted.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    valuesCar && (
      <div>
        <h1 className="uppercase underline text-center mt-8 text-2xl">
          <span className="font-semibold">{city}</span> -{" "}
          {dateConverte(startDate)} <span className="text-main-yellow">to</span>{" "}
          {dateConverte(endDate)}
        </h1>
        <div className="flex flex-row justify-start mt-8">
          <img
            className="w-96 h-auto object-contain"
            src={
              valuesCar
                ? `http://localhost:5000/car-photo/${valuesCar.photo}`
                : ""
            }
            alt="car"
          />
          <div className="flex flex-col ml-8">
            <div className="uppercase text-2xl">
              {valuesCar.brand} {valuesCar.model}
            </div>
            <div className="text-gray-400	">{valuesCar.kilometers}km</div>
            <div>
              <span className="font-semibold"> Autonomy:</span>{" "}
              {valuesCar.autonomy} km
            </div>
            <div className="text-grey">
              <span className="font-semibold"> Year:</span> {valuesCar.yearCar}
            </div>
            <button type="button">
              <div className="text-grey text-left underline mt-3 mb-3">
                More details
              </div>
            </button>
            <div className="text-main-yellow text-6xl font-medium">
              {dateSoustraction(startDate, endDate) * valuesCar.pricePerDay}€
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end mr-36">
            <button
              type="button"
              className="bg-main-yellow text-white text-2xl mb-5 w-36 font-medium py-2 px-4 rounded-xl"
            >
              RENT
            </button>
          </div>
        </div>
        <MapBorn />
      </div>
    )
  );
}

export default ResultDetails;
