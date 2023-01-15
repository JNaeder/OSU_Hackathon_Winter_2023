import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/HomePage";
import MealBuilderPage from "../pages/MealBuilderPage";
import LoginPage from "../pages/LoginPage";
import Navigation from "./Navigation";
import moment from "moment";

function RoutingStuff({ db, auth, app }) {
  const [currentMealToEdit, setCurrentMealToEdit] = useState("");
  const [dayToEdit, setDayToEdit] = useState("");
  const [selectedDay, setSelectedDay] = useState(moment().toISOString());

  return (
    <>
      <Navigation auth={auth} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setCurrentMealToEdit={setCurrentMealToEdit}
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
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default RoutingStuff;
