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
/* import { useCurrentUserContext } from "./contexts/UserContext";
 */
function App() {
  /*   const { token } = useCurrentUserContext();
   */ return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* </Routes>
      {token ? (
        <Routes> */}
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/cars" element={<SearchResults />} />
        <Route path="/cars/:id" element={<ResultDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/vehicles" element={<AllVehicules />} />
        <Route path="/admin/vehicles/:id" element={<VehiculeProfile />} />
        <Route path="/admin/agencies/:id" element={<AgencyProfile />} />
        <Route path="*" element={<Error />} />
        {/* </Routes>
      ) : (
        <Routes> */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
