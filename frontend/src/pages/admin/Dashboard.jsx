/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AgencyCard from "../../components/admin/AgencyCard";
import circleplusicon from "../../assets/plus-circle.svg";

function Dashboard() {
  const [agencies, setAgencies] = useState();
  const [totalCars, setTotalCars] = useState();
  const [rentedCars, setRentedCars] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/totalCars`)
      .then((res) => res.json())
      .then((result) => {
        setTotalCars(result);
      })
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/allRentals`)
      .then((res) => res.json())
      .then((result) => {
        setRentedCars(result);
      })
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/agencies")
      .then((res) => res.json())
      .then((result) => {
        setAgencies(result);
      })
      .catch((err) => console.warn(err));
  }, []);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let totalRentedCars = 0;
  for (let i = 0; i < rentedCars?.length; i++) {
    if (rentedCars[i]) totalRentedCars++;
  }

  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 mx-8">
        <div className="row-span-3 ... mt-5">
          {new Date().toLocaleDateString("fr-FR", options)}
          <div className="text-center mt-12">
            <h2>
              <div className="flex flex-col">
                <div className="text-main-yellow text-7xl">
                  {totalRentedCars}
                </div>
                <div className="text-3xl">Rented</div>
                <div className="text-xl">Vehicules</div>
              </div>
            </h2>
            <div className="flex flex-col">
              <div className="text-main-yellow text-7xl mt-11">
                {totalCars?.count}
              </div>
              <div className="text-3xl">Global fleet</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ...">
          <div className="flex flex-row items-center content-center">
            <h2 className="text-3xl mt-12 mb-6 mr-3">My agencies</h2>
            <Link to="/admin/agencies/create">
              <button type="button">
                <img
                  src={circleplusicon}
                  alt="plus icon"
                  className="w-6 mt-8"
                />
              </button>
            </Link>
          </div>

          {agencies?.map((agency) => (
            <div key={agency.id} className="p-3">
              <Link to={`/admin/agencies/${agency.id}/vehicles`}>
                <AgencyCard agency={agency} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
