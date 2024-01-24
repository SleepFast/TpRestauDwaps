import React from "react";
import PropTypes from "prop-types";
import styles from "./MealCell.module.scss";
import { Link } from "react-router-dom";

const MealCell = ({ meal, isCommandePage }) => {

	return (
		<tr>
			<td>
				<Link to={`/private/modifier/${meal.id}`}>{meal.name}</Link>
			</td>
			<td>{meal.cuisine}</td>
			<td>
				{meal.mealType.length > 1 ? meal.mealType.map((type, index) => {
							if (index > 0) {
								return " / " + type;
							} else {
								return type;
							}
					  })
					: meal.mealType}
			</td>
			{isCommandePage && (
				<td>
					<button onClick={() => isCommandePage(meal)}>
						Supprimer
					</button>
				</td>
			)}
		</tr>
	);
};

export default MealCell;
