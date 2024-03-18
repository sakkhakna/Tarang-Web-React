import React from "react";
import Button from "../../ui/shared/Button";
import Input from "../../ui/shared/Input";

function User() {
  const data = [
    {
      id: 1,
      username: "love",
      email: "love123@gmial.com",
      phone: "0123456789",
      role: "user",
    },
    {
      id: 2,
      username: "love321",
      email: "lo123@gmial.com",
      phone: "0123556789",
      role: "user",
    },
    {
      id: 3,
      username: "love123",
      email: "love3@gmial.com",
      phone: "0123656789",
      role: "user",
    },
    {
      id: 4,
      username: "loveasd",
      email: "ve123@gmial.com",
      phone: "0123356789",
      role: "user",
    },
    {
      id: 5,
      username: "lovedsa",
      email: "love1@gmial.com",
      phone: "0122456789",
      role: "user",
    },
  ];

  return (
    <div className="p-4 md:p-10 flex flex-col gap-4 md:gap-10">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-4 md:gap-10">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">User</h1>
          {/* <LinkButton toPage="/reservationform" customClass="block xl:hidden">
            Create Reservation
          </LinkButton> */}
        </div>
        <div className="flex items-center gap-4 xl:hidden">
          <input
            type="text"
            className="w-2/3 rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
            placeholder="Search"
          />
          <select
            name="category"
            id="category"
            className="w-1/3 rounded-xl px-4 py-2 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option>Veiw By</option>
            <option value="Today">Today</option>
            <option value="last 7 Days">Last 7 Days</option>
          </select>
        </div>
        <div className="hidden xl:flex items-center gap-4">
          {/* <LinkButton toPage="/reservationform">Create Reservation</LinkButton> */}
          <input
            type="text"
            className="rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
            placeholder="Search"
          />
          <select
            name="category"
            id="category"
            className="rounded-xl px-4 py-2 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option value={null}>Veiw By</option>
            <option value="Today">Today</option>
            <option value="last 7 Days">Last 7 Days</option>
          </select>
        </div>
      </div>
      <div className="w-full hidden md:block">
        <table class="table-fixed w-full">
          <thead className="bg-[#d9d9d9]">
            <tr className="text-left">
              <th className="p-2">Username</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) =>
              index % 2 === 0 ? (
                <tr className="bg-[#eaeaea]">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                      <h1>{data.username}</h1>
                    </div>
                  </td>
                  <td className="p-2">{data.email}</td>
                  <td className="p-2">{data.phone}</td>
                  <td className="p-2">{data.role}</td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <Button customClass="bg-blue-500 text-white">Edit</Button>
                      <Button customClass="bg-red-500 text-white">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr className="bg-[#d9d9d9]">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                      <h1>{data.username}</h1>
                    </div>
                  </td>
                  <td className="p-2">{data.email}</td>
                  <td className="p-2">{data.phone}</td>
                  <td className="p-2">{data.role}</td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <Button customClass="bg-blue-500 text-white">Edit</Button>
                      <Button customClass="bg-red-500 text-white">
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center md:hidden ">
        {data.map((data) => (
          <div className="flex justify-between gap-4  border border-black p-2">
            <div className="font-bold flex flex-col gap-4">
              <h1>Username</h1>
              <h1>Email</h1>
              <h1>Phone</h1>
              <h1>Role</h1>
              <h1>Action</h1>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                <h1>{data.username}</h1>
              </div>
              <h1>{data.email}</h1>
              <h1>{data.phone}</h1>
              <h1>{data.role}</h1>
              <div className="flex gap-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
