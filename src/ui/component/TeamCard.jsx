import Button from "../shared/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

function TeamCard() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow rounded-xl">
      <div className="p-4 flex flex-col items-center gap-4 relative">
        <div className="bg-[#d9d9d9] w-[80px] h-[80px] rounded-full"></div>
        <h2 className="font-semibold text-2xl">FC Barcelona</h2>
        <div className="flex flex-col absolute right-4">
          <span className="text-center px-4 bg-red-500 rounded-t-lg">SEP</span>
          <span className="text-center px-4 bg-[#eaeaea] rounded-b-lg">30</span>
        </div>
        
      </div>
      <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <IoMdTime className="w-[20px] h-[20px]"/>
          <h1>Time</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-[20px] h-[20px]" />
          Available for a match
        </div>
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-[20px] h-[20px]" />
          Accepting new members
        </div>
        <div className="flex gap-4">
          <Button customClass="w-full">Join</Button>
          <Button customClass="w-full">Challenge</Button>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
