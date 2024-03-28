import axios from "axios";

export const getSportTypes = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/sport-types", {
      headers: { Accept: "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
