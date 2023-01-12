import React from "react";
import { useNavigate } from "react-router-dom";
import teslaS from "../../assets/teslamodelS.svg";
import MapBorn from "../../components/map/MapBorn";

function ResultDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="uppercase underline text-center mt-8 text-2xl">
        lyon - 18 JAN to 23 JAN 2023
      </h1>
      <div className="flex flex-row justify-start mt-8 ml-10">
        <img className="w-96 h-auto object-contain" src={teslaS} alt="car" />
        <div className="flex flex-col ml-8">
          <div className="uppercase text-2xl">Tesla model S</div>
          <div className="text-gray-400	">9000km</div>
          <div>
            <span className="font-semibold"> Autonomy:</span> 2000000km
          </div>
          <div className="text-grey">
            <span className="font-semibold"> Year:</span> 2019
          </div>
          <button type="button">
            <div className="text-grey text-left underline mt-3 mb-3">
              More details
            </div>
          </button>
          <div className="text-main-yellow text-6xl font-medium">60 €</div>
        </div>
      </div>
      <div>
        <div className="flex justify-end mr-36">
          <button
            onClick={() => {
              navigate("/cars/1/rent");
            }}
            type="button"
            className="bg-main-yellow text-white text-2xl mb-5 w-36 font-medium py-2 px-4 rounded-xl"
          >
            RENT
          </button>
        </div>
      </div>
      <MapBorn />
    </div>
  );
}

export default ResultDetails;
