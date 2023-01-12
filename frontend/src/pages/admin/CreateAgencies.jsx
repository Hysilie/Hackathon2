import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import buildingIcon from "../../assets/building.png";

function CreateVehicule() {
  const navigate = useNavigate();

  const [name, setNameAgencie] = useState("");
  const [country, setCountry] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");

  // for alert notification error edit decision after submit
  const notify = () =>
    toast.error(
      "Please fill all the fields and check if the adress is correct"
    );

  // fetch to get latitude and logitude by adress
  useEffect(() => {
    const myHeader = new Headers();

    const requestOptions = {
      headers: myHeader,
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${country}${adress}${city}${codePostal}&apiKey=8c400060358842b4a9dd7ddd7b41bc8f`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLatitude(result.features[0].properties.lat);
        setLongitude(result.features[0].properties.lon);
        setLocation(result.features[0].properties.formatted);
      })
      .catch((error) => console.warn("error", error));
  }, [adress, codePostal, country]);

  // fetch to create agencie
  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      location,
      latitude,
      longitude,
    });

    toast
      .promise(
        fetch("http://localhost:5000/agencie-register", {
          method: "POST",
          redirect: "follow",
          body: raw,
          headers: myHeaders,
        }),
        {
          loading: "Envoi en cours",
          success: "Creation de l'agence envoyée",
          error:
            "Une erreur sur le serveur est survenue lors de l'envoi de la décision",
        }
      )
      .then((response) => {
        response.json();
        console.warn(response.status);
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          notify();
        }
      })
      .then((result) => console.warn(result))
      .catch((error) => console.warn("error", error));
  };

  return (
    <section className="h-auto relative">
      <Toaster position="top-center" reverseOrder={false} />
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="m-3   w-fit  flex align-center justify-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#FF9900"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p>go back</p>
      </button>
      <article className="px-3 md:px-[15vh] pt-[15vh] pb-6  w-full flex flex-col justify-between text-sm md:text-md">
        <div className="text-center ">
          <div className="flex items-center justify-center">
            <img width="32" height="32" src={buildingIcon} alt="iconbuilding" />
          </div>
          <h2 className="text-4xl tracking-tight">Add my agencie</h2>
        </div>
        <div className="flex justify-center my-2 mx-4 md:mx-0">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex flex-col -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="model"
                >
                  Name of the agencie
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  id="model"
                  required
                  placeholder="My agencie"
                  value={name}
                  onChange={(e) => setNameAgencie(e.target.value)}
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="year"
                >
                  Location
                </label>
                <input
                  className="appearance-none mb-2 block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Country"
                  required
                  value={country}
                  onBlur={(e) => setCountry(e.target.value)}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <input
                  className="appearance-none mb-2 block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Adress"
                  required
                  value={adress}
                  onBlur={(e) => setAdress(e.target.value)}
                  onChange={(e) => setAdress(e.target.value)}
                />
                <input
                  className="appearance-none mb-2 block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="City"
                  required
                  value={city}
                  onBlur={(e) => setCity(e.target.value)}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="number"
                  placeholder="Postal code"
                  required
                  value={codePostal}
                  onBlur={(e) => setCodePostal(e.target.value)}
                  onChange={(e) => setCodePostal(e.target.value)}
                />
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <button
                  type="submit"
                  className="appearance-none block w-full bg-main-yellow text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-second-yellow focus:outline-none focus:bg-second-yellow focus:border-gray-500"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}

export default CreateVehicule;
