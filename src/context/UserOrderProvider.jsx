import { useState } from "react";
import { createContext, useEffect } from "react";

export const UserOrderContext = createContext();

export default function MealListProvider({ children }) {
	const [order, setOrderState] = useState([]);
  const [customer, setCustomerState] = useState();

  function addMealToOrder(meal) {
    setOrderState(order.concat(meal))
  }

  function removeFromOrder(meal) {
    let seenMeal
    setOrderState(order.filter((o) => {
      if (seenMeal) {
        return true
      }
      seenMeal = (meal.id == o.id)
      return !seenMeal
    }))
  }

  function cleanOrderedCustomer() {
    setCustomerState()
    setOrderState([])
  }

  function addCustomer(currentCustomer) {
    setCustomerState(currentCustomer)
  }

	return (
		<UserOrderContext.Provider
			value={{ order, addMealToOrder, removeFromOrder, customer, addCustomer, cleanOrderedCustomer }}
		>
			{children}
		</UserOrderContext.Provider>
	);
}
