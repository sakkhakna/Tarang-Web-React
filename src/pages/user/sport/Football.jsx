import { useQuery } from "@tanstack/react-query";
import { getVenues } from "../../../service/Venue.api";
import VenueCard from "../../../ui/component/VenueCard";
import TeamCard from "../../../ui/component/TeamCard";
import BannerFilter from "../../../ui/component/BannerFilter";

function Football() {
  const { data: venueData, isLoading } = useQuery({
    queryKey: ["getVenuesKey"],
    queryFn: getVenues,
  });
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center py-10">
      <BannerFilter />
      <div className="w-full px-10 flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">Football Court</h1>
        {!isLoading && venueData ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {venueData.data
              .filter((venue) => {
                return venue.sportTypes.id === 1;
              })
              .map((venue, index) => (
                <VenueCard key={index} venue={venue} />
              ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold p-10">Not Sport Found</h2>
          </div>
        )}
      </div>
      <div className="w-full px-10 flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">Team Match</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default Football;
