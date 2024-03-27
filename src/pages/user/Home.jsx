import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSportTypes } from "../../service/sport.api";
import { getVenues } from "../../service/venue.api";
import { getReservation } from "../../service/reservation.api";
import { IoFootballOutline } from "react-icons/io5";
import { GiShuttlecock } from "react-icons/gi";
import { TbPingPong } from "react-icons/tb";
import { PiVolleyball } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import VenueCard from "../../ui/component/VenueCard";
import TournamentCard from "../../ui/component/TournamentCard";
import TeamCard from "../../ui/component/TeamCard";
import LinkButton from "../../ui/shared/LinkButton";
import Spinner from "../../ui/Spinner";

function Home() {
  const { data: sportTypeData, isLoading: sportTypeLoading } = useQuery({
    queryKey: ["getSportTypesKey"],
    queryFn: getSportTypes,
  });
  const { data: venueData, isLoading: venueDataLoading } = useQuery({
    queryKey: ["getVenuesKey"],
    queryFn: getVenues,
  });
  // const { data: teamData, isLoading: teamDataLoading } = useQuery({
  //   queryKey: ["getTeamKey"],
  //   queryFn: getTeam,
  // });
  const { data: reservationData, isLoading: reservationLoading } = useQuery({
    queryKey: ["getReservationKey"],
    queryFn: getReservation,
  });
  const sportIcons = [
    <IoFootballOutline className="w-10 h-10" />,
    <GiShuttlecock className="w-10 h-10" />,
    <PiVolleyball className="w-10 h-10" />,
    <PiVolleyball className="w-10 h-10" />,
    <TbPingPong className="w-10 h-10" />,
  ];
  let filteredTeamData = [];
  if (!reservationLoading && reservationData) {
    filteredTeamData = reservationData.reservations.filter((team) => {
      return team.find_member === 1 || team.find_team === 1;
    });
  }
  return (
    <section className="flex flex-col gap-4 md:gap-10 p-4 md:p-10">
      <div className="bg-[#d9d9d9] max-w-7xl h-[300px] flex justify-center items-center">
        <LinkButton toPage="/reservation">Reserve Your Venue Now</LinkButton>
      </div>
      <div className="flex flex-col gap-4 md:gap-10 items-center">
        <h1 className="font-bold text-center text-2xl md:text-4xl">
          Chose From your Favorite Sport
        </h1>
        {sportTypeLoading ? (
          <div className="p-10">
            <Spinner />
          </div>
        ) : !sportTypeLoading &&
          sportTypeData &&
          sportTypeData.sport_types.length > 0 ? (
          <div className="max-w-[1120px] flex flex-wrap justify-center gap-4 md:gap-10">
            {sportTypeData.sport_types.map((sport, index) => (
              <Link
                key={index}
                to={`/sport/${sport.name}/${sport.id}`}
                className="flex gap-4 justify-center items-center p-4 bg-white border border-gray-200 shadow rounded-xl"
              >
                {sportIcons[index]}
                <p className="hidden md:block text-2xl font-bold">
                  {sport.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold p-10">No Sport</h2>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 md:gap-10 justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Feature Venue</h1>
          <Link
            className="flex items-center gap-2 font-bold text-xl"
            to="/venue"
          >
            more
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
        {venueDataLoading ? (
          <div className="p-10">
            <Spinner />
          </div>
        ) : !venueDataLoading && venueData && venueData.venues.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
            {venueData.venues.slice(0, 6).map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold p-10">No Venue</h2>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 md:gap-10 justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Feature Team</h1>
          <Link
            className="flex items-center gap-2 font-bold text-xl"
            to="/team"
          >
            more
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
        {reservationLoading ? (
          <div className="p-10">
            <Spinner />
          </div>
        ) : !reservationLoading &&
          reservationData &&
          reservationData.reservations.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
            {filteredTeamData.slice(0, 6).map((team, index) => (
              <div key={index}>
                <TeamCard team={team} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold p-10">No Team</h2>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Activity Nearby</h1>
          <Link
            className="flex items-center gap-2 font-bold text-xl"
            to="/activity"
          >
            more
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
          <TournamentCard />
          <TournamentCard />
          <TournamentCard />
        </div>
      </div>
    </section>
  );
}

export default Home;
