import axios from "axios";

export const createReservation = async (reservation) => {
  try {
    const res = await axios.post(
      "https://api.tarang.test/api/reservation",
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

export const getReservation = async () => {
  try {
    const res = await axios.get("https://api.tarang.test/api/reservation", {
      headers: { Accept: "application/json" },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
