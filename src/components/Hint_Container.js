import { useEffect } from "react";
import Hint_File from "./Hint_File";

function Hint_Container({ foodList, currentMeal, setCurrentMeal }) {
  const hints = foodList["hints"] ? foodList["hints"] : [];

  // useEffect(() => {
  //   console.log(currentMeal);
  // }, [currentMeal]);

  return (
    <>
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
            <th>Add</th>
          </tr>
        </thead>

        <tbody>
          {hints.map((food, i) => (
            <Hint_File
              food={food}
              key={i}
              currentMeal={currentMeal}
              setCurrentMeal={setCurrentMeal}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Hint_Container;
