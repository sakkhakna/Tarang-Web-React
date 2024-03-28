import axios from "axios";

export const getSportTypes = async () => {
  try {
    const res = await axios.get("http://api.tarang.test/api/sport-types", {
      headers: { Accept: "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
