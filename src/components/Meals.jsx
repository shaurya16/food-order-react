import { useEffect, useState } from "react";

export default function Meals() {
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();

      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  const [loadedMeals, setLoadedMeals] = useState([]);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
