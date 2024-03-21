import ProfileSidebar from "../../ui/ProfileSidebar";
import Button from "../../ui/shared/Button";
import Input from "../../ui/shared/Input";
// import { FaRegClock, FaRegCalendar } from "react-icons/fa6";

function ProfileSection() {
  return (
    <div className="w-full flex flex-col rounded-xl p-10 bg-white">
      <div className="w-full flex justify-between mb-10">
        <h1 className="font-bold text-2xl md:text-4xl">Profile</h1>
        <Button onClick={null} customClass="bg-[#F55D5D]">
          Logout
        </Button>
      </div>
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-[#d9d9d9] w-24 h-24 rounded-full"></div>
        <p className="font-bold text-2xl">Sou Sodara</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 mb-10">
        <Input value="0123456789" disabled={true} />
        <Input value="sousodara168@gmail.com" disabled={true} />
        <Input value="11/12/2013" disabled={true} />
      </div>
      <div className="flex gap-4">
        <Button customClass="md:w-full">Update Account</Button>
        <Button customClass="md:w-full bg-[#F55D5D]">Delete Account</Button>
      </div>
    </div>
  );
}
function Reservation() {}
function ReservationHistory() {
  return (
    <div className="w-full md:w-1/2 bg-white flex flex-col rounded-xl p-10  ">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">
        Reservation History
      </h1>
      <div className="w-full flex border border-gray-200 shadow rounded-xl">
        <div className="w-1/2 h-36 bg-[#EAEAEA] rounded-xl"></div>
        <div className="p-4">
          <p className="font-bold text-xl">Name of the Court</p>
          <p className="font-semibold text-sm">Type :</p>
          <p className="font-semibold text-sm">Size of the Court :</p>
          <p className="font-semibold text-sm">Time : 5 - 7 PM</p>
          <p className="font-semibold text-sm">Price 30$</p>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="flex gap-4 md:gap-10 p-4 xl:px-0 xl:py-10">
      <div className="hidden md:block w-1/4">
        <ProfileSidebar />
      </div>
      <div className="w-full md:w-3/4">
        <ProfileSection />
      </div>
    </div>
  );
}

export default Profile;
