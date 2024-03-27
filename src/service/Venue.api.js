import axios from "axios";

// export const addVenue = async (inputdata) => {
//   const options = {
//     method: "POST",
//     url: "https://api.tarang.site/api/venues",
//     headers: {
//       Accept: "application/json",
//     },
//     data: { ...inputdata },
//   };
//   try {
//     const { data } = await axios.request(options);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

export const createVenue = async (venue) => {
  console.log(venue);
  try {
    const res = await axios.post("https://api.tarang.site/api/venues", venue, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getVenues = async () => {
  try {
    const response = await axios.get("https://api.tarang.site/api/venues", {
    headers: { "content-type": "multipart/form-data" },
  });
  const data = response.data
  console.log(data);
  return data;
  } catch(error) {
    console.log(error);
    return null
  }
};

export const showSingleVenue = async (id) => {
  try {
    const response = await axios.get(`https://api.tarang.site/api/venues/${id}`, {
    headers: { "content-type": "application/json" },
  });
  const data = response.data
  console.log(data);
  return data;
  } catch(error) {
    console.log(error);
    return null
  }
};

export const deleteVenue = async (id) => {
  try {
    const response = await axios.delete(`https://api.tarang.site/api/venues/${id}`,{
      headers: { "content-type": "application/json", Accept: "application/json" },
    });
    console.log(response.status);
    return response;
  } catch(error){
    console.log(error);
    return null
  }
}

export const updateVenue = async (id , venue) => {
  try {
    const response = await axios.put(`https://api.tarang.site/api/venues/${id}`, venue,{
      headers : {
        'Content-Type': 'multipart/form-data',Accept: 'application/json'
      },
    })
    const data = response.data
    console.log(data);
    return data;
  } catch(error) {
    console.log(error);
    return null
  }
}
