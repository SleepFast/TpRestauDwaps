import React from "react";
import PropTypes from "prop-types";
import styles from "./PrivateModify.module.scss";
import { MealListContext } from "./../../../context/MealListProvider";
import { useContext, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PrivateModify = () => {
	const { id } = useParams();

  const navigate = useNavigate();

	const { meals, updateMeal } = useContext(MealListContext);

	let currentMeal;

	if (meals) {
    currentMeal = meals.find((meal) => meal.id == id);

		const [state, dispatch] = useReducer(todosReducer, {
			mealName: currentMeal.name,
			mealOrigin: currentMeal.cuisine,
			mealCategory: currentMeal.mealType,
		});

		function todosReducer(currentState, action) {
			switch (action.type) {
				case "name":
					return { ...currentState, mealName: action.payload };
				case "origin":
					return { ...currentState, mealOrigin: action.payload };
				case "category":
					return { ...currentState, mealCategory: action.payload };
				default:
					console.error("Action inconnue");
			}
		}

		function editMeal() {
			let editedMeal = {};
			editedMeal = currentMeal;
			editedMeal.name = state.mealName;
			editedMeal.cuisine = state.mealOrigin;
			editedMeal.mealType = state.mealCategory;
			updateMeal(editedMeal);
			navigate("/private/liste-des-plats");
		}

		if (currentMeal) {
			return (
				<form
					className={styles.PrivateModify}
					onSubmit={(e) => {
						e.preventDefault();
						editMeal();
					}}
				>
					<h2>
						MODIFIER LE PLAT : <span>{currentMeal.name}</span>
					</h2>
					<img src={currentMeal.image} />
					<div>
						<label htmlFor="name">Nom du plat :</label>
						<input
							id="name"
							name="name"
							type="text"
							onChange={(e) =>
								dispatch({
									type: "name",
									payload: e.target.value,
								})
							}
							value={state.mealName}
						/>
					</div>

					<div>
						<label htmlFor="origin">Origine du plat :</label>
						<input
							id="origin"
							name="origin"
							type="text"
							onChange={(e) =>
								dispatch({
									type: "origin",
									payload: e.target.value,
								})
							}
							value={state.mealOrigin}
						/>
					</div>

					<div>
						<label htmlFor="category">Catégorie du plat :</label>
						<input
							id="category"
							name="category"
							type="text"
							onChange={(e) =>
								dispatch({
									type: "category",
									payload: e.target.value,
								})
							}
							value={state.mealCategory}
						/>
					</div>

					<button type="submit">Modifier</button>
				</form>
			);
		}
	}
};

export default PrivateModify;
