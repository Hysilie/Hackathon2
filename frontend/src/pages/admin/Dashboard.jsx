import React from "react";
import AgencyCard from "../../components/admin/AgencyCard";

function Dashboard() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 mx-8">
        <div className="row-span-3 ... mt-5">
          {new Date().toLocaleDateString("fr-FR", options)}
          <h2>
            <div className="flex flex-col">
              <span className="text-main-yellow text-3xl">30</span>{" "}
              <span className="text-3xl">Rented</span>
              <span className="text-3xl">Vehicules</span>
            </div>
          </h2>
          <div className="flex flex-col">
            <span className="text-main-yellow text-6xl mt-11">600</span>
            <span className="text-3xl">Global fleet</span>
          </div>
        </div>
        <div className="col-span-2 ...">
          <h2 className="text-2xl mt-12 mb-6">My agencies</h2>
          <AgencyCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
