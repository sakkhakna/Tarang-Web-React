import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoFootballOutline } from "react-icons/io5";

function ReserveCard() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-between p-2 rounded-t-xl items-center bg-gray-300">
        <IoFootballOutline className="w-[30px] h-[30px]" />
        <div className="flex gap-2 items-center bg-green-400 rounded-xl py-1 px-4">
          <IoCheckmarkCircleOutline />
          <h1>Reserved</h1>
        </div>
      </div>
      <div className="p-2 flex flex-col text-sm gap-2 bg-white rounded-b-xl">
        <div className="flex w-full">
            <h1 className="w-1/2 ">Date : </h1>
            <h1 className="w-1/2">Time : </h1>
        </div>
        <h1>Venue : </h1>
        <h1>Name : </h1>
        <h1>Phone : </h1>
        <h1>Price : </h1>
      </div>
    </div>
  );
}

export default ReserveCard;
