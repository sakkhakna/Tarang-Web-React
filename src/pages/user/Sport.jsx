import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVenues } from "../../service/venue.api";
import { getTeam } from "../../service/team.api";
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
  console.log(teamData);
  let filteredVenueData = [];
  let filteredTeamData = [];
  if (!isLoading && venueData) {
    filteredVenueData = venueData.filter((venue) => {
      return venue.sportTypes.id === parseInt(sportId);
    });
  }
  if (teamData) {
    filteredTeamData = teamData.filter((team) => {
      return team.sportType.id === parseInt(sportId);
    });
  }
  console.log(venueData);
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 xl:gap-10 items-center p-4 xl:px-0 xl:py-10">
      <BannerFilter />
      <div className="w-full flex flex-col gap-4 xl:gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">{sportName} Venue</h1>
        {!isLoading && venueData && filteredVenueData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10">
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
      <div className="w-full flex flex-col gap-4 xl:gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">Team Match</h1>
        {!isLoading && teamData && filteredTeamData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10">
            {filteredTeamData.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold p-10">Not Team</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sport;
