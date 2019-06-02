import React from "react";
import styles from "./PeopleTable.module.css";

const createRow = person => {
	return (
		<tr className={styles.rowPane} key={person.url}>
			<td>{person.name}</td>
			<td>{person.height}</td>
			<td>{person.mass}</td>
			<td>{person.hair_color}</td>
			<td>{person.skin_color}</td>
			<td>{person.eye_color}</td>
			<td>{person.birth_year}</td>
			<td>{person.gender}</td>
		</tr>
	);
};

const PeopleTable = ({ people }) => {
	if (people.length < 1) {
		return <div className={styles.loadingPane}>Loading...</div>;
	} else if (people[0].isError) {
		return <div className={styles.loadingPane}>{people[0].name}</div>;
	}
	const peopleRows = people.map(createRow);

	return (
		<div className={styles.tablePane}>
			<table className={styles.peopleTable}>
				<tbody>
					<tr className={styles.rowPane}>
						<th>Name</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Hair Colour</th>
						<th>Skin Colour</th>
						<th>Eye Colour</th>
						<th>Birth Year</th>
						<th>Gender</th>
					</tr>
					{peopleRows}
				</tbody>
			</table>
		</div>
	);
};

export default PeopleTable;
