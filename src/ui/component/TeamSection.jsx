import LinkButton from "../shared/LinkButton";

function TeamSection({ teamList }) {
  return (
    <section className="w-full border border-gray-200 bg-white shadow p-4 md:p-10 rounded-xl">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Team</h1>
      <div className="h-[1px] bg-[#D9D9D9]"></div>
      {/* {reservationList.length === 0 ? (
    <div className="flex flex-col justify-center items-center gap-4 p-10">
      <p className="text-xl md:text-2xl font-semibold">No Reservation</p>
      <LinkButton toPage="/">Reserve The Venue Now</LinkButton> 
    </div>
  ) : (
    <div>Hello</div>
  )} */}
      <div className="flex flex-col justify-center items-center gap-4 p-10">
        <p className="text-xl md:text-2xl font-semibold">No Team</p>
        <LinkButton toPage="/">Create Your Team Now</LinkButton>
      </div>
    </section>
  );
}

export default TeamSection;
