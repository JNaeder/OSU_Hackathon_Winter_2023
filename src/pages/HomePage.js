import moment from "moment/moment";
import DayFile from "../components/DayFile";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function HomePage({
  setCurrentMealToEdit,
  setDayToEdit,
  auth,
  db,
  selectedDay,
  setSelectedDay,
}) {
  const [theMeals, setTheMeals] = useState();

  useEffect(() => {
    const theDateTime = moment(selectedDay)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .toString();

    const userDB = doc(db, "users", auth.currentUser["uid"]);
    const timeColl = collection(userDB, theDateTime);
    const getData = async function () {
      setTheMeals(timeColl);
    };
    getData();
  }, [selectedDay]);

  const changeDay = function (adjustment) {
    const newDay = moment(selectedDay).add(adjustment, "days");
    setSelectedDay(newDay);
  };

  return (
    <>
      <h1>{moment(selectedDay).format("MMM Do YYYY")}</h1>
      <button onClick={() => changeDay(-1)}>Prev Day</button>
      <button onClick={() => changeDay(1)}>Next Day</button>
      <DayFile
        setCurrentMealToEdit={setCurrentMealToEdit}
        setDayToEdit={setDayToEdit}
        theMeals={theMeals}
        selectedDay={selectedDay}
      />
    </>
  );
}

export default HomePage;
