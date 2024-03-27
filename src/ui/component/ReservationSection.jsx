import { useQuery } from "@tanstack/react-query";
import { getReservation } from "@/service/reservation.api";
import LinkButton from "../shared/LinkButton";
import Spinner from "../Spinner";
import ReservationCard from "./ReservationCard";

function ReservationSection({ title }) {
  const { data, isLoading } = useQuery({
    queryKey: ["getReservationKey"],
    queryFn: getReservation,
  });
  return (
    <section className="w-full flex flex-col gap-4 justify-center items-center border border-gray-200 bg-white shadow p-4 md:p-10 rounded-xl">
      <div className="w-full text-left">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      </div>
      <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
      {isLoading ? (
        <div className="p-10">
          <Spinner />
        </div>
      ) : !isLoading && data && data.reservations.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.reservations.map((reservation, index) => (
            <ReservationCard key={index} reservation={reservation} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 p-10">
          <h2 className="text-2xl font-bold">No Reservation</h2>
          <LinkButton toPage="/">Reserve The Venue Now</LinkButton>
        </div>
      )}
    </section>
  );
}

export default ReservationSection;
