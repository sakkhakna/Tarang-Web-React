import { FaRegCheckCircle } from "react-icons/fa";
import Button from "../../../ui/shared/Button";

function TeamCard() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow rounded-xl">
      <div className="p-4 flex flex-col items-center gap-4 relative">
        <div className="bg-[#d9d9d9] w-[80px] h-[80px] rounded-full"></div>
        <h2 className="font-semibold text-xl">FC Barcelona</h2>
        
      </div>
      <div className="p-4 text-sm flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-[20px] h-[20px]" />
          Available for a match
        </div>
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="w-[20px] h-[20px]" />
          Accepting new members
        </div>
        <Button customClass={'bg-white text-black border-black border'}>
        <h1 className="text-black">Veiw Team</h1>
        </Button>
      </div>
    </div>
  )
}

export default TeamCard