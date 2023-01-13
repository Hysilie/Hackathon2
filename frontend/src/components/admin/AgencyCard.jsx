import React from "react";
import { useNavigate } from "react-router-dom";
import chevronright from "../../assets/chevron-right.svg";

function AgencyCard({ agency }) {
  const navigate = useNavigate();

  return (
    <div className="shadow-lg w-2/3 rounded-2xl">
      <div className="bg-white rounded-3xl p-4 flex flex-col ml-4 relative">
        <div className="text-2xl">{agency.name}</div>
        <div className="mb-4">{agency.location}</div>
        <div className="flex flex-row justify-evenly">
          <div>
            Fleet: <spans className="text-main-yellow">7</spans>
          </div>
          <div>
            Rented: <spans className="text-main-yellow">1</spans>
          </div>
          <div>
            Unavailable: <spans className="text-main-yellow">0</spans>
          </div>
        </div>
        <button onClick={() => navigate("/admin/vehicles")} type="button">
          <img
            className="w-10 absolute right-0 top-11"
            src={chevronright}
            alt="chevron right"
          />
        </button>
      </div>
    </div>
  );
}

export default AgencyCard;
