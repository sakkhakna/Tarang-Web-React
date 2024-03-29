import axios from "axios";

export const checkUserStatusLogin = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/is-login", {
      headers: { "content-type": "application/json" },
      withCredentials: true,
      withXSRFToken: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/user-data", {
      headers: { "content-type": "application/json" },
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
      headers: { "content-type": "application/json" },
      withCredentials: true,
      withXSRFToken: true,
    });
    console.log(res.status);
    return res.status;
  } catch (error) {
    console.log(error);
    return null;
  }
};
