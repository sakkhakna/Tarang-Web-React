import { extractMonthAndDate } from "@/lib/helpers";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import LinkButton from "../shared/LinkButton";

function TeamCard({ team }) {
  const { month, day } = extractMonthAndDate(team.date);
  return (
    <div className="w-full bg-white border border-gray-200 shadow rounded-xl">
      <div className="p-4 flex flex-col items-center gap-4 relative">
        <div className="bg-[#d9d9d9] w-[80px] h-[80px] rounded-full"></div>
        <h2 className="font-semibold text-2xl">{team.team.name}</h2>
        <div className="flex flex-col absolute right-4">
          <span className="text-center px-4 bg-red-500 rounded-t-lg text-white font-semibold">
            {month}
          </span>
          <span className="text-center px-4 bg-[#eaeaea] rounded-b-lg font-semibold">
            {day}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <IoMdTime className="w-[20px] h-[20px]" />
          <h1>
            Time {team.start_time} - {team.end_time}
          </h1>
        </div>
        {team.find_team === 1 && (
          <div className="flex items-center gap-2">
            <FaRegCheckCircle className="w-[20px] h-[20px]" />
            Available for a match
          </div>
        )}
        {team.find_member === 1 && (
          <div className="flex items-center gap-2">
            <FaRegCheckCircle className="w-[20px] h-[20px]" />
            Accepting new members
          </div>
        )}
        <div className="flex gap-4">
          {team.find_member === 1 && (
            <LinkButton toPage="/join" customClass="w-full text-center">
              Join
            </LinkButton>
          )}
          {team.find_team === 1 && (
            <LinkButton toPage="/challenge" customClass="w-full text-center">
              Challenge
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
