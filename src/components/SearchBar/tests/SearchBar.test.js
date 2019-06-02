import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../SearchBar";

it("SearchBar renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<SearchBar onSearch={() => {}} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
