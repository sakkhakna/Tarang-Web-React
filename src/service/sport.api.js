import axios from "axios";

export const getSportTypes = async () => {
	try {
		const res = await axios.get("https://api.tarang.site/api/sport-types", {
			headers: { Accept: "application/json" },
		});
		return res.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const createSportType = async (sport) => {
	try {
		const res = await axios.post(
			"https://api.tarang.site/api/sport-types",
			sport,
			{
				headers: { Accept: "application/json" },
			}
		);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

export const updateSportType = async (sportId) => {
	try {
		const res = await axios.put(
			`https://api.tarang.site/api/sport-types/${sportId}`,
			{
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				data: { name: "string" },
			}
		);
		console.log(res);
	} catch (error) {
		console.error(error);
	}
};

export const deleteSportType = async (sportId) => {
	try {
		const res = await axios.delete(
			`https://api.tarang.site/api/sport-types/${sportId}`,
			{
				headers: { Accept: "application/json" },
			}
		);
		console.log(res);
	} catch (error) {
		console.error(error);
	}
};
