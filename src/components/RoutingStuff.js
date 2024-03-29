import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/HomePage";
import MealBuilderPage from "../pages/MealBuilderPage";
import LoginPage from "../pages/LoginPage";
import Navigation from "./Navigation Stuff/Navigation";
import moment from "moment";

function RoutingStuff({ db, auth, app }) {
  const [currentMealToEdit, setCurrentMealToEdit] = useState("");
  const [dayToEdit, setDayToEdit] = useState("");
  const [selectedDay, setSelectedDay] = useState(moment().toISOString());
  const [currentMeal, setCurrentMeal] = useState([]);

  return (
    <>
      <Navigation auth={auth} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setCurrentMealToEdit={setCurrentMealToEdit}
              setCurrentMeal={setCurrentMeal}
              setDayToEdit={setDayToEdit}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              app={app}
              auth={auth}
              db={db}
            />
          }
        />
        <Route
          path="/mealbuilder"
          element={
            <MealBuilderPage
              db={db}
              auth={auth}
              currentMealToEdit={currentMealToEdit}
              dayToEdit={dayToEdit}
              setSelectedDay={setSelectedDay}
              currentMeal={currentMeal}
              setCurrentMeal={setCurrentMeal}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <footer>By John Naeder - 2023</footer> */}
    </>
  );
}

export default RoutingStuff;
