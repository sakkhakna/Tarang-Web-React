import Input from "../../ui/shared/Input"
import Button from "../../ui/shared/Button";

function page() {
  return (
    <div className="w-max-5xl p-10 flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">Hosting Match Form</h1>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-full gap-2 ">
          <label htmlFor="category" className="text-sm md:text-base">
            Your Team
          </label>
          <select
            name="category"
            id="category"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value={null}>select</option>
            <option value="Badminton">team1</option>
            <option value="Ping Pong">team2</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-2 ">
          <label htmlFor="category" className="text-sm md:text-base">
            Type of Sport
          </label>
          <select
            name="category"
            id="category"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value={null}>select</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
            <option value="Ping Pong">Ping Pong</option>
            <option value="Volleyball">Volleyball</option>
          </select>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Date
          </label>
          <input
            type="date"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Time
          </label>
          <div className="w-full flex items-center">
            <input
              id="startTime"
              type="time"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
            />
            <span className="p-2">to</span>
            <input
              id="endTime"
              type="time"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
            />
          </div>
        </div>
      </div>

        <div className="flex gap-4 w-full">
            <div className="w-full">
            <Input 
            type="text"
            title="level && age"
            />
            </div>
            <div className="w-full">
            <Input 
            type="text"
            title="Your Contact"
            />
            </div>
        </div>
        <div className="w-full">
            <Input type="text" title="Prize" />
        </div>

        <Button customClass="md:w-[200px]">Host The Match</Button>
    </div>
  );
}

export default page;
