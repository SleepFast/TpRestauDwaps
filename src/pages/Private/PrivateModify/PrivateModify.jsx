import React from "react";
import PropTypes from "prop-types";
import styles from "./PrivateModify.module.scss";
import { MealListContext } from "./../../../context/MealListProvider";
import { useContext, useReducer, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PrivateModify = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const { meals, updateMeal } = useContext(MealListContext);

	const inputCategory = useRef();

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
			setFirstTimeState(true);
			navigate("/private/liste-des-plats");
		}

		const [firstTime, setFirstTimeState] = useState(true);

		function handleAddInput(currentType, input, currentArray) {
			if (firstTime) {
				if (input.current?.value) {
					dispatch({
						type: currentType,
						payload: [input.current?.value],
					});
					input.current.value = "";
					setFirstTimeState(false);
				}
			} else {
				if (input.current?.value) {
					dispatch({
						type: currentType,
						payload: currentArray.concat(input.current?.value),
					});
					input.current.value = "";
				}
				console.log(`PAT`);
			}
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
					<div className={styles.PrivateModifyCard}>
						<img src={currentMeal.image} />
						<div className={styles.PrivateModifyCardContent}>
							<div>
								<label htmlFor="name">Nom du plat</label>
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
								<label htmlFor="origin">Origine du plat</label>
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
								<label htmlFor="category">Catégorie du plat</label>
								<input
									ref={inputCategory}
									id="category"
									name="category"
									type="text"
									placeholder={state.mealCategory}
								/>
								<button
									type="button"
									onClick={() =>
										handleAddInput(
											"category",
											inputCategory,
											state.mealCategory
										)
									}
									className={styles.AddButton}
								>
									Ajouter cette catégorie
								</button>
							</div>
							<button type="submit" className={styles.SubmitButton}>
								Modifier
								<div className={styles.icon}>
								<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 0h24v24H0z" fill="none"></path>
										<path
											d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</button>
						</div>
					</div>
				</form>
			);
		}
	}
};

export default PrivateModify;
