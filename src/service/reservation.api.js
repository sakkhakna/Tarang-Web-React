import axios from "axios";

export const createReservation = async (reservation) => {
  try {
    const res = await axios.post(
      "https://api.tarang.site/api/reservation",
      reservation,
      {
        headers: {
          "content-type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};
