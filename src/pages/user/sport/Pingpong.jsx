import React from "react";
import VenueCard from "../../../ui/component/VenueCard";
import TeamCard from "../../../ui/component/TeamCard";
import BannerFilter from "../../../ui/component/BannerFilter";

function Pingpong() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center py-10">
      <BannerFilter />
      <div className="w-full px-10 flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl font-bold">PingPong Court</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </div>
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
  )
}

export default Pingpong