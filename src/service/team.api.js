import axios from "axios";

export const getTeam = async () => {
  try {
    const res = await axios.get("http://api.tarang.test/api/teams", {
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
      "http://api.tarang.test/api/teams",
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
