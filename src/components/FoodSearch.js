import { useState } from "react";

const foodAPI = process.env.REACT_APP_FOOD_API_KEY;

const getFood = async function (foodName) {
  const output = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=0a41c9b2&app_key=${foodAPI}&ingr=${foodName}`
  )
    .then((res) => res.json())
    .then((data) => data);
  return output;
};

function FoodSearch({ foodList, setFoodList }) {
  const [inputFood, setInputFood] = useState("");

  const submitButton = async function (e) {
    e.preventDefault();
    const output = await getFood(inputFood);
    setFoodList(output);
  };

  const nextButton = async function () {
    const newUrl = foodList["_links"]["next"]["href"];
    const output = await fetch(newUrl)
      .then((res) => res.json())
      .then((data) => data);
    setFoodList(output);
  };
  return (
    <>
      <h1>Enter Food</h1>
      <form>
        <label htmlFor="food_name">Enter Food</label>
        <input
          type="text"
          name="food_name"
          onChange={(e) => setInputFood(e.target.value)}
        ></input>
        <button type="submit" onClick={submitButton}>
          Enter
        </button>
      </form>

      <button onClick={nextButton}>Next</button>
    </>
  );
}

export default FoodSearch;
