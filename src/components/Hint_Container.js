import Hint_File from "./Hint_File";

function Hint_Container({ foodList, currentMeal, setCurrentMeal }) {
  const hints = foodList["hints"] ? foodList["hints"] : [];

  return (
    <div className="hint_container">
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
              foodList={foodList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Hint_Container;
