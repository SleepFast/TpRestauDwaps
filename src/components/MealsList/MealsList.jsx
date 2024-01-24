import styles from "./MealsList.module.scss";
import MealCell from "./../MealCell/MealCell";
import { useContext } from "react";
import { MealListContext } from "./../../context/MealListProvider";

const MealsList = () => {
	const { meals, filterMeals, selected } = useContext(MealListContext);

	return (
		<div className={styles.MealsList}>
			<h2>LISTE DES PLATS</h2>
			<div className={styles.MealsListCTA}>
				<button
					className={selected == "asc" ? styles.Selected : ""}
					onClick={() => {
						filterMeals(true);
					}}
				>
					ordoner par nom ascendant
				</button>
				<button
					className={selected == "desc" ? styles.Selected : ""}
					onClick={() => {
						filterMeals(false);
					}}
				>
					ordoner par nom descendant
				</button>
			</div>

			<table className={styles.MealsListTable}>
				<thead>
					<tr>
						<th width="50%">Nom du plat</th>
						<th>Pays d'origine de la spécialité</th>
						<th>Catégorie</th>
					</tr>
				</thead>
				<tbody>
					{meals &&
						meals.map((meal) => {
							return (
								<MealCell key={meal.id} meal={meal}></MealCell>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default MealsList;
