import { useState } from 'react';
import { createContext } from 'react';
import { useFetchData } from '../hooks';
import { useEffect } from 'react';

export const MealListContext = createContext()

export default function MealListProvider({ children }) {
    const { data } = useFetchData("https://dummyjson.com/recipes");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
      setMeals(data)
    }, [data]);

    return <MealListContext.Provider value={ { meals } }>{ children }</MealListContext.Provider>
}