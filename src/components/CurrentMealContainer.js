import { useEffect } from "react";

import CurrentMealFile from "./CurrentMealFile";

function CurrentMealContainer({ currentMeal }) {
  useEffect(() => {
    console.log(currentMeal);
  });

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
              <CurrentMealFile key={i} food={food} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CurrentMealContainer;
