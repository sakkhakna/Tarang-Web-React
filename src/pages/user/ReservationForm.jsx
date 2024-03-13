import Input from "../../ui/shared/Input";
import Button from "../../ui/shared/Button";

function ReservationForm() {
	return (
		<div className="max-w-2xl mx-auto mt-[138px] my-10 bg-white p-10 rounded-lg">
			<h1 className="text-2xl font-bold text-center mb-4">
				Venue Reservation Form
			</h1>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex flex-col">
					<label htmlFor="venue_type" className="text-sm md:text-base">
						Venue Type
					</label>
					<select
						name="venue_type"
						id="venue_type"
						className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
					>
						<option value="" hidden></option>
						<option value="football">Football</option>
						<option value="badminton">Badminton</option>
						<option value="pingpong">Ping Pong</option>
						<option value="volleyball">Volleyball</option>
					</select>
				</div>
				<Input id="Name" type="text" title="Name"></Input>
				<div className="flex justify-between gap-2">
					<Input id="Date" type="date" title="Date"></Input>
					<Input id="startTime" type="time" title="Start Time"></Input>
					<Input id="endTime" type="time" title="End Time"></Input>
				</div>
				<Input id="phoneNumber" type="tel" title="Phone Number"></Input>
				<div className="flex flex-col gap-2">
					<label htmlFor="optional">Optional</label>
					<div className="flex gap-4">
						<div className="flex gap-1">
							<input type="radio" id="findTeam" />
							<label htmlFor="findTeam">Find a team to play againist</label>
						</div>
						<div className="flex gap-1">
							<input type="radio" id="findMember" />
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
						<option value="" hidden></option>
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
			</div>
			<Button customClass="flex w-2/6 mx-auto justify-center mt-4">
				Submit
			</Button>
		</div>
		// <div className="max-w-4xl mx-auto mt-[98px]">
		//   <div className="bg-[#EAEAEA] h-52 mt-[150px]">Banner</div>
		//   <div className="w-full p-10 space-y-5">
		//     <h1 className="text-4xl font-bold text-center">
		//       Court Reservation Form
		//     </h1>
		//     <p className="text-center">Please complete the form below</p>
		//     <div className="flex w-full gap-4">
		//       {/* <div className="flex flex-col w-full">
		// 				<label htmlFor="name" className="text-sm md:text-base">
		// 					Name:
		// 				</label>
		// 				<input
		// 					id="name"
		// 					type="text"
		// 					className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		// 				/>
		// 			</div> */}
		//       <div className="w-full">
		//         <Input id="name" type="text" title="Name" />
		//       </div>
		//       <div className="flex flex-col w-full gap-2">
		//         <label htmlFor="category" className="text-sm md:text-base">
		//           Category:
		//         </label>
		//         <select
		//           name="category"
		//           id="category"
		//           className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//         >
		//           <option value="Football">Football</option>
		//           <option value="Badminton">Badminton</option>
		//           <option value="Ping Pong">Ping Pong</option>
		//           <option value="Volleyball">Volleyball</option>
		//         </select>
		//       </div>
		//     </div>
		//     <div className="flex flex-col">
		//       <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//         Name of The Court:
		//       </label>
		//       <input
		//         type="text"
		//         className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//       />
		//     </div>
		//     <div className="w-full flex gap-4">
		//       <div className="flex flex-col w-full">
		//         <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//           Date:
		//         </label>
		//         <input
		//           type="date"
		//           className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//         />
		//       </div>
		//       <div className="flex flex-col w-full">
		//         <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//           Time:
		//         </label>
		//         <div className="w-full flex items-center">
		//           <input
		//             id="startTime"
		//             type="time"
		//             className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//           />
		//           <span className="p-2">to</span>
		//           <input
		//             id="endTime"
		//             type="time"
		//             className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//           />
		//         </div>
		//       </div>
		//     </div>
		//     <div className="flex flex-col w-full">
		//       <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//         Type of Your Reservation:
		//       </label>
		//       <div className="w-full flex gap-4">
		//         <input
		//           type="button"
		//           value="I have monthly subscription"
		//           className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
		//           onChange={null}
		//         />
		//         <input
		//           type="radio"
		//           value="One time rental"
		//           className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
		//           onClick={null}
		//         />
		//       </div>
		//     </div>
		//     <div className="flex w-full gap-4">
		//       <div className="flex flex-col w-full">
		//         <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//           Contact:
		//         </label>
		//         <input type="tel" className="rounded-xl w-full px-4 py-2 border" />
		//       </div>
		//       <div className="flex flex-col w-full">
		//         <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//           Estimated Attendances:
		//         </label>
		//         <input
		//           type="number"
		//           className="rounded-xl w-full px-4 py-2 border"
		//         />
		//       </div>
		//     </div>
		//     <div className="flex flex-col">
		//       <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//         Optional:
		//       </label>
		//       <div className="w-full flex gap-4">
		//         <input
		//           type="button"
		//           value="Find a team to play againist"
		//           className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
		//           onClick={null}
		//         />
		//         <input
		//           type="button"
		//           value="Find team member"
		//           className="rounded-xl w-full px-4 py-2 border bg-white focus:outline-none focus:border-[#2AD5A5]"
		//           onClick={null}
		//         />
		//       </div>
		//     </div>
		//     <div className="flex flex-col">
		//       <label htmlFor="nameOfCourt" className="text-sm md:text-base">
		//         Your team:
		//       </label>
		//       <select
		//         name="team"
		//         id="team"
		//         className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:border-[#2AD5A5]"
		//       >
		//         <option value="FC Barcelona">FC Barcelona</option>
		//         <option value="Dara CoCo">Dara CoCo</option>
		//       </select>
		//     </div>
		//     <Button customClass="w-full">Submit</Button>
		//   </div>
		// </div>
	);
}

export default ReservationForm;
