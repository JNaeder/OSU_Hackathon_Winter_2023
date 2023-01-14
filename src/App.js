import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Hint_Container from "./components/Hint_Container";
import FoodSearch from "./components/FoodSearch";
import CurrentMealContainer from "./components/CurrentMealContainer";

// const firebaseAPI = env.FIREBASE_API_KEY;
const foodAPI = process.env.REACT_APP_FOOD_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyDur93CUKM_7-w6NnkdNaUQu5eftN91354",
  authDomain: "hackathon-winter-23.firebaseapp.com",
  projectId: "hackathon-winter-23",
  storageBucket: "hackathon-winter-23.appspot.com",
  messagingSenderId: "127245817823",
  appId: "1:127245817823:web:ac4da6fa1a5ebaa647566a",
  measurementId: "G-0Z6LJENZ9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [foodList, setFoodList] = useState({});
  const [currentMeal, setCurrentMeal] = useState([]);

  return (
    <div className="App">
      <FoodSearch setFoodList={setFoodList} foodList={foodList} />
      <CurrentMealContainer currentMeal={currentMeal} />
      <Hint_Container
        foodList={foodList}
        currentMeal={currentMeal}
        setCurrentMeal={setCurrentMeal}
      />
    </div>
  );
}

export default App;
