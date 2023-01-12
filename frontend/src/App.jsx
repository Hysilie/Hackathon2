import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ForgottenPassword from "./pages/user/ForgottenPassword";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Error from "./pages/Error";
import MyProfile from "./pages/user/MyProfile";
import Home from "./pages/Home";
import SearchResults from "./pages/user/SearchResults";
import ResultDetails from "./pages/user/ResultDetails";
import Dashboard from "./pages/admin/Dashboard";
import AllVehicules from "./pages/admin/AllVehicules";
import VehiculeProfile from "./pages/admin/VehiculeProfile";
import AgencyProfile from "./pages/admin/AgencyProfile";
import Navbar from "./components/Navbar";
import CreateVehicule from "./pages/admin/CreateVehicule";
import CreateAgencies from "./pages/admin/CreateAgencies";
import { useCurrentUserContext } from "./contexts/UserContext";

function App() {
  const { user } = useCurrentUserContext();
  const [cars, setCars] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [city, setCity] = useState();

  const dateConvertedToSqlFormat = (date) => {
    const dateConverted = new Date(date);
    const year = dateConverted.getFullYear();
    const month = dateConverted.getMonth() + 1;
    const day = dateConverted.getDate();

    return `${year}-${month}-${day}`;
  };

  const handleclick = () => {
    fetch(
      `http://localhost:5000/carbylocationanddate?startDate=${dateConvertedToSqlFormat(
        startDate
      )}&endDate=${dateConvertedToSqlFormat(endDate)}&city=${city}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCars(result);
      })
      .catch((err) => console.warn(err));
  };

  console.warn("start", typeof startDate);
  console.warn("end", typeof endDate);
  console.warn(user);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cars={cars}
              startDate={startDate}
              endDate={endDate}
              city={city}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setCity={setCity}
              handleclick={handleclick}
            />
          }
        />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/cars" element={<SearchResults />} />
        <Route
          path="/cars/:id"
          element={
            <ResultDetails
              startDate={startDate}
              endDate={endDate}
              city={city}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        {user.admin === 1 || user.superAdmin === 1 ? (
          <>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route
              path="/admin/agencies/:id/vehicles"
              element={<AllVehicules />}
            />
            <Route path="/admin/vehicles/:id" element={<VehiculeProfile />} />
            <Route path="/admin/vehicles/create" element={<CreateVehicule />} />
            <Route path="/admin/agencies/create" element={<CreateAgencies />} />
            <Route path="/admin/agencies/:id" element={<AgencyProfile />} />
          </>
        ) : null}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
