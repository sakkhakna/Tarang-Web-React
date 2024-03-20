import { useState } from "react";
import { createReservation } from "../../service/reservation.api";
import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function ReservationForm({ venueId, handleModal }) {
  const [inputData, setInputData] = useState({
    phone: "",
    attendee: 10,
    date: "",
    start_time: "",
    end_time: "",
    venue_id: venueId,
  });
  console.log(inputData);
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
    if (res.status === 200) {
      handleModal(false);
    }
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Venue Reservation
        </h1>
        <form
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full"
        >
          {/* <Input
            onChange={onChange}
            id="name"
            type="text"
            title="Name"
            isRequired={true}
          /> */}
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="venue_type" className="text-sm md:text-base">
              Sport Type
            </label>
            <select
              name="sport_type"
              id="venue_id"
              className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
            >
              <option value="">Select</option>
              <option value="football">Football</option>
              <option value="badminton">Badminton</option>
              <option value="pingpong">Ping Pong</option>
              <option value="volleyball">Volleyball</option>
            </select>
          </div> */}
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
          <div className="flex flex-col gap-2">
            <label htmlFor="optional">Optional</label>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <input onChange={onChange} type="radio" id="findTeam" />
                <label htmlFor="findTeam">Find a team to play againist</label>
              </div>
              <div className="flex gap-1">
                <input onChange={onChange} type="radio" id="findMember" />
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
              <option value="">Select</option>
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
          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
