import MealFile from "../components/MealFile";
import DayTotalFile from "./DayTotalFile";

function DayFile({
  setCurrentMealToEdit,
  setCurrentMeal,
  theMeals,
  setDayToEdit,
  selectedDay,
}) {
  return (
    <>
      <DayTotalFile theMeals={theMeals} />
      <MealFile
        mealName="Breakfast"
        setCurrentMealToEdit={setCurrentMealToEdit}
        setCurrentMeal={setCurrentMeal}
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
      <MealFile
        mealName="Lunch"
        setCurrentMealToEdit={setCurrentMealToEdit}
        setCurrentMeal={setCurrentMeal}
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
      <MealFile
        mealName="Dinner"
        setCurrentMealToEdit={setCurrentMealToEdit}
        setCurrentMeal={setCurrentMeal}
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
    </>
  );
}
export default DayFile;
