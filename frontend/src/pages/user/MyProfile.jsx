/* eslint-disable */
import React, { useState, useEffect } from "react";
import backgroundForest from "../../assets/forest-background.jpg";
import MyRental from "@components/user/MyRental";
import { useCurrentUserContext } from "../../contexts/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const { user, setUser, token } = useCurrentUserContext();
  const navigate = useNavigate();

  /* const avatarRef = useRef(null); */
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [country, setCountry] = useState(user.country);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [numberOfLicense, setNumberOfLicense] = useState(user.numberOfLicense);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);

  const notifyErrorProfile = () =>
    toast.error("Une erreur est survenue, veuillez vérifier vos informations");

  function sendUserInformations(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstname,
      lastname,
      country,
      email,
      phone,
      numberOfLicense,
      dateOfBirth,
      user_id: user.id,
    });

    toast
      .promise(
        fetch(`http://localhost:5000/user/${user.id}`, {
          method: "PUT",
          redirect: "follow",
          body: raw,
          headers: myHeaders,
        }),
        {
          loading: "En cours",
          success: "Profil edited",
          error: "Error",
        }
      )
      .then((response) => {
        response.json();
        console.log(response);
        if (response.status === 202) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          notifyErrorProfile();
        }
      })
      .then((results) => {
        console.log("results", results);

        setUser({
          ...user,
          firstname: results.firstname,
          lastname: results.lastname,
          email: results.email,
          country: results.country,
          phone: results.phone,
          numberOfLicence: results.numberOfLicence,
          dateOfBirth: results.dateOfBirth,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.warn("error", error);
      });
  }

  /* Get my rentals */
  const [rentals, setRentals] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/rentalsByUser/${user.id}`)
      .then((res) => res.json())
      .then((result) => {
        console.warn(result[0]);
        setRentals(result[0]);
      })
      .catch((err) => console.warn(err));
  }, []);

  console.log(rentals);
  return (
    <div className="h-full ">
      <Toaster position="top-center" reverseOrder={false} />
      <button
        onClick={() => navigate("/")}
        type="button"
        className=" absolute  m-3 md:m-6 md:left-10 w-fit text-white flex align-center justify-center "
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
      <div
        className="w-full h-60"
        style={{
          backgroundImage: `url('${backgroundForest}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="flex flex-col items-center -mt-20">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
          className="w-40 border-4 border-white rounded-full"
          alt="profile"
        />

        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl ">
            {user.firstname} {user.lastname}
          </p>
        </div>
        {/* if exist */}
        {user.country ? (
          <p className="text-sm text-gray-500">{user.country}</p>
        ) : (
          ""
        )}
      </div>

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <form
              onSubmit={sendUserInformations}
              className="mt-2 text-gray-700"
            >
              <li className="relative flex border-y py-2">
                <label className="font-bold w-24" name="firstname">
                  Firstname:
                </label>
                <input
                  name="firstname"
                  className="text-gray-700"
                  placeholder={user.firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="lastname" className="font-bold w-24">
                  Lastname :
                </label>
                <input
                  name="lastname"
                  className="text-gray-700"
                  placeholder={user.lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="birthday" className="font-bold w-24">
                  Birthday :
                </label>
                <input
                  name="birthday"
                  className="text-gray-700"
                  placeholder={"DD/MM/YYYY"}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                />
              </li>
              <li className="relative flex border-y py-2">
                <span name="joined" className="font-bold w-24">
                  Joinded :
                </span>
                <span className="text-gray-700">{user.creationDate}</span>
              </li>
              <li className="relative flex border-y py-2">
                <label name="mobile" className="font-bold w-24">
                  Mobile :
                </label>
                <input
                  name="mobile"
                  className="text-gray-700"
                  placeholder="00-00-00-00-00"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="email" className="font-bold w-24">
                  Email :
                </label>
                <input
                  name="email"
                  className="text-gray-700 w-60"
                  placeholder={user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="location" className="font-bold w-24">
                  Location :
                </label>
                <input
                  name="location"
                  className="text-gray-700"
                  placeholder={user.country ? user.country : "Country"}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label id="driver" className="font-bold w-24">
                  Driver Licence :
                </label>
                <input
                  name="driver"
                  className="text-gray-700"
                  value={numberOfLicense}
                  placeholder={
                    user.numberOfLicense ? user.numberOfLicense : "XX-XXX-XX-XX"
                  }
                  onChange={(e) => setNumberOfLicense(e.target.value)}
                />
              </li>
              <div className="flex justify-center w-full m-6 ">
                <button
                  type="submit"
                  className="text-white bg-main-yellow hover:bg-second-yellow px-4 py-2 rounded-lg"
                >
                  Submit modifications
                </button>
              </div>
            </form>

            {rentals?.map((rental) => (
              <div key={rental.id}>
                <MyRental rental={rental} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
