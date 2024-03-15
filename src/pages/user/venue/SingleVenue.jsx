import React from "react";
import Button from "../../../ui/shared/Button";
import { IoMdCheckmark } from "react-icons/io";
import { GiTennisCourt } from "react-icons/gi";
import Input from "../../../ui/shared/Input";
import { FaTelegramPlane } from "react-icons/fa";

function SingleVenuePage() {
	return (
		<div>
			<div className="bg-[#f5f5f5] max-w-7xl flex gap-6 p-10 xl:px-0">
				<div className="flex flex-col gap-6 w-[70%]">
					<div className="flex flex-col gap-4 bg-white p-10 rounded-lg shadow">
						<h1 className="text-gray-300">type of venue</h1>
						<h1 className="text-2xl md:text-4xl font-bold">
							Name of the Venue
						</h1>
						<div className="bg-gray-800 w-full p-2">
							<h1 className="text-2xl text-white">Option</h1>
						</div>
						<div className="grid grid-cols-3">
							<div className="flex gap-2 justify-center">
								<h1 className="text-xl text-gray-400 font-bold">hour</h1>
								<h1 className="text-2xl text-blue-500 font-bold">5$</h1>
							</div>
							<div className="flex gap-2 justify-center">
								<h1 className="text-xl text-gray-400 font-bold">weekly</h1>
								<h1 className="text-2xl text-blue-500 font-bold">30$</h1>
							</div>
							<div className="flex gap-2 justify-center">
								<h1 className="text-xl text-gray-400 font-bold">monthly</h1>
								<h1 className="text-2xl text-blue-500 font-bold">100$</h1>
							</div>
						</div>
					</div>

					<div className="flex flex-col bg-[#ffffff] justify-center p-10 gap-4 rounded-lg shadow">
						<h1 className="font-bold text-xl">Description and details</h1>
						<div className="flex flex-col gap-4 text-2xl">
							<div className="flex gap-4 justify-center">
								<GiTennisCourt />
								<h1 className="font-bold text-2xl text-blue-500">
									57,600 sqft
								</h1>
							</div>
							<div className="text-sm">
								<h1>Description</h1>
								<h1>Description</h1>
								<h1>Description</h1>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 bg-white p-10 rounded-lg shadow">
						<h1 className="font-bold text-xl">Amenities</h1>
						<div className="flex gap-10">
							<div className="flex gap-2">
								<IoMdCheckmark className="w-[20px] h-[20px]" />
								<h1>Parking</h1>
							</div>
							<div className="flex gap-2">
								<IoMdCheckmark className="w-[20px] h-[20px]" />
								<h1>Drinking Water</h1>
							</div>
							<div className="flex gap-2">
								<IoMdCheckmark className="w-[20px] h-[20px]" />
								<h1>First Aid</h1>
							</div>
							<div className="flex gap-2">
								<IoMdCheckmark className="w-[20px] h-[20px]" />
								<h1>Rest Room</h1>
							</div>
							<div className="flex gap-2">
								<IoMdCheckmark className="w-[20px] h-[20px]" />
								<h1>Change Room</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 w-[30%]">
					<Button customClass="md:w-full text-white">Book</Button>
					<div className="w-full p-10 flex flex-col gap-4 bg-white rounded-lg shadow">
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
								<Button customClass="md:w-full flex justify-center gap-3 text-white items-center">
									<FaTelegramPlane className="w-[20px] h-[20px]" />
									<h1>Sent Message</h1>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleVenuePage;
