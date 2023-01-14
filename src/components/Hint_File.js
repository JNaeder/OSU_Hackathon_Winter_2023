import { useState, useEffect } from "react";

function Hint_File({ food }) {
  const theBrand = food["food"]["brand"];
  const theLabel = food["food"]["label"];
  const theCategory = food["food"]["category"];
  const theUnits = food["measures"];
  const theNutrients = food["food"]["nutrients"];

  const [currentUnit, setCurrentUnit] = useState(food["measures"][0]);
  const [currentCalories, setCurrentCalories] = useState(
    currentUnit["weight"] * (theNutrients["ENERC_KCAL"] / 100)
  );
  const [currentProtien, setCurrentProtien] = useState(
    currentUnit["weight"] * (theNutrients["PROCNT"] / 100)
  );
  useEffect(() => {
    console.log(theLabel, currentCalories);
  }, [currentUnit]);

  const chooseUnit = function (e) {
    const newUnit = JSON.parse(e.target.value);
    setCurrentUnit(newUnit);
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
          <input type="number" defaultValue={1} />
        </td>
        <td>{Math.round(currentCalories)} cal</td>
        <td>{Math.round(currentProtien)} g</td>
      </tr>
    </>
  );
}

export default Hint_File;
