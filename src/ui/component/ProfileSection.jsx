import { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../service/user.api";
import AppContext from "../../contexts/AppContext";
import Input from "../shared/Input";
import Button from "../shared/Button";
import ProfileAvatar from "./ProfileAvatar";

function ProfileSection() {
  const { dispatch, userData } = useContext(AppContext);
  const { data } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUser,
  });
  useEffect(() => {
    dispatch({ type: "SET_USER_DATA", payload: data });
  }, [data]);
  const [inputData, setInputData] = useState({
    name: userData ? userData.user.name : data.user.name,
    phone: userData ? userData.user.phone : data.user.phone,
    photo: userData ? userData.user.photo : data.user.photo,
  });
  return (
    <section className="w-full border border-gray-200 bg-white shadow p-4 md:p-10 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl md:text-4xl">My Profile</h1>
        <Button customClass="bg-red-500">Log Out</Button>
      </div>
      <div className="h-[1px] bg-[#D9D9D9] mb-4"></div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
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
            placeholder=""
            id="username"
            className="outline-none text-lg"
            // disabled={editMode}
            // onChange={onChange}
            value={inputData.name}
          />
          <Input
            title="Email"
            type="text"
            placeholder=""
            id="email"
            className="outline-none text-lg"
            // disabled={true}
            // onChange={onChange}
            // value={email}
          />
          <Input
            title="Phone Number"
            type="text"
            placeholder=""
            id="phoneNumber"
            className="outline-none text-lg"
            // disabled={editMode}
            // onChange={onChange}
            // value={phoneNumber}
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
