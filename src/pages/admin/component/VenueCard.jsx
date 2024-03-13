import React from 'react'

function VenueCard() {
  return (
    <div className="flex flex-col w-full bg-white border border-gray-200 shadow rounded-xl">
			<div className="w-full h-[150px] bg-[#eaeaea]">
				{/* <img src="/" alt="photo" className="w-full h-full" /> */}
			</div>
			<div className="flex flex-col p-4 gap-2">
				<div className="flex justify-between">
					<h1 className="font-bold text-xl">Name of the Court</h1>
				</div>
				<h1 className="text-sm font-semibold">Type :</h1>
				<h1 className="font-semibold text-sm">Size of the Court :</h1>
			</div>
		</div>
  )
}

export default VenueCard