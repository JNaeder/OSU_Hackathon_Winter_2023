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
        // setTotalCalories(0);
        // setTotalProtien(0);
        // setTotalCarbs(0);
        // setTotalFat(0);
        // totalCalories = 0;
        meals.forEach((meal) => {
          const mealData = meal.data();
          const newCalories = totalCalories + mealData["calories"];
          const newProtien = totalProtien + mealData["protien"];
          const newCarbs = totalCarbs + mealData["carbs"];
          const newFat = totalFat + mealData["fat"];
          setTotalCalories(Math.round(newCalories));
          setTotalProtien(Math.round(newProtien));
          setTotalCarbs(Math.round(newCarbs));
          setTotalFat(Math.round(newFat));
        });
      }
    };

    getData();
  }, [theMeals]);

  return (
    <>
      <h1>Total</h1>
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
    </>
  );
}

export default DayTotalFile;
