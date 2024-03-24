import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import SportType from "./pages/admin/SportType";

function App() {
	const role = "admin";
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					{role === "admin" ? (
						<Route path="/" element={<AdminLayout />}>
							<Route path="/" element={<Dashboard />} />
							<Route path="/venue" element={<AdminVenue />} />
							<Route path="/team" element={<AdminTeam />} />
							<Route path="/reserve" element={<AdminReservation />} />
							<Route path="/user" element={<User />} />
							<Route path="/venueform" element={<VenueForm />} />
							<Route path="/sport-type" element={<SportType />} />
						</Route>
					) : (
						<Route path="/" element={<UserLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/team" element={<Team />} />
							<Route path="/venue" element={<Venue />} />
							<Route path="/venue/:venueId" element={<SingleVenuePage />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/sport/:sportName/:sportId" element={<Sport />} />
							<Route path="/reservation" element={<ReservationForm />} />
							<Route path="/hosting" element={<HostingForm />} />
							<Route path="/challenge" element={<ChallengeForm />} />
							<Route path="/join" element={<JoinForm />} />
						</Route>
					)}
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/otp" element={<Otp />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
