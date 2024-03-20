import Button from "../../ui/shared/Button";
import Input from "../../ui/shared/Input";
import { FaRegClock, FaRegCalendar } from "react-icons/fa6";

function Profile() {
  return (
    <div className="w-full">
      <div className="flex gap-10">
        <div className="w-1/2 flex flex-col rounded-xl p-6 gap-4 ">
          <div className="w-full flex justify-between">
            <h1 className="font-bold text-2xl">Profile</h1>
            <Button onClick={null} customClass="bg-[#F55D5D]">
              Logout
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-500 w-24 h-24 rounded-full"></div>
            <p className="font-bold text-2xl">Sou Sodara</p>
          </div>
          <div>
            <Input value="0123456789" disabled />
            <Input value="sousodara168@gmail.com" disabled />
            <Input value="11/12/2013" disabled />
          </div>
          <div className="flex gap-2">
            <Button customClass="w-full">Update Account</Button>
            <Button customClass="w-full bg-[#F55D5D]">Delete Account</Button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col rounded-xl p-6 gap-4">
          <h1 className="text-2xl font-bold">Booking History</h1>
          <div className="w-full flex border border-gray-200 shadow rounded-xl">
            <div className="w-1/2 h-36 bg-[#EAEAEA] rounded-xl"></div>
            <div className="p-4">
              <h1 className="font-bold text-xl">Name of the Court</h1>
              <h1 className="font-semibold text-sm">Type :</h1>
              <h1 className="font-semibold text-sm">Size of the Court :</h1>
              <h1 className="font-semibold text-sm">Time : 5 - 7 PM</h1>
              <h1 className="font-semibold text-sm">Price 30$</h1>
            </div>
          </div>

          <div className="w-full h-36 bg-white rounded-xl ">
            <div className="flex m-4 gap-4">
              <div className="bg-[#9d9d9d] w-16 h-16 rounded-xl"></div>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">Venue: F2</h1>
                <p className="font-bold text-sm">Type: Football</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 mx-4">
                <FaRegCalendar className="text-2xl" />
                <p className="font-bold text-sm">Sunday, 8 March</p>
              </div>
              <div className="flex items-center gap-2 mx-4">
                <FaRegClock className="text-2xl" />
                <p className="font-bold text-sm">5:00 - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
