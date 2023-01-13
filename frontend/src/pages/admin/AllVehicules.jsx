import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleCard from "../../components/admin/VehicleCard";

function AllVehicules() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/carByAgency/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.warn(result[0]);
        setVehicles(result[0]);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <section className="">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className=" absolute  m-3   w-fit  flex align-center justify-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#FF9900"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p>go back</p>
      </button>

      <article className=" px-3 md:px-[15vh] pt-[15vh] pb-6  w-full flex  justify-evenly text-sm md:text-2xl">
        <h2>
          Agency : <span className="text-main-yellow"> Lyon </span>
        </h2>
        <h2>
          Fleet :<span className="text-main-yellow"> {vehicles.length}</span>
        </h2>
        <button
          type="button"
          onClick={() => navigate("/admin/vehicles/create")}
          className="flex items-center"
        >
          Add
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.7"
            stroke="#FF9900"
            className="w-4 h-4 md:w-8 md:h-8 mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </article>
      <article className="flex justify-center  flex-wrap gap-6 my-8 mx-[15vw]">
        {vehicles?.map((vehicle) => (
          <div vehicle={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </article>
    </section>
  );
}

export default AllVehicules;
