import React from "react";
import PropTypes from "prop-types";
import styles from "./PrivateAdd.module.scss";
import { MealListContext } from "./../../../context/MealListProvider";
import { useContext, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logger } from "sass";

const PrivateAdd = () => {
	const { meals, addMeal } = useContext(MealListContext);
	const navigate = useNavigate();

	const inputInstructions = useRef();
	const inputCategory = useRef();
	const inputIngredients = useRef();
	const inputTags = useRef();

	function handleAddInput(currentType, input, currentArray) {
		if (input.current?.value) {
			dispatch({
				type: currentType,
				payload: currentArray.concat(input.current?.value),
			});
			input.current.value = "";
		}
	}

	const [state, dispatch] = useReducer(todosReducer, {
		mealName: "",
		mealOrigin: "",
		mealCategory: [],
		mealInstructions: [],
		mealIngredients: [],
		mealTags: [],
		mealCalories: 0,
		mealPrepTimeMinutes: 0,
		mealDifficulty: "",
	});

	function todosReducer(currentState, action) {
		switch (action.type) {
			case "name":
				return { ...currentState, mealName: action.payload };
			case "origin":
				return { ...currentState, mealOrigin: action.payload };
			case "category":
				return {
					...currentState,
					mealCategory: action.payload,
				};
			case "instructions":
				return {
					...currentState,
					mealInstructions: action.payload,
				};
			case "ingredients":
				return {
					...currentState,
					mealIngredients: action.payload,
				};
			case "tags":
				return {
					...currentState,
					mealTags: action.payload,
				};
			case "caloriesPerServing":
				return {
					...currentState,
					mealCalories: action.payload,
				};
			case "prepTimeMinutes":
				return {
					...currentState,
					mealPrepTimeMinutes: action.payload,
				};
			case "difficulty":
				return {
					...currentState,
					mealDifficulty: action.payload,
				};
			case "image":
				return {
					...currentState,
					mealImage: action.payload,
				};
			default:
				console.error("Action inconnue");
		}
	}

	function createMeal() {
		let editedMeal = {};
		editedMeal.id = Math.max(...meals.map((meal) => meal.id)) + 1;
		editedMeal.image = state.mealImage;
		editedMeal.name = state.mealName;
		editedMeal.cuisine = state.mealOrigin;
		editedMeal.mealType = state.mealCategory;
		editedMeal.prepTimeMinutes = state.mealPrepTimeMinutes;
		editedMeal.difficulty = state.mealDifficulty;
		editedMeal.instructions = state.mealInstructions;
		editedMeal.ingredients = state.mealIngredients;
		editedMeal.tags = state.mealTags;
		editedMeal.caloriesPerServing = state.mealCalories;
		addMeal(editedMeal);
		navigate("/private/liste-des-plats");
	}

	return (
		<div className={styles.Container}>
			<form
				className={styles.PrivateAdd}
				onSubmit={(e) => {
					e.preventDefault();
					createMeal();
				}}
			>
				<h2>AJOUTER UN NOUVEAU PLAT</h2>
				<div>
					<label htmlFor="name">Nom du plat</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						onChange={(e) =>
							dispatch({
								type: "name",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="caloriesPerServing">
						Calories par portion :
					</label>
					<input
						id="caloriesPerServing"
						name="caloriesPerServing"
						type="number"
						required
						onChange={(e) =>
							dispatch({
								type: "caloriesPerServing",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="prepTimeMinutes">
						Temps de préparation (minutes):
					</label>
					<input
						id="prepTimeMinutes"
						name="prepTimeMinutes"
						type="number"
						required
						onChange={(e) =>
							dispatch({
								type: "caloriesPerServing",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="difficulty">Dificulté de la recette</label>
					<input
						id="difficulty"
						name="difficulty"
						type="text"
						required
						onChange={(e) =>
							dispatch({
								type: "difficulty",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="image">Lien vers une image</label>
					<input
						id="image"
						name="image"
						type="text"
						required
						onChange={(e) =>
							dispatch({
								type: "image",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="origin">Origine du plat</label>
					<input
						id="origin"
						name="origin"
						type="text"
						required
						onChange={(e) =>
							dispatch({
								type: "origin",
								payload: e.target.value,
							})
						}
					/>
				</div>

				<div>
					<label htmlFor="category">Catégorie du plat</label>
					<input
						ref={inputCategory}
						id="category"
						name="category"
						type="text"
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

				<p>
					{state.mealCategory &&
						state.mealCategory.map((category, index) =>
							index > 0 ? ", " + category : category
						)}
				</p>

				<div>
					<label htmlFor="instructions">Ajouter chaque étapes</label>
					<input
						ref={inputInstructions}
						id="instructions"
						name="instructions"
						type="text"
					/>
					<button
						type="button"
						onClick={() =>
							handleAddInput(
								"instructions",
								inputInstructions,
								state.mealInstructions
							)
						}
						className={styles.AddButton}
					>
						Ajouter cette étape
					</button>
				</div>

				<p>
					{state.mealInstructions &&
						state.mealInstructions.map((instruction, index) =>
							index > 0 ? ", " + instruction : instruction
						)}
				</p>

				<div>
					<label htmlFor="ingredients">
						Ajouter chaque ingrédient
					</label>
					<input
						ref={inputIngredients}
						id="ingredients"
						name="ingredients"
						type="text"
					/>
					<button
						type="button"
						onClick={() =>
							handleAddInput(
								"ingredients",
								inputIngredients,
								state.mealIngredients
							)
						}
						className={styles.AddButton}
					>
						Ajouter cet ingrédient
					</button>
				</div>

				<p>
					{state.mealIngredients &&
						state.mealIngredients.map((ingredient, index) =>
							index > 0 ? ", " + ingredient : ingredient
						)}
				</p>

				<div>
					<label htmlFor="tags">Ajouter chaque tag</label>
					<input
						ref={inputTags}
						id="tags"
						name="tags"
						type="text"
					/>
					<button
						type="button"
						onClick={() =>
							handleAddInput("tags", inputTags, state.mealTags)
						}
						className={styles.AddButton}
					>
						Ajouter ce tag
					</button>
				</div>

				<p>
					{state.mealTags &&
						state.mealTags.map((tag, index) =>
							index > 0 ? ", " + tag : tag
						)}
				</p>
				<button type="submit" className={styles.SubmitButton}>
					Enregistrer
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
			</form>
			<img src="/food.png" />
		</div>
	);
};

export default PrivateAdd;
