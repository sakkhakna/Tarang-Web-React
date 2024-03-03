import Button from "../ui/shared/Button";
import Input from "../ui/shared/Input";

function Profile() {
	return (
		<div className="mt-[120px] w-full">
			<div className="flex gap-10">
				<div className="w-1/2 flex flex-col rounded-xl p-6 gap-4 ">
					<div className="w-full flex justify-between">
						<h1 className="font-bold text-2xl">Profile</h1>
						<Button onClick={null} customClass="bg-[#F55D5D]">
							Logout
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<div className="bg-gray-500 w-24 h-24 rounded-full"></div>
						<p className="font-bold text-2xl">Sou Sodara</p>
					</div>
					<div>
						<Input value="0123456789" disabled />
						<Input value="sousodara168@gmail.com" disabled />
						<Input value="11/12/2013" disabled />
					</div>
					<div className="flex gap-2">
						<Button customClass="w-full">Update Account</Button>
						<Button customClass="w-full bg-[#F55D5D]">Delete Account</Button>
					</div>
				</div>
				<div className="w-1/2 flex flex-col rounded-xl p-6 gap-4 bg-red-500">
					<h1 className="text-2xl font-bold">Booking History</h1>
					<div className="w-full flex border border-gray-200 shadow rounded-xl">
						<div className="w-1/2 h-36 bg-[#EAEAEA] rounded-xl"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
