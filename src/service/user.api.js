import axios from "axios";

export const getUser = async () => {
  try {
    const res = await axios.get("https://api.tarang.test/api/user-data", {
      headers: { "content-type": "application/json" },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
