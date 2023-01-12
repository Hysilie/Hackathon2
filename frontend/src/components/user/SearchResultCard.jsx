import React from "react";
import { Link } from "react-router-dom";

function SearchResultCard() {
  return (
    <div className="shadow-lg border rounded-lg lg:h-32 h-48 flex flex-row m-4">
      <img
        src="https://images.caradisiac.com/images/8/7/4/4/168744/S0-renault-zoe-une-serie-limitee-a-prix-agressif-553981.jpg"
        alt="Nom de la voiture"
        className="object-contain w-32  mx-4"
      />
      <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:w-full w-96 border-gray-100 border-l-2 pl-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold pl-2 mt-2">Super model S3</h2>
            <p className="text-xs text-slate-400 pl-2 pb-2">55 000 km</p>
          </div>

          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p>LYON</p>
          </div>
        </div>
        <ul className="text-sm flex lg:flex-col flex-row">
          <li className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p>5</p>
          </li>

          <li className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
              />
            </svg>
            <p>
              {/* gear box */}
              350kms
            </p>
          </li>
        </ul>

        <div className="flex lg:flex-col flex-row justify-end mr-4">
          <p className="text-main-yellow text-3xl font-semibold m-2">60€</p>
          <Link to="/cars/1" className="p-1  text-white ">
            <div className="w-24 bg-main-yellow m-2 p-2 rounded  text-center">
              Rent
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard;
