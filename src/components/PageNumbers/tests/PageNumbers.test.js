import React from "react";
import ReactDOM from "react-dom";
import PageNumbers from "../PageNumbers";

it("PageNumbers renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<PageNumbers
			peopleCount={99}
			cb={()=>{}}
			currentPage={2}
		/>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
