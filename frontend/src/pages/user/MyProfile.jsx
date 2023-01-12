/* eslint-disable */
import React, { /* useContext /* useRef */ useState } from "react";
import backgroundForest from "../../assets/forest-background.jpg";

function MyProfile() {
  /* const avatarRef = useRef(null); */
  const [firstname, setFirstname] = useState(/* user.firstname */);
  const [lastname, setLastname] = useState(/* user.lastname */);
  const [city, setCity] = useState(/* user.city */);
  const [email, setEmail] = useState(/* user.email */);
  const [phone, setPhone] = useState(/* user.phone */);
  const [numberOfLicence, setNumberOfLicence] =
    useState(/* user.numberOfLicence */);
  const [dateOfBirth, setDateOfBirth] = useState(/* user.dateOfBirth */);

  return (
    <div className="h-full ">
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
        {/*  <form
          className="flex flex-col items-start ml-5"
          encType="multipart/form-data"
        >
          <input type="file" ref={avatarRef} />
          <button
            className=" bg-red-pink hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-2"
            type="submit"
          >
            Envoyer
          </button>
        </form> */}
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl ">Firstname Lastname</p>
        </div>
        {/* if exist */}
        <p className="text-sm text-gray-500">Lyon</p>
      </div>

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <form className="mt-2 text-gray-700">
              <li className="relative flex border-y py-2">
                <label className="font-bold w-24" name="firstname">
                  Firstname:
                </label>
                <input
                  name="firstname"
                  className="text-gray-700"
                  placeholder="Firstname"
                  value={firstname}
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
                  value={lastname}
                  placeholder="Lastname"
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
                  placeholder="DD-MM-YYYY"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                />
              </li>
              <li className="relative flex border-y py-2">
                <span name="joined" className="font-bold w-24">
                  Joinded :
                </span>
                <span className="text-gray-700">DATE </span>
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
                  value={phone}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="email" className="font-bold w-24">
                  Email :
                </label>
                <input
                  name="email"
                  className="text-gray-700"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label name="location" className="font-bold w-24">
                  Location :
                </label>
                <input
                  name="location"
                  className="text-gray-700"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </li>
              <li className="relative flex border-y py-2">
                <label id="driver" className="font-bold w-24">
                  Driver Licence :
                </label>
                <input
                  name="driver"
                  className="text-gray-700"
                  placeholder="XX-XXX-XX-XX"
                  value={numberOfLicence}
                  onChange={(e) => setNumberOfLicence(e.target.value)}
                />
              </li>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
