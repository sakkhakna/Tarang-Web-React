import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function ReservationForm() {
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white p-10 rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Venue Reservation
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
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
        <Input id="Name" type="text" title="Name"></Input>
        <div className="flex justify-between gap-2">
          <Input id="Date" type="date" title="Date"></Input>
          <Input id="startTime" type="time" title="Start Time"></Input>
          <Input id="endTime" type="time" title="End Time"></Input>
        </div>
        <Input id="phoneNumber" type="tel" title="Phone Number"></Input>
        <div className="flex flex-col gap-2">
          <label htmlFor="optional">Optional</label>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <input type="radio" id="findTeam" />
              <label htmlFor="findTeam">Find a team to play againist</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" id="findMember" />
              <label htmlFor="findMember">Find team member</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="team" className="text-sm md:text-base">
            Your Team
          </label>
          <select
            name="team"
            id="team"
            className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
          >
            <option value="" hidden></option>
            <option value="football">Football</option>
            <option value="badminton">Badminton</option>
            <option value="pingpong">Ping Pong</option>
            <option value="volleyball">Volleyball</option>
          </select>
        </div>
        <div>
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

export default ReservationForm;
