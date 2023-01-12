import React from "react";
import { useNavigate } from "react-router-dom";
import forestBackground from "../../assets/forest-background.jpg";
import { useCurrentUserContext } from "../../contexts/UserContext";
import teslaS from "../../assets/teslamodelS.svg";

export default function RentPage() {
  const navigate = useNavigate();
  const { user } = useCurrentUserContext();

  return (
    <section>
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
                Price :<span className="text-second-yellow pl-1">30€</span>{" "}
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
                      src={teslaS}
                      alt="car"
                    />
                  </li>

                  <li className="flex justify-between items-center py-4">
                    <h3 className="text-lg font-medium tracking-tight text-gray-900">
                      From : <span className="font-light">2022-01-01</span>
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
                      To : <span className="font-light">2022-02-02</span>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="py-12  md:py-12 "
          style={{
            backgroundImage: `url('${forestBackground}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-4xl text-white  text-center tracking-tight m-2">
            Check your informations
          </h2>
          <div className=" text-center text-sm text-white underline">
            and get your vehicles !
          </div>
          <div className=" bg-white rounded-lg shadow-md p-6 max-w-lg px-4 mx-auto lg:px-8">
            <form className="">
              <div className="w-full px-3 mb-6">
                <div className="flex w-full gap-3">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Password"
                    >
                      Firstname
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
                        Lastname
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
                    Email address
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
                    Phone number
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
                    Card details
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                    type="text"
                    id="CardNumber"
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
                      Expiry Date
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                      type="text"
                      id="CardExpiry"
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
                        Card CVC
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        type="text"
                        id="CardCVC"
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
                  type="button"
                  className="appearance-none block w-full bg-main-yellow text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-second-yellow focus:outline-none focus:bg-second-yellow focus:border-gray-500"
                >
                  Rent Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
