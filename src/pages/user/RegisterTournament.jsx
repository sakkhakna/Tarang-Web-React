import Button from "../../ui/shared/Button.jsx";
import Input from "../../ui/shared/Input.jsx";

function RegisterTournament() {
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white p-10 rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Tournament Register
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4">
          <label htmlFor="venue_type" className="text-sm md:text-base">
            Venue Type
          </label>
          <select
            name="venue_type"
            id="venue_type"
            className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option value="" hidden></option>
            <option value="football">Football</option>
            <option value="badminton">Badminton</option>
            <option value="pingpong">Ping Pong</option>
            <option value="volleyball">Volleyball</option>
          </select>
        </div>
        <Input
          id="tournament_name"
          type="text"
          title="Name of the Tournament"
        ></Input>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="date" className="text-sm md:text-base">
            Date
          </label>
          <div className="flex items-center">
            <input
              type="date"
              id="start_date"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:ring focus:border-[#2AD5A5]"
            />
            <p className="px-2">to</p>
            <input
              type="date"
              id="end_date"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:ring focus:border-[#2AD5A5]"
            />
          </div>
        </div>
        <div className="w-full flex">
          <Input id="startTime" type="time" title="Start Time"></Input>
          <p className="flex items-center mt-7 px-2">to</p>
          <Input id="endTime" type="time" title="End Time"></Input>
        </div>
        <Input id="number_team" type="number" title="Number of Teams"></Input>
        <Input id="member_team" type="number" title="Member per Teams"></Input>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="description" className="text-sm md:text-base">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          ></textarea>
        </div>
      </div>
      <Button customClass="flex w-2/6 mx-auto justify-center mt-4">
        Submit
      </Button>
    </div>
  );
}

export default RegisterTournament;
