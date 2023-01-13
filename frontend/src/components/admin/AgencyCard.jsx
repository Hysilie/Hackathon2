/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import chevronright from "../../assets/chevron-right.svg";

function AgencyCard({ agency }) {
  const [carsByAgency, setCarsByAgency] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/carByAgency/${agency.id}`)
      .then((res) => res.json())
      .then((result) => {
        console.warn("result", result);
        setCarsByAgency(result[0]);
      })
      .catch((err) => console.warn(err));
  }, []);

  let unavailableCars = 0;
  let rentedCars = 0;

  for (let i = 0; i < carsByAgency?.length; i++) {
    console.warn("what", carsByAgency[0]?.available);
    if (carsByAgency[i].available === 0) unavailableCars++;
    if (carsByAgency[i].rented === 1) rentedCars++;
  }

  console.warn("tt,", unavailableCars);

  return (
    <div className="shadow-lg w-2/3 rounded-2xl">
      <div className="bg-white rounded-3xl p-4 flex flex-col ml-4 relative">
        <div className="text-2xl">{agency.name}</div>
        <div className="mb-4">{agency.location}</div>
        <div className="flex flex-row justify-evenly">
          <div>
            Fleet:{" "}
            <span className="text-main-yellow">{carsByAgency[0]?.length}</span>
          </div>
          <div>
            Rented: <span className="text-main-yellow">{rentedCars}</span>
          </div>
          <div>
            Unavailable:{" "}
            <span className="text-main-yellow">{unavailableCars}</span>
          </div>
        </div>
        <button onClick={() => navigate("/admin/vehicles")} type="button">
          <img
            className="w-10 absolute right-0 top-11"
            src={chevronright}
            alt="chevron right"
          />
        </button>
      </div>
    </div>
  );
}

export default AgencyCard;
