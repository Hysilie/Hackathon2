/* eslint-disable camelcase */
import React, { useState, createRef } from "react";
import { useNavigate } from "react-router-dom";

function CreateVehicule() {
  const navigate = useNavigate();
  const photoRef = createRef();

  const [showModal, setShowModal] = useState(false);

  const [typeOfCar, setTypeOfCar] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [yearCar, setYearCar] = useState("");
  const [photo /*    */] = useState("");
  const [matriculation, setMatriculation] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [autonomy, setAutonomy] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [maxPlace, setMaxPlace] = useState("");
  const [optionCar, setOptionCar] = useState("");
  const [agencyCar, setAgencyCar] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [agency_id, setAgency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTypeOfCar = (e) => {
    setTypeOfCar(e.target.value);
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleModel = (e) => {
    setModel(e.target.value);
  };
  const handleYearCar = (e) => {
    setYearCar(e.target.value);
  };

  /*  const handlePhoto = (e) => {
    setPhoto(e.target.value);
  }; */

  const handleMatriculation = (e) => {
    setMatriculation(e.target.value);
  };
  const handleKilometers = (e) => {
    setKilometers(e.target.value);
  };
  const handleAutonomy = (e) => {
    setAutonomy(e.target.value);
  };
  const handleGearbox = (e) => {
    setGearbox(e.target.value);
  };
  const handlePower = (e) => {
    setPower(e.target.value);
  };
  const handleMaxPlace = (e) => {
    setMaxPlace(e.target.value);
  };
  const handleOptionCar = (e) => {
    setOptionCar(e.target.value);
  };

  const handlePricePerDay = (e) => {
    setPricePerDay(e.target.value);
  };

  // FETCH TO GET ALL AGENCIES

  fetch(`http://localhost:5000/agencies`)
    .then((response) => response.json())
    .then((result) => {
      setAgencyCar(result);
    })
    .catch((err) => console.error(err));

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  /* It's an object that will be sent in the body of request */
  const bodyRaw = JSON.stringify({
    typeOfCar,
    brand,
    model,
    yearCar,
    photo,
    matriculation,
    kilometers,
    autonomy,
    gearbox,
    power,
    maxPlace,
    optionCar,
    pricePerDay,
    agency_id,
  });

  /* fetch to create a car */
  const createCar = () => {
    fetch("http://localhost:5000/newCar", {
      method: "POST",
      headers: myHeaders,
      body: bodyRaw,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          /* eslint-disable no-alert */
          alert("the vehicle has been added to the fleet !");
          navigate("/admin/dashboard");
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    agencyCar && (
      <section className="h-auto relative">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z" />
              </svg>
            </div>
            <h2 className="text-4xl  tracking-tight">Add a car to the fleet</h2>
          </div>
          <div className="flex justify-center my-2 mx-4 md:mx-0">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col -mx-3 mb-6">
                <div className="w-full  mb-6">
                  <div className="flex  w-100">
                    <div className=" w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Type of car
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="text"
                        required
                        onChange={handleTypeOfCar}
                        value={typeOfCar}
                        placeholder="Berline"
                      />
                    </div>

                    <div className="w-full px-3 ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="brand"
                        >
                          Brand
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="text"
                          placeholder="Renault"
                          required
                          value={brand}
                          onChange={handleBrand}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="model"
                  >
                    Model
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="text"
                    id="model"
                    required
                    placeholder="Zoe"
                    value={model}
                    onChange={handleModel}
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="pid"
                    id="year"
                    name="year"
                    maxLength="4"
                    required
                    placeholder="YYYY"
                    value={yearCar}
                    onChange={handleYearCar}
                  />
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="year"
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-tl-lg rounded-tr-lg  py-3 px-3 leading-tight focus:outline-none"
                    ref={photoRef}
                  />{" "}
                  {/* <div className="flex justify-between">
                    <button
                      onClick={handlePhoto}
                      type="button"
                      className="bg-main-yellow w-16 text-white rounded-bl-md flex justify-center rounded-br-md"
                    >
                      send
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      type="button"
                      className="bg-main-yellow w-16 text-white rounded-bl-md flex justify-center rounded-br-md"
                    >
                      preview
                    </button>
                  </div> */}
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="year"
                  >
                    Matriculation
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="text"
                    maxLength="20"
                    placeholder="XX-XXX-XX"
                    required
                    value={matriculation}
                    onChange={handleMatriculation}
                  />
                </div>

                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="year"
                  >
                    Kilometers
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="number"
                    maxLength="20"
                    placeholder="kms"
                    required
                    value={kilometers}
                    onChange={handleKilometers}
                  />
                </div>

                <div className="w-full mb-6">
                  <div className="flex">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Autonomy
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="number"
                        maxLength="5"
                        placeholder="kms"
                        required
                        onChange={handleAutonomy}
                        value={autonomy}
                      />
                    </div>

                    <div className="w-full px-3 ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="brand"
                        >
                          Gearbox
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="text"
                          maxLength="1"
                          required
                          placeholder="A : Automatic"
                          value={gearbox}
                          onChange={handleGearbox}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-6">
                  <div className="flex">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Power
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="number"
                        maxLength="5"
                        placeholder="90"
                        required
                        onChange={handlePower}
                        value={power}
                      />
                    </div>

                    <div className="w-full px-3 ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="brand"
                        >
                          Place
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="number"
                          maxLength="2"
                          required
                          placeholder="4"
                          value={maxPlace}
                          onChange={handleMaxPlace}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-6">
                  <div className="flex">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Options
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="text"
                        maxLength="30"
                        placeholder="GPS"
                        required
                        onChange={handleOptionCar}
                        value={optionCar}
                      />
                    </div>

                    <div className="w-full px-3 ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="brand"
                        >
                          Price per day
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="number"
                          maxLength="5"
                          required
                          placeholder="€"
                          value={pricePerDay}
                          onChange={handlePricePerDay}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="year"
                  >
                    Agency
                  </label>
                  <div>
                    <select
                      name="Agency"
                      id="agency-select"
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      value={agency_id}
                      onChange={(event) => setAgency(event.target.value)}
                    >
                      <option value="">Select an Agency</option>
                      {agencyCar?.map((agencies) => (
                        <option value={agencies.id} key={agencies.id}>
                          {agencies.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div />

                {/* modale */}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/* header */}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Preview</h3>
                            <button
                              type="button"
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/* body */}
                          <div className="relative p-6 flex-auto">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt="Car"
                              className="w-32  mx-auto"
                            />
                          </div>
                          {/* footer */}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-main-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                  </>
                ) : null}
                {/* endmodale */}

                <div className="w-full md:w-full px-3 mb-6">
                  <button
                    type="submit"
                    className="appearance-none block w-full bg-main-yellow text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-second-yellow focus:outline-none focus:bg-second-yellow focus:border-gray-500"
                    onClick={createCar}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
    )
  );
}

export default CreateVehicule;
