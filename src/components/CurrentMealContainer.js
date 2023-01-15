import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import moment from "moment";

import CurrentMealFile from "./CurrentMealFile";

function CurrentMealContainer({
  currentMeal,
  setCurrentMeal,
  db,
  currentMealToEdit,
  dayToEdit,
  auth,
  setSelectedDay,
}) {
  const [totalCal, setTotalCal] = useState(0);
  const [totalProtien, setTotalProtien] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  const navigation = useNavigate();

  useEffect(() => {
    setTotalCal(currentMeal.reduce((acc, cur) => acc + cur["calories"], 0));
    setTotalProtien(currentMeal.reduce((acc, cur) => acc + cur["protien"], 0));
    setTotalCarbs(currentMeal.reduce((acc, cur) => acc + cur["carbs"], 0));
    setTotalFat(currentMeal.reduce((acc, cur) => acc + cur["fat"], 0));
  }, [currentMeal]);

  const addMeal = async function () {
    const newObject = {
      meal: currentMealToEdit,
      foods: currentMeal,
      calories: totalCal,
      protien: totalProtien,
      carbs: totalCarbs,
      fat: totalFat,
    };

    const theDateTime = moment(dayToEdit)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .toString();

    const usersColl = collection(db, "users");
    const userDocRef = doc(usersColl, auth.currentUser["uid"]);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
      await setDoc(userDocRef, { email: auth.currentUser["email"] });
    }
    const timeColl = collection(userDocRef, theDateTime);
    const mealDocRef = doc(timeColl, currentMealToEdit);
    await setDoc(mealDocRef, newObject);

    console.log("done");
    setSelectedDay(dayToEdit);
    navigation("/");
  };

  return (
    <div className="currentMeal_container">
      <div className="top_bar">
        <h1>
          {currentMealToEdit} - {moment(dayToEdit).format("MMM Do YYYY")}
        </h1>
        <button onClick={addMeal}>Confirm Meal</button>
      </div>
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
            <CurrentMealFile
              key={i}
              food={food}
              currentMeal={currentMeal}
              setCurrentMeal={setCurrentMeal}
            />
          ))}
          <tr id="total">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td>{Math.round(totalCal * 100) / 100} cal</td>
            <td>{Math.round(totalProtien * 100) / 100} g</td>
            <td>{Math.round(totalCarbs * 100) / 100} g</td>
            <td>{Math.round(totalFat * 100) / 100} g</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CurrentMealContainer;
