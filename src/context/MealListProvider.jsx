import { useState } from "react";
import { createContext } from "react";
import { useFetchData } from "../hooks";
import { useEffect } from "react";

export const MealListContext = createContext();

export default function MealListProvider({ children }) {
	const { data } = useFetchData("https://dummyjson.com/recipes");
	const [meals, setMeals] = useState([]);
	const [memoMeals, setMemoMeals] = useState([]);
	const [selected, setSelectedState] = useState();
	const [changed, setChangedState] = useState(false);

	function updateMeal(editedMeal) {
		let newMealList = meals.filter((meal) => meal.id !== editedMeal.id);
		newMealList.push(editedMeal);
		setMeals(newMealList);
		setMemoMeals(meals);
		setChangedState(!changed)
	}

	useEffect(() => {
		setMeals(data.recipes);
		setMemoMeals(data.recipes);
	}, [data]);

	useEffect(() => {
		if (selected == "asc") {
			filterMeals(true);
		} else if (selected == "desc") {
			filterMeals(false);
		}
	}, [changed]);

	function filterMeals(isAsc) {
		let MealsOrdered;
		let MemoMeals;
		if (isAsc) {
			MealsOrdered = meals.toSorted(function (ca, cb) {
				return ca.name.localeCompare(cb.name);
			});
			MemoMeals = memoMeals.toSorted(function (ca, cb) {
				return ca.name.localeCompare(cb.name);
			});
			setSelectedState("asc");
		} else {
			MealsOrdered = meals.toSorted(function (ca, cb) {
				return cb.name.localeCompare(ca.name);
			});
			MemoMeals = memoMeals.toSorted(function (ca, cb) {
				return cb.name.localeCompare(ca.name);
			});
			setSelectedState("desc");
		}
		setMeals(MealsOrdered);
		setMemoMeals(MemoMeals);
	}

  function addMeal(currentMeal) {
    setMeals([...meals, currentMeal])
    setMemoMeals(meals)
		setChangedState(!changed)
  }

	return (
		<MealListContext.Provider
			value={{ meals, updateMeal, filterMeals, selected, addMeal }}
		>
			{children}
		</MealListContext.Provider>
	);
}
