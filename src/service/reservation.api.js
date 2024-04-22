import axios from "axios";

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;

export const createReservation = async (reservation) => {
  try {
    const res = await axios.post(
      "https://api.tarang.site/api/reservation",
      reservation,
      {
        headers: {
          "content-type": "multipart/form-data",
          Accept: "application/json",
          Referer: "https://tarang.site",
        },
      },
    );
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getReservation = async () => {
  try {
    const res = await axios.get("https://api.tarang.site/api/reservation", {
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
