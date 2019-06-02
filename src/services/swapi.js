const APIBase = "https://swapi.co/api/";

const swapi = () => {
	const emptyResultHandler = data => {
		if (data.results.length === 0) {
			data.results.push({
				name: "Sorry no results returned",
				height: "",
				mass: "",
				hair_color: "",
				skin_color: "",
				eye_color: "",
				birth_year: "",
				gender: "",
				isNoResult: true
			});
		}
		return data;
	};
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
			let response = await fetch(
				`${APIBase}people/?search=${searchWords}&page=${page}&format=json`
			);
			let data = await response.json();
			data = emptyResultHandler(data);
			return data;
		}
	};
};

export default swapi();
