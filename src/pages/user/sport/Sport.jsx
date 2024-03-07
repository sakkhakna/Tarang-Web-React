import { useParams } from "react-router-dom";
import Football from "./Football";
import Badminton from "./Badminton";
import Volleyball from "./Volleyball";
import Pingpong from "./Pingpong";

function Sport() {
  const { sportType } = useParams();
  var renderSport = "";
  switch (sportType) {
    case "Football":
      renderSport = <Football />;
      break;
    case "Badminton":
      renderSport = <Badminton />;
      break;
    case "Volleyball":
      renderSport = <Volleyball />;
      break;
    case "Ping-pong":
      renderSport = <Pingpong />;
      break;
    default:
      renderSport = "";
      break;
  }
  return <div>{renderSport}</div>;
}

export default Sport;
