import Input from "../../../ui/shared/Input";
import Button from "../../../ui/shared/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteVenue } from "../../../service/Venue.api";
import { updateVenue } from "../../../service/Venue.api";

function DetailVenue({venueData}) {
  const [updateData, setUpdateData] = useState({
    name: venueData.name,
    size: venueData.size,
    sportType : venueData.sportTypes.id,
    description: venueData.description ,
    photo: "",
  });
  console.log(updateData);
  const  navigation = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(venueData.id);
    const response = await deleteVenue(venueData.id);
    if (response.status=== 204) {
      alert("Succesfully Deleted!")
    }
  }
  const onChange = (e) => {
    e.preventDefault();
    if (e.target.id === "photo") {
      setUpdateData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.files[0],
      }));
    } else {
      setUpdateData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", updateData.photo);
    formData.append("name", updateData.name);
    formData.append("sport_type_id", updateData.sportType);
    formData.append("description", updateData.description);
    formData.append("size", updateData.size);
    await updateVenue(venueData.id, formData);
    // try {
    //   await updateVenue(venueData.id , formData);
    //   // Optionally navigate after successful update
    //   navigation('/venue');
    // } catch (error) {
    //   console.error("Error updating venue:", error);
    //   // Handle error here (e.g., show an error message to the user)
    // }
  };


  return (
    <>
        <div className="max-w-4xl mx-auto p-10 flex flex-col items-center gap-10 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold">Edit The Venue</h1>
        <form encType="multipart/form-data" onSubmit={Submit} className="flex flex-col gap-10 items-center w-full">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="text"
                  title="Name Of The Venue"
                  id="name"
                  value={updateData.name}
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <Input
                  type="number"
                  title="size"
                  id={"size"}
                  value={updateData.size}
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
                value={updateData.sportType}
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
                value={updateData.description}
                rows="5"
                className="px-4 py-2 rounded-2xl border focus:outline-none focus:ring focus:border-[#2AD5A5]"
              ></textarea>
            </div>
            <div>
              <Input
                type="file"
                title={"image"}
                id={"photo"}
                value={updateData.photo}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleDelete} customClass={"md:w-[150px] bg-[#ff0000] text-center"}>
              Delete
            </Button>
            <Button type={"submit"} customClass="md:w-[150px]">
              Save 
            </Button>
          </div>
        </form>
      </div>
    {/* )} */}
    
    </>
  );
}

export default DetailVenue;
