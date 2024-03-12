import Input from "../../ui/shared/Input";
import LinkButton from "../../ui/shared/LinkButton";
import Button from "../../ui/shared/Button";
import { useState } from "react";
import { addVenue, createVenue } from "../../service/Venue.api";

function VenueForm() {
  const [inputData, setInputData] = useState({
    name: "",
    size: 0,
    sport_type_id: 0,
    description: "",
    photo: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  console.log(inputData);

  const Submit = (e) => {
    e.preventDefault();
    createVenue(inputData);
  };

  return (
    <section className="p-10">
      <div className="max-w-4xl mx-auto p-10 flex flex-col items-center gap-10 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold">Add New Venue</h1>
        <form encType="multipart/form-data" onSubmit={Submit}>
          <div className="flex flex-col max-w-4xl w-full gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Name Of The Venue"
                  id={"name"}
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <Input
                  type="number"
                  title="size"
                  id={"size"}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="category" className="text-sm md:text-base">
                Sport Type:
              </label>
              <select
                onChange={onChange}
                name="category"
                id="sport_type_id"
                className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
              >
                <option value={null}>Select</option>
                <option value="1">Football</option>
                <option value="2">Badminton</option>
                <option value="3">Ping Pong</option>
                <option value="4">Volleyball</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-sm md:text-base" htmlFor="#">
                Comment
              </label>
              <textarea
                onChange={onChange}
                name="Comment"
                id="description"
                rows="5"
                className="px-4 py-2 rounded-2xl border focus:outline-none focus:ring focus:border-[#2AD5A5]"
              ></textarea>
            </div>
            <div>
              <Input
                type="file"
                title={"image"}
                id={"photo"}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <LinkButton toPage="/" customClass={"md:w-[150px] text-center"}>
              Cancel
            </LinkButton>
            <Button type={'submit'} customClass="md:w-[150px]">
              Add Venue
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VenueForm;
