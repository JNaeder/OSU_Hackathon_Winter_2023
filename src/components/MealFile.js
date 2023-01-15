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
        if (mealData) {
          setTheMeal(mealData);
          setTheFoods(mealData["foods"]);
        } else {
          setTheMeal({
            calories: 0,
            protien: 0,
            carbs: 0,
            fat: 0,
          });
          setTheFoods([]);
        }
      }
    };

    getData();
  }, [theMeals]);

  return (
    <>
      <div className="meal_top_bar">
        <h2>{mealName} -</h2>
        <button onClick={addFoodButton}>Add Food</button>
      </div>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td>{Math.round(theMeal["calories"] * 100) / 100} cal</td>
            <td>{Math.round(theMeal["protien"] * 100) / 100} g</td>
            <td>{Math.round(theMeal["carbs"] * 100) / 100} g</td>
            <td>{Math.round(theMeal["fat"] * 100) / 100} g</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MealFile;
