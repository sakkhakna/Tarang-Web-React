import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import UserLayout from "./pages/ui/UserLayout";
import AdminLayout from "./pages/ui/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

function App() {
	const role = "user";
	return (
		<Router>
			<Routes>
				{role === "admin" ? (
					<Route path="/" element={<AdminLayout />}>
						<Route path="/" element={<Dashboard />} />
					</Route>
				) : (
					<Route path="/" element={<UserLayout />}>
						<Route path="/" element={<Home />} />
					</Route>
				)}

				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
