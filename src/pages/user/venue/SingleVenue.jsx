import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { showSingleVenue } from "../../../service/venue.api";
import { IoMdCheckmark } from "react-icons/io";
import { GiTennisCourt } from "react-icons/gi";
import Button from "../../../ui/shared/Button";
import Modal from "../../../ui/shared/Modal";
import ReservationForm from "../../user/ReservationForm";

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
          <ReservationForm
            venueId={venueId}
            sportTypeId={data.sportTypes.id}
            handleModal={handleModal}
          />
        </Modal>
      )}
      {!isLoading && data && (
        <div className="max-w-7xl flex gap-4 xl:gap-10 p-4 xl:px-0 xl:py-10">
          <div className="flex flex-col gap-4 xl:gap-10 w-full">
            <div className="flex justify-between items-center gap-4 bg-white p-4 md:p-10">
              <div>
                <h2>{data.sportTypes.name}</h2>
                <h1 className="text-2xl md:text-4xl font-bold">{data.name}</h1>
              </div>
              <div>
                <Button onClick={() => handleModal(!openModal)}>
                  Reserve Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-10">
              <div className="w-full xl:w-1/2">
                <div className="flex flex-col bg-white justify-center p-4 md:p-10 gap-10">
                  <h1 className="font-bold text-2xl">
                    Description and details
                  </h1>
                  <div className="flex flex-col gap-4 text-2xl">
                    <div className="flex gap-4 justify-center items-center">
                      <GiTennisCourt />
                      <h1 className="font-bold text-2xl text-blue-500">
                        {data.size} Players
                      </h1>
                    </div>
                    <div className="text-sm md:text-base">
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="flex flex-col gap-10 bg-white p-4 md:p-10">
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
          </div>
        </div>
      )}
    </>
  );
}

export default SingleVenuePage;
