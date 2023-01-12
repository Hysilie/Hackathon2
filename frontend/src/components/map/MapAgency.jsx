/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-duplicates */
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../index.css";
import LeafletControlGeocoder from "./LeafletGeocoder";

function MapAgency({ cars }) {
  /*   const [chargeCar, setChargeCar] = useState([]); 
  
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

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
  }, []); */

  const agencies = [
    { city: "Lyon", latitude: "45.764042", longitude: "4.835659" },
    { city: "Paris", latitude: "48.856613", longitude: "2.352222" },
    { city: "Marseille", latitude: "43.296482", longitude: "5.369780" },
    { city: "Nice", latitude: "43.710175", longitude: "7.261953" },
    { city: "Biarritz", latitude: "43.4832523", longitude: "1.5592776" },
    { city: "Bordeaux", latitude: "44.841225", longitude: "-0.5800364" },
    { city: "Caen", latitude: "49.1813403", longitude: "-0.3635615" },
  ];

  const resultat = [];

  const { name } = cars[0];

  for (let i = 0; i < agencies.length; i++) {
    if (name.includes(agencies[i].city)) {
      resultat.push(agencies[i]);
    }
  }

  return (
    <div className="h-auto">
      <div className="mapCard">
        <MapContainer
          center={[resultat[0].latitude, resultat[0].longitude]}
          zoom={11}
          scrollWheelZoom={false}
          className="mapCard"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletControlGeocoder />
          {cars?.map((car) => (
            <Marker key={car.carId} position={[car.latitude, car.longitude]}>
              <Popup>
                Adress : {car.adress}
                <br></br>
                City : {car.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapAgency;
