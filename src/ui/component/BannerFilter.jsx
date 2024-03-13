import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

function BannerFilter() {
  return (
    <div className="bg-[#d9d9d9] w-full p-10 flex flex-col items-center justify-end">
      <div className="w-full flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Find Best Venue</h1>
        <div className="flex gap-4 items-center bg-[#d9d9d9] px-2 pb-2 rounded-xl">
          <div className="w-full">
            <Input type="date" />
          </div>
          <select
            name="category"
            id="category"
            className="rounded-xl w-full px-4 py-2 mt-2 h-[45px] border focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value={null}>Sport Type</option>
            <option value="football">Football</option>
            <option value="pingpong">PingPong</option>
            <option value="badminton">Badminton</option>
            <option value="volleyball">Volleyball</option>
          </select>
          <Button customClass={'py-2 px-6 md:h-[45px] mt-2'}>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default BannerFilter;
