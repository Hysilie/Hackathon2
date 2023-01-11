import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const showOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };
  return (
    <div>
      <div className="h-16 py-3 flex flex-row justify-between shadow-md relative z-0">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 mx-4" />
        </Link>

        <button
          type="button"
          className="flex flex-row justify-end items-center"
          onClick={showOptions}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-10 mx-4  ${
              showLoginOptions ? "stroke-main-yellow" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-4 mx-4  ${
              showLoginOptions ? "stroke-main-yellow" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {showLoginOptions ? (
        <div className="text-right absolute right-0 z-20">
          <ul className="shadow-md rounded-lg py-2">
            <Link to="/login" onClick={showOptions}>
              <li className="bg-main-yellow hover:bg-second-yellow text-white rounded-lg pl-16 pr-4 m-4 py-2">
                Login
              </li>
            </Link>
            <Link to="/registration" onClick={showOptions}>
              <li className="bg-main-yellow hover:bg-second-yellow text-white rounded-lg pl-16 pr-4 m-4 py-2">
                Register
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
