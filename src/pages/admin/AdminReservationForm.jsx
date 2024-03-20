import Input from "../../ui/shared/Input";
import LinkButton from "../../ui/shared/LinkButton";
import Button from "../../ui/shared/Button";
import { useState } from "react";

export default function AdminReservationForm() {
  const [inputData, setInputData] = useState({
    name: "",
    date: "",
    start_time: "",
    end_time: "",
    phone: "",
    team_name: "",
    description: "",
    venue_type: "",
    playing_type: "",
  });

  const Submit = () => {};
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className="p-10">
      <div className="max-w-4xl mx-auto p-10 flex flex-col items-center gap-10 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold">Add New Reservation</h1>
        <form
          encType="multipart/form-data"
          onSubmit={Submit}
          className="flex flex-col gap-10 items-center w-full"
        >
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Name"
                  id={"name"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="w-1/3">
                <Input
                  type="date"
                  title="Match Date"
                  id={"name"}
                  onChange={onChange}
                />
              </div>
              <div className="w-1/3">
                <Input
                  type="time"
                  title="Start Match"
                  id={"name"}
                  onChange={onChange}
                />
              </div>
              <div className="w-1/3">
                <Input
                  type="time"
                  title="End Match"
                  id={"name"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Phone Number"
                  id={"phone"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Optional"
                  id={"phone"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Team Name"
                  id={"team_name"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm md:text-base" htmlFor="description">
                Description
              </label>
              <textarea
                onChange={onChange}
                name="Description"
                id="description"
                rows="5"
                className="px-4 py-2 rounded-2xl border focus:outline-none focus:ring focus:border-[#2AD5A5]"
              ></textarea>
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="category" className="text-sm md:text-base">
                  Venue Type:
                </label>
                <select
                  onChange={onChange}
                  name="venue_type"
                  id="venue_type"
                  className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
                >
                  <option value={null}>Select</option>
                  <option value="1">Tarang A</option>
                  <option value="2">Tarang B</option>
                  <option value="3">Tarang C</option>
                  <option value="4">Tarang D</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full justify-end">
            <LinkButton
              toPage="/"
              customClass={"md:w-[150px] text-center hover:bg-[#9FE2BF]"}
            >
              Cancel
            </LinkButton>
            <Button
              type={"submit"}
              customClass="md:w-[150px] hover:bg-[#9FE2BF]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
