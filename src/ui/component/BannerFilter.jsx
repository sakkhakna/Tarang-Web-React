import { IoSearch } from "react-icons/io5";
import { IoSearchCircleOutline } from "react-icons/io5";
import React from "react";
import Input from '../shared/Input'

function BannerFilter() {
  return (
        <div className="bg-[#ca1d1d] w-full h-[300px] p-10 flex flex-col items-center justify-end">
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-4xl font-bold text-center text-white">
            Find Best Venue
          </h1>
          <div className="flex gap-4 items-center bg-[#d9d9d9] px-2 pb-2 rounded-xl">
            <div className="w-full relative ">
              <IoSearch className="absolute top-5 left-2 z-10" />
              <Input
                type="search"
                placeholder="Find Court..."
                customClass="px-8 rounded-xl"
              />
            </div>
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
            <button className="w-[50px] h-[50px] mt-2 rounded-full" >
            <IoSearchCircleOutline className="w-[50px] h-[50px] bg-[#fff] rounded-full"/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default BannerFilter