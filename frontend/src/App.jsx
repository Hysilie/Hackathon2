import "./index.css";
import { Routes, Route } from "react-router-dom";
import ForgottenPassword from "./pages/user/ForgottenPassword";
import Registration from "./pages/user/Registration";
import Login from "./pages/user/Login";
import Error from "./pages/Error";
import MyProfile from "./pages/user/MyProfile";
import Home from "./pages/Home";
import { useCurrentUserContext } from "./contexts/UserContext";
import SearchResults from "./pages/user/SearchResults";
import ResultDetails from "./pages/user/ResultDetails";
import Dashboard from "./pages/admin/Dashboard";
import AllVehicules from "./pages/admin/AllVehicules";
import VehiculeProfile from "./pages/admin/VehiculeProfile";
import AgencyProfile from "./pages/admin/AgencyProfile";

function App() {
  const { token } = useCurrentUserContext();
  return (
    <div>
      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route Path="/cars" element={<SearchResults />} />
          <Route Path="/cars/:id" element={<ResultDetails />} />
          <Route Path="/admin/dashboard" element={<Dashboard />} />
          <Route Path="/admin/vehicles" element={<AllVehicules />} />
          <Route Path="/admin/vehicles/:id" element={<VehiculeProfile />} />
          <Route Path="/admin/agencies/:id" element={<AgencyProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
