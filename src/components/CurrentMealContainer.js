import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import CurrentMealFile from "./CurrentMealFile";

function CurrentMealContainer({ currentMeal, setCurrentMeal, db }) {
  const mealDB = collection(db, "meals");

  const [totalCal, setTotalCal] = useState(0);
  const [totalProtien, setTotalProtien] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  useEffect(() => {
    setTotalCal(currentMeal.reduce((acc, cur) => acc + cur["calories"], 0));
    setTotalProtien(currentMeal.reduce((acc, cur) => acc + cur["protien"], 0));
    setTotalCarbs(currentMeal.reduce((acc, cur) => acc + cur["carbs"], 0));
    setTotalFat(currentMeal.reduce((acc, cur) => acc + cur["fat"], 0));
  }, [currentMeal]);

  const addMeal = async function () {
    const newObject = {
      meal: "Dinner",
      foods: currentMeal,
      calories: totalCal,
      protien: totalProtien,
      carbs: totalCarbs,
      fat: totalFat,
    };
    // console.log(newObject);
    const docRef = await addDoc(mealDB, newObject);
    console.log(docRef);
  };

  return (
    <>
      <div>
        <h1>Current Meal</h1>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Label</th>
              <th>Type</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Calroies</th>
              <th>Protien</th>
              <th>Carbs</th>
              <th>Fat</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {currentMeal.map((food, i) => (
              <CurrentMealFile
                key={i}
                food={food}
                currentMeal={currentMeal}
                setCurrentMeal={setCurrentMeal}
              />
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>{Math.round(totalCal * 100) / 100} cal</td>
              <td>{Math.round(totalProtien * 100) / 100} g</td>
              <td>{Math.round(totalCarbs * 100) / 100} g</td>
              <td>{Math.round(totalFat * 100) / 100} g</td>
            </tr>
          </tbody>
        </table>
        <button onClick={addMeal}>Add Meal</button>
      </div>
    </>
  );
}
export default CurrentMealContainer;
