import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import Hosting from "./pages/hosting/Hosting" 
import Team from "./pages/team/Team"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/hosting" element={<Hosting />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
