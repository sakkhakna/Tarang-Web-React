import { FaRegCheckCircle } from "react-icons/fa";
import Button from "../shared/Button";
import LinkButton from "../shared/LinkButton";

function TeamCard() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow rounded-xl">
      <div className="p-4 flex flex-col items-center gap-4">
        <div className="bg-[#d9d9d9] w-[80px] h-[80px] rounded-full"></div>
        <h2 className="font-semibold text-2xl">FC Barcelona</h2>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-4 h-4" />
          Available for a match
        </div>
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-4 h-4" />
          Accepting new members
        </div>
        <div className="flex gap-4">
          <LinkButton toPage="/join">Join</LinkButton>
          <LinkButton toPage="/challenge">Challenge</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
