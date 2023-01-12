import React from "react";
import DatePicker from "react-datepicker";
import forestHeader from "../../assets/forest-background.jpg";
import "react-datepicker/dist/react-datepicker.css";

function Header({
  setStartDate,
  setEndDate,
  setCity,
  city,
  handleclick,
  startDate,
  endDate,
}) {
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

      <div className="text-white text-xl pl-6 text-right  w-2/6">
        by Amazon e-Fleet
      </div>
      <div className="flex flex-row m-12">
        <input
          type="text"
          placeholder="Lyon, Paris, Bordeaux, ..."
          className="rounded-l-lg h-[40px] px-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          disabledKeyboardNavigation
          className="h-[40px] px-2 border-l-2"
          placeholder="Start date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          disabledKeyboardNavigation
          className="h-[40px] px-2 border-l-2"
          placeholder="Return date"
        />
        <div>
          <button
            type="button"
            onClick={handleclick}
            className=" bg-main-yellow h-[40px] w-[40px] rounded-r-lg flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white "
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
    </div>
  );
}

export default Header;
