function VenueCard({ data }) {
  // const [data,setData] = useState();

  // useEffect(()=>{
  // 	const show = async()=>{
  // 		const venue = await showVenue(1);
  // 		setData(venue);
  // 	}
  // 	show();
  // },[data])

  // console.log(data);
  //   const { data } = useQuery("showVenues", showSingleVenue);
  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white shadow">
      <div className="h-[150px] w-full bg-[#eaeaea]">
        <img
          src={`https://api.tarang.site/${data.photo}`}
          alt="photo"
          className="h-full w-full rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Name : {data.name}</h1>
        </div>
        <h1 className="text-sm font-semibold">Type : {data.sportTypes.name}</h1>
        <h1 className="text-sm font-semibold">
          Size of the Court : {data.size}
        </h1>
      </div>
    </div>
  );
}

export default VenueCard;
