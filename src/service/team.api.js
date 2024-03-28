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

export const createTeam = async (team) => {
  try {
    const { status, data } = await axios.post(
      "https://api.tarang.site/api/teams",
      team,
      {
        headers: {
          "content-type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    return null;
  }
};
