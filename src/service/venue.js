import axios from "axios";

export const createVenue = async (venue) => {
  const options = {
    method: "POST",
    url: "https://api.tarang.site/api/venues",
    headers: {
      Accept: "application/json",
    },
    data: { ...venue },
  };
  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const getSportType = async () => {
  const options = {
    method: "GET",
    url: "https://api.tarang.site/api/sport-types",
    headers: { Accept: "application/json" },
  };
  try {
    const { data } = await axios.request(options);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
