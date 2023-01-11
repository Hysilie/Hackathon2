import React from "react";
import { useNavigate } from "react-router-dom";

function AllVehicules() {
  const navigate = useNavigate();
  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className=" absolute  m-3 md:m-6 md:left-10 w-fit text-white flex align-center justify-center "
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

      <article className="w-full flex justify-around text-2xl">
        <h2>
          Agency : <span> Lyon </span>
        </h2>
        <h2>
          Fleet :<span> 30</span>
        </h2>
        <h2 className="flex items-center">
          Add
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.7"
            stroke="#FF9900"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </h2>
      </article>
    </section>
  );
}

export default AllVehicules;
