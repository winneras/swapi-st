import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
	const [searchWords, setSearchWords] = useState("");
	const onSubmitHandler = e => {
		e.preventDefault();
		if(onSearch){
			onSearch(searchWords);
		}
	};
	const onChangeHandler = (e) => {
		setSearchWords(e.target.value);
	};
	return (
		<div className={styles.wrap}>
			<div className={styles.search}>
				<form onSubmit={onSubmitHandler} className={styles.searchForm}>
					<input
						type="text"
						className={styles.searchTerm}
						placeholder="What are you looking for?"
						onChange={onChangeHandler}
					/>
					<button type="submit" value="Submit" className={styles.searchButton}>
						Search
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
