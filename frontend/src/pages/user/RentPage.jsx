/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Bill from "@components/user/Bill";
import forestBackground from "../../assets/forest-background.jpg";
import { useCurrentUserContext } from "../../contexts/UserContext";

export default function RentPage({ startDate, endDate }) {
  const notify = () =>
    toast.error(
      "Please check your dates, this car is not available for this period !"
    );
  const navigate = useNavigate();
  const { user } = useCurrentUserContext();
  const { token } = useCurrentUserContext();
  const [showModal, setShowModal] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [valuesCar, setValuesCar] = useState();
  const idParam = useParams();
  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/car/${idParam.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setValuesCar(result))
      .catch((error) => console.warn("error", error));
  }, []);

  const dateSoustraction = (dateStart, dateEnd) => {
    const dateConvertedStart = new Date(dateStart);
    const dateConvertedEnd = new Date(dateEnd);

    // retourn la difference entre la date date2Start et date2End
    const diffDays = Math.ceil(
      (dateConvertedEnd - dateConvertedStart) / (1000 * 60 * 60 * 24)
    );

    return diffDays;
  };

  const submitInformations = (e) => {
    e.preventDefault();

    if (!user) {
      goLoggin();
      return;
    }

    const myHeaders = new Headers();
    myHeaders
      .append("Content-Type", "application/json")
      .append("Authorization", `Bearer ${token}`);

    const bodyRaw = JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      carId: idParam.id,
      angecyId: valuesCar.agency_id,
      userId: user.id,
    });

    toast
      .promise(
        fetch("http://localhost:5000/", {
          method: "POST",
          headers: myHeaders,
          body: bodyRaw,
          redirect: "follow",
        }),
        {
          loading: "Your rent is being processed",
          success: "Your rent is confirmed, you can check your bill !",
          error: "Error while reserving",
        }
      )
      .then((response) => {
        if (response.status === 201) {
          setProcessing(true);
          setTimeout(() => setShowBill(true), 1000);
        } else {
          notify();
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const dateConverte = (date) => {
    const dateConverted = new Date(date);
    const year = dateConverted.getFullYear();
    const month = dateConverted.getMonth() + 1;
    const day = dateConverted.getDate();

    return `${year}-${month}-${day}`;
  };

  console.log(`valuecar`, valuesCar.agency_id);

  return (
    valuesCar && (
      <section>
        <Toaster position="top-center" reverseOrder={false} />

        <button
          onClick={() => navigate("/")}
          type="button"
          className=" absolute  m-3 md:m-6 md:left-10 w-fit  flex align-center justify-center "
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
        <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
          <div className="py-12 bg-white border md:py-24">
            <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
              <div className="flex items-center">
                <h2 className="text-xl flex items-center ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-clipboard-check mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                  </svg>
                  Summary of your rent
                </h2>
              </div>

              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  {" "}
                  {valuesCar.model} {valuesCar.brand}
                </p>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  Price :
                  <span className="text-second-yellow pl-1">
                    {valuesCar.pricePerDay}€
                  </span>{" "}
                  <span className="text-sm"> per day</span>
                </p>

                <p className="mt-1 text-sm text-gray-600">For the rent of</p>
              </div>

              <div>
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-100">
                    <li className="flex items-center py-4">
                      <img
                        className="w-96 h-auto object-contain"
                        src={
                          valuesCar
                            ? `http://localhost:5000/car-photo/${valuesCar.photo}`
                            : ""
                        }
                        alt="car"
                      />
                    </li>

                    <li className="flex justify-between items-center py-4">
                      <h3 className="text-lg font-medium tracking-tight text-gray-900">
                        From :{" "}
                        <span className="font-light">
                          {" "}
                          {dateConverte(startDate)}
                        </span>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      <h3 className="text-lg font-medium tracking-tight text-gray-900">
                        To :{" "}
                        <span className="font-light">
                          {" "}
                          {dateConverte(endDate)}
                        </span>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  */}
              {processing && showBill ? (
                <button
                  className="bg-main-yellow text-white active:bg-second-yellow font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    width="24"
                    height="24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 23h-24v-12h4v-10h11.328l4.672 5.031v4.969h4v12zm-20-11h-3v10h22v-10h-3v5h-16v-5zm10-10h-9v14h14v-9h-5v-5zm2 12h-8v-1h8v1zm0-2h-8v-1h8v1zm0-2h-8v-1h8v1zm-1-7.751v3.751h3.573l-3.573-3.751z" />
                  </svg>{" "}
                </button>
              ) : processing ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null}

              {showModal ? (
                <>
                  <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none">
                    <div className=" h-full relative w-auto my-6 mx-auto max-w-1xl">
                      {/* content */}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* header */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Your rental invoice
                          </h3>
                          <button
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
                          <Bill
                            dateSoustraction={dateSoustraction}
                            dateConverte={dateConverte}
                            startDate={startDate}
                            endDate={endDate}
                            valuesCar={valuesCar}
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
                          <button
                            className="text-main-yellow active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => print()}
                          >
                            Print
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-90 fixed inset-[-100px] z-40 bg-white" />
                </>
              ) : null}
            </div>
          </div>

          <div
            className="py-12  md:py-6 "
            style={{
              backgroundImage: `url('${forestBackground}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl text-white  text-center tracking-tight ">
              Check your informations
            </h2>
            <div className=" text-center text-sm text-white underline">
              and get your vehicles !
            </div>
            <div className=" bg-white rounded-lg shadow-md p-6 max-w-lg px-4 mx-auto lg:px-8">
              <form onSubmit={submitInformations}>
                <div className="w-full px-3 mb-6">
                  <div className="flex w-full gap-3">
                    <div className="w-full">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Firstname *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="text"
                        value={user.firstname ? user.firstname : ""}
                        required
                      />
                    </div>

                    {/* lastname */}

                    <div className="w-full md:w-full mb-6  ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="Password"
                        >
                          Lastname *
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="text"
                          value={user.lastname ? user.lastname : ""}
                          required
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full md:w-full  mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Email address *
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="email"
                      value={user.email ? user.email : ""}
                      required
                    />
                  </div>
                  <div className="w-full md:w-full mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Phone number *
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="phone"
                      value={user.phone ? user.phone : ""}
                    />
                  </div>
                  <div className="w-full md:w-full mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Card details *
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="text"
                      id="CardNumber"
                      required
                      placeholder="Card Number"
                    />
                  </div>
                  {/* expiracy */}
                  <div className="flex w-full gap-3">
                    <div className="w-full">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="Password"
                      >
                        Expiry Date *
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="text"
                        id="CardExpiry"
                        required
                        placeholder="Expiry Date"
                      />
                    </div>

                    {/* lastname */}

                    <div className="w-full md:w-full mb-6  ">
                      <div className="w-full">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="Password"
                        >
                          Card CVC *
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                          type="text"
                          id="CardCVC"
                          required
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full md:w-full  mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Billing address
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="text"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <button
                    type="submit"
                    className="appearance-none block w-full bg-main-yellow text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-second-yellow focus:outline-none focus:bg-second-yellow "
                  >
                    Rent Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
