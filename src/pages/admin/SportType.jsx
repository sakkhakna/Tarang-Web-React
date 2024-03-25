import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/shared/Button";
import {
	createSportType,
	deleteSportType,
	getSportTypes,
	updateSportType,
} from "../../service/sport.api";
import { useState } from "react";
import Modal from "../../ui/shared/Modal";
import Input from "../../ui/shared/Input";

function SportType({ actionType }) {
	const { data: sportTypeData, isLoading } = useQuery({
		queryKey: ["getSportTypesKey"],
		queryFn: getSportTypes,
	});
	const [inputData, setInputData] = useState({
		name: sportTypeData ? sportTypeData.name : "",
	});
	// const [sportTypeName, setSportTypeName] = useState(
	// 	sportTypeData && sportTypeData.data ? sportTypeData.data.name : "hello"
	// );
	console.log(sportTypeData);
	const [openModal, setOpenModal] = useState(false);
	const handleModel = (state) => {
		setOpenModal(state);
	};
	const onChange = (e) => {
		e.preventDefault();
		// setInputData((prevState) => ({
		// 	...prevState,
		// 	[e.target.id]: e.target.value,
		// }));
		setInputData(e.target.value);
	};
	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const formData = new FormData();
	// 	formData.append("name", inputData.name);
	// 	createSportType(formData);
	// };
	let onClick = null;
	switch (actionType) {
		case "handleAddSport":
			onClick = async () => {
				const formData = new FormData();
				formData.append("name", inputData);
				await createSportType(formData);
			};
			break;
		case "handleUpdateSport":
			onClick = async () => await updateSportType();
	}

	if (isLoading) {
		return <p>Loading</p>;
	}

	return (
		<>
			{openModal && (
				<Modal handleModal={handleModel}>
					<form encType="multipart/form-data" className="flex flex-col gap-4">
						<h1 className="font-bold text-2xl">New Sport Type</h1>
						<Input type="text" placeholder="New Sport" onChange={onChange} />
						<Button onClick={onClick}>Add</Button>
					</form>
				</Modal>
			)}
			<div className="p-4 md:p-10 flex flex-col gap-4 md:gap-10">
				<div className="flex flex-col xl:flex-row xl:justify-between gap-4 md:gap-10">
					<div className="flex justify-between items-center">
						<h1 className="font-bold text-4xl">Sport Type</h1>
					</div>
					<div className="flex items-center gap-4 xl:hidden">
						<input
							type="text"
							className="w-2/3 rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
							placeholder="Search"
						/>
						<Button
							onClick={() => handleModel(!openModal)}
							customClass="block xl:hidden"
						>
							Add Sport
						</Button>
					</div>
					<div className="hidden xl:flex items-center gap-4">
						<input
							type="text"
							className="rounded-xl py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
							placeholder="Search"
						/>
						<Button onClick={() => handleModel(!openModal)}>Add Sport</Button>
					</div>
				</div>
				<div className="w-full hidden md:block">
					<table className="table-fixed w-full">
						<thead className="bg-[#d9d9d9]">
							<tr className="text-left">
								<th className="p-2">Sports</th>
								<th className="p-2">Action</th>
							</tr>
						</thead>
						<tbody>
							{sportTypeData.data.map((sport, index) =>
								index % 2 === 0 ? (
									<tr key={index} className="bg-[#eaeaea]">
										<td className="p-2">
											<h1>{sport.name}</h1>
										</td>
										<td className="p-2">
											<div className="flex gap-2">
												<Button customClass="bg-blue-500 text-white">
													Edit
												</Button>
												<Button
													customClass="bg-red-500 text-white"
													onClick={() => deleteSportType(sport.id)}
												>
													Delete
												</Button>
											</div>
										</td>
									</tr>
								) : (
									<tr key={index} className="bg-[#d9d9d9]">
										<td className="p-2">
											<h1>{sport.name}</h1>
										</td>
										<td className="p-2">
											<div className="flex gap-2">
												<Button
													customClass="bg-blue-500 text-white"
													onClick={() => handleModel(!openModal)}
												>
													Edit
												</Button>
												<Button
													customClass="bg-red-500 text-white"
													onClick={() => deleteSportType(sport.id)}
												>
													Delete
												</Button>
											</div>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
				<div className="flex flex-col items-center md:hidden ">
					{sportTypeData.data.map((sport, index) => (
						<div
							key={index}
							className="flex justify-between gap-4  border border-black p-2"
						>
							<div className="font-bold flex flex-col gap-4">
								<h1>Sport</h1>
								<h1>Action</h1>
							</div>
							<div className="flex flex-col gap-4 justify-center">
								<h1>{sport.name}</h1>
								<div className="flex gap-2">
									<Button>Edit</Button>
									<Button
										customClass="bg-red-500 text-white"
										onClick={() => deleteSportType(sport.id)}
									>
										Delete
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default SportType;
