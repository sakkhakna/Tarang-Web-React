import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVenues } from "../../service/venue.api";
import { getTeam } from "../../service/team.api";
import { getReservation } from "@/service/reservation.api";
import VenueCard from "../../ui/component/VenueCard";
import TeamCard from "../../ui/component/TeamCard";
import BannerFilter from "../../ui/component/BannerFilter";

function Sport() {
  const { sportName, sportId } = useParams();
  const { data: venueData, isLoading } = useQuery({
    queryKey: ["getVenuesKey"],
    queryFn: getVenues,
  });
  const { data: teamData } = useQuery({
    queryKey: ["getTeamKey"],
    queryFn: getTeam,
  });
  const { data: reservationData, isLoading: reservationLoading } = useQuery({
    queryKey: ["getReservationKey"],
    queryFn: getReservation,
  });
  let filteredVenueData = [];
  let filteredTeamData = [];
  if (!isLoading && venueData) {
    filteredVenueData = venueData.venues.filter((venue) => {
      return venue.sportTypes.id === parseInt(sportId);
    });
  }
  // if (teamData) {
  //   filteredTeamData = teamData.teams.filter((team) => {
  //     return team.sportType.id === parseInt(sportId);
  //   });
  // }
  console.log(reservationData);
  if (!reservationLoading && reservationData) {
    filteredTeamData = reservationData.reservations.filter((team) => {
      return (
        (team.find_member === 1 || team.find_team === 1) &&
        team.venue.sportTypes.id === parseInt(sportId)
      );
    });
  }
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-4 md:gap-10 items-center p-4 md:p-10">
      <BannerFilter />
      <div className="w-full flex flex-col gap-4 md:gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">{sportName} Venue</h1>
        {!isLoading && venueData && filteredVenueData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-10">
            {filteredVenueData.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold p-10">Not Venue</h2>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">Team Match</h1>
        {!isLoading && teamData && filteredTeamData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
            {filteredTeamData.map((team, index) => (
              <div>
                <TeamCard key={index} team={team} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold p-10">Not Team</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default Sport;
