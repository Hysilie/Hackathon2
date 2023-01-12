import "./index.css";
import { Route, Routes } from "react-router-dom";
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
import RentPage from "./pages/user/RentPage";
import { useCurrentUserContext } from "./contexts/UserContext";

function App() {
  const { user } = useCurrentUserContext();
  console.warn(user);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/cars" element={<SearchResults />} />
        <Route path="/cars/:id" element={<ResultDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/agencies/:id/vehicles" element={<AllVehicules />} />
        <Route path="/admin/vehicles/:id" element={<VehiculeProfile />} />
        <Route path="/admin/vehicles/create" element={<CreateVehicule />} />
        <Route path="/admin/agencies/create" element={<CreateAgencies />} />
        <Route path="/admin/agencies/:id" element={<AgencyProfile />} />
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
