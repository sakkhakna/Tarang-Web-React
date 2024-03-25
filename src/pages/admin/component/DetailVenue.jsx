import { useQuery } from "@tanstack/react-query";
import { showSingleVenue } from "../../../service/Venue.api";
import { useParams } from "react-router-dom";
import Input from "../../../ui/shared/Input";
import LinkButton from "../../../ui/shared/LinkButton";
import Button from "../../../ui/shared/Button";
import { useState } from "react";

function DetailVenue() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["getSingleVenueKey", id],
    queryFn: () => showSingleVenue(id),
  });
  const [updateData, setUpdateData] = useState({
    name: !isLoading && data ? data.data.name : "",
  })
  const onChange = (e) => {
    e.preventDefault();
    if (e.target.id === "photo") {
      setInputData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.files[0],
      }));
    } else {
      setInputData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', inputData.photo);
    formData.append('name', inputData.name);
    formData.append('sport_type_id', inputData.sport_type_id);
    formData.append('description', inputData.description);
    formData.append('size', inputData.size);
    createVenue(formData);
  };
  return (
    <>
    {!isLoading && data && (
        <div className="max-w-4xl mx-auto p-10 flex flex-col items-center gap-10 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold">Edit The Venue</h1>
        <form encType="multipart/form-data" onSubmit={Submit} className="flex flex-col gap-10 items-center w-full">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Name Of The Venue"
                  id={"name"}
                  value={updateData.name}
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <Input
                  type="number"
                  title="size"
                  id={"size"}
                  value={data.data.size}
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
                value={data.data.id}
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
                value={data.data.description}
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
            <LinkButton toPage="/" customClass={"md:w-[150px] bg-[#ff0000] text-center"}>
              Delete
            </LinkButton>
            <Button type={"submit"} customClass="md:w-[150px]">
              Save 
            </Button>
          </div>
        </form>
      </div>
    )}
    
    </>
  );
}

export default DetailVenue;
