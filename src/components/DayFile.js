import MealFile from "../components/MealFile";
import DayTotalFile from "./DayTotalFile";

function DayFile({
  setCurrentMealToEdit,
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
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
      <MealFile
        mealName="Lunch"
        setCurrentMealToEdit={setCurrentMealToEdit}
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
      <MealFile
        mealName="Dinner"
        setCurrentMealToEdit={setCurrentMealToEdit}
        setDayToEdit={setDayToEdit}
        selectedDay={selectedDay}
        theMeals={theMeals}
      />
    </>
  );
}
export default DayFile;
