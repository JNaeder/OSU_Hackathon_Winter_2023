import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, query, where } from "firebase/firestore";
import MealFileData from "./MealFileData";

function MealFile({
  mealName,
  setCurrentMealToEdit,
  setDayToEdit,
  selectedDay,
  theMeals,
}) {
  const navigate = useNavigate();

  const [theMeal, setTheMeal] = useState({});
  const [theFoods, setTheFoods] = useState([]);

  const addFoodButton = function () {
    console.log(`Add ${mealName} food.`);
    setCurrentMealToEdit(mealName);
    setDayToEdit(selectedDay);
    navigate("/mealbuilder");
  };

  useEffect(() => {
    const getData = async function () {
      if (theMeals) {
        const mealRef = doc(theMeals, mealName);
        const mealDoc = await getDoc(mealRef);
        const mealData = mealDoc.data();

        setTheMeal(mealData);
        if (mealData) {
          setTheFoods(mealData["foods"]);
        } else {
          setTheFoods([]);
        }
      }
    };

    getData();
  });

  return (
    <>
      <h2>{mealName}</h2>
      <button onClick={addFoodButton}>Add Food</button>
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
          </tr>
        </thead>
        <tbody>
          {theFoods.map((food, i) => (
            <MealFileData key={i} food={food} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MealFile;
