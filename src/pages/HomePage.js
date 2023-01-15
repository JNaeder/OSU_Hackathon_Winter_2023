import moment from "moment/moment";
import DayFile from "../components/DayFile";
import { collection, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import "./HomePage_Style.css";

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
    <div className="home_container">
      <h1 className="current_date">
        {moment(selectedDay).format("MMM Do YYYY")}
      </h1>
      <button onClick={() => changeDay(-1)} className="main_button">
        Prev Day
      </button>
      <button onClick={() => changeDay(1)} className="main_button">
        Next Day
      </button>
      <DayFile
        setCurrentMealToEdit={setCurrentMealToEdit}
        setDayToEdit={setDayToEdit}
        theMeals={theMeals}
        selectedDay={selectedDay}
      />
    </div>
  );
}

export default HomePage;
