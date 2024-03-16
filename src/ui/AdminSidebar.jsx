import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/tarang_logo.png";
import { TbSoccerField } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="hidden xl:block sticky h-screen top-0 left-0 bottom-0 bg-white border-r-2">
      <div className="w-[230px] p-4 h-screen flex flex-col gap-10">
        <Link to="/" className="w-full flex justify-center">
          <img src={Logo} alt="Logo" className="w-28" />
        </Link>
        <div className="flex flex-col text-lg font-semibold gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return !isActive
                ? "font-semibold flex gap-2 items-center hover:text-white hover:bg-[#2AD5A5] p-2 rounded-lg"
                : "font-semibold flex gap-2 items-center text-white p-2 rounded-lg bg-[#2AD5A5]";
            }}
          >
            <MdDashboard />
            Dashboard
          </NavLink>

          <NavLink
            to="/venue"
            className={({ isActive }) => {
              return !isActive
                ? "font-semibold flex gap-2 items-center hover:text-white hover:bg-[#2AD5A5] p-2 rounded-lg"
                : "font-semibold flex gap-2 items-center text-white p-2 rounded-lg bg-[#2AD5A5]";
            }}
          >
            <TbSoccerField />
            Venue
          </NavLink>

          <NavLink
            to="/reserve"
            className={({ isActive }) => {
              return !isActive
                ? "font-semibold flex gap-2 items-center hover:text-white hover:bg-[#2AD5A5] p-2 rounded-lg"
                : "font-semibold flex gap-2 items-center text-white p-2 rounded-lg bg-[#2AD5A5]";
            }}
          >
            <FaBookmark />
            Reserve
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) => {
              return !isActive
                ? "font-semibold flex gap-2 items-center hover:text-white hover:bg-[#2AD5A5] p-2 rounded-lg"
                : "font-semibold flex gap-2 items-center p-2 text-white rounded-lg bg-[#2AD5A5]";
            }}
          >
            <RiTeamFill />
            Team
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) => {
              return !isActive
                ? "font-semibold flex gap-2 items-center hover:text-white hover:bg-[#2AD5A5] p-2 rounded-lg"
                : "font-semibold flex gap-2 items-center text-white p-2 rounded-lg bg-[#2AD5A5]";
            }}
          >
            <FaUser />
            User
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
export default AdminSidebar;
