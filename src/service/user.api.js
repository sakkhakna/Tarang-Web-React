import axios from "axios";

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;

export const getUser = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/user-data", {
      headers: {
        Accept: "application/json",
        Referer: "https://tarang.site",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signOut = async () => {
  try {
    const res = await axios.post("https://api.tarang.site/logout", {
      headers: {
        Accept: "application/json",
        Referer: "https://tarang.site",
      },
    });
    console.log(res.status);
    return res.status;
  } catch (error) {
    console.log(error);
    return null;
  }
};
