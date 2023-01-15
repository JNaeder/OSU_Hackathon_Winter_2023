import { useState } from "react";
import FoodSearch from "../components/FoodSearch";
import CurrentMealContainer from "../components/CurrentMealContainer";
import Hint_Container from "../components/Hint_Container";

function MealBuilderPage({
  db,
  auth,
  currentMealToEdit,
  dayToEdit,
  setSelectedDay,
}) {
  const [foodList, setFoodList] = useState({});
  const [currentMeal, setCurrentMeal] = useState([]);

  return (
    <>
      <FoodSearch setFoodList={setFoodList} foodList={foodList} />
      <CurrentMealContainer
        setSelectedDay={setSelectedDay}
        currentMealToEdit={currentMealToEdit}
        dayToEdit={dayToEdit}
        currentMeal={currentMeal}
        setCurrentMeal={setCurrentMeal}
        db={db}
        auth={auth}
      />
      <Hint_Container
        foodList={foodList}
        currentMeal={currentMeal}
        setCurrentMeal={setCurrentMeal}
      />
    </>
  );
}

export default MealBuilderPage;
