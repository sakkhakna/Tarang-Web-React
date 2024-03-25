import { useState } from "react";
import ProfileSection from "../../ui/component/ProfileSection";
import ReservationSection from "../../ui/component/ReservationSection";
import TeamSection from "../../ui/component/TeamSection";
// import { FaRegClock, FaRegCalendar } from "react-icons/fa6";
// function Reservation() {
//   return (
//     <div className="w-full bg-white flex flex-col rounded-xl p-10  ">
//       <h1 className="text-2xl md:text-4xl font-bold mb-10">Reservation</h1>
//       <div className="flex flex-col md:flex-row gap-10">
//         <div className="w-full flex border border-gray-200 shadow rounded-xl">
//           <div className="w-1/2 h-full bg-[#EAEAEA] rounded-xl"></div>
//           <div className="p-4">
//             <p className="font-bold text-xl">Name of the Court</p>
//             <p className="font-semibold text-sm">Type :</p>
//             <p className="font-semibold text-sm">Size of the Court :</p>
//             <p className="font-semibold text-sm">Time : 5 - 7 PM</p>
//             <p className="font-semibold text-sm">Price 30$</p>
//           </div>
//         </div>
//         <div className="w-full flex border border-gray-200 shadow rounded-xl">
//           <div className="w-1/2 h-full bg-[#EAEAEA] rounded-xl"></div>
//           <div className="p-4">
//             <p className="font-bold text-xl">Name of the Court</p>
//             <p className="font-semibold text-sm">Type :</p>
//             <p className="font-semibold text-sm">Size of the Court :</p>
//             <p className="font-semibold text-sm">Time : 5 - 7 PM</p>
//             <p className="font-semibold text-sm">Price 30$</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Profile() {
  const [selectedSection, setSelectedSection] = useState("profile");
  const handleSection = (section) => {
    setSelectedSection(section);
  };
  return (
    <section className="p-4 md:p-10">
      <div className="hidden lg:flex gap-4 md:gap-10">
        <aside className="w-full md:w-1/5">
          <ul className="flex flex-col gap-4 font-semibold border border-gray-200 bg-white shadow p-10 rounded-xl">
            <li className="text-xl">
              <button
                onClick={() => handleSection("profile")}
                className="flex gap-4 items-center"
              >
                Profile
              </button>
            </li>
            <li className="text-xl">
              <button
                onClick={() => handleSection("reservation")}
                className="flex items-center gap-4"
              >
                Reservation
              </button>
            </li>
            <li className="text-xl">
              <button
                onClick={() => handleSection("history")}
                className="flex items-center gap-4"
              >
                History
              </button>
            </li>
            <li className="text-xl">
              <button
                onClick={() => handleSection("team")}
                className="flex items-center gap-4"
              >
                Team
              </button>
            </li>
          </ul>
        </aside>
        <div className="w-full md:w-4/5 flex flex-col gap-4">
          {selectedSection === "profile" && <ProfileSection />}
          {selectedSection === "reservation" && (
            <ReservationSection title={"Reservation"} />
          )}
          {selectedSection === "history" && (
            <ReservationSection title={"Reservation History"} />
          )}
          {selectedSection === "team" && <TeamSection />}
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-4 md:gap-10">
        <ProfileSection />
        <ReservationSection title={"Reservation"} />
        <ReservationSection title={"Reservation History"} />
        <TeamSection />
      </div>
    </section>
  );
}

export default Profile;
