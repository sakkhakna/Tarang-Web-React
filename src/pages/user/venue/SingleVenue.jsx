import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { showSingleVenue } from "../../../service/Venue.api";
import Button from "../../../ui/shared/Button";
import Modal from "../../../ui/shared/Modal";
import Reservation from "../../user/ReservationForm";
import { IoMdCheckmark } from "react-icons/io";
import { GiTennisCourt } from "react-icons/gi";
import { useParams } from "react-router-dom";
// import Input from "../../../ui/shared/Input";
// import { FaTelegramPlane } from "react-icons/fa";

function SingleVenuePage() {
  const { venueId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (state) => {
    setOpenModal(state);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["showSingleVenueKey", venueId],
    queryFn: () => showSingleVenue(venueId),
  });
  return (
    <>
      {openModal && (
        <Modal handleModal={handleModal}>
          <Reservation venueId={venueId} handleModal={handleModal} />
        </Modal>
      )}
      {!isLoading && data && (
        <div className="max-w-7xl flex gap-4 xl:gap-10 p-4 xl:px-0 xl:py-10">
          <div className="flex flex-col gap-4 xl:gap-10 w-full">
            <div className="flex justify-between items-center gap-4 bg-white p-4 md:p-10">
              <div>
                <h2>{data.data.sportTypes.name}</h2>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {data.data.name}
                </h1>
              </div>
              <div>
                <Button onClick={() => handleModal(!openModal)}>
                  Reserve Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-10">
              <div className="flex flex-col bg-white justify-center p-4 md:p-10 gap-10 w-full xl:w-1/2">
                <h1 className="font-bold text-2xl">Description and details</h1>
                <div className="flex flex-col gap-4 text-2xl">
                  <div className="flex gap-4 justify-center items-center">
                    <GiTennisCourt />
                    <h1 className="font-bold text-2xl text-blue-500">
                      {data.data.size} Players
                    </h1>
                  </div>
                  <div className="text-sm md:text-base">
                    <p>{data.data.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 bg-white p-4 md:p-10 w-full xl:w-1/2">
                <h1 className="font-bold text-2xl">Amenities</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex gap-2">
                    <IoMdCheckmark className="w-[20px] h-[20px]" />
                    <h1 className="text-sm md:text-base">Parking</h1>
                  </div>
                  <div className="flex gap-2">
                    <IoMdCheckmark className="w-[20px] h-[20px]" />
                    <h1 className="text-sm md:text-base">Drinking Water</h1>
                  </div>
                  <div className="flex gap-2">
                    <IoMdCheckmark className="w-[20px] h-[20px]" />
                    <h1 className="text-sm md:text-base">First Aid</h1>
                  </div>
                  <div className="flex gap-2">
                    <IoMdCheckmark className="w-[20px] h-[20px]" />
                    <h1 className="text-sm md:text-base">Rest Room</h1>
                  </div>
                  <div className="flex gap-2">
                    <IoMdCheckmark className="w-[20px] h-[20px]" />
                    <h1 className="text-sm md:text-base">Change Room</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 w-1/3">
        <Button customClass="w-full">Book</Button>
        <div className="w-full p-10 flex flex-col gap-10 bg-white">
          <h1 className="text-xl font-bold">Contact Manager</h1>
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <Input
                customClass="w-[300px]"
                type="text"
                placeholder="Enter Your Name"
                title="Name :"
              />
              <Input
                customClass="w-[300px]"
                type="email"
                placeholder="Enter Your Email"
                title="Email :"
              />
              <Input
                customClass="w-[300px]"
                type="text"
                placeholder="Enter Your Phone Number"
                title="Phone :"
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="#">Message :</label>
                <textarea
                  className="border-2 p-4 rounded-xl"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <Button customClass="w-full flex justify-center gap-4 md:w-full">
                <FaTelegramPlane className="w-[20px] h-[20px]" />
                <h1>Sent Message</h1>
              </Button>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      )}
    </>
  );
}

export default SingleVenuePage;
