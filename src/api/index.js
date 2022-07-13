const fetchCats = async ({ limit = 30, page = 1 } = { limit: 30, page: 1 }) => {
	const uri = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Desc`;
	const resp = await fetch(uri);
	const data = await resp.json();

	return data;
};

export default {
	fetchCats,
};
