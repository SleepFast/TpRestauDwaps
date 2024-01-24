import styles from "./MealCard.module.scss";
import { UserOrderContext } from "../../context/UserOrderProvider";
import { useContext } from "react";

const MealCard = ({ meal }) => {
  const { addMealToOrder } = useContext(UserOrderContext)

	return (
		<div className={styles.MealCard}>
			<img src={meal.image} alt="" />
			<strong>{meal.name}</strong>
			{meal.ingredients.length > 1
				? meal.ingredients.map((ingredient, index) => {
						if (index > 0) {
							return " / " + ingredient;
						} else {
							return ingredient;
						}
				  })
				: meal.ingredient}
			<button onClick={() => addMealToOrder(meal)}>Ajouter au panier</button>
		</div>
	);
};

export default MealCard;
