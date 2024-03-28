function ReservationCard({ reservation }) {
  console.log(reservation);
  return (
    <div className="flex flex-col p-4 md:p-10 border bg-white border-gray-200 shadow">
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <h1 className="font-bold">Play Date: {reservation.date}</h1>
          <p className="font-semibold">{reservation.venue.name}</p>
          <p className="font-semibold">Type:</p>
          <p className="font-semibold">
            Time: {reservation.start_time} - {reservation.end_time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
