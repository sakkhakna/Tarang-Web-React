import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./service/user.api";
import AppContext from "./contexts/AppContext";
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
import ChallengeForm from "./pages/user/ChallengeForm";
import JoinForm from "./pages/user/JoinForm";
import VenueForm from "./pages/admin/VenueForm";
import Venue from "./pages/user/venue/Venue";
import SingleVenuePage from "./pages/user/venue/SingleVenue";
import Otp from "./pages/auth/Otp";
import Sport from "./pages/user/Sport";
import Spinner from "./ui/Spinner";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

function App() {
  // const { dispatch } = useContext(AppContext);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["getUsers"],
  //   queryFn: getUser,
  // });
  // useEffect(() => {
  //   dispatch({ type: "SET_USER_DATA", payload: data });
  // }, [data]);
  // if (isLoading) {
  //   return <Spinner fullScreenSpinner={true} />;
  // }
  const role = "admin";
  return (
    <Router>
      <Routes>
        {role === "admin" ? (
          <>
            <Route
              path="/"
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/venue"
              element={
                <AdminLayout>
                  <AdminVenue />
                </AdminLayout>
              }
            />
            <Route
              path="/team"
              element={
                <AdminLayout>
                  <AdminTeam />
                </AdminLayout>
              }
            />
            <Route
              path="/reserve"
              element={
                <AdminLayout>
                  <AdminReservation />
                </AdminLayout>
              }
            />
            <Route
              path="/user"
              element={
                <AdminLayout>
                  <User />
                </AdminLayout>
              }
            />
            <Route
              path="/venueform"
              element={
                <AdminLayout>
                  <VenueForm />
                </AdminLayout>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <UserLayout>
                  <Home />
                </UserLayout>
              }
            />
            <Route
              path="/team"
              element={
                <UserLayout>
                  <Team />
                </UserLayout>
              }
            />
            <Route
              path="/venue"
              element={
                <UserLayout>
                  <Venue />
                </UserLayout>
              }
            />
            <Route
              path="/venue/:venueId"
              element={
                <UserLayout>
                  <SingleVenuePage />
                </UserLayout>
              }
            />
            <Route
              path="/profile"
              element={
                // <ProtectedRoute />
                // <ProtectedRoute>
                <UserLayout>
                  <Profile />
                </UserLayout>
                // </ProtectedRoute>
              }
            />
            <Route
              path="/sport/:sportName/:sportId"
              element={
                <UserLayout>
                  <Sport />
                </UserLayout>
              }
            />
            <Route
              path="/reservation"
              element={
                <UserLayout>
                  <ReservationForm />
                </UserLayout>
              }
            />
            <Route
              path="/hosting"
              element={
                <UserLayout>
                  <HostingForm />
                </UserLayout>
              }
            />
            <Route
              path="/challenge"
              element={
                <UserLayout>
                  <ChallengeForm />
                </UserLayout>
              }
            />
            <Route
              path="/join"
              element={
                <UserLayout>
                  <JoinForm />
                </UserLayout>
              }
            />
          </>
        )}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </Router>
  );
}

export default App;
