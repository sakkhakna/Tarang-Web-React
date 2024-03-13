import React from "react";
import ReserveCard from "./component/ReserveCard";
import Input from "../../ui/shared/Input";

function Reserve() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Reserve</h1>
        <div className="flex gap-4">
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
      <div className="w-full">
        <div className="w-full flex gap-4">
          <div className="w-1/2 grid grid-cols-2 gap-4">
            <ReserveCard />
            <ReserveCard />
            <ReserveCard />
            <ReserveCard />
            <ReserveCard />
            <ReserveCard />
          </div>
          <div className="w-1/2 bg-white rounded-xl flex items-center justify-center">
            <h1>No Venue Yet</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
