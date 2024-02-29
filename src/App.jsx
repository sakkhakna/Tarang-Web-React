import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import UserLayout from "./pages/ui/UserLayout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<UserLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
