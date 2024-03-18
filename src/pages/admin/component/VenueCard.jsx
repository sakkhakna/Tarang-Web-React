import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { showSingleVenue } from "../../../service/Venue.api";

function VenueCard({data}) {
	console.log(data);
  // const [data,setData] = useState();

  // useEffect(()=>{
  // 	const show = async()=>{
  // 		const venue = await showVenue(1);
  // 		setData(venue);
  // 	}
  // 	show();
  // },[data])

  // console.log(data);
//   const { data } = useQuery("showVenues", showSingleVenue);
  return (
    <div className="flex flex-col w-full bg-white border border-gray-200 shadow rounded-xl">
      <div className="w-full h-[150px] bg-[#eaeaea]">
        {/* <img src="/" alt="photo" className="w-full h-full" /> */}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Name : {data.name}</h1>
        </div>
        <h1 className="text-sm font-semibold">Type : {data.sportType.name}</h1>
        <h1 className="font-semibold text-sm">Size of the Court : {data.size} </h1>
      </div>
    </div>
  );
}

export default VenueCard;
