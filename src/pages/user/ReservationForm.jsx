import { useState } from "react";
import { createReservation } from "../../service/reservation.api";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function ReservationForm({ venueId, handleModal }) {
  const [teamOptions, setTeamOptions] = useState({
    findTeam: false,
    findMember: false,
  });
  const handleCheck = (e) => {
    setTeamOptions({
      ...teamOptions,
      [e.target.value]: e.target.checked,
    });
  };
  const [inputData, setInputData] = useState({
    phone: "",
    attendee: 0,
    date: "",
    start_time: "",
    end_time: "",
    venue_id: parseInt(venueId),
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phone", inputData.phone);
    formData.append("attendee", inputData.attendee);
    formData.append("date", inputData.date);
    formData.append("start_time", inputData.start_time);
    formData.append("end_time", inputData.end_time);
    formData.append("venue_id", inputData.venue_id);
    const res = await createReservation(formData);
    if (res.status === 204) {
      handleModal(false);
    }
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-10">
          Venue Reservation
        </h1>
        <form
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <Input onChange={onChange} id="date" type="date" title="Date" />
            <div className="flex gap-2">
              <Input
                onChange={onChange}
                id="start_time"
                type="time"
                title="Start Time"
              />
              <Input
                onChange={onChange}
                id="end_time"
                type="time"
                title="End Time"
              />
            </div>
          </div>
          <Input
            onChange={onChange}
            id="phone"
            type="tel"
            title="Phone Number"
          />
          <Input title="Number of Player" id="attendee" onChange={onChange} />
          <div className="flex flex-col gap-2">
            <label htmlFor="optional">Optional</label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <input
                  onChange={handleCheck}
                  checked={teamOptions.findTeam}
                  type="checkbox"
                  value="findTeam"
                  id="findTeam"
                  name="default-checkbox"
                />
                <label htmlFor="findTeam">Find a team to play against</label>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleCheck}
                  checked={teamOptions.findMember}
                  type="checkbox"
                  value="findMember"
                  id="findMember"
                  name="default-checkbox"
                />
                <label htmlFor="findMember">Find team member</label>
              </div>
            </div>
          </div>
          {(teamOptions.findMember === true ||
            teamOptions.findTeam === true) && (
            <>
              <Input title="Team Name" />
              <div className="flex flex-col gap-2">
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
            </>
          )}
          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
