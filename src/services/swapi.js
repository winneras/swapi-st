const APIBase = "https://swapi.co/api/";

const swapi = () => {
	const createErrorResultItem = error => {
		return {
			name: error,
			height: "",
			mass: "",
			hair_color: "",
			skin_color: "",
			eye_color: "",
			birth_year: "",
			gender: "",
			isError: true
		};
	};
	const createErrorResult = msg => {
		return {
			count: 0,
			next: null,
			previous: null,
			results: [createErrorResultItem(msg)]
		};
	};
	const emptyResultHandler = data => {
		if (data.results.length === 0) {
			data.results.push(createErrorResultItem("Sorry, no result returned"));
		}
		return data;
	};
	return {
		getPeopleList: async page => {
			try {
				if (!page || isNaN(page)) {
					page = 1;
				}
				let response = await fetch(
					`${APIBase}people/?page=${page}&format=json`
				);
				let data = await response.json();
				return data;
			} catch (e) {
				return createErrorResult(e.message);
			}
		},
		getPeopleBySearch: async (searchWords, page) => {
			try {
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
			} catch (e) {
				return createErrorResult(e.message);
			}
		}
	};
};

export default swapi();
