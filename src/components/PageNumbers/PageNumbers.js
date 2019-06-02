import React from "react";
import styles from "./PageNumbers.module.css";

const getTotalPages = count => {
	const itemPerPage = 10;
	return Math.ceil(count / itemPerPage);
};
const createPageNumbers = (count, currentPage, cb) => {
	const pagesCount = getTotalPages(count);
	let pageNumbers = [];
	for (let i = 0; i < pagesCount; i++) {
		let pageNo = i + 1;
		let isCurrent = currentPage === pageNo;
		let item = (
			<div
				key={`page${pageNo}`}
				className={isCurrent ? styles.selectedBox : styles.box}
				onClick={onClickHandler(pageNo, cb)}
			>
				<div>{pageNo}</div>
			</div>
		);
		pageNumbers.push(item);
	}
	return pageNumbers;
};

const onClickHandler = (value, cb) => {
	return () => {
		if (cb) {
			cb(value);
		}
	};
};

const PageNumbers = ({ peopleCount, currentPage, cb }) => {
	const totalPages = getTotalPages(peopleCount);
	const previousBtn = (
		<div className={styles.box} onClick={onClickHandler("previous", cb)}>
			<div>&lt;&lt;</div>
		</div>
	);
	const nextBtn = (
		<div className={styles.box} onClick={onClickHandler("next", cb)}>
			<div>&gt;&gt;</div>
		</div>
	);
	return (
		<div className={styles.pagePane}>
			{currentPage === 1 || !totalPages ? "" : previousBtn}
			{createPageNumbers(peopleCount, currentPage, cb)}
			{currentPage === totalPages || !totalPages ? "" : nextBtn}
		</div>
	);
};

export default PageNumbers;
