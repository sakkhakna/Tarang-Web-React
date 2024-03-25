import { useState, useContext } from "react";
import { createReservation } from "../../service/reservation.api";
import AppContext from "../../contexts/AppContext";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";
import { createTeam } from "../../service/team.api";

function ReservationForm({ venueId, sportTypeId, handleModal }) {
  const { dispatch, user } = useContext(AppContext);
  const [teamOptions, setTeamOptions] = useState({
    find_team: false,
    find_member: false,
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
    name: "",
    sport_type_id: parseInt(sportTypeId),
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
    // if (user.team === null) {
    const teamFormData = new FormData();
    teamFormData.append("name", inputData.name);
    teamFormData.append("sport_type_id", inputData.sport_type_id);
    const resTeam = await createTeam(teamFormData);
    // console.log(resTeam.data.data.id);
    // console.log(team.data.id);
    // }
    const formData = new FormData();
    formData.append("phone", inputData.phone);
    formData.append("attendee", parseInt(inputData.attendee));
    formData.append("date", inputData.date);
    formData.append("start_time", inputData.start_time);
    formData.append("end_time", inputData.end_time);
    formData.append("venue_id", inputData.venue_id);
    formData.append("find_team", teamOptions.find_team === true ? 1 : 0);
    formData.append("find_member", teamOptions.find_member === true ? 1 : 0);
    formData.append("team_id", resTeam.data.data.id);
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2">
                <input
                  onChange={handleCheck}
                  checked={teamOptions.find_team}
                  type="checkbox"
                  value="find_team"
                  id="find_team"
                  name="default-checkbox"
                />
                <label htmlFor="find_team">Find a team to play against</label>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleCheck}
                  checked={teamOptions.find_member}
                  type="checkbox"
                  value="find_member"
                  id="find_member"
                  name="default-checkbox"
                />
                <label htmlFor="find_member">Find team member</label>
              </div>
            </div>
          </div>
          {(teamOptions.find_member === true ||
            teamOptions.find_team === true) && (
            <>
              <Input
                title="Team Name"
                id="name"
                type="text"
                onChange={onChange}
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm md:text-base">
                  Description
                </label>
                <textarea
                  name="description"
                  type="text"
                  onChange={onChange}
                  id="description"
                  rows="3"
                  className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
                ></textarea>
              </div>
            </>
          )}
          <div className="flex justify-end md:mt-6">
            <Button type="submit">Reserve</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
