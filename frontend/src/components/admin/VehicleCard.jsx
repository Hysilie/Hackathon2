import React from "react";
import automatic from "../../assets/automatic.svg";

function VehicleCard({ vehicle }) {
  const removeCar = () => {
    /* removeCar */
  };

  console.warn(vehicle);

  const [available, setAvailable] = React.useState(true);
  const handleAvailablity = () => {
    /* handleAvailablity */
    setAvailable(!available);
  };

  return (
    <div className="relative shadow-lg border rounded-lg h-full w-64">
      <button
        type="button"
        onClick={removeCar}
        className="absolute right-2 top-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="#333"
          className="w-5 h-5 m-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <h2 className="text-lg font-semibold mt-6 pb-0 text-center p-2">
        {vehicle.brand} {vehicle.model}
      </h2>
      <img
        src={
          vehicle ? `http://localhost:5000/car-photo/${vehicle.photo}` : null
        }
        alt="Nom de la voiture"
        className="object-contain w-32 h-32 mx-auto"
      />
      <ul className="flex m-0 items-center justify-around text-sm">
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p>{vehicle.maxPlace}</p>
        </li>

        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
            />
          </svg>
          <p className="ml-1">
            {/* gear box */}
            {vehicle.autonomy}kms
          </p>
        </li>
        <li className="flex items-center">
          <img src={automatic} alt="automatic box icon" className="h-3 w-3" />A
        </li>
      </ul>
      <hr />
      <ul className="flex text-center text-sm justify-between mx-6 my-3">
        <li className="font-semibold">
          from :<p>2022-10-13</p>
        </li>
        <li className="font-semibold">
          to :<p>2022-10-20</p>
        </li>
      </ul>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleAvailablity}
          className={`p-1 m-1 w-24 mb-4 text-white rounded ${
            available ? "bg-main-yellow" : "bg-gray-300"
          }  `}
        >
          {available ? "available" : "unavailable"}
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
