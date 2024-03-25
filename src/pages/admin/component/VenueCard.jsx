import { Link } from "react-router-dom";

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
    <Link
    to={`/venue/${data.id}`} 
    className="flex flex-col w-full bg-white border border-gray-200 shadow rounded-xl"> 
      <div className="w-full h-[150px] bg-[#eaeaea]">
        <img
          src={`https://api.tarang.site/${data.photo}`}
          alt="photo"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Name : {data.name}</h1>
        </div>
        <h1 className="text-sm font-semibold">Type : {data.sportTypes.name}</h1>
        <h1 className="font-semibold text-sm">
          Size of the Court : {data.size}
        </h1>
      </div>
      </Link > 
  );
}

export default VenueCard;
