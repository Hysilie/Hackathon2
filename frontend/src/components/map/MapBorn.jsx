/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../index.css";
import LeafletControlGeocoder from "./LeafletGeocoder";

function MapBorn() {
  const [chargeCar, setChargeCar] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "81b60bc-b81b-45a3-9325-fd5143eb58a9");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(
      "https://api.openchargemap.io/v3/poi/?output=json&countrycode=FR&maxresults=1000",
      requestOptions
    )
      .then((res) => res.json())
      .then((result) => {
        setChargeCar(result);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="h-auto">
      <div className="mapCard">
        <MapContainer
          center={["49.4404591", "1.0939658"]}
          zoom={13}
          scrollWheelZoom={false}
          className="mapCard"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletControlGeocoder />
          {chargeCar?.map((charge) => (
            <Marker
              key={charge.AddressInfo.ID}
              position={[
                charge.AddressInfo.Latitude,
                charge.AddressInfo.Longitude,
              ]}
            >
              <Popup>
                Adress : {charge.AddressInfo.AddressLine1}
                <br></br>
                City : {charge.AddressInfo.Town}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapBorn;
