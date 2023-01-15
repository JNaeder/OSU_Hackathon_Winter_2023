import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";

function DayTotalFile({ theMeals }) {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtien, setTotalProtien] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  useEffect(() => {
    const getData = async function () {
      if (theMeals) {
        const meals = await getDocs(theMeals);
        const mealArray = [];

        meals.forEach((meal) => {
          const newMeal = meal.data();
          mealArray.push(newMeal);
        });

        setTotalCalories(
          mealArray.reduce((acc, curr) => acc + Math.round(curr["calories"]), 0)
        );
        setTotalProtien(
          mealArray.reduce((acc, curr) => acc + Math.round(curr["protien"]), 0)
        );
        setTotalCarbs(
          mealArray.reduce((acc, curr) => acc + Math.round(curr["carbs"]), 0)
        );
        setTotalFat(
          mealArray.reduce((acc, curr) => acc + Math.round(curr["fat"]), 0)
        );
      }
    };

    getData();
  }, [theMeals]);

  return (
    <div className="daily_total">
      <h1>Daily Total</h1>
      <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protien</th>
            <th>Carbs</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalCalories} cal</td>
            <td>{totalProtien} g</td>
            <td>{totalCarbs} g</td>
            <td>{totalFat} g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DayTotalFile;
