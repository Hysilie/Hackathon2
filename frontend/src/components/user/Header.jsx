import React, { useState } from "react";
import DatePicker from "react-datepicker";
import forestHeader from "../../assets/forest-background.jpg";
import "react-datepicker/dist/react-datepicker.css";

function Header() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="object-cover h-96 w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${forestHeader}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-4xl drop-shadow-3xl font-semibold">
        MOVE WITH ELECTRIC
      </h1>
      <div className="flex flex-row m-6">
        <input type="text" placeholderText="City" />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          disabledKeyboardNavigation
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          disabledKeyboardNavigation
        />
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-white bg-main-yellow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
