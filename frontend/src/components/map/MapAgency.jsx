/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../index.css";
import LeafletControlGeocoder from "./LeafletGeocoder";

function MapAgency() {
  /*   const [agencies, setAgencies] = useState(); */
  const [chargeCar, setChargeCar] = useState([]);

  const myHeader = new Headers();
  myHeader.append("X-API-KEY", "381b60bc-b81b-45a3-9325-fd5143eb58a9");
  const requestOptions = {
    method: "GET",
    headers: myHeader,
  };

  useEffect(() => {
    fetch(
      "https://api.openchargemap.io/v3/poi/?output=json&countrycode=FR&maxresults=1000",
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        console.warn(result);
        setChargeCar(result);
      })
      .catch((err) => console.warn(err));
  }, []);

  /*   useEffect(() => {
    fetch("http://localhost:5000/agency")
      .then((res) => res.json())
      .then((result) => {
        console.warn(result);
        setAgencies(result);
      })
      .catch((err) => console.warn(err));
  }, []);
 */

  return (
    <div className="h-auto">
      <div className="mapCard">
        <MapContainer
          center={[48.8588897, 2.320041]}
          zoom={11}
          scrollWheelZoom={false}
          className="mapCard"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletControlGeocoder />
          {chargeCar?.map((borne) => (
            <Marker
              key={borne.AddressInfo.ID}
              position={[
                borne.AddressInfo.Latitude,
                borne.AddressInfo.Longitude,
              ]}
            >
              <Popup>
                Adress : {borne.AddressInfo.AddressLine1} <br></br>
                City : {borne.AddressInfo.Town}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapAgency;
