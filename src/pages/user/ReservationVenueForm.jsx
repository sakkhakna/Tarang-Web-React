import Button from "../../ui/shared/Button.jsx";
import Input from "../../ui/shared/Input.jsx";

function ReservationVenueForm() {
  return (
    <div className="max-w-4xl mx-auto mt-[98px]">
      <div className="bg-[#EAEAEA] h-52 mt-[150px]">Banner</div>
      <div className="w-full p-10 space-y-5">
        <h1 className="text-4xl font-bold text-center">
          Court Reservation Form
        </h1>
        <p className="text-center">Please complete the form below</p>
        <div className="flex w-full gap-4">
          {/* <div className="flex flex-col w-full">
						<label htmlFor="name" className="text-sm md:text-base">
							Name:
						</label>
						<input
							id="name"
							type="text"
							className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
						/>
					</div> */}
          <div className="w-full">
            <Input id="name" type="text" title="Name" />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="category" className="text-sm md:text-base">
              Category:
            </label>
            <select
              name="category"
              id="category"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
            >
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
              <option value="Ping Pong">Ping Pong</option>
              <option value="Volleyball">Volleyball</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Name of The Court:
          </label>
          <input
            type="text"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          />
        </div>
        <div className="w-full flex gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="nameOfCourt" className="text-sm md:text-base">
              Date:
            </label>
            <input
              type="date"
              className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nameOfCourt" className="text-sm md:text-base">
              Time:
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
        <div className="flex flex-col w-full">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Type of Your Reservation:
          </label>
          <div className="w-full flex gap-4">
            <input
              type="button"
              value="I have monthly subscription"
              className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
              onChange={null}
            />
            <input
              type="radio"
              value="One time rental"
              className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
              onClick={null}
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="nameOfCourt" className="text-sm md:text-base">
              Contact:
            </label>
            <input type="tel" className="rounded-xl w-full px-4 py-2 border" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nameOfCourt" className="text-sm md:text-base">
              Estimated Attendances:
            </label>
            <input
              type="number"
              className="rounded-xl w-full px-4 py-2 border"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Optional:
          </label>
          <div className="w-full flex gap-4">
            <input
              type="button"
              value="Find a team to play againist"
              className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
              onClick={null}
            />
            <input
              type="button"
              value="Find team member"
              className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
              onClick={null}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="nameOfCourt" className="text-sm md:text-base">
            Your team:
          </label>
          <select
            name="team"
            id="team"
            className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
          >
            <option value="FC Barcelona">FC Barcelona</option>
            <option value="Dara CoCo">Dara CoCo</option>
          </select>
        </div>
        <Button customClass="w-full">Submit</Button>
      </div>
    </div>
  );
}

export default ReservationVenueForm;
