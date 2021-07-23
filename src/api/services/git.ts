import axios from "axios";

interface Lorem {
	id: string;
	author: string;
	download_url: string;
}

export const fetchLorem = async (): Promise<Lorem[]> => {
	try {
		const response = await axios.get("https://picsum.photos/v2/list");
		return response.data;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
