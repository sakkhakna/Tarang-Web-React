import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import SignIn from "./pages/auth/SignIn";
import UserLayout from "./ui/UserLayout";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminVenue from "./pages/admin/Venue";
import AdminTeam from "./pages/admin/Team";
import AdminReservation from "./pages/admin/Reserve";
import User from "./pages/admin/User";
import SignUp from "./pages/auth/SignUp";
import Team from "./pages/user/Team";
import ReservationForm from "./pages/user/ReservationForm";
import Profile from "./pages/user/Profile";
import HostingForm from "./pages/user/HostingForm";
import Badminton from "./pages/user/sport/Badminton";
import ChallengeForm from "./pages/user/ChallengeForm";
import JoinForm from "./pages/user/JoinForm";
import { useEffect } from "react";
import { getSportType } from "./service/venue";

function App() {
  useEffect(() => {
    getSportType();
  }, []);
  const role = "user";
  return (
    <Router>
      <Routes>
        {role === "admin" ? (
          <Route path="/" element={<AdminLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/venue" element={<AdminVenue />} />
            <Route path="/team" element={<AdminTeam />} />
            <Route path="/reserve" element={<AdminReservation />} />
            <Route path="/user" element={<User />} />
          </Route>
        ) : (
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/reservation" element={<ReservationForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hosting" element={<HostingForm />} />
            <Route path="/sport" element={<Badminton />} />
            <Route path="/challenge" element={<ChallengeForm />} />
            <Route path="/join" element={<JoinForm />} />
          </Route>
        )}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
