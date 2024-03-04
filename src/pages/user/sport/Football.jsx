import React from "react";
import VenueCard from "../../../ui/component/VenueCard";
import TeamCard from "../../../ui/component/TeamCard";
import BannerFilter from '../../../ui/component/BannerFilter';

function Football() {
  return (
    <div className="max-w-7xl p-10 mx-auto flex flex-col gap-10 items-center">
      <BannerFilter/>
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Football Court</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </div>
      </div>

      <div className="w-full flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Team Match</h1>
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
