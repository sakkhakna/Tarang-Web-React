import React from "react";
import ReserveCard from "./component/ReserveCard";
import LinkButton from "../../ui/shared/LinkButton";

function Reserve() {
  return (
    <div className="p-4 md:p-10 flex flex-col gap-4 md:gap-10">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-4 md:gap-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Reservation</h1>
          <LinkButton toPage="/reservationform" customClass="block xl:hidden">
            Create Reservation
          </LinkButton>
        </div>
        <div className="flex items-center gap-4 xl:hidden">
          <input
            type="text"
            className="w-2/3 rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
            placeholder="Search"
          />
          <select
            name="category"
            id="category"
            className="w-1/3 rounded-xl px-4 py-2 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option>Veiw By</option>
            <option value="Today">Today</option>
            <option value="last 7 Days">Last 7 Days</option>
          </select>
        </div>
        <div className="hidden xl:flex items-center gap-4">
          <LinkButton toPage="/reservationform">Create Reservation</LinkButton>
          <input
            type="text"
            className="rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
            placeholder="Search"
          />
          <select
            name="category"
            id="category"
            className="rounded-xl px-4 py-2 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option value={null}>Veiw By</option>
            <option value="Today">Today</option>
            <option value="last 7 Days">Last 7 Days</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 md:gap-10">
        <div className="w-full md:w-1/2 grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10">
          <ReserveCard />
          <ReserveCard />
          <ReserveCard />
          <ReserveCard />
          <ReserveCard />
          <ReserveCard />
        </div>
        <div className="hidden w-1/2 bg-white rounded-xl md:flex items-center justify-center">
          <h1>No Venue Yet</h1>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
