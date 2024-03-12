import React from "react";

function Dashboard() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl">
          <div className="w-full h-[100px] p-4 bg-[#d9d9d9] rounded-xl">
            <h1>Total Reserve</h1>
            <h1>12</h1>
          </div>
          <div className="w-full h-[100px] p-4 bg-[#d9d9d9] rounded-xl">
            <h1>Total Reserve</h1>
            <h1>12</h1>
          </div>
          <div className="w-full h-[100px] p-4 bg-[#d9d9d9] rounded-xl">
            <h1>Total Reserve</h1>
            <h1>12</h1>
          </div>
          <div className="w-full h-[100px] p-4 bg-[#d9d9d9] rounded-xl">
            <h1>Total Reserve</h1>
            <h1>12</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full h-[300px] bg-[#d9d9d9] rounded-xl"></div>
          <div className="w-full h-[300px] bg-[#d9d9d9] rounded-xl"></div>
        </div>
        <div className="border border-black rounded-xl p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Recent Reserve</h1>
			<table class="table-fixed w-full">
            <thead className="bg-[#d9d9d9]">
              <tr className="text-left">
                <th className="p-2">User</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Type</th>
                <th className="p-2">Court</th>
                <th className="p-2">Time</th>
                <th className="p-2">Price</th>
              </tr>
            </thead>
            <tbody className="bg-[#d9d9d9]">
              <tr className="bg-[#eaeaea]">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                    <h1>MengSrun</h1>
                  </div>
                </td>
                <td className="p-2">0123456789</td>
                <td className="p-2">Football</td>
                <td className="p-2">F1</td>
                <td className="p-2">1-3pm</td>
                <td className="p-2">15$</td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                    <h1>MengSrun</h1>
                  </div>
                </td>
                <td className="p-2">0123456789</td>
                <td className="p-2">Football</td>
                <td className="p-2">F1</td>
                <td className="p-2">1-3pm</td>
                <td className="p-2">15$</td>
              </tr>
              <tr className="bg-[#eaeaea]">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-500 rounded-full h-[30px] w-[30px]"></div>
                    <h1>MengSrun</h1>
                  </div>
                </td>
                <td className="p-2">0123456789</td>
                <td className="p-2">Football</td>
                <td className="p-2">F1</td>
                <td className="p-2">1-3pm</td>
                <td className="p-2">15$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
