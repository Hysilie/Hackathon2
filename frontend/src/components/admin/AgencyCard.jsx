import React from "react";
import chevronright from "../../assets/chevron-right.svg";

function AgencyCard() {
  return (
    <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-2/3 rounded-2xl">
      <div className="bg-white rounded-3xl p-4 flex flex-col ml-4 relative">
        <div className="text-2xl">Lyon</div>
        <div className="mb-4">33, rue de la chandelle 69006 LYON</div>
        <div className="flex flex-row justify-evenly">
          <div>
            Fleet: <spans className="text-main-yellow">60</spans>
          </div>
          <div>
            Rented: <spans className="text-main-yellow">2</spans>
          </div>
          <div>
            Unavailable: <spans className="text-main-yellow">100</spans>
          </div>
        </div>
        <button type="button">
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
