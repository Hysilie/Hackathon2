import React from "react";
import AgencyCard from "../../components/admin/AgencyCard";
import circleplusicon from "../../assets/plus-circle.svg";

function Dashboard() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 mx-8">
        <div className="row-span-3 ... mt-5">
          {new Date().toLocaleDateString("fr-FR", options)}
          <div className="text-center mt-12">
            <h2>
              <div className="flex flex-col">
                <div className="text-main-yellow text-7xl">30</div>
                <div className="text-3xl">Rented</div>
                <div className="text-xl">Vehicules</div>
              </div>
            </h2>
            <div className="flex flex-col">
              <div className="text-main-yellow text-7xl mt-11">600</div>
              <div className="text-3xl">Global fleet</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ...">
          <div className="flex flex-row content-center">
            <h2 className="text-3xl mt-12 mb-6 mr-3">My agencies</h2>
            <button type="button">
              <img src={circleplusicon} alt="plus icon" className="w-6 mt-7" />
            </button>
          </div>
          <AgencyCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
