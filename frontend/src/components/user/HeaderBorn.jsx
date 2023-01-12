import React from "react";
import Nasa from "../../assets/forest-background.jpg";
import "react-datepicker/dist/react-datepicker.css";

function HeaderBorn() {
  return (
    <div
      className="object-cover h-80 w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${Nasa}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-5xl drop-shadow-3xl font-semibold">
        BORNES TO BE ALIVE
      </h1>
      <div className="flex flex-row m-12">
        <h2 className="text-white text-3xl drop-shadow-3xl ">
          Find the closest charging stations near you
        </h2>
      </div>
    </div>
  );
}

export default HeaderBorn;
