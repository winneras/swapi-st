const APIBase = "https://swapi.co/api/";

const swapi = () => {
	return {
		getPeopleList: async page => {
			if (!page || isNaN(page)) {
				page = 1;
			}
			let response = await fetch(`${APIBase}people/?page=${page}&format=json`);
			let data = await response.json();
			return data;
		},
		getPeopleBySearch: async (searchWords, page) => {
			if (!page || isNaN(page)) {
				page = 1;
			}
			searchWords = searchWords.trim();
			let response = await fetch(`${APIBase}people/?search=${searchWords}&page=${page}&format=json`);
			let data = await response.json();
			return data;
		}
	};
};

export default swapi();
