function CurrentMealFile({ food, setCurrentMeal, currentMeal }) {
  const theID = food["foodId"];
  const theBrand = food["brand"];
  const theLabel = food["label"];
  const theCategory = food["category"];
  const theUnit = food["unit"];
  const theQuantity = food["quantity"];
  const theCalories = food["calories"];
  const theProtien = food["protien"];
  const theCarbs = food["carbs"];
  const theFat = food["fat"];

  const removeItem = function () {
    const newCurrentMeal = currentMeal.filter(
      (food) => food["foodId"] != theID
    );
    setCurrentMeal(newCurrentMeal);
  };

  return (
    <>
      <tr>
        <td>{theBrand}</td>
        <td>{theLabel}</td>
        <td>{theCategory}</td>
        <td>{theUnit["label"]}</td>
        <td>{theQuantity}</td>
        <td>{Math.round(theCalories * 100) / 100} cal</td>
        <td>{Math.round(theProtien * 100) / 100} g</td>
        <td>{Math.round(theCarbs * 100) / 100} g</td>
        <td>{Math.round(theFat * 100) / 100} g</td>
        <td>
          <button onClick={removeItem}>Remove</button>
        </td>
      </tr>
    </>
  );
}

export default CurrentMealFile;
