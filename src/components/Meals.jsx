import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  useEffect(() => {
    async function fetchMeal() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      console.log(meals);
      setLoadedMeals(meals);
    }
    fetchMeal();
  }, []);

  const [loadedMeals, setLoadedMeals] = useState([]);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} mealItem={meal} />
      ))}
    </ul>
  );
}
