import { useState } from "react";
import FoodSearch from "../components/FoodSearch";
import CurrentMealContainer from "../components/CurrentMealContainer";
import Hint_Container from "../components/Hint_Container";
import "./MealBuilderPage_Style.css";

function MealBuilderPage({
  db,
  auth,
  currentMealToEdit,
  dayToEdit,
  setSelectedDay,
  currentMeal,
  setCurrentMeal,
}) {
  const [foodList, setFoodList] = useState({});

  return (
    <div className="mealbuilder_container">
      <CurrentMealContainer
        setSelectedDay={setSelectedDay}
        currentMealToEdit={currentMealToEdit}
        dayToEdit={dayToEdit}
        currentMeal={currentMeal}
        setCurrentMeal={setCurrentMeal}
        db={db}
        auth={auth}
      />
      <FoodSearch setFoodList={setFoodList} foodList={foodList} />
      <Hint_Container
        foodList={foodList}
        currentMeal={currentMeal}
        setCurrentMeal={setCurrentMeal}
      />
    </div>
  );
}

export default MealBuilderPage;
