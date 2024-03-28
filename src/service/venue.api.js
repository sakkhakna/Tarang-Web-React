import axios from "axios";

export const createVenue = async (venue) => {
  try {
    const res = await axios.post("https://api.tarang.site/api/venues", venue, {
      headers: { "content-type": "multipart/form-data" },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getVenues = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/venues", {
      headers: { "content-type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const showSingleVenue = async (id) => {
  try {
    const res = await axios.get(`https://api.tarang.site/api/venues/${id}`, {
      headers: { "content-type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
