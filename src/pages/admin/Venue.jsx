import React, { useEffect, useState } from "react";
import Input from "../../ui/shared/Input";
import { getVenues } from "../../service/Venue.api";
import VenueCard from "../admin/component/VenueCard";
import LinkButton from "../../ui/shared/LinkButton";
import { useQuery } from "@tanstack/react-query";

function Venue() {
  // const [venues, setVenues] = useState([]);
  // useEffect(() => {
  //   const getVenues = async () => {
  //     const data = await getVenues();
  //     setVenues(data);
  //   }
  //   getVenues();
  // }, [])
  const { data, isLoading } = useQuery({
    queryKey: ["getVenues"],
    queryFn: getVenues,
  });
  console.log(data);
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Venue</h1>
        <div className="flex gap-4">
          <LinkButton customClass={"mt-2"} toPage="/venueform">
            Add Venue
          </LinkButton>
          <Input placeholder={"Search..."} />
          <select
            name="category"
            id="category"
            className="rounded-xl px-4 py-2 border mt-2 focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value={null}>Veiw By</option>
            <option value="Today">Today</option>
            <option value="last 7 Days">Last 7 Days</option>
          </select>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-1/2 grid grid-cols-2 gap-4">
          {!isLoading &&
            data &&
            data.data &&
            data.data.slice(0,4).map((venue, index) => <VenueCard key={index} data={venue}/>)}
        </div>
        <div className="w-1/2 bg-white rounded-xl flex items-center justify-center">
          <h1>No Venue Yet</h1>
        </div>
      </div>
    </div>
  );
}

export default Venue;
