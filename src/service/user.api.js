import axios from "axios";

// export const getUser = async () => {
// 	const options = {
// 		method: "GET",
// 		url: "https://api.tarang.site/api/user-data",
// 		headers: { Accept: "application/json" },
// 	};
// 	try {
// 		const { data } = await axios.request(options);
// 		console.log(data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

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
