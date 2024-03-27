import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/user.api";
import Input from "../shared/Input";
import Button from "../shared/Button";
import ProfileAvatar from "./ProfileAvatar";
import Spinner from "../Spinner";

function ProfileSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUser,
  });
  const [inputData, setInputData] = useState({
    name: data ? data.user.name : "",
    phone: data ? data.user.phone : "",
    photo: data ? data.user.photo : "",
  });
  return (
    <section className="w-full flex flex-col gap-4 justify-center items-center border border-gray-200 bg-white shadow p-4 md:p-10 rounded-xl">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
        <Button customClass="bg-red-500">Log Out</Button>
      </div>
      <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
      {isLoading ? (
        <div className="p-10">
          <Spinner />
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
            <ProfileAvatar
            //   disabled={editMode}
            //   onChange={onImgUrlChange}
            //   imgUrl={profileImg}
            />
            {/* <button
          onClick={onSubmit}
          className="text-lg flex items-center gap-2"
        >
          {editMode ? (
            <>
              <img src={editSvg} alt="editMode" width={18} height={18} />
              Edit
            </>
          ) : (
            <>
              <img src={SaveSvg} alt="editMode" width={18} height={18} />{" "}
              Save
            </>
          )}
        </button> */}
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              title="Username"
              type="text"
              placeholder="Username"
              id="username"
              className="outline-none text-lg"
              // disabled={editMode}
              // onChange={onChange}
              value={inputData.name}
            />
            <Input
              title="Phone Number"
              type="text"
              placeholder="Phone Number"
              id="phoneNumber"
              className="outline-none text-lg"
              // disabled={editMode}
              // onChange={onChange}
              value={inputData.phone}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileSection;
