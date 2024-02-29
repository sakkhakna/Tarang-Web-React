import { IoFootballOutline } from "react-icons/io5";
import { GiShuttlecock } from "react-icons/gi";
import { TbPingPong } from "react-icons/tb";
import { PiVolleyball } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import VenueCard from "../VenueCard";
import TournamentCard from "../TournamentCard";
import TeamCard from "../TeamCard";
// import Link from "next/link";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex flex-col gap-10 p-10 xl:px-0">
			<div className="bg-[#d9d9d9] max-w-7xl h-[300px]"></div>
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
				<div className="bg-[#d9d9d9] w-full h-[200px]"></div>
				<div className="bg-[#d9d9d9] w-full h-[200px]"></div>
				<div className="bg-[#d9d9d9] w-full h-[200px]"></div>
			</div>
			<div className="flex flex-col gap-10 items-center">
				<h1 className="font-bold text-center text-2xl md:text-4xl">
					Chose From your Favorite Sport
				</h1>
				<div className="max-w-[1120px] grid grid-cols-4 gap-10">
					<Link
						href="/sport/football"
						className="flex gap-4 justify-center items-center p-4 w-full bg-white border border-gray-200 shadow rounded-xl"
					>
						<IoFootballOutline className="w-10 h-10" />
						<p className="hidden md:block text-2xl font-bold">Football</p>
					</Link>
					<Link
						href="/sport/badminton"
						className="flex gap-4 justify-center items-center p-4 w-full bg-white border border-gray-200 shadow rounded-xl"
					>
						<GiShuttlecock className="w-10 h-10" />
						<p className="hidden md:block text-2xl font-bold">Badminton</p>
					</Link>
					<Link
						href="/sport/pingpong"
						className="flex gap-4 justify-center items-center p-4 w-full bg-white border border-gray-200 shadow rounded-xl"
					>
						<TbPingPong className="w-10 h-10" />
						<p className="hidden md:block text-2xl font-bold">Ping Pong</p>
					</Link>
					<Link
						href="/sport/volleyball"
						className="flex gap-4 justify-center items-center p-4 w-full bg-white border border-gray-200 shadow rounded-xl"
					>
						<PiVolleyball className="w-10 h-10" />
						<p className="hidden md:block text-2xl font-bold">Volleyball</p>
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-2xl md:text-4xl">Feature Venue</h1>
					<Link
						className="flex items-center gap-2 font-bold text-xl"
						href="/venue"
					>
						more
						<FaArrowRight className="w-5 h-5" />
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<VenueCard />
					<VenueCard />
					<VenueCard />
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-2xl md:text-4xl">Feature Team</h1>
					<Link
						className="flex items-center gap-2 font-bold text-xl"
						href="/team"
					>
						more
						<FaArrowRight className="w-5 h-5" />
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<TeamCard />
					<TeamCard />
					<TeamCard />
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-2xl md:text-4xl">Activity Nearby</h1>
					<Link
						className="flex items-center gap-2 font-bold text-xl"
						href="/activity"
					>
						more
						<FaArrowRight className="w-5 h-5" />
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<TournamentCard />
					<TournamentCard />
					<TournamentCard />
				</div>
			</div>
		</div>
	);
}

export default Home;
