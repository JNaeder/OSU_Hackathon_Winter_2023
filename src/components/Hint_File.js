import { useState, useEffect } from "react";

function Hint_File({ food, currentMeal, setCurrentMeal }) {
  // Food attributes
  const theBrand = food["food"]["brand"];
  const theLabel = food["food"]["label"];
  const theCategory = food["food"]["category"];
  const theUnits = food["measures"];
  const theNutrients = food["food"]["nutrients"];

  // Options
  const [currentUnit, setCurrentUnit] = useState(food["measures"][0]);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  // Food Macros
  const [currentCalories, setCurrentCalories] = useState();
  const [currentProtien, setCurrentProtien] = useState();
  const [currentCarbs, setCurrentCarbs] = useState();
  const [currentFat, setCurrentFat] = useState();

  useEffect(() => {
    setCurrentCalories(
      currentUnit["weight"] *
        (theNutrients["ENERC_KCAL"] / 100) *
        currentQuantity
    );

    setCurrentProtien(
      currentUnit["weight"] * (theNutrients["PROCNT"] / 100) * currentQuantity
    );

    setCurrentCarbs(
      currentUnit["weight"] * (theNutrients["CHOCDF"] / 100) * currentQuantity
    );
    setCurrentFat(
      currentUnit["weight"] * (theNutrients["FAT"] / 100) * currentQuantity
    );
  }, [currentUnit, currentQuantity]);

  const chooseUnit = function (e) {
    const newUnit = JSON.parse(e.target.value);
    setCurrentUnit(newUnit);
    setCurrentQuantity(1);
  };

  const addToMeal = function () {
    console.log(currentMeal);
    const newFood = {
      brand: theBrand,
      label: theLabel,
      category: theCategory,
      unit: currentUnit,
      quantity: currentQuantity,
      nutrients: theNutrients,
    };
    const updatedMeal = currentMeal;
    updatedMeal.push(newFood);
    setCurrentMeal(updatedMeal);
  };

  return (
    <>
      <tr>
        <td>{theBrand}</td>
        <td>{theLabel}</td>
        <td>{theCategory}</td>
        <td>
          <select onChange={chooseUnit}>
            {theUnits.map((unit, i) => (
              <option value={JSON.stringify(unit)} key={i}>
                {unit["label"]}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            min="1"
            type="number"
            value={currentQuantity}
            onChange={(e) => setCurrentQuantity(e.target.value)}
          />
        </td>
        <td>{Math.round(currentCalories * 100) / 100} cal</td>
        <td>{Math.round(currentProtien * 100) / 100} g</td>
        <td>{Math.round(currentCarbs * 100) / 100} g</td>
        <td>{Math.round(currentFat * 100) / 100} g</td>
        <td>
          <button onClick={addToMeal}>Add</button>
        </td>
      </tr>
    </>
  );
}

export default Hint_File;
