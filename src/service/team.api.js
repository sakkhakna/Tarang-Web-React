import axios from "axios";

export const getTeam = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/teams", {
      headers: { Accept: "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
