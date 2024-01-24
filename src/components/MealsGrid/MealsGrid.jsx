import React from "react";
import PropTypes from "prop-types";
import styles from "./MealsGrid.module.scss";
import { useContext } from "react";
import { MealListContext } from "./../../context/MealListProvider";
import MealCard from "./../MealCard/MealCard";

const MealsGrid = () => {
	const { meals } = useContext(MealListContext);

	return (
		<>
			<h2>NOTRE CARTE</h2>
			<div className={styles.MealsGrid}>
				{meals &&
					meals.map((meal) => {
						return <MealCard key={meal.id} meal={meal}></MealCard>;
					})}
			</div>
		</>
	);
};

export default MealsGrid;
